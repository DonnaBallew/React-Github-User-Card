import React from "react";
import axios from "axios";

const Search = (props) => {
  console.log(props);
  return (
    <div className="search">
      <input type="text" placeholder="Enter username" />
      <button>Search GitHub</button>
    </div>
  );
};

export default Search;
