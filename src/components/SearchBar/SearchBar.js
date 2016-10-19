import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery, searchDb }) => 
  <div className="ipof__search-bar">
    <form name="searchForm">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <button
        type='submit'
        className="ipof__button"
        onClick={searchDb}>
        Search
      </button>
    </form>
  </div>;

export default SearchBar;