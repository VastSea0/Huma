/* -*- Mode: c++; c-basic-offset: 2; indent-tabs-mode: nil; tab-width: 4; -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef GLCONTEXTSYMBOLS_H_
#define GLCONTEXTSYMBOLS_H_

#include "GLDefs.h"

/*
 * This file should only be included by GLContext.h, and should be
 * autogenerated in the future.
 */

#ifndef GLAPIENTRY
#  ifdef XP_WIN
#    define GLAPIENTRY __stdcall
#  else
#    define GLAPIENTRY
#  endif
#  define GLAPI
#endif

namespace mozilla {
namespace gl {

struct GLContextSymbols final {
  void(GLAPIENTRY* fActiveTexture)(GLenum);
  void(GLAPIENTRY* fAttachShader)(GLuint, GLuint);
  void(GLAPIENTRY* fBeginQuery)(GLenum, GLuint);
  void(GLAPIENTRY* fBindAttribLocation)(GLuint, GLuint, const GLchar*);
  void(GLAPIENTRY* fBindBuffer)(GLenum, GLuint);
  void(GLAPIENTRY* fBindTexture)(GLenum, GLuint);
  void(GLAPIENTRY* fBindVertexArray)(GLuint);
  void(GLAPIENTRY* fBlendColor)(GLfloat, GLfloat, GLfloat, GLfloat);
  void(GLAPIENTRY* fBlendEquation)(GLenum);
  void(GLAPIENTRY* fBlendEquationSeparate)(GLenum, GLenum);
  void(GLAPIENTRY* fBlendFunc)(GLenum, GLenum);
  void(GLAPIENTRY* fBlendFuncSeparate)(GLenum, GLenum, GLenum, GLenum);
  void(GLAPIENTRY* fBufferData)(GLenum, GLsizeiptr, const GLvoid*, GLenum);
  void(GLAPIENTRY* fBufferSubData)(GLenum, GLintptr, GLsizeiptr, const GLvoid*);

