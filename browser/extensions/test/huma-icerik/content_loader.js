chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'loadContent') {
      const { content } = request;
  
      document.getElementById('title').textContent = content.title;
  
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = content.html;
    }
  });
  