
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Temayı al
if (!AddonManager) {
  var { AddonManager } = ChromeUtils.importESModule(
    "resource://gre/modules/AddonManager.sys.mjs"
  ); 
}

var gHumaLookNFeel = {

  helo(){
    console.log("helo");
  },

    // userChrome.css ve userContent.css dosyalarını yükleme fonksiyonu
    loadCustomStylesheets() {
      var sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
      var ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
  
   // userChrome.css dosyasını yükle
    var chromeURI = ios.newURI("chrome://huma/content/lepton/leptonChrome.css", null, null);
    if (!sss.sheetRegistered(chromeURI, sss.AGENT_SHEET)) {
      sss.loadAndRegisterSheet(chromeURI, sss.AGENT_SHEET);
      console.log("leptonChrome.css yüklendi.");
    }

    // userContent.css dosyasını yükle
    var contentURI = ios.newURI("chrome://huma/content/lepton/leptonContent.css", null, null);
    if (!sss.sheetRegistered(contentURI, sss.AGENT_SHEET)) {
      sss.loadAndRegisterSheet(contentURI, sss.AGENT_SHEET);
      console.log("leptonContent.css yüklendi.");
    }

    },
  
    // user.js dosyasını yükleme ve uygulama fonksiyonu
    loadUserJS() {
      
      /*var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsIFile);
      file.initWithPath("/path/to/profile/user.js");
  
      var fstream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
      var sstream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);
  
      fstream.init(file, -1, 0, 0);
      sstream.init(fstream);
  
      var data = sstream.read(sstream.available());
      sstream.close();
      fstream.close();
  
      // Her satırı okuyarak js dosyasını uygula
      var lines = data.split("\n");
      lines.forEach(function (line) {
        if (line.trim().startsWith("//") || line.trim() === "") {
          return; // Yorum satırlarını atla
        }
  
        // Örnek: pref("browser.startup.homepage", "https://example.com");
        eval(line); // user.js'deki ayarları uygulamak için
      });
  
      console.log("user.js yüklendi ve uygulandı.");
      */
    },
  
    // Tüm dosyaları yükleyen ana fonksiyon
    loadAllCustomFiles() {
      this.loadCustomStylesheets();
      this.loadUserJS();
    },

  updatePreferenceFromCheckbox() {
    const checkbox = document.getElementById('verticalTabCheckBox');
    if (checkbox) {
      const isChecked = checkbox.checked;
      try {
        Services.prefs.setBoolPref("huma.tabs.vertical", isChecked);
      } catch (error) {
        console.error("Tercih güncellenirken hata oluştu:", error);
      }
    }
  },

  updateCheckboxFromPreference() {
    const checkbox = document.getElementById('verticalTabCheckBox');
    if (checkbox) {
      try {
        const humVerticalTab = Services.prefs.getBoolPref("huma.tabs.vertical");
        checkbox.checked = humVerticalTab;
      } catch (error) {
        console.error("Tercih okunurken hata oluştu:", error);
      }
    }
  },

  checkboxInitialize() {
    const checkbox = document.getElementById('verticalTabCheckBox');
    if (checkbox) {
      // Checkbox'ın durumunu mevcut tercih ile güncelle
      this.updateCheckboxFromPreference();

      // Checkbox'ın durumunu değiştirdiğinde tercihi güncelle
      checkbox.addEventListener('command', () => {
        this.updatePreferenceFromCheckbox();
      });
    } else {
      console.error("Checkbox elementi bulunamadı");
    }
  },

  initializePreference() {
    // Eğer tercih yoksa, boş bir dizi olarak başlat
    if (!Services.prefs.prefHasUserValue("huma.preference.page.palette")) {
      Services.prefs.setStringPref("huma.preference.page.palette", JSON.stringify([]));
    }
  },

  applyPalette(palette) {
    // Yeni paleti doğrudan kaydet
    let currentPaletteData = {
      "backgroundColor": palette.backgroundColor,
      "pagePaneColor": palette.pagePaneColor
    };
  
    // Paleti JSON olarak kaydet
    Services.prefs.setStringPref("huma.preference.page.palette", JSON.stringify(currentPaletteData));
  
    // Stilleri uygula
    this.applyStyles(palette);
  },
  
  applyStyles(palette) {
    document.body.style.backgroundColor = palette.backgroundColor;
    document.querySelector('.navigation').style.backgroundColor = palette.pagePaneColor;
    document.querySelector('#mainPrefPane').style.backgroundColor = palette.pagePaneColor;
  },
  
  applyLastPalette() {
    // Son kaydedilen paleti al
    let lastPalette = JSON.parse(Services.prefs.getStringPref("huma.preference.page.palette"));
    
    // Eğer palet varsa, stilleri uygula
    if (lastPalette) {
      this.applyStyles(lastPalette);
    }
  },

  create() {
    const paletteList = document.getElementById('paletteList');
    if (!paletteList) {
      console.error("paletteList element not found");
      return;
    }
  
    const palettes = JSON.parse(Services.prefs.getStringPref("huma.preference.colors"));
  
    for (const [key, palette] of Object.entries(palettes)) {
      const paletteElement = document.createElement('div');
      paletteElement.className = 'palette';
      paletteElement.innerHTML = `
        <div class="palette-half" style="background-color: ${palette.backgroundColor};"></div>
        <div class="palette-half" style="background-color: ${palette.pagePaneColor};"></div>
       
      `;
      paletteElement.addEventListener('click', () => this.applyPalette(palette));
      paletteList.appendChild(paletteElement);
    }

  },

 async _createThemePalette() {
    try {
        // Aktif tema ID
        let currentTheme = Services.prefs.getCharPref("extensions.activeThemeID");
     

        // Eklenti nesnesi
        let addon = await AddonManager.getAddonByID(currentTheme);

        if (addon) {
            // rootURI'den manifest.json dosyasının tam yolunu oluşturun
           
            const manifestPath = addon.__AddonInternal__.rootURI + "manifest.json";
        
            console.log(addon);
            console.log(addon.screenshots);
            
            let response = await fetch(manifestPath);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let manifestContent = await response.json();
           
            //toolbar: "rgb(20, 20, 25)"
            //toolbar_field: "rgb(32, 32, 35)"
            let themeBgColor = manifestContent.theme.colors.toolbar;
            let themePaneContentColor = manifestContent.theme.colors.toolbar_field;
            let themeScreenShot = addon.screenshots[0];
            let themeParagraf = `${addon.creator.name} | ${addon.name}:${addon.version} | ${addon.description} ` 
            console.log(themeScreenShot);
            console.log(themeScreenShot.url);
            const themePalette = {
              "backgroundColor": themeBgColor,
              "pagePaneColor": themePaneContentColor,
              "screenShot": themeScreenShot.url,
              "paragraf": themeParagraf,
            }
            const themePaletteList = document.getElementById('humabar-table')
            // Mevcut içeriği temizle
            themePaletteList.innerHTML = '';

 
            const themeScreenShotElement = document.createElement('div');
            themeScreenShotElement.innerHTML = `
             <div class="theme-card">
                  <img class="theme-card-image" src="${themePalette.screenShot}" />
                  <p>${themePalette.paragraf}</p>
              </div>
              `
           
            themeScreenShotElement.addEventListener('click', () => this.applyPalette(themePalette));
            themePaletteList.appendChild(themeScreenShotElement);

            
            
        } else {
            console.error("Tema eklentisi bulunamadı");
        }
    } catch (error) {
        console.error("Hata oluştu:", error);
    }
},
  

   
  
};
gHumaLookNFeel.addButtonListener = function () {
  const button = document.getElementById('loadFilesButton');
  if (button) {
    button.addEventListener('click', () => {
      this.loadAllCustomFiles();
      console.log("Tüm dosyalar yüklendi.");
    });
  }
};

// init fonksiyonuna buton dinleyiciyi ekle
gHumaLookNFeel.init = function () {
  this.initializePreference();
  this.create();
  this.applyLastPalette();
  this.checkboxInitialize();
  this._createThemePalette();
  this.addButtonListener(); // Buton dinleyici eklendi
};

// Başlatmak için çağır
gHumaLookNFeel.init();