  void(GLAPIENTRY* fClear)(GLbitfield);
  void(GLAPIENTRY* fClearBufferfi)(GLenum, GLint, GLfloat, GLint);
  void(GLAPIENTRY* fClearBufferfv)(GLenum, GLint, const GLfloat*);
  void(GLAPIENTRY* fClearBufferiv)(GLenum, GLint, const GLint*);
  void(GLAPIENTRY* fClearBufferuiv)(GLenum, GLint, const GLuint*);
  void(GLAPIENTRY* fClearColor)(GLfloat, GLfloat, GLfloat, GLfloat);
  void(GLAPIENTRY* fClearStencil)(GLint);
  void(GLAPIENTRY* fColorMask)(realGLboolean, realGLboolean, realGLboolean,
                               realGLboolean);
  void(GLAPIENTRY* fCompressedTexImage2D)(GLenum, GLint, GLenum, GLsizei,
                                          GLsizei, GLint, GLsizei,
                                          const GLvoid*);
  void(GLAPIENTRY* fCompressedTexSubImage2D)(GLenum, GLint, GLint, GLint,
                                             GLsizei, GLsizei, GLenum, GLsizei,
                                             const GLvoid*);
  void(GLAPIENTRY* fCullFace)(GLenum);
  void(GLAPIENTRY* fDetachShader)(GLuint, GLuint);
  void(GLAPIENTRY* fDepthFunc)(GLenum);
  void(GLAPIENTRY* fDepthMask)(realGLboolean);
  void(GLAPIENTRY* fDisable)(GLenum);
  void(GLAPIENTRY* fDisableVertexAttribArray)(GLuint);
  void(GLAPIENTRY* fDrawArrays)(GLenum, GLint, GLsizei);
  void(GLAPIENTRY* fDrawBuffer)(GLenum);
  void(GLAPIENTRY* fDrawBuffers)(GLsizei, const GLenum*);
  void(GLAPIENTRY* fDrawElements)(GLenum, GLsizei, GLenum, const GLvoid*);
  void(GLAPIENTRY* fEnable)(GLenum);
  void(GLAPIENTRY* fEnableVertexAttribArray)(GLuint);
  void(GLAPIENTRY* fFinish)(void);
  void(GLAPIENTRY* fEndQuery)(GLenum);
  void(GLAPIENTRY* fFlush)(void);
  void(GLAPIENTRY* fFrontFace)(GLenum);
  void(GLAPIENTRY* fGetActiveAttrib)(GLuint, GLuint, GLsizei, GLsizei*, GLint*,
                                     GLenum*, GLchar*);
  void(GLAPIENTRY* fGetActiveUniform)(GLuint, GLuint, GLsizei, GLsizei*, GLint*,
                                      GLenum*, GLchar*);
  void(GLAPIENTRY* fGetAttachedShaders)(GLuint, GLsizei, GLsizei*, GLuint*);
  GLint(GLAPIENTRY* fGetAttribLocation)(GLuint, const GLchar*);
  void(GLAPIENTRY* fGetIntegerv)(GLenum, GLint*);
  void(GLAPIENTRY* fGetFloatv)(GLenum, GLfloat*);
  void(GLAPIENTRY* fGetBooleanv)(GLenum, realGLboolean*);
  void(GLAPIENTRY* fGetBufferParameteriv)(GLenum, GLenum, GLint*);
  void(GLAPIENTRY* fGenerateMipmap)(GLenum);
  GLenum(GLAPIENTRY* fGetError)(void);
  void(GLAPIENTRY* fGetProgramiv)(GLuint, GLenum, GLint*);
  void(GLAPIENTRY* fGetProgramInfoLog)(GLuint, GLsizei, GLsizei*, GLchar*);
  void(GLAPIENTRY* fGetQueryiv)(GLenum, GLenum, GLint*);
  void(GLAPIENTRY* fGetQueryObjectiv)(GLuint, GLenum, GLint*);
  void(GLAPIENTRY* fGetQueryObjectuiv)(GLuint, GLenum, GLuint*);
  void(GLAPIENTRY* fGetQueryObjecti64v)(GLuint, GLenum, GLint64*);
  void(GLAPIENTRY* fGetQueryObjectui64v)(GLuint, GLenum, GLuint64*);
  void(GLAPIENTRY* fQueryCounter)(GLuint, GLenum);
  void(GLAPIENTRY* fTexParameteri)(GLenum, GLenum, GLint);
  void(GLAPIENTRY* fTexParameteriv)(GLenum, GLenum, const GLint*);
  void(GLAPIENTRY* fTexParameterf)(GLenum, GLenum, GLfloat);
  GLubyte*(GLAPIENTRY* fGetString)(GLenum);
  void(GLAPIENTRY* fGetTexImage)(GLenum, GLint, GLenum, GLenum, GLvoid*);
  void(GLAPIENTRY* fGetTexLevelParameteriv)(GLenum, GLint, GLenum, GLint*);
  void(GLAPIENTRY* fGetTexParameterfv)(GLenum, GLenum, GLfloat*);
  void(GLAPIENTRY* fGetTexParameteriv)(GLenum, GLenum, GLint*);
  void(GLAPIENTRY* fGetUniformfv)(GLuint, GLint, GLfloat*);
  void(GLAPIENTRY* fGetUniformiv)(GLuint, GLint, GLint*);
  void(GLAPIENTRY* fGetUniformuiv)(GLuint, GLint, GLuint*);
  GLint(GLAPIENTRY* fGetUniformLocation)(GLuint, const GLchar*);
  void(GLAPIENTRY* fGetVertexAttribfv)(GLuint, GLenum, GLfloat*);
  void(GLAPIENTRY* fGetVertexAttribiv)(GLuint, GLenum, GLint*);
  void(GLAPIENTRY* fGetVertexAttribPointerv)(GLuint, GLenum, GLvoid**);
  void(GLAPIENTRY* fHint)(GLenum, GLenum);
  realGLboolean(GLAPIENTRY* fIsBuffer)(GLuint);
  realGLboolean(GLAPIENTRY* fIsEnabled)(GLenum);
  realGLboolean(GLAPIENTRY* fIsProgram)(GLuint);
  realGLboolean(GLAPIENTRY* fIsQuery)(GLuint);
  realGLboolean(GLAPIENTRY* fIsShader)(GLuint);
  realGLboolean(GLAPIENTRY* fIsTexture)(GLuint);
  void(GLAPIENTRY* fLineWidth)(GLfloat);
  void(GLAPIENTRY* fLinkProgram)(GLuint);
  void(GLAPIENTRY* fPixelStorei)(GLenum, GLint);
  void(GLAPIENTRY* fPointParameterf)(GLenum, GLfloat);
  void(GLAPIENTRY* fPolygonMode)(GLenum, GLenum);
  void(GLAPIENTRY* fPolygonOffset)(GLfloat, GLfloat);
  void(GLAPIENTRY* fReadBuffer)(GLenum);
  void(GLAPIENTRY* fReadPixels)(GLint, GLint, GLsizei, GLsizei, GLenum, GLenum,
                                GLvoid*);
  void(GLAPIENTRY* fSampleCoverage)(GLclampf, realGLboolean);
  void(GLAPIENTRY* fStencilFunc)(GLenum, GLint, GLuint);
  void(GLAPIENTRY* fStencilFuncSeparate)(GLenum, GLenum, GLint, GLuint);
  void(GLAPIENTRY* fStencilMask)(GLuint);
  void(GLAPIENTRY* fStencilMaskSeparate)(GLenum, GLuint);
  void(GLAPIENTRY* fStencilOp)(GLenum, GLenum, GLenum);
  void(GLAPIENTRY* fStencilOpSeparate)(GLenum, GLenum, GLenum, GLenum);
  void(GLAPIENTRY* fTexImage2D)(GLenum, GLint, GLint, GLsizei, GLsizei, GLint,
                                GLenum, GLenum, const GLvoid*);
  void(GLAPIENTRY* fTexSubImage2D)(GLenum, GLint, GLint, GLint, GLsizei,
                                   GLsizei, GLenum, GLenum, const void*);
  void(GLAPIENTRY* fTextureRangeAPPLE)(GLenum, GLsizei, GLvoid*);
  void(GLAPIENTRY* fFinishObjectAPPLE)(GLenum, GLint);
  realGLboolean(GLAPIENTRY* fTestObjectAPPLE)(GLenum, GLint);
  void(GLAPIENTRY* fUniform1f)(GLint, GLfloat);
  void(GLAPIENTRY* fUniform1fv)(GLint, GLsizei, const GLfloat*);
  void(GLAPIENTRY* fUniform1i)(GLint, GLint);
  void(GLAPIENTRY* fUniform1iv)(GLint, GLsizei, const GLint*);
  void(GLAPIENTRY* fUniform2f)(GLint, GLfloat, GLfloat);
  void(GLAPIENTRY* fUniform2fv)(GLint, GLsizei, const GLfloat*);
  void(GLAPIENTRY* fUniform2i)(GLint, GLint, GLint);
  void(GLAPIENTRY* fUniform2iv)(GLint, GLsizei, const GLint*);
  void(GLAPIENTRY* fUniform3f)(GLint, GLfloat, GLfloat, GLfloat);
  void(GLAPIENTRY* fUniform3fv)(GLint, GLsizei, const GLfloat*);
  void(GLAPIENTRY* fUniform3i)(GLint, GLint, GLint, GLint);
  void(GLAPIENTRY* fUniform3iv)(GLint, GLsizei, const GLint*);
  void(GLAPIENTRY* fUniform4f)(GLint, GLfloat, GLfloat, GLfloat, GLfloat);
  void(GLAPIENTRY* fUniform4fv)(GLint, GLsizei, const GLfloat*);
  void(GLAPIENTRY* fUniform4i)(GLint, GLint, GLint, GLint, GLint);
  void(GLAPIENTRY* fUniform4iv)(GLint, GLsizei, const GLint*);
  void(GLAPIENTRY* fUniformMatrix2fv)(GLint, GLsizei, realGLboolean,
                                      const GLfloat*);
  void(GLAPIENTRY* fUniformMatrix2x3fv)(GLint, GLsizei, realGLboolean,
                                        const GLfloat*);
  void(GLAPIENTRY* fUniformMatrix2x4fv)(GLint, GLsizei, realGLboolean,
                                        const GLfloat*);
  void(GLAPIENTRY* fUniformMatrix3fv)(GLint, GLsizei, realGLboolean,
                                      const GLfloat*);
  void(GLAPIENTRY* fUniformMatrix3x2fv)(GLint, GLsizei, realGLboolean,
                                        const GLfloat*);
  void(GLAPIENTRY* fUniformMatrix3x4fv)(GLint, GLsizei, realGLboolean,
                                        const GLfloat*);
  void(GLAPIENTRY* fUniformMatrix4fv)(GLint, GLsizei, realGLboolean,
                                      const GLfloat*);
  void(GLAPIENTRY* fUniformMatrix4x2fv)(GLint, GLsizei, realGLboolean,
                                        const GLfloat*);
  void(GLAPIENTRY* fUniformMatrix4x3fv)(GLint, GLsizei, realGLboolean,
                                        const GLfloat*);

