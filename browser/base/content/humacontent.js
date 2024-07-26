let isWebPanelOpen = false;

function openWebPanel(url, title) {
  const webPanel = document.getElementById("web-panel");
  const webContent = document.getElementById("web-content");
  const webPanelTitle = document.getElementById("web-panel-title");

  if (isWebPanelOpen && webContent.getAttribute("src") === url) {
    webPanel.setAttribute("hidden", "true");
    isWebPanelOpen = false;
  } else {
    webContent.setAttribute("src", url);
    webPanelTitle.textContent = title;
    webPanel.removeAttribute("hidden");
    isWebPanelOpen = true;
  }
}

function closeWebPanel() {
  const webPanel = document.getElementById("web-panel");
  webPanel.setAttribute("hidden", "true");
  isWebPanelOpen = false;
}

 
function refreshExtensions() {
  // alert("Eklentiler yenileniyor...");
  populateExtensionsList();
}

function getExtensionIdFromIconUrl(iconUrl) {
  const matches = iconUrl.match(/moz-extension:\/\/([a-f0-9\-]+)\//);
  return matches ? matches[1] : null;
}

async function getExtensionSidebarUrl(extensionId) {
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
}

async function populateExtensionsList() {
  console.log("populateExtensionsList fonksiyonu çağrıldı");
  // alert("Eklentiler listesi yükleniyor...");

  const extensionsList = document.getElementById("humabar-extensions-list");

  if (!extensionsList) {
    console.error("humabar-extensions-list elementi bulunamadı");
    // alert("humabar-extensions-list elementi bulunamadı");
    return;
  }

  // Mevcut eklentileri temizle
  extensionsList.innerHTML = '';

  // SidebarController'ın varlığını kontrol et
  if (typeof window.SidebarController === 'undefined') {
    console.error("SidebarController tanımlı değil");
    // alert("SidebarController tanımlı değil");
    return;
  }

  // getExtensions metodunun varlığını kontrol et
  if (typeof window.SidebarController.getExtensions !== 'function') {
    console.error("SidebarController.getExtensions bir fonksiyon değil");
    // alert("SidebarController.getExtensions bir fonksiyon değil");
    return;
  }

  try {
    const extensions = window.SidebarController.getExtensions();
    console.log("Alınan uzantılar:", extensions);
    // alert("Alınan uzantı sayısı: " + extensions.length);

    if (!Array.isArray(extensions)) {
      console.error("getExtensions bir dizi döndürmedi");
      // alert("getExtensions bir dizi döndürmedi");
      return;
    }

    for (const extension of extensions) {
      const extensionId = getExtensionIdFromIconUrl(extension.icon);
      
      if (!extensionId) {
        // alert(`Uzantı ID'si ayıklanamadı: ${extension.tooltiptext}`);
        continue;
      }

      const sidebarUrl = await getExtensionSidebarUrl(extensionId);

      if (!sidebarUrl) {
        // alert(`Uzantı için sidebar URL'si bulunamadı: ${extension.tooltiptext}`);
        continue;
      }

      const button = document.createElement("a");
      button.className = "humabar-button";
      button.setAttribute("tooltiptext", extension.tooltiptext);
      button.setAttribute("extensionId", extension.extensionId);



      const image = document.createElement("image");
      image.className = "humabar-button-icon";
      image.setAttribute("src", extension.icon);
      image.setAttribute("role", "presentation");

      button.appendChild(image);

      button.setAttribute("target", "_blank");
      button.setAttribute("href", sidebarUrl);


      button.addEventListener("click", () => {
        alert("Eklentilerin üzerine hala çalışıyoruz. ")
        //window.open(sidebarUrl, '_blank');
        //location.href = sidebarUrl;
      }); 

      extensionsList.appendChild(button);
    }

    // alert("Eklentiler başarıyla yüklendi!");
  } catch (error) {
    console.error("Uzantıları alırken hata oluştu:", error);
    // alert("Uzantıları alırken hata oluştu: " + error.message);
  }
}

// Sayfa yüklendiğinde uzantıları listele
window.addEventListener("load", populateExtensionsList);
 