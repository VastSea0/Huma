chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "savePage",
      title: "Bu Sayfayı Kaydet",
      contexts: ["page"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "savePage") {
      chrome.tabs.sendMessage(tab.id, { action: "savePage" });
    }
  });
  