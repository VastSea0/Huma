/*var gSimpleWebPanelManager = {
  currentPanel: null,
  panels: {},

  init() {
    this.createPanelButtons();
  },

  createPanelButtons() {
    let container = document.getElementById("web-panel-container");
    container.innerHTML = ""; // Mevcut butonları temizle

    for (let id in this.panels) {
      let panel = this.panels[id];
      let button = document.createElement("button");
      button.textContent = panel.name;
      button.onclick = () => this.openWebPanel(panel.url, panel.name);
      container.appendChild(button);
    }
  },

  openWebPanel(url, name) {
    let panel = document.getElementById("web-panel");
    panel.src = url;
    panel.removeAttribute("hidden");
    this.currentPanel = name;
    this.updatePanelTitle(name);
  },

  updatePanelTitle(name) {
    let titleElement = document.getElementById("web-panel-title");
    if (titleElement) {
      titleElement.textContent = name;
    }
  },

  closePanel() {
    let panel = document.getElementById("web-panel");
    panel.setAttribute("hidden", "true");
    this.currentPanel = null;
    this.updatePanelTitle("");
  },

  addPanel(url, name) {
    let id = "panel_" + Object.keys(this.panels).length;
    this.panels[id] = { url: url, name: name };
    this.createPanelButtons(); // Butonları yeniden oluştur
  }
};

// Panel eklemek için bu fonksiyonu kullanın
function openWebPanel(url, name) {
  if (!gSimpleWebPanelManager.panels[name]) {
    gSimpleWebPanelManager.addPanel(url, name);
  }
  gSimpleWebPanelManager.openWebPanel(url, name);
}

// Örnek kullanım
gSimpleWebPanelManager.init();

// Paneller eklemek için:
openWebPanel('https://www.example.com', 'Example Site');
openWebPanel('https://www.google.com', 'Google');
openWebPanel('https://www.github.com', 'GitHub');*/