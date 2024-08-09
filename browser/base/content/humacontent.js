 /*var CustomSidebarController = {
  init() {
    this.sidebarBox = document.getElementById('web-panel');
    this.webview = document.getElementById('web-content');
    this.title = document.getElementById('web-title');
    this.populateExtensionsList();
  },

  openWebPanel(url, title) {
    this.webview.setAttribute('src', url);
    this.title.textContent = title;
    this.toggle();
    //this.show();
  },

  show() {
    this.sidebarBox.hidden = false;
  },

  hide() {
    this.sidebarBox.hidden = true;
  },

  toggle() {
    if (this.sidebarBox.hidden) {
      this.show();
    } else {
      this.hide();
    }
  },

  getExtensionIdFromIconUrl(iconUrl) {
    const matches = iconUrl.match(/moz-extension:\/\/([a-f0-9\-]+)\//);
    return matches ? matches[1] : null;
  },

  async getExtensionSidebarUrl(extensionId) {
    try {
      const manifestUrl = `moz-extension://${extensionId}/manifest.json`;
      const response = await fetch(manifestUrl);
      const manifest = await response.json();
      const sidebarUrl = manifest.sidebar_action?.default_panel;
      if (!sidebarUrl) {
        throw new Error("Sidebar URL bulunamadı.");
      }
      return `moz-extension://${extensionId}/${sidebarUrl}`;
    } catch (error) {
      console.error("Manifest dosyası yüklenirken hata oluştu:", error);
      return null;
    }
  },

  async populateExtensionsList() {
    console.log("populateExtensionsList fonksiyonu çağrıldı");
    this.extensionsList = document.getElementById("humabar-extensions-list");
  
    if (!this.extensionsList) {
      console.error("humabar-extensions-list elementi bulunamadı");
      return;
    }
  
    this.extensionsList.innerHTML = '';
  
    if (typeof window.SidebarController === 'undefined' || typeof window.SidebarController.getExtensions !== 'function') {
      console.error("SidebarController veya getExtensions metodu tanımlı değil");
      return;
    }
  
    try {
      const extensions = window.SidebarController.getExtensions();
      console.log("Alınan uzantılar:", extensions);
  
      if (!Array.isArray(extensions)) {
        console.error("getExtensions bir dizi döndürmedi");
        return;
      }
  
      for (const extension of extensions) {
        const extensionId = this.getExtensionIdFromIconUrl(extension.icon);
        
        if (!extensionId) {
          continue;
        }
  
        const sidebarUrl = await this.getExtensionSidebarUrl(extensionId);
  
        if (!sidebarUrl) {
          continue;
        }
  
        const button = document.createElement("a");
        button.className = "humabar-button";
        button.setAttribute("tooltiptext", extension.tooltiptext);
        button.setAttribute("extensionId", extension.extensionId);
  
        const image = document.createElement("img");
        image.className = "humabar-button-icon";
  
       
        const iconUrl = await this.getIconFromManifest(extensionId);
        image.setAttribute("src", iconUrl);
        image.setAttribute("alt", extension.tooltiptext);
  
        button.appendChild(image);
  
        button.addEventListener("click", (event) => {
          event.preventDefault();
          try {
            const urlObject = new URL(sidebarUrl);
            
            if (urlObject.protocol === 'http:' || urlObject.protocol === 'https:' || urlObject.protocol === 'moz-extension:') {
              //window.open(sidebarUrl, '_blank', 'noopener,noreferrer');

            } else {
              console.error("Güvenli olmayan protokol:", urlObject.protocol);
            }
          } catch (error) {
            console.error("Geçersiz URL:", sidebarUrl, error);
          }
        });
  
        this.extensionsList.appendChild(button);
      }
  
    } catch (error) {
      console.error("Uzantıları alırken hata oluştu:", error);
    }
  },
  
 
  async getIconFromManifest(extensionId) {
    try {
      const manifestUrl = `moz-extension://${extensionId}/manifest.json`;
      const response = await fetch(manifestUrl);
      const manifest = await response.json();
      
     
      const iconUrl = manifest.icons && (manifest.icons['48'] || manifest.icons['32'] || manifest.icons['16']);
      
      if (iconUrl) {
        return `moz-extension://${extensionId}/${iconUrl}`;
      }
    } catch (error) {
      console.error("Manifest dosyası okunamadı:", error);
    }
    
    
    return "chrome://branding/content/about-logo.png";
  }
};

// Sayfa yüklendiğinde CustomSidebarController'ı başlat
window.addEventListener("load", () => {
  CustomSidebarController.init();
});

function openWebPanel(url, title) {
  CustomSidebarController.openWebPanel(url, title);
}

function closeWebPanel() {
  CustomSidebarController.hide();
}

function refreshExtensions() {
  CustomSidebarController.populateExtensionsList();
} */

  /*
BU JAVASCRİPT DOSYASI EMEKLİYE AYIRLMIŞTIR,
BİZİMLE HER DAİM ÇALIŞTIĞI İÇİN TEŞEKKÜR EDERİZ.

SEVGİLERLERLE, HÜMA TARAYICI EKİBİ.
  */