/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "GMPVideoDecoderParent.h"

#include "GMPContentParent.h"
#include "GMPUtils.h"
#include "GMPLog.h"
#include "GMPMessageUtils.h"
#include "GMPVideoEncodedFrameImpl.h"
#include "GMPVideoi420FrameImpl.h"
#include "mozilla/gmp/GMPTypes.h"
#include "mozilla/Unused.h"
#include "nsAutoRef.h"
#include "nsPrintfCString.h"
#include "nsThreadUtils.h"

namespace mozilla::gmp {

// States:
// Initial: mIsOpen == false
//    on InitDecode success -> Open
//    on Shutdown -> Dead
// Open: mIsOpen == true
//    on Close -> Dead
//    on ActorDestroy -> Dead
//    on Shutdown -> Dead
// Dead: mIsOpen == false

GMPVideoDecoderParent::GMPVideoDecoderParent(GMPContentParent* aPlugin)
    : GMPSharedMemManager(aPlugin),
      mIsOpen(false),
      mShuttingDown(false),
      mActorDestroyed(false),
      mIsAwaitingResetComplete(false),
      mIsAwaitingDrainComplete(false),
      mPlugin(aPlugin),
      mCallback(nullptr),
      mVideoHost(this),
      mPluginId(aPlugin->GetPluginId()),
      mPluginType(aPlugin->GetPluginType()),
      mFrameCount(0) {
  MOZ_ASSERT(mPlugin);
}

GMPVideoDecoderParent::~GMPVideoDecoderParent() = default;

GMPVideoHostImpl& GMPVideoDecoderParent::Host() { return mVideoHost; }

// Note: may be called via Terminated()
void GMPVideoDecoderParent::Close() {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::Close()", this);
  MOZ_ASSERT(!mPlugin || mPlugin->GMPEventTarget()->IsOnCurrentThread());

  // Ensure if we've received a Close while waiting for a ResetComplete
  // or DrainComplete notification, we'll unblock the caller before processing
  // the close. This seems unlikely to happen, but better to be careful.
  UnblockResetAndDrain();

  // Consumer is done with us; we can shut down.  No more callbacks should
  // be made to mCallback.  Note: do this before Shutdown()!
  mCallback = nullptr;
  // Let Shutdown mark us as dead so it knows if we had been alive

  // In case this is the last reference
  RefPtr<GMPVideoDecoderParent> kungfudeathgrip(this);
  Release();
  Shutdown();
}

nsresult GMPVideoDecoderParent::InitDecode(
    const GMPVideoCodec& aCodecSettings,
    const nsTArray<uint8_t>& aCodecSpecific,
    GMPVideoDecoderCallbackProxy* aCallback, int32_t aCoreCount) {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::InitDecode()", this);

  if (mActorDestroyed) {
    NS_WARNING("Trying to use a destroyed GMP video decoder!");
    return NS_ERROR_FAILURE;
  }
  if (mIsOpen) {
    NS_WARNING("Trying to re-init an in-use GMP video decoder!");
    return NS_ERROR_FAILURE;
  }

  MOZ_ASSERT(mPlugin->GMPEventTarget()->IsOnCurrentThread());

  if (!aCallback) {
    return NS_ERROR_FAILURE;
  }
  mCallback = aCallback;

  if (!SendInitDecode(aCodecSettings, aCodecSpecific, aCoreCount)) {
    return NS_ERROR_FAILURE;
  }
  mIsOpen = true;

  // Async IPC, we don't have access to a return value.
  return NS_OK;
}

nsresult GMPVideoDecoderParent::Decode(
    GMPUniquePtr<GMPVideoEncodedFrame> aInputFrame, bool aMissingFrames,
    const nsTArray<uint8_t>& aCodecSpecificInfo, int64_t aRenderTimeMs) {
  GMP_LOG_VERBOSE(
      "GMPVideoDecoderParent[%p]::Decode() timestamp=%" PRId64 " keyframe=%d",
      this, aInputFrame->TimeStamp(), aInputFrame->FrameType() == kGMPKeyFrame);

  if (!mIsOpen) {
    GMP_LOG_ERROR(
        "GMPVideoDecoderParent[%p]::Decode() ERROR; dead GMPVideoDecoder",
        this);
    NS_WARNING("Trying to use an dead GMP video decoder");
    return NS_ERROR_FAILURE;
  }

  MOZ_ASSERT(mPlugin->GMPEventTarget()->IsOnCurrentThread());

  GMPUniquePtr<GMPVideoEncodedFrameImpl> inputFrameImpl(
      static_cast<GMPVideoEncodedFrameImpl*>(aInputFrame.release()));

  // Very rough kill-switch if the plugin stops processing.  If it's merely
  // hung and continues, we'll come back to life eventually.
  // 3* is because we're using 3 buffers per frame for i420 data for now.
  if ((NumInUse(GMPSharedMem::kGMPFrameData) >
       3 * GMPSharedMem::kGMPBufLimit) ||
      (NumInUse(GMPSharedMem::kGMPEncodedData) > GMPSharedMem::kGMPBufLimit)) {
    GMP_LOG_ERROR(
        "GMPVideoDecoderParent[%p]::Decode() ERROR; shmem buffer limit hit "
        "frame=%d encoded=%d",
        this, NumInUse(GMPSharedMem::kGMPFrameData),
        NumInUse(GMPSharedMem::kGMPEncodedData));
    return NS_ERROR_FAILURE;
  }

  GMPVideoEncodedFrameData frameData;
  inputFrameImpl->RelinquishFrameData(frameData);

  if (!SendDecode(frameData, aMissingFrames, aCodecSpecificInfo,
                  aRenderTimeMs)) {
    GMP_LOG_ERROR(
        "GMPVideoDecoderParent[%p]::Decode() ERROR; SendDecode() failure.",
        this);
    return NS_ERROR_FAILURE;
  }
  mFrameCount++;

  // Async IPC, we don't have access to a return value.
  return NS_OK;
}

nsresult GMPVideoDecoderParent::Reset() {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::Reset()", this);

  if (!mIsOpen) {
    NS_WARNING("Trying to use an dead GMP video decoder");
    return NS_ERROR_FAILURE;
  }

  MOZ_ASSERT(mPlugin->GMPEventTarget()->IsOnCurrentThread());

  if (!SendReset()) {
    return NS_ERROR_FAILURE;
  }

  mIsAwaitingResetComplete = true;

  RefPtr<GMPVideoDecoderParent> self(this);
  nsCOMPtr<nsIRunnable> task = NS_NewRunnableFunction(
      "gmp::GMPVideoDecoderParent::Reset", [self]() -> void {
        GMP_LOG_DEBUG(
            "GMPVideoDecoderParent[%p]::ResetCompleteTimeout() timed out "
            "waiting for ResetComplete",
            self.get());
        self->mResetCompleteTimeout = nullptr;
        LogToBrowserConsole(nsLiteralString(
            u"GMPVideoDecoderParent timed out waiting for ResetComplete()"));
      });
  CancelResetCompleteTimeout();
  nsCOMPtr<nsISerialEventTarget> target = mPlugin->GMPEventTarget();
  mResetCompleteTimeout = SimpleTimer::Create(task, 5000, target);

  // Async IPC, we don't have access to a return value.
  return NS_OK;
}

void GMPVideoDecoderParent::CancelResetCompleteTimeout() {
  if (mResetCompleteTimeout) {
    mResetCompleteTimeout->Cancel();
    mResetCompleteTimeout = nullptr;
  }
}

nsresult GMPVideoDecoderParent::Drain() {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::Drain() frameCount=%d", this,
                mFrameCount);