  void(GLAPIENTRY* fUseProgram)(GLuint);
  void(GLAPIENTRY* fValidateProgram)(GLuint);
  void(GLAPIENTRY* fVertexAttribPointer)(GLuint, GLint, GLenum, realGLboolean,
                                         GLsizei, const GLvoid*);
  void(GLAPIENTRY* fVertexAttrib1f)(GLuint, GLfloat);
  void(GLAPIENTRY* fVertexAttrib2f)(GLuint, GLfloat, GLfloat);
  void(GLAPIENTRY* fVertexAttrib3f)(GLuint, GLfloat, GLfloat, GLfloat);
  void(GLAPIENTRY* fVertexAttrib4f)(GLuint, GLfloat, GLfloat, GLfloat, GLfloat);
  void(GLAPIENTRY* fVertexAttrib1fv)(GLuint, const GLfloat*);
  void(GLAPIENTRY* fVertexAttrib2fv)(GLuint, const GLfloat*);
  void(GLAPIENTRY* fVertexAttrib3fv)(GLuint, const GLfloat*);
  void(GLAPIENTRY* fVertexAttrib4fv)(GLuint, const GLfloat*);
  void(GLAPIENTRY* fCompileShader)(GLuint);
  void(GLAPIENTRY* fCopyTexImage2D)(GLenum, GLint, GLenum, GLint, GLint,
                                    GLsizei, GLsizei, GLint);
  void(GLAPIENTRY* fCopyTexSubImage2D)(GLenum, GLint, GLint, GLint, GLint,
                                       GLint, GLsizei, GLsizei);
  void(GLAPIENTRY* fGetShaderiv)(GLuint, GLenum, GLint*);
  void(GLAPIENTRY* fGetShaderInfoLog)(GLuint, GLsizei, GLsizei*, GLchar*);
  void(GLAPIENTRY* fGetShaderPrecisionFormat)(GLenum, GLenum, GLint*, GLint*);
  void(GLAPIENTRY* fGetShaderSource)(GLint, GLsizei, GLsizei*, GLchar*);
  void(GLAPIENTRY* fShaderSource)(GLuint, GLsizei, const GLchar* const*,
                                  const GLint*);

