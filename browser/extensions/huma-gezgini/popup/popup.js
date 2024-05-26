const humabulut = "https://humadosya.netlify.app/";
const humabetik = "http://egehan.pythonanywhere.com/";
const verasis = "https://vastseasaver.web.app/";
const vastseablog = "https://vastseablog.com/";
const openSoda = "https://opensoda.vercel.app";

function getCurrentTab(callback) {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {   
      callback(tabs[0])
  });
}

function newTabAndSearch(siteSearch, domainOnly) {
  getCurrentTab((tabToQuarry) => {
      if (tabToQuarry.url != "about:newtab"){   
        if (domainOnly == true){   
          browser.tabs.create({  //yeni sekme oluştur
            url: siteSearch  
            });
        } else {
          browser.tabs.create({  //yeni sekme oluştur
            url: siteSearch 
            });
        }
      }
  });
}

//Dinleyicileri ekle
document.getElementById("humabulut").addEventListener("click", () => newTabAndSearch(humabulut));
document.getElementById("humabetik").addEventListener("click", () => newTabAndSearch(humabetik));
document.getElementById("verasis").addEventListener("click", () => newTabAndSearch(verasis));
document.getElementById("vastseablog").addEventListener("click", () => newTabAndSearch(vastseablog));
document.getElementById("openSoda").addEventListener("click", () => newTabAndSearch(openSoda));

document.getElementById("all").addEventListener("click", () => {
  newTabAndSearch(humabulut)
  newTabAndSearch(humabetik)
  newTabAndSearch(verasis)
  newTabAndSearch(vastseablog)
  newTabAndSearch(openSoda)
});
