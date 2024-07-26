chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'loadContent') {
      const { content } = request;
  
      document.getElementById('title').textContent = content.title;
  
      const contentDiv = document.getElementById('content');
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content.html;
  
      // Remove buttons and text areas
      const buttons = tempDiv.querySelectorAll('button');
      buttons.forEach(button => button.remove());
  
      const textareas = tempDiv.querySelectorAll('textarea');
      textareas.forEach(textarea => textarea.remove());
  
  
      // Set cleaned HTML 
      contentDiv.innerHTML = tempDiv.innerHTML;
    }
  });
  