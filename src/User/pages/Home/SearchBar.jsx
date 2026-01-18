import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, handleSearch, suggestions, handleSuggestionClick }) => (
  <div className="relative flex items-center rounded-full border-green-800 border-2 bg-gray-200 px-4 py-2 w-[90%] ml-6 mt-20">
    <input
      type="text"
      placeholder="Search for products"
      className="bg-transparent outline-none w-full text-green-700"
      value={searchTerm}
      onChange={handleSearch}
    />
    <FaSearch className="text-green-800" />
    {suggestions.length > 0 && (
      <div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-2 rounded-md shadow-lg">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            {suggestion.name}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default SearchBar;
