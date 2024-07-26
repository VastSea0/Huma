chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "savePage") {
      const content = {
        id: 'content-' + new Date().getTime(),
        title: document.title,
        html: document.body.innerHTML
      };
  
      chrome.storage.local.get({ savedPages: [] }, (result) => {
        const savedPages = result.savedPages;
        savedPages.push(content);
        chrome.storage.local.set({ savedPages }, () => {
          alert("Sayfa kaydedildi!");
        });
      });
    }
  });
  