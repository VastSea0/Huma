// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

var gHumaWebPanel = {
    init: function() {
      document.addEventListener("dialogaccept", this.handleDialogAccept.bind(this));
      document.getElementById("wiki-link").addEventListener("click", () => {
        window.open("https://github.com/VastSea0/Huma/wiki/H%C3%BCma-Web-Uygulamalar%C4%B1-B%C3%B6lmesi#kullan%C4%B1m")
      })
    },
  
    handleURLChange: async function(aURL) {
      try {
        let url = new URL(aURL.value);
      } catch (_) {
        // TODO: Show error message
        return;
      }
    },
  
    handleDialogAccept: async function(aEvent) {
      document.commandDispatcher.focusedElement?.blur();
      let url = document.getElementById("humaNWP_url");
      let ua = document.getElementById("humaNWP_userAgent");
      if (!url || !ua) {
        return;
      }
      try {
        new URL(url.value);
      } catch (_) {
        return;
      }
      if (!url.value || !ua.value) {
        return;
      }
      let newSite = {
        url: url.value,
        ua: ua.value,
      };
      let currentData = JSON.parse(Services.prefs.getStringPref("huma.sidebar.data"));
      let newName = "p" + new Date().getTime();
      currentData.index.push(newName);
      currentData.data[newName] = newSite;
      Services.prefs.setStringPref("huma.sidebar.data", JSON.stringify(currentData));
    },
  };
  
  gHumaWebPanel.init();
 