  void(GLAPIENTRY* fBindFramebuffer)(GLenum, GLuint);
  void(GLAPIENTRY* fBindRenderbuffer)(GLenum, GLuint);
  GLenum(GLAPIENTRY* fCheckFramebufferStatus)(GLenum);
  void(GLAPIENTRY* fFramebufferRenderbuffer)(GLenum, GLenum, GLenum, GLuint);
  void(GLAPIENTRY* fFramebufferTexture2D)(GLenum, GLenum, GLenum, GLuint,
                                          GLint);
  void(GLAPIENTRY* fFramebufferTextureLayer)(GLenum, GLenum, GLuint, GLint,
                                             GLint);
  void(GLAPIENTRY* fGetFramebufferAttachmentParameteriv)(GLenum, GLenum, GLenum,
                                                         GLint*);
  void(GLAPIENTRY* fGetRenderbufferParameteriv)(GLenum, GLenum, GLint*);
  realGLboolean(GLAPIENTRY* fIsFramebuffer)(GLuint);
  realGLboolean(GLAPIENTRY* fIsRenderbuffer)(GLuint);
  realGLboolean(GLAPIENTRY* fIsVertexArray)(GLuint);
  void(GLAPIENTRY* fRenderbufferStorage)(GLenum, GLenum, GLsizei, GLsizei);

