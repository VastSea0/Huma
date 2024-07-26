document.addEventListener("DOMContentLoaded", () => {
    if (typeof browser !== "undefined" && browser.bookmarks) {
        fetchBookmarks();
    } else {
        console.error("Tarayıcı 'bookmarks' API'sini desteklemiyor veya gerekli izinler eksik.");
    }

    document.getElementById("addBookmarkButton").addEventListener("click", addBookmark);
});

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
        name.textContent = bookmark.title;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.addEventListener("click", () => deleteBookmark(bookmark.id));

        row.appendChild(img);
        row.appendChild(name);
        row.appendChild(deleteButton);
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
        }).then(() => {
            document.getElementById("bookmarkTitle").value = "";
            document.getElementById("bookmarkUrl").value = "";
            fetchBookmarks();
        }).catch(err => {
            console.error("Yer imi eklenirken hata oluştu:", err);
        });
    } else {
        alert("Lütfen geçerli bir ad ve URL girin.");
    }
}

function deleteBookmark(id) {
    browser.bookmarks.remove(id).then(() => {
        fetchBookmarks();
    }).catch(err => {
        console.error("Yer imi silinirken hata oluştu:", err);
    });
}
