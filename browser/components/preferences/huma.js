
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
 
 

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
 
   
    this._loadPage();  
    this._showHumaPagesH();  
  
  },
};
 