// components/BookmarksWidget.jsx
import React, { useState, useEffect } from 'react';
import './BookmarksWidget.css'; // Stil dosyasını ekleyelim

const BookmarksWidget = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const bookmarkTreeNodes = await browser.bookmarks.getTree();
        const bookmarksList = [];
        const extractBookmarks = (nodes) => {
          nodes.forEach(node => {
            if (node.children) {
              extractBookmarks(node.children);
            } else {
              bookmarksList.push(node);
            }
          });
        };
        extractBookmarks(bookmarkTreeNodes);
        setBookmarks(bookmarksList);
      } catch (err) {
        console.error("Yer imleri alınırken hata oluştu:", err);
      }
    };

    fetchBookmarks();
  }, []);

  const getFaviconUrl = (url) => {
    try {
      const faviconUrl = new URL(url).origin + '/favicon.ico';
      return faviconUrl;
    } catch (error) {
      return './default-logo.png';
    }
  }

  return (
    <>
    <center>
    <h2>Yerimleri</h2>

    </center>
        <div className="widgets">
     
      <ul className="bookmarks-list">
        {bookmarks.map(bookmark => (
          <li key={bookmark.id} className="widget">
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="bookmark-link">
              <img src={getFaviconUrl(bookmark.url)} alt="E" className="bookmark-logo" />
              <span>{bookmark.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
    
  );
};

export default BookmarksWidget;