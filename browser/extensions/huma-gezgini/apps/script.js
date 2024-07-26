 
document.addEventListener("DOMContentLoaded", () => {
    loadNotesPreview();
    loadBookmarksPreview();
    document.getElementById("todo-btn").addEventListener("click", () => {
        browser.tabs.create({ url: "./todo/index.html" });
    });

    document.getElementById("bookmarks-btn").addEventListener("click", () => {
        browser.tabs.create({ url: "./bookmarks/index.html" });
    });

    document.getElementById("calculator-btn").addEventListener("click", () => {
        browser.tabs.create({ url: "./calculator/index.html" });
    });
    document.getElementById("addNoteButton").addEventListener("click", addNote);
    document.getElementById("addBookmarkButton").addEventListener("click", addBookmark);

    const contentList = document.getElementById('contentList');
  
    chrome.storage.local.get({ savedPages: [] }, (result) => {
      const savedPages = result.savedPages;
  
      savedPages.forEach(page => {
        const div = document.createElement('div');
        div.className = 'content-item';
        div.textContent = page.title;
        div.dataset.id = page.id;
  
        div.addEventListener('click', () => {
          chrome.tabs.create({ url: chrome.runtime.getURL('/apps/content.html') }, (tab) => {
            chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
              if (tabId === tab.id && changeInfo.status === 'complete') {
                chrome.tabs.onUpdated.removeListener(listener);
                chrome.tabs.sendMessage(tab.id, { action: 'loadContent', content: page });
              }
            });
          });
        });
  
        contentList.appendChild(div);
      });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contentList = document.getElementById('contentList');
  
    chrome.storage.local.get({ savedPages: [] }, (result) => {
      const savedPages = result.savedPages;
  
      savedPages.forEach(page => {
        const div = document.createElement('div');
        div.className = 'content-item';
        div.textContent = page.title;
        div.dataset.id = page.id;
  
        div.addEventListener('click', () => {
          chrome.tabs.create({ url: chrome.runtime.getURL('/apps/content.html') }, (tab) => {
            chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
              if (tabId === tab.id && changeInfo.status === 'complete') {
                chrome.tabs.onUpdated.removeListener(listener);
                chrome.tabs.sendMessage(tab.id, { action: 'loadContent', content: page });
              }
            });
          });
        });
  
        contentList.appendChild(div);
      });
    });
  });
  
// Yapılacaklar Listesi Kesiti
function loadNotesPreview() {
    let notesPreview = document.getElementById("todo-preview");
    notesPreview.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.slice(0, 3).forEach(note => { // İlk 3 notu göster
        let noteElement = document.createElement("div");
        noteElement.classList.add("note-preview");
        noteElement.textContent = note.content;
        notesPreview.appendChild(noteElement);
    });

    if (notes.length > 3) {
        let moreElement = document.createElement("div");
        moreElement.classList.add("more-notes");
        moreElement.textContent = "Daha Fazla...";
        notesPreview.appendChild(moreElement);
    }
}

// Yer İmleri Kesiti
function loadBookmarksPreview() {
    let bookmarksPreview = document.getElementById("bookmarks-preview");
    bookmarksPreview.innerHTML = "";

    if (typeof browser !== "undefined" && browser.bookmarks) {
        browser.bookmarks.getTree().then(bookmarkTreeNodes => {
            let bookmarks = [];
            bookmarkTreeNodes.forEach(node => gatherBookmarks(node, bookmarks));

            bookmarks.slice(0, 3).forEach(bookmark => { // İlk 3 yer imini göster
                let bookmarkElement = document.createElement("div");
                bookmarkElement.classList.add("bookmark-preview");
                bookmarkElement.textContent = bookmark.title;
                bookmarksPreview.appendChild(bookmarkElement);
            });

            if (bookmarks.length > 3) {
                let moreElement = document.createElement("div");
                moreElement.classList.add("more-bookmarks");
                moreElement.textContent = "Daha Fazla...";
                bookmarksPreview.appendChild(moreElement);
            }
        }).catch(err => {
            console.error("Yer imleri alınırken hata oluştu:", err);
        });
    } else {
        console.error("Tarayıcı 'bookmarks' API'sini desteklemiyor veya gerekli izinler eksik.");
    }
}

function gatherBookmarks(bookmark, bookmarks) {
    if (bookmark.url) {
        bookmarks.push(bookmark);
    }

    if (bookmark.children) {
        bookmark.children.forEach(child => gatherBookmarks(child, bookmarks));
    }
}

function addNote() {
    let noteContent = document.getElementById("noteContent").value;

    if (noteContent) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push({ content: noteContent });
        localStorage.setItem("notes", JSON.stringify(notes));

        document.getElementById("noteContent").value = ""; // Alanı temizle
        loadNotesPreview(); // Kesiti güncelle
    } else {
        alert("Lütfen notunuzu yazın.");
    }
}

function addBookmark() {
    let title = document.getElementById("bookmarkTitle").value;
    let url = document.getElementById("bookmarkUrl").value;

    if (title && url) {
        browser.bookmarks.create({
            title: title,
            url: url
        }).then(() => {
            loadBookmarksPreview(); // Kesiti güncelle
        }).catch(err => {
            console.error("Yer imi eklenirken hata oluştu:", err);
        });
    } else {
        alert("Lütfen geçerli bir ad ve URL girin.");
    }
}
 