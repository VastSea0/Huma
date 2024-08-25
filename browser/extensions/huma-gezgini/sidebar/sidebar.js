document.addEventListener("DOMContentLoaded", () => {
    if (typeof browser !== "undefined" && browser.bookmarks) {
        fetchBookmarks();
    } else {
        console.error("Tarayıcı 'bookmarks' API'sini desteklemiyor veya gerekli izinler eksik.");
    }

    document.getElementById("addBookmarkButton").addEventListener("click", addBookmark);

    document.getElementById("humabulut").addEventListener("click", () => {
        browser.tabs.create({ url: "https://humadosya.netlify.app/" });
    });
    document.getElementById("humabetik").addEventListener("click", () => {
        browser.tabs.create({ url: "/apps/ayarlar.html#helo" });
    });  
    document.getElementById("humaayarlar").addEventListener("click", () => {
        browser.tabs.create({ url: "/apps/ayarlar.html#helo" });
    });
    document.getElementById("verasis").addEventListener("click", () => {
        browser.tabs.create({ url: "https://vastseasaver.web.app/" });
    });
    document.getElementById("openSoda").addEventListener("click", () => {
        browser.tabs.create({ url: "https://opensoda.vercel.app" });
    });
    document.getElementById("egehan").addEventListener("click", () => {
        browser.tabs.create({ url: "https://egehan.netlify.app" });
    });
    document.getElementById("huma-tarih").addEventListener("click", () => {
        browser.tabs.create({ url: "./html/index.html" });
    });
    document.getElementById("huma-sekmeleri").addEventListener("click", () => {
        browser.tabs.create({ url: "https://github.com/VastSea0/Huma-Sekmeleri/releases/download/v0a1/Huma.Sekmeleri.xpi" });
    });
    document.getElementById("huma-pages").addEventListener("click", () => {
        browser.tabs.create({ url: "/apps/index.html" });
    });
    document.getElementById("all").addEventListener("click", () => {
        browser.tabs.create({ url: "https://humadosya.netlify.app/" });
        browser.tabs.create({ url: "https://vastseasaver.web.app/" });
        browser.tabs.create({ url: "https://humatarayici.com/" });
        browser.tabs.create({ url: "https://opensoda.vercel.app" });
        browser.tabs.create({ url: "https://egehan.netlify.app" });
    });

 

  
 
});

document.addEventListener('DOMContentLoaded', () => {
    const settingsButton = document.getElementById('settingsButton');
    const settingsModal = document.getElementById('settingsModal');
    const closeModal = document.querySelector('.close');
    const saveSettingsButton = document.getElementById('saveSettings');
    const settingsTextarea = document.getElementById('settingsTextarea');

    // Ayarların açılması
    settingsButton.addEventListener('click', () => {
        settingsModal.style.display = 'block';
        showSettingsInTextarea(); // JSON verilerini textarea'da göster
    });

    // Ayarların kapanması
    closeModal.addEventListener('click', () => {
        settingsModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == settingsModal) {
            settingsModal.style.display = 'none';
        }
    });

    // Renklerin kaydedilmesi
    saveSettingsButton.addEventListener('click', () => {
        applySettingsFromTextarea();
        settingsModal.style.display = 'none';
    });

    // Renklerin yüklenmesi
    loadSettings();
    loadNotes();

    document.getElementById("addNoteButton").addEventListener('click', () => {
        console.log("biri bana tıkladı >_<")
        let noteContent = document.getElementById("noteContent").value;
    
        if (noteContent) {
            let notes = JSON.parse(localStorage.getItem("notes")) || [];
            notes.push({ content: noteContent });
            localStorage.setItem("notes", JSON.stringify(notes));
    
            document.getElementById("noteContent").value = ""; // Alanı temizle
            loadNotes();
        } else {
            alert("Lütfen notunuzu yazın.");
        }
    });
});

// LocalStorage'dan renkleri yükleyip uygulayan fonksiyon
function loadSettings() {
    const colorSettings = JSON.parse(localStorage.getItem('colorSettings')) || {};
    if (colorSettings) {
        applySettings(colorSettings);
    }
}

