
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
 
 

var gHumaBar = {
  // func
  
  loadPage() {
    alert("helo");
 
  },

  _loadPage() {
   //alert("helo");
    gHumaBrowserManagerSidebar._showPrefsPage();
    gHumaBrowserManagerSidebar._createHumabar();
    const kalin = document.getElementById("kip-kalin");
    const ince = document.getElementById("kip-ince");
    const kapali = document.getElementById("kip-kapali");
  
    //this._openAddPanelDialog();
 /*
    kalin.addEventListener('click', () => {
      alert(`mod: kalin`);
      //gHumaUIManager._kip();
      //this._openAddPanelDialog();

      gContextMenu.humaContext('maximize-humabar');
    });
    ince.addEventListener('click', () => {
      alert(`mod: ince`);
      //gHumaUIManager._kip();
      //this._openAddPanelDialog();

      gContextMenu.humaContext('minimize-humabar');
    });
    kapali.addEventListener('click', () => {
      alert(`mod: kapali`);
      //gHumaUIManager._kip();
      //this._openAddPanelDialog();

      gContextMenu.humaContext('close-humabar');
      
     
    });*/

  },

  async _openAddPanelDialog() {
    let dialogURL = "chrome://browser/content/places/humabar-settings.xhtml";
    let features = "centerscreen,chrome,modal,resizable=no";
    let aParentWindow = Services.wm.getMostRecentWindow("navigator:browser");

    if (aParentWindow?.gDialogBox) {
      await aParentWindow.gDialogBox.open(dialogURL, {});
    } else {
      aParentWindow.openDialog(dialogURL, "", features, {});
    }
  },


  init() {
    this._loadPage(); 
     
  },
};

gHumaBar.init();

