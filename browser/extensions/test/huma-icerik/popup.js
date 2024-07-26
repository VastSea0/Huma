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
          chrome.tabs.create({ url: chrome.runtime.getURL('content.html') }, (tab) => {
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
  