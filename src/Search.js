import React from 'react';

const Search = ({ onSearch, value }) => (
  <div>
    <label htmlFor="searchInput">Search: </label>
    <input value={value} onChange={onSearch} id="searchInput" type="text" />
  </div>
);
export default Search;
