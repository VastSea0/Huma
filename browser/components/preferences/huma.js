
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
 
 

const jsonData = {
  "sayfa1": {
      "pagename": "Sayfa 1",
      "pageurl": "https://example.com/sayfa1",
      "pageauthor": "Author 1",
      "htmldata": "<p>Bu Sayfa 1'in içeriğidir.</p>"
  },
  "sayfa2": {
      "pagename": "Sayfa 2",
      "pageurl": "https://example.com/sayfa2",
      "pageauthor": "Author 2",
      "htmldata": "<p>Bu Sayfa 2'nin içeriğidir.</p>"
  },
  "sayfa3": {
      "pagename": "Sayfa 3",
      "pageurl": "https://example.com/sayfa3",
      "pageauthor": "Author 3",
      "htmldata": "<p>Bu Sayfa 3'ün içeriğidir.</p>"
  },
  "sayfa4": {
      "pagename": "Sayfa 4",
      "pageurl": "https://example.com/sayfa4",
      "pageauthor": "Author 4",
      "htmldata": "<p>Bu Sayfa 4'ün içeriğidir.</p>"
  }
};

var gMoreFromHuma = {
  // func
  
  loadPage() {
    //alert("helo");
    document.querySelectorAll('.list-group-item').forEach(item => {
      item.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('data-target');
          const targetElement = document.querySelector(targetId);
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      });
  });
  },
  
  
  _loadPage() {
   //alert("helo");
   setEventListener("loadPage", "click", this.loadPage); 
  },

  _showHumaPagesH() {
    /*
    Burada init fonksiyonunda bu fonksiyon başlangıç için çağrılır
    bkz. satır 715 civarı
   "setEventListener()" bu komut ile showHumaPagesH kimlikli vericiden 
   click sinyalini dinler ve this.showHumaPagesH ile diğer fonksiyonu çağırır
   bkz. satır 630 civarı
    */
     setEventListener("showHumaPagesH", "click", this.showHumaPagesH);
   },

   showHumaPagesH() {
    //alert("helo");
    gSubDialog.open(
      "chrome://browser/content/preferences/dialogs/huma.pdf"
    );
  },

  init() {
 
   
    this._loadPage(); // Bkz.
    this._showHumaPagesH(); // Bkz.
  
  },
};
