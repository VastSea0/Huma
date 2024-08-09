// JSON objesi
let sites = {
    "pazartesi": {
        
      },
    "sali": {
        
      },
    "carsamba": {
       
      },
    "persembe": {
         
      },
    "cuma": {
        
      },
    "cumartesi": {
       
      },
    "pazar": {
 
      }
};



// localStorage'a veriyi kaydet
function initializeSites() {
    const storedSites = localStorage.getItem('sites');
    if (storedSites) {
        sites = JSON.parse(storedSites);
        textArea = document.getElementById("text-area");

    } else {
        localStorage.setItem('sites', JSON.stringify(sites));
    }
}

// Gün numaraları ve adları eşlemesi
const gunler = ["pazar", "pazartesi", "sali", "carsamba", "persembe", "cuma", "cumartesi"];

// Günün numarasını al
function getCurrentDay() {
    const gun = new Date();
    return gun.getDay(); // 0 (Pazar) ile 6 (Cumartesi) arasında bir sayı döner
}

// URL'nin kök kısmını almak için fonksiyon
function getRootUrl(url) {
    try {
        const parsedUrl = new URL(url);
        return `${parsedUrl.protocol}//${parsedUrl.hostname}`;
    } catch (e) {
        console.error('Geçersiz URL:', url);
        return null;
    }
}

// Sites verilerini göstermek için fonksiyon
function showSites(day) {
    const tag = document.getElementById("sites-list");
    tag.innerHTML = ""; // Önceki içerikleri temizle
    if (sites[day]) {
        // Gün başlığını ekle
        const dayHeader = document.createElement('h3');
        dayHeader.textContent = day.charAt(0).toUpperCase() + day.slice(1);
        tag.appendChild(dayHeader);

        // URL sıklıklarını hesapla
        const urlCounts = sites[day];
        const sortedUrls = Object.entries(urlCounts).sort((a, b) => b[1] - a[1]);

        // Verileri listeye ekle
        const list = document.createElement('ul');
        sortedUrls.forEach(([url, count]) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${url} (${count} ziyaret)`;
            list.appendChild(listItem);
        });

        tag.appendChild(list);

        // İstatistikleri göster
        const stats = document.createElement('p');
        stats.textContent = `Toplam ziyaret edilen URL sayısı: ${sortedUrls.length}`;
        tag.appendChild(stats);

        return sortedUrls.length;
    } else {
        // Veri bulunamadı mesajı
        const noDataMessage = document.createElement('p');
        noDataMessage.textContent = "Bu güne ait veri bulunamadı";
        tag.appendChild(noDataMessage);
    }
}

// İlk yükleme
initializeSites();
showSites(gunler[getCurrentDay()]);

// Yenile düğmesine tıklama olayını ayarla
document.querySelector('#yenile-btn').addEventListener('click', () => {
    showSites(gunler[getCurrentDay()]);
    console.log(sites);
    //changeData('https://www.example.com', gunler[getCurrentDay()]);
});

// Chrome webNavigation olayını dinleyin
chrome.webNavigation.onCompleted.addListener(function(details) {
    const rootUrl = getRootUrl(details.url);
    if (rootUrl) {
        changeData(rootUrl, gunler[getCurrentDay()]);
    }
}, {url: [{urlMatches: '.*'}]});

// Verileri güncelleme fonksiyonu
function changeData(data, day) {
    // Eğer gün mevcutsa
    if (sites[day]) {
        // URL'nin kök kısmını alın
        const rootUrl = getRootUrl(data);
        
        // URL'yi güncelle
        if (rootUrl) {
            if (sites[day][rootUrl]) {
                sites[day][rootUrl] += 1; // Ziyaret sayısını artır
            } else {
                sites[day][rootUrl] = 1; // Yeni URL, 1 ziyaret
            }

            // Değişiklikleri localStorage'a kaydet
            localStorage.setItem('sites', JSON.stringify(sites));
        }
    } else {
        console.error('Geçersiz gün:', day); // Gün mevcut değilse hata mesajı
    }

    // Güncellenmiş URL kümesini gösterir
    const helo = sites[day];
    console.log('Güncellenmiş URL kümesi:', helo); // Güncellenmiş URL kümesini konsola yazdırır
}


// LocalStorage'ı sıfırlama fonksiyonu
function resetLocalStorage() {
    localStorage.removeItem('sites');
    // Veriyi sıfırlamak için sites objesini yeniden başlat
    sites = {
        "pazartesi": {},
        "sali": {},
        "carsamba": {},
        "persembe": {},
        "cuma": {},
        "cumartesi": {},
        "pazar": {}
    };
    // İlk yükleme işlemini tekrar yaparak boş veri setiyle güncelle
    localStorage.setItem('sites', JSON.stringify(sites));
    console.log('LocalStorage sıfırlandı ve yeni boş veri seti kaydedildi.');
}
 
//resetLocalStorage();

// LocalStorage'dan veriyi al ve günlük ziyaret sayılarını hesapla

function getVisitCountsFromLocalStorage() {
    const storedSites = localStorage.getItem('sites');
    if (storedSites) {
        const sites = JSON.parse(storedSites);
        const visitCounts = {};
        gunler.forEach(day => {
            // Ziyaret sayılarını toplama
            const urls = sites[day];
            visitCounts[day] = Object.values(urls).reduce((acc, count) => acc + count, 0);
        });
        return visitCounts;
    }
    return gunler.reduce((obj, day) => {
        obj[day] = 0;
        return obj;
    }, {});
}

 
 

// Ziyaret sayılarıyla grafiği çiz
const visitCounts = getVisitCountsFromLocalStorage();




const drawChartBtn = document.createElement('button');
const btnGroup = document.getElementById('btn-group');

btnGroup.appendChild(drawChartBtn);

 
 
console.log(showSites(gunler[getCurrentDay()]))
drawChartBtn.textContent = `${ gunler[getCurrentDay()] }, ${ showSites(gunler[getCurrentDay()]) }`
 
/*
drawChartBtn.addEventListener('click', () => {
    drawChart(visitCounts);
})

*/


textArea.textContent = JSON.stringify(sites)