/* -*- Mode: IDL; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * The origin of this IDL file is
 * https://www.w3.org/TR/webrtc/#rtcsessiondescription-class
 */

enum RTCSdpType {
  "offer",
  "pranswer",
  "answer",
  "rollback"
};

dictionary RTCSessionDescriptionInit {
  required RTCSdpType type;
  DOMString sdp = "";
};

dictionary RTCLocalSessionDescriptionInit {
  RTCSdpType type;
  DOMString sdp = "";
};

[Pref="media.peerconnection.enabled",
 JSImplementation="@mozilla.org/dom/rtcsessiondescription;1",
 Exposed=Window]
interface RTCSessionDescription {
  [Throws]
  constructor(RTCSessionDescriptionInit descriptionInitDict);

  // These should be readonly, but writing causes deprecation warnings for a bit
  attribute RTCSdpType type;
  attribute DOMString sdp;

  [Default] object toJSON();
};