  void(GLAPIENTRY* fInvalidateFramebuffer)(GLenum, GLsizei, const GLenum*);
  void(GLAPIENTRY* fInvalidateSubFramebuffer)(GLenum, GLsizei, const GLenum*,
                                              GLint, GLint, GLsizei, GLsizei);

  // These functions are only used by Skia/GL in desktop mode.
  // Other parts of Gecko should avoid using these
  void(GLAPIENTRY* fClientActiveTexture)(GLenum);
  void(GLAPIENTRY* fDisableClientState)(GLenum);
  void(GLAPIENTRY* fEnableClientState)(GLenum);
  void(GLAPIENTRY* fLoadIdentity)(void);
  void(GLAPIENTRY* fLoadMatrixd)(const GLdouble*);
  void(GLAPIENTRY* fLoadMatrixf)(const GLfloat*);
  void(GLAPIENTRY* fMatrixMode)(GLenum);
  void(GLAPIENTRY* fTexGeni)(GLenum, GLenum, GLint);
  void(GLAPIENTRY* fTexGenf)(GLenum, GLenum, GLfloat);
  void(GLAPIENTRY* fTexGenfv)(GLenum, GLenum, const GLfloat*);
  void(GLAPIENTRY* fVertexPointer)(GLint, GLenum, GLsizei, const GLvoid*);

  void(GLAPIENTRY* fBlitFramebuffer)(GLint, GLint, GLint, GLint, GLint, GLint,
                                     GLint, GLint, GLbitfield, GLenum);
  void(GLAPIENTRY* fRenderbufferStorageMultisample)(GLenum, GLsizei, GLenum,
                                                    GLsizei, GLsizei);

  /* These are different between GLES2 and desktop GL; we hide those
   * differences, use the GL names, but the most limited data type.
   */
  void(GLAPIENTRY* fDepthRangef)(GLclampf, GLclampf);
  void(GLAPIENTRY* fClearDepthf)(GLclampf);

  void(GLAPIENTRY* fDepthRange)(GLclampd, GLclampd);
  void(GLAPIENTRY* fClearDepth)(GLclampd);

  /* These are special because we end up tracking these so that we don't
   * have to query the values from GL.
   */

  void(GLAPIENTRY* fViewport)(GLint, GLint, GLsizei, GLsizei);
  void(GLAPIENTRY* fScissor)(GLint, GLint, GLsizei, GLsizei);

  /* These are special -- they create or delete GL resources that can live
   * in a shared namespace.  In DEBUG, we wrap these calls so that we can
   * check when we have something that failed to do cleanup at the time the
   * final context is destroyed.
   */

  GLuint(GLAPIENTRY* fCreateProgram)();
  GLuint(GLAPIENTRY* fCreateShader)(GLenum);
  void(GLAPIENTRY* fGenBuffers)(GLsizei, GLuint*);
  void(GLAPIENTRY* fGenQueries)(GLsizei, GLuint*);
  void(GLAPIENTRY* fGenTextures)(GLsizei, GLuint*);
  void(GLAPIENTRY* fGenFramebuffers)(GLsizei, GLuint*);
  void(GLAPIENTRY* fGenRenderbuffers)(GLsizei, GLuint*);
  void(GLAPIENTRY* fGenVertexArrays)(GLsizei, GLuint*);

  void(GLAPIENTRY* fDeleteProgram)(GLuint);
  void(GLAPIENTRY* fDeleteShader)(GLuint);
  void(GLAPIENTRY* fDeleteBuffers)(GLsizei, const GLuint*);
  void(GLAPIENTRY* fDeleteQueries)(GLsizei, const GLuint*);
  void(GLAPIENTRY* fDeleteTextures)(GLsizei, const GLuint*);
  void(GLAPIENTRY* fDeleteFramebuffers)(GLsizei, const GLuint*);
  void(GLAPIENTRY* fDeleteRenderbuffers)(GLsizei, const GLuint*);
  void(GLAPIENTRY* fDeleteVertexArrays)(GLsizei, const GLuint*);