  if (!mIsOpen) {
    NS_WARNING("Trying to use an dead GMP video decoder");
    return NS_ERROR_FAILURE;
  }

  MOZ_ASSERT(mPlugin->GMPEventTarget()->IsOnCurrentThread());

  if (!SendDrain()) {
    return NS_ERROR_FAILURE;
  }

  mIsAwaitingDrainComplete = true;

  // Async IPC, we don't have access to a return value.
  return NS_OK;
}

nsCString GMPVideoDecoderParent::GetDisplayName() const {
  if (NS_WARN_IF(!mIsOpen)) {
    return ""_ns;
  }

  MOZ_ASSERT(mPlugin->GMPEventTarget()->IsOnCurrentThread());
  return mPlugin->GetDisplayName();
}

// Note: Consider keeping ActorDestroy sync'd up when making changes here.
nsresult GMPVideoDecoderParent::Shutdown() {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::Shutdown()", this);
  MOZ_ASSERT(!mPlugin || mPlugin->GMPEventTarget()->IsOnCurrentThread());

  if (mShuttingDown) {
    return NS_OK;
  }
  mShuttingDown = true;

  // Ensure if we've received a shutdown while waiting for a ResetComplete
  // or DrainComplete notification, we'll unblock the caller before processing
  // the shutdown.
  UnblockResetAndDrain();

  // Notify client we're gone!  Won't occur after Close()
  if (mCallback) {
    mCallback->Terminated();
    mCallback = nullptr;
  }

  mIsOpen = false;
  if (!mActorDestroyed) {
    Unused << SendDecodingComplete();
  }

  return NS_OK;
}

