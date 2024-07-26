browser.contextMenus.create({
  id: "humaContextMenu",
  title: "Hüma Gezgini'ni Aç",
  contexts: ["all"] // Her tür içerik için görünsün
});

chrome.contextMenus.create({
  id: "savePage",
  title: "Bu Sayfayı Okumlarına Kaydet",
  contexts: ["page"]
});
 

//  Butona tıklandığında sayfayı kaydetmesi için gereken mesajı gönder
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "savePage") {
    chrome.tabs.sendMessage(tab.id, { action: "savePage" });

  }
});


// Menu öğesine tıklama olayı ekleyin
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "humaContextMenu") {
    // Tıklama olayı gerçekleştiğinde yan paneli aç
    browser.sidebarAction.open();
  }
});

const humabulut = "https://humadosya.netlify.app/";
const humabetik = "http://egehan.pythonanywhere.com/";
const verasis = "https://vastseasaver.web.app/";
const vastseablog = "https://vastseablog.com/";
const openSoda = "https://opensoda.vercel.app";
const egehan = "https://egehan.netlify.app";

function getCurrentTab(callback) {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {   
      callback(tabs[0]);
  });
}

function newTabAndSearch(siteSearch, domainOnly) {
  getCurrentTab((tabToQuarry) => {
    if (domainOnly == true){   
      browser.tabs.create({  //yeni sekme oluştur
        url: siteSearch  
      });
    } else {
      browser.tabs.create({  //yeni sekme oluştur
        url: siteSearch 
      });
    }
  });
}

//Dinleyicileri ekle
document.getElementById("humabulut").addEventListener("click", () => newTabAndSearch(humabulut));
document.getElementById("humabetik").addEventListener("click", () => newTabAndSearch(humabetik));
document.getElementById("verasis").addEventListener("click", () => newTabAndSearch(verasis));
document.getElementById("vastseablog").addEventListener("click", () => newTabAndSearch(vastseablog));
document.getElementById("openSoda").addEventListener("click", () => newTabAndSearch(openSoda));
document.getElementById("egehan").addEventListener("click", () => newTabAndSearch(egehan));

document.getElementById("all").addEventListener("click", () => {
  newTabAndSearch(humabulut);
  newTabAndSearch(humabetik);
  newTabAndSearch(verasis);
  newTabAndSearch(vastseablog);
  newTabAndSearch(openSoda);
  newTabAndSearch(egehan);

});

document.getElementById("open-sidebar").addEventListener("click", () => {
  browser.sidebarAction.open();
});


document.addEventListener('DOMContentLoaded', () => {
  const contentList = document.getElementById('contentList');

  chrome.storage.local.get({ savedPages: [] }, (result) => {
    const savedPages = result.savedPages;

    savedPages.forEach(page => {
      const div = document.createElement('div');
      div.className = 'content-item';
      div.textContent = page.title;
      div.dataset.id = page.id;

      div.addEventListener('click', () => {
        chrome.tabs.create({ url: chrome.runtime.getURL('/apps/content.html') }, (tab) => {
          chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
            if (tabId === tab.id && changeInfo.status === 'complete') {
              chrome.tabs.onUpdated.removeListener(listener);
              chrome.tabs.sendMessage(tab.id, { action: 'loadContent', content: page });
            }
          });
        });
      });

      contentList.appendChild(div);
    });
  });
});