  void*(GLAPIENTRY* fMapBuffer)(GLenum, GLenum);
  realGLboolean(GLAPIENTRY* fUnmapBuffer)(GLenum);

  // ARB_copy_buffer / OpenGL 3.1 / OpenGL ES 3.0
  void(GLAPIENTRY* fCopyBufferSubData)(GLenum, GLenum, GLintptr, GLintptr,
                                       GLsizeiptr);

  GLenum(GLAPIENTRY* fGetGraphicsResetStatus)();

  // ARB_sync
  GLsync(GLAPIENTRY* fFenceSync)(GLenum, GLbitfield);
  realGLboolean(GLAPIENTRY* fIsSync)(GLsync);
  void(GLAPIENTRY* fDeleteSync)(GLsync);
  GLenum(GLAPIENTRY* fClientWaitSync)(GLsync, GLbitfield, GLuint64);
  void(GLAPIENTRY* fWaitSync)(GLsync, GLbitfield, GLuint64);
  void(GLAPIENTRY* fGetInteger64v)(GLenum, GLint64*);
  void(GLAPIENTRY* fGetSynciv)(GLsync, GLenum, GLsizei, GLsizei*, GLint*);

  // OES_egl_image
  void(GLAPIENTRY* fEGLImageTargetTexture2D)(GLenum, GLeglImage);
  void(GLAPIENTRY* fEGLImageTargetRenderbufferStorage)(GLenum, GLeglImage);

  // ARB_draw_instanced
  void(GLAPIENTRY* fDrawArraysInstanced)(GLenum, GLint, GLsizei, GLsizei);
  void(GLAPIENTRY* fDrawElementsInstanced)(GLenum, GLsizei, GLenum,
                                           const GLvoid*, GLsizei);

  // ARB_instanced_array
  void(GLAPIENTRY* fVertexAttribDivisor)(GLuint, GLuint);

  // ARB_internalformat_query
  void(GLAPIENTRY* fGetInternalformativ)(GLenum, GLenum, GLenum, GLsizei,
                                         GLint*);

  // ARB_transform_feedback2 / OpenGL 4.0 / OpenGL ES 3.0
  void(GLAPIENTRY* fBindBufferBase)(GLenum, GLuint, GLuint);
  void(GLAPIENTRY* fBindBufferRange)(GLenum, GLuint, GLuint, GLintptr,
                                     GLsizeiptr);

  void(GLAPIENTRY* fGenTransformFeedbacks)(GLsizei, GLuint*);
  void(GLAPIENTRY* fDeleteTransformFeedbacks)(GLsizei, const GLuint*);
  realGLboolean(GLAPIENTRY* fIsTransformFeedback)(GLuint);
  void(GLAPIENTRY* fBindTransformFeedback)(GLenum, GLuint);
  void(GLAPIENTRY* fTransformFeedbackVaryings)(GLuint, GLsizei,
                                               const GLchar* const*, GLenum);
  void(GLAPIENTRY* fGetTransformFeedbackVarying)(GLuint, GLuint, GLsizei,
                                                 GLsizei*, GLsizei*, GLenum*,
                                                 GLchar*);
  void(GLAPIENTRY* fBeginTransformFeedback)(GLenum);
  void(GLAPIENTRY* fEndTransformFeedback)(void);
  void(GLAPIENTRY* fPauseTransformFeedback)(void);
  void(GLAPIENTRY* fResumeTransformFeedback)(void);

  void(GLAPIENTRY* fGetIntegeri_v)(GLenum, GLuint, GLint*);
  void(GLAPIENTRY* fGetInteger64i_v)(GLenum, GLuint, GLint64*);

  // EXT_transform_feedback only
  void(GLAPIENTRY* fBindBufferOffset)(GLenum, GLuint, GLuint, GLintptr);

