import React from "react";
import searchIcon from "../../assets/search-icon@2x.svg";

const SearchBox = ({ query, onChange, onSearchClear }) => {

  return (
    <>
    <div className="search">
    <input
      type="text"
      name="query"
      placeholder="Search all news"
      value={query}
      onChange={e => onChange(e.currentTarget.value)}
    />
    <button onClick={onSearchClear}><img src={searchIcon} alt="search"/></button>
    </div>
    </>
  );
};

export default SearchBox;
