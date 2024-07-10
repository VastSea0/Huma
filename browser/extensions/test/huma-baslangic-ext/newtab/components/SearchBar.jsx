import React from 'react';

const SearchBar = () => {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value;
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search with Google" onKeyDown={handleSearch} />
    </div>
  );
};

export default SearchBar;