  // KHR_debug
  void(GLAPIENTRY* fDebugMessageControl)(GLenum, GLenum, GLenum, GLsizei,
                                         const GLuint*, realGLboolean);
  void(GLAPIENTRY* fDebugMessageInsert)(GLenum, GLenum, GLuint, GLenum, GLsizei,
                                        const GLchar*);
  void(GLAPIENTRY* fDebugMessageCallback)(GLDEBUGPROC, const GLvoid*);
  GLuint(GLAPIENTRY* fGetDebugMessageLog)(GLuint, GLsizei, GLenum*, GLenum*,
                                          GLuint*, GLenum*, GLsizei*, GLchar*);
  void(GLAPIENTRY* fGetPointerv)(GLenum, GLvoid**);
  void(GLAPIENTRY* fPushDebugGroup)(GLenum, GLuint, GLsizei, const GLchar*);
  void(GLAPIENTRY* fPopDebugGroup)(void);
  void(GLAPIENTRY* fObjectLabel)(GLenum, GLuint, GLsizei, const GLchar*);
  void(GLAPIENTRY* fGetObjectLabel)(GLenum, GLuint, GLsizei, GLsizei*, GLchar*);
  void(GLAPIENTRY* fObjectPtrLabel)(const GLvoid*, GLsizei, const GLchar*);
  void(GLAPIENTRY* fGetObjectPtrLabel)(const GLvoid*, GLsizei, GLsizei*,
                                       GLchar*);

  // NV_fence
  void(GLAPIENTRY* fGenFences)(GLsizei, GLuint*);
  void(GLAPIENTRY* fDeleteFences)(GLsizei, const GLuint*);
  void(GLAPIENTRY* fSetFence)(GLuint, GLenum);
  realGLboolean(GLAPIENTRY* fTestFence)(GLuint);
  void(GLAPIENTRY* fFinishFence)(GLuint);
  realGLboolean(GLAPIENTRY* fIsFence)(GLuint);
  void(GLAPIENTRY* fGetFenceiv)(GLuint, GLenum, GLint*);

  // map_buffer_range
  void*(GLAPIENTRY* fMapBufferRange)(GLenum, GLintptr, GLsizeiptr, GLbitfield);
  void(GLAPIENTRY* fFlushMappedBufferRange)(GLenum, GLintptr, GLsizeiptr);

  // sampler_object
  void(GLAPIENTRY* fGenSamplers)(GLsizei, GLuint*);
  void(GLAPIENTRY* fDeleteSamplers)(GLsizei, const GLuint*);
  realGLboolean(GLAPIENTRY* fIsSampler)(GLuint);
  void(GLAPIENTRY* fBindSampler)(GLuint, GLuint);
  void(GLAPIENTRY* fSamplerParameteri)(GLuint, GLenum, GLint);
  void(GLAPIENTRY* fSamplerParameteriv)(GLuint, GLenum, const GLint*);
  void(GLAPIENTRY* fSamplerParameterf)(GLuint, GLenum, GLfloat);
  void(GLAPIENTRY* fSamplerParameterfv)(GLuint, GLenum, const GLfloat*);
  void(GLAPIENTRY* fGetSamplerParameteriv)(GLuint, GLenum, GLint*);
  void(GLAPIENTRY* fGetSamplerParameterfv)(GLuint, GLenum, GLfloat*);

  // texture_storage
  void(GLAPIENTRY* fTexStorage2D)(GLenum, GLsizei, GLenum, GLsizei, GLsizei);
  void(GLAPIENTRY* fTexStorage3D)(GLenum, GLsizei, GLenum, GLsizei, GLsizei,
                                  GLsizei);

  // uniform_buffer_object
  void(GLAPIENTRY* fGetUniformIndices)(GLuint, GLsizei, const GLchar* const*,
                                       GLuint*);
  void(GLAPIENTRY* fGetActiveUniformsiv)(GLuint, GLsizei, const GLuint*, GLenum,
                                         GLint*);
  GLuint(GLAPIENTRY* fGetUniformBlockIndex)(GLuint, const GLchar*);
  void(GLAPIENTRY* fGetActiveUniformBlockiv)(GLuint, GLuint, GLenum, GLint*);
  void(GLAPIENTRY* fGetActiveUniformBlockName)(GLuint, GLuint, GLsizei,
                                               GLsizei*, GLchar*);
  void(GLAPIENTRY* fUniformBlockBinding)(GLuint, GLuint, GLuint);