// Note: Keep this sync'd up with Shutdown
void GMPVideoDecoderParent::ActorDestroy(ActorDestroyReason aWhy) {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::ActorDestroy reason=%d", this,
                aWhy);

  mIsOpen = false;
  mActorDestroyed = true;

  // Ensure if we've received a destroy while waiting for a ResetComplete
  // or DrainComplete notification, we'll unblock the caller before processing
  // the error.
  UnblockResetAndDrain();

  if (mCallback) {
    // May call Close() (and Shutdown()) immediately or with a delay
    mCallback->Terminated();
    mCallback = nullptr;
  }
  if (mPlugin) {
    // Ignore any return code. It is OK for this to fail without killing the
    // process.
    mPlugin->VideoDecoderDestroyed(this);
    mPlugin = nullptr;
  }
  mVideoHost.ActorDestroyed();
  MaybeDisconnect(aWhy == AbnormalShutdown);
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::RecvDecoded(
    const GMPVideoi420FrameData& aDecodedFrame) {
  --mFrameCount;
  if (aDecodedFrame.mUpdatedTimestamp() &&
      aDecodedFrame.mUpdatedTimestamp().value() != aDecodedFrame.mTimestamp()) {
    GMP_LOG_VERBOSE(
        "GMPVideoDecoderParent[%p]::RecvDecoded() timestamp=[%" PRId64
        " -> %" PRId64 "] frameCount=%d",
        this, aDecodedFrame.mTimestamp(),
        aDecodedFrame.mUpdatedTimestamp().value(), mFrameCount);
  } else {
    GMP_LOG_VERBOSE(
        "GMPVideoDecoderParent[%p]::RecvDecoded() timestamp=%" PRId64
        " frameCount=%d",
        this, aDecodedFrame.mTimestamp(), mFrameCount);
  }

  if (mCallback) {
    if (GMPVideoi420FrameImpl::CheckFrameData(aDecodedFrame)) {
      auto f = new GMPVideoi420FrameImpl(aDecodedFrame, &mVideoHost);

      mCallback->Decoded(f);
    } else {
      GMP_LOG_ERROR(
          "GMPVideoDecoderParent[%p]::RecvDecoded() "
          "timestamp=%" PRId64 " decoded frame corrupt, ignoring",
          this, aDecodedFrame.mTimestamp());
      // TODO: Verify if we should take more serious the arrival of
      // a corrupted frame, see bug 1750506.
    }
  }

  return IPC_OK();
}