// JSON verilerini textarea'da gösteren fonksiyon
function showSettingsInTextarea() {
    const colorSettings = JSON.parse(localStorage.getItem('colorSettings')) || {};
    const jsonString = JSON.stringify(colorSettings, null, 2);
    const settingsTextarea = document.getElementById('settingsTextarea');
    settingsTextarea.value = jsonString;
}

// JSON verilerini textarea'dan okuyup uygulayan fonksiyon
function applySettingsFromTextarea() {
    const settingsTextarea = document.getElementById('settingsTextarea');
    try {
        const updatedSettings = JSON.parse(settingsTextarea.value);
        applySettings(updatedSettings);
        localStorage.setItem('colorSettings', JSON.stringify(updatedSettings));
    } catch (e) {
        console.error('JSON verileri geçersiz:', e);
    }
}

// Ayarları uygulayan fonksiyon
function applySettings(settings) {
    if (settings.bgColor) {
        document.body.style.backgroundColor = settings.bgColor;
    }
    if (settings.textColor) {
        document.body.style.color = settings.textColor;
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.color = settings.textColor;
        });
    }
    if (settings.buttonColor) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.backgroundColor = settings.buttonColor;
        });
    }
    if (settings.classColor) {
        const rows = document.querySelectorAll('.row');
        rows.forEach(row => {
            row.style.backgroundColor = settings.classColor;
        });
    }
}


/*
Yer imleri için bu fonskiyonlar kullanılacak
*/

function fetchBookmarks() {
    browser.bookmarks.getTree().then(bookmarkTreeNodes => {
        let bookmarksContainer = document.getElementById("bookmarksContainer");
        bookmarksContainer.innerHTML = "";  

        bookmarkTreeNodes.forEach(node => {
            displayBookmark(node, bookmarksContainer);
        });
    }).catch(err => {
        console.error("Yer imleri alınırken hata oluştu:", err);
    });
}


function displayBookmark(bookmark, container) {
    if (bookmark.url) {
        let row = document.createElement("div");
        row.classList.add("row");

        let img = document.createElement("img");
        img.classList.add("logo");
        img.src = "/images/logo.png"; // Yer imi için varsayılan logo
        img.alt = "Bookmark";

        let name = document.createElement("div");
        name.classList.add("name");

         
        const MAX_NAME_LENGTH = 30;  
        if (bookmark.title.length > MAX_NAME_LENGTH) {
            name.textContent = bookmark.title.substring(0, MAX_NAME_LENGTH) + '...';
        } else {
            name.textContent = bookmark.title;
        }

        row.appendChild(img);
        row.appendChild(name);
        row.addEventListener("click", () => {
            browser.tabs.create({ url: bookmark.url });
        });

        container.appendChild(row);
    }

    if (bookmark.children) {
        bookmark.children.forEach(child => displayBookmark(child, container));
    }
}


function addBookmark() {
    let title = document.getElementById("bookmarkTitle").value;
    let url = document.getElementById("bookmarkUrl").value;

    if (title && url) {
        browser.bookmarks.create({
            title: title,
            url: url
        }).then(fetchBookmarks).catch(err => {
            console.error("Yer imi eklenirken hata oluştu:", err);
        });
    } else {
        alert("Lütfen geçerli bir ad ve URL girin.");
    }
}

//------------------------------------------------------------------

function loadNotes() {
    let notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = ""; 

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note, index) => {
        let noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.textContent = note.content;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.addEventListener("click", () => deleteNote(index));

        noteElement.appendChild(deleteButton);
        notesContainer.appendChild(noteElement);
    });
}

function addNote() {
    console.log("biri bana tıkladı >_<")
    let noteContent = document.getElementById("noteContent").value;

    if (noteContent) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push({ content: noteContent });
        localStorage.setItem("notes", JSON.stringify(notes));

        document.getElementById("noteContent").value = ""; // Alanı temizle
        loadNotes();
    } else {
        alert("Lütfen notunuzu yazın.");
    }
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
 