  // EXT_gpu_shader4
  void(GLAPIENTRY* fGetVertexAttribIiv)(GLuint, GLenum, GLint*);
  void(GLAPIENTRY* fGetVertexAttribIuiv)(GLuint, GLenum, GLuint*);
  void(GLAPIENTRY* fVertexAttribI4i)(GLuint, GLint, GLint, GLint, GLint);
  void(GLAPIENTRY* fVertexAttribI4iv)(GLuint, const GLint*);
  void(GLAPIENTRY* fVertexAttribI4ui)(GLuint, GLuint, GLuint, GLuint, GLuint);
  void(GLAPIENTRY* fVertexAttribI4uiv)(GLuint, const GLuint*);
  void(GLAPIENTRY* fVertexAttribIPointer)(GLuint, GLint, GLenum, GLsizei,
                                          const GLvoid*);
  void(GLAPIENTRY* fUniform1ui)(GLint, GLuint);
  void(GLAPIENTRY* fUniform2ui)(GLint, GLuint, GLuint);
  void(GLAPIENTRY* fUniform3ui)(GLint, GLuint, GLuint, GLuint);
  void(GLAPIENTRY* fUniform4ui)(GLint, GLuint, GLuint, GLuint, GLuint);
  void(GLAPIENTRY* fUniform1uiv)(GLint, GLsizei, const GLuint*);
  void(GLAPIENTRY* fUniform2uiv)(GLint, GLsizei, const GLuint*);
  void(GLAPIENTRY* fUniform3uiv)(GLint, GLsizei, const GLuint*);
  void(GLAPIENTRY* fUniform4uiv)(GLint, GLsizei, const GLuint*);
  GLint(GLAPIENTRY* fGetFragDataLocation)(GLuint, const GLchar*);

  // 3D Textures
  void(GLAPIENTRY* fTexImage3D)(GLenum, GLint, GLenum, GLenum, GLsizei, GLsizei,
                                GLint, GLenum, GLenum, const GLvoid*);

  void(GLAPIENTRY* fTexSubImage3D)(GLenum, GLint, GLint, GLint, GLint, GLsizei,
                                   GLsizei, GLsizei, GLenum, GLenum,
                                   const GLvoid*);

  void(GLAPIENTRY* fCopyTexSubImage3D)(GLenum, GLint, GLint, GLint, GLint,
                                       GLint, GLint, GLsizei, GLsizei);

  void(GLAPIENTRY* fCompressedTexImage3D)(GLenum, GLint, GLenum, GLsizei,
                                          GLsizei, GLsizei, GLint, GLsizei,
                                          const GLvoid*);

  void(GLAPIENTRY* fCompressedTexSubImage3D)(GLenum, GLint, GLint, GLint, GLint,
                                             GLsizei, GLsizei, GLsizei, GLenum,
                                             GLsizei, const GLvoid*);

  // get_string_indexed
  const GLubyte*(GLAPIENTRY* fGetStringi)(GLenum, GLuint);

  // APPLE_framebuffer_multisample
  void(GLAPIENTRY* fResolveMultisampleFramebufferAPPLE)(void);

  // NV_texture_barrier
  void(GLAPIENTRY* fTextureBarrier)(void);

  // NV_primitive_restart
  void(GLAPIENTRY* fPrimitiveRestartIndex)(GLuint);

  // OVR_multiview2
  void(GLAPIENTRY* fFramebufferTextureMultiview)(GLenum target,
                                                 GLenum attachment,
                                                 GLuint texture, GLint level,
                                                 GLint baseViewIndex,
                                                 GLsizei numViews);

  // draw_buffers_indexed
  void(GLAPIENTRY* fBlendEquationSeparatei)(GLuint, GLenum, GLenum);
  void(GLAPIENTRY* fBlendFuncSeparatei)(GLuint, GLenum, GLenum, GLenum, GLenum);
  void(GLAPIENTRY* fColorMaski)(GLuint, realGLboolean, realGLboolean,
                                realGLboolean, realGLboolean);
  void(GLAPIENTRY* fDisablei)(GLenum, GLuint);
  void(GLAPIENTRY* fEnablei)(GLenum, GLuint);

  // provoking_vertex
  void(GLAPIENTRY* fProvokingVertex)(GLenum);
};

}  // namespace gl
}  // namespace mozilla

#endif /* GLCONTEXTSYMBOLS_H_ */
