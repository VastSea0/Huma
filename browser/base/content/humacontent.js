let isWebPanelOpen = false;

function openWebPanel(url, title) {
  const webPanel = document.getElementById("web-panel");
  const webContent = document.getElementById("web-content");
   
  if (isWebPanelOpen && webContent.getAttribute("src") === url) {
    webPanel.setAttribute("hidden", "true");
    isWebPanelOpen = false;
  } else {
    webContent.setAttribute("src", url);
    webPanel.removeAttribute("hidden");
    isWebPanelOpen = true;
  }
}

function closeWebPanel() {
  const webPanel = document.getElementById("web-panel");
  webPanel.setAttribute("hidden", "true");
  isWebPanelOpen = false;
}