mozilla::ipc::IPCResult
GMPVideoDecoderParent::RecvReceivedDecodedReferenceFrame(
    const uint64_t& aPictureId) {
  if (mCallback) {
    mCallback->ReceivedDecodedReferenceFrame(aPictureId);
  }

  return IPC_OK();
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::RecvReceivedDecodedFrame(
    const uint64_t& aPictureId) {
  if (mCallback) {
    mCallback->ReceivedDecodedFrame(aPictureId);
  }

  return IPC_OK();
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::RecvInputDataExhausted() {
  GMP_LOG_VERBOSE("GMPVideoDecoderParent[%p]::RecvInputDataExhausted()", this);

  if (mCallback) {
    mCallback->InputDataExhausted();
  }

  return IPC_OK();
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::RecvDrainComplete() {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::RecvDrainComplete() frameCount=%d",
                this, mFrameCount);
  nsAutoString msg;
  msg.AppendLiteral(
      "GMPVideoDecoderParent::RecvDrainComplete() outstanding frames=");
  msg.AppendInt(mFrameCount);
  LogToBrowserConsole(msg);

  if (mCallback && mIsAwaitingDrainComplete) {
    mIsAwaitingDrainComplete = false;

    mCallback->DrainComplete();
  }

  return IPC_OK();
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::RecvResetComplete() {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::RecvResetComplete()", this);

  CancelResetCompleteTimeout();

  if (mCallback && mIsAwaitingResetComplete) {
    mIsAwaitingResetComplete = false;
    mFrameCount = 0;

    mCallback->ResetComplete();
  }

  return IPC_OK();
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::RecvError(const GMPErr& aError) {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::RecvError(error=%d)", this, aError);

  if (mCallback) {
    // Ensure if we've received an error while waiting for a ResetComplete
    // or DrainComplete notification, we'll unblock the caller before processing
    // the error.
    UnblockResetAndDrain();

    mCallback->Error(aError);
  }

  return IPC_OK();
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::RecvShutdown() {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::RecvShutdown()", this);

  Shutdown();
  return IPC_OK();
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::RecvParentShmemForPool(
    Shmem&& aEncodedBuffer) {
  if (aEncodedBuffer.IsWritable()) {
    mVideoHost.SharedMemMgr()->MgrDeallocShmem(GMPSharedMem::kGMPEncodedData,
                                               aEncodedBuffer);
  }
  return IPC_OK();
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::RecvNeedShmem(
    const uint32_t& aFrameBufferSize, Shmem* aMem) {
  ipc::Shmem mem;

  if (!mVideoHost.SharedMemMgr()->MgrAllocShmem(GMPSharedMem::kGMPFrameData,
                                                aFrameBufferSize, &mem)) {
    GMP_LOG_ERROR("%s: Failed to get a shared mem buffer for Child! size %u",
                  __FUNCTION__, aFrameBufferSize);
    return IPC_FAIL(this, "Failed to get a shared mem buffer for Child!");
  }
  *aMem = mem;
  mem = ipc::Shmem();
  return IPC_OK();
}

mozilla::ipc::IPCResult GMPVideoDecoderParent::Recv__delete__() {
  GMP_LOG_DEBUG("GMPVideoDecoderParent[%p]::Recv__delete__()", this);

  if (mPlugin) {
    // Ignore any return code. It is OK for this to fail without killing the
    // process.
    mPlugin->VideoDecoderDestroyed(this);
    mPlugin = nullptr;
  }

  return IPC_OK();
}

void GMPVideoDecoderParent::UnblockResetAndDrain() {
  GMP_LOG_DEBUG(
      "GMPVideoDecoderParent[%p]::UnblockResetAndDrain() "
      "awaitingResetComplete=%d awaitingDrainComplete=%d",
      this, mIsAwaitingResetComplete, mIsAwaitingDrainComplete);

  if (!mCallback) {
    MOZ_ASSERT(!mIsAwaitingResetComplete);
    MOZ_ASSERT(!mIsAwaitingDrainComplete);
    return;
  }
  if (mIsAwaitingResetComplete) {
    mIsAwaitingResetComplete = false;
    mCallback->ResetComplete();
  }
  if (mIsAwaitingDrainComplete) {
    mIsAwaitingDrainComplete = false;
    mCallback->DrainComplete();
  }
  CancelResetCompleteTimeout();
}

}  // namespace mozilla::gmp
