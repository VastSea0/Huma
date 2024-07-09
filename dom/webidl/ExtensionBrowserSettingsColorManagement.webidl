/*
 *  THIS IS AN AUTOGENERATED FILE.  DO NOT EDIT
 *
 *  The content of this file has been generated based on the WebExtensions API
 *  JSONSchema using the following command:
 *
 *  export SCRIPT_DIR="toolkit/components/extensions/webidl-api"
 *  mach python $SCRIPT_DIR/GenerateWebIDLBindings.py -- browserSettings.colorManagement
 *
 *  More info about generating webidl API bindings for WebExtensions API at:
 *
 *  https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/webidl_bindings.html
 *
 *  A short summary of the special setup used by these WebIDL files (meant to aid
 *  webidl peers reviews and sign-offs) is available in the following section:
 *
 *  https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/webidl_bindings.html#review-process-on-changes-to-webidl-definitions
 */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * You are granted a license to use, reproduce and create derivative works of
 * this document.
 */

// WebIDL definition for the "browserSettings.colorManagement" WebExtensions API
[Exposed=(ServiceWorker), LegacyNoInterfaceObject]
interface ExtensionBrowserSettingsColorManagement {
  // API properties.

  [Replaceable]
  readonly attribute ExtensionSetting mode;

  [Replaceable]
  readonly attribute ExtensionSetting useNativeSRGB;

  [Replaceable]
  readonly attribute ExtensionSetting useWebRenderCompositor;
};
