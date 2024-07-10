// background.js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'search') {
      browser.search.search({
        query: message.query
      }).then(() => {
        sendResponse({status: 'success'});
      }).catch((error) => {
        sendResponse({status: 'error', message: error.message});
      });
  
      return true;  // Async response
    }
  });
  