import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, handleSearch }) => (
  <div className="flex items-center rounded-full border-green-800 border-2 bg-gray-200 px-4 py-2 w-full mb-4">
    <input
      type="text"
      placeholder="Search"
      className="bg-transparent outline-none w-full text-green-700"
      value={searchTerm}
      onChange={handleSearch}
    />
    <FaSearch className="text-green-800" />
  </div>
);

export default SearchBar;
