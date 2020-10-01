import React from 'react';

const Filter = ({getSearch, updateSearch, search}) => (
  <form
    className="search"
    onSubmit={event => getSearch(event)}
  >
    <input
      className="search-bar"
      type="text"
      placeholder="Search..."
      value={search}
      onChange={event => updateSearch(event)}
    />
    <input className="search-button" type="submit" />
  </form>
);

export default Filter;
