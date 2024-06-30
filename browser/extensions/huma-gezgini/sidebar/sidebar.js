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
        browser.tabs.create({ url: "http://egehan.pythonanywhere.com/" });
    });
    document.getElementById("verasis").addEventListener("click", () => {
        browser.tabs.create({ url: "https://vastseasaver.web.app/" });
    });
    document.getElementById("vastseablog").addEventListener("click", () => {
        browser.tabs.create({ url: "https://vastseablog.com/" });
    });
    document.getElementById("openSoda").addEventListener("click", () => {
        browser.tabs.create({ url: "https://opensoda.vercel.app" });
    });
    document.getElementById("egehan").addEventListener("click", () => {
        browser.tabs.create({ url: "https://egehan.netlify.app" });
    });
    document.getElementById("all").addEventListener("click", () => {
        browser.tabs.create({ url: "https://humadosya.netlify.app/" });
        browser.tabs.create({ url: "http://egehan.pythonanywhere.com/" });
        browser.tabs.create({ url: "https://vastseasaver.web.app/" });
        browser.tabs.create({ url: "https://vastseablog.com/" });
        browser.tabs.create({ url: "https://opensoda.vercel.app" });
        browser.tabs.create({ url: "https://egehan.netlify.app" });
    });

    loadNotes();

    document.getElementById("addNoteButton").addEventListener("click", addNote);
    
      const settingsButton = document.getElementById('settingsButton');
    const settingsModal = document.getElementById('settingsModal');
    const closeModal = document.querySelector('.close');
    const saveSettingsButton = document.getElementById('saveSettings');

    // Ayarların açılması
    settingsButton.addEventListener('click', () => {
        settingsModal.style.display = 'block';
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
        const bgColor = document.getElementById('bgColor').value;
        const textColor = document.getElementById('textColor').value;
        const buttonColor = document.getElementById('buttonColor').value;
        const classColor = document.getElementById('classColor').value;

        // Arka plan rengi
        document.body.style.backgroundColor = bgColor;

        // Yazı rengi
        document.body.style.color = textColor;

        // Buton rengi
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.backgroundColor = buttonColor;
            button.style.color = textColor; // Buton yazı rengi de ayarlansın
        });

        // Belirli class rengi
        const rows = document.querySelectorAll('.row');
        rows.forEach(row => {
            row.style.backgroundColor = classColor;
        });

        // Renklerin localStorage'a kaydedilmesi
        localStorage.setItem('bgColor', bgColor);
        localStorage.setItem('textColor', textColor);
        localStorage.setItem('buttonColor', buttonColor);
        localStorage.setItem('classColor', classColor);

        // Ayarların kapatılması
        settingsModal.style.display = 'none';
    });

    // Renklerin yüklenmesi
    loadSettings();
});

// LocalStorage'dan renkleri yükleyip uygulayan fonksiyon
function loadSettings() {
    const bgColor = localStorage.getItem('bgColor');
    const textColor = localStorage.getItem('textColor');
    const buttonColor = localStorage.getItem('buttonColor');
    const classColor = localStorage.getItem('classColor');

    if (bgColor) {
        document.body.style.backgroundColor = bgColor;
        document.getElementById('bgColor').value = bgColor;
    }

    if (textColor) {
        document.body.style.color = textColor;
        document.getElementById('textColor').value = textColor;

        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.color = textColor;
        });
    }

    if (buttonColor) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.backgroundColor = buttonColor;
        });
        document.getElementById('buttonColor').value = buttonColor;
    }

    if (classColor) {
        const rows = document.querySelectorAll('.row');
        rows.forEach(row => {
            row.style.backgroundColor = classColor;
        });
        document.getElementById('classColor').value = classColor;
    }
}


function fetchBookmarks() {
    browser.bookmarks.getTree().then(bookmarkTreeNodes => {
        let bookmarksContainer = document.getElementById("bookmarksContainer");
        bookmarksContainer.innerHTML = ""; // Mevcut içeriği temizleyelim

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
        name.textContent = bookmark.title;

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

function loadNotes() {
    let notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = ""; // Mevcut içeriği temizleyelim

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
 
