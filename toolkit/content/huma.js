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

function loadPage(pageId) {
    const pageData = jsonData[pageId];
    document.getElementById('pageName').textContent = pageData.pagename;
    document.getElementById('pageLogo').innerHTML = `<img src="${pageData.pageurl}" alt="Page Logo">`;
    document.getElementById('pageContent').innerHTML = pageData.htmldata;
}