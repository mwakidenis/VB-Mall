// ProductsDropdown.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => (
  <div
    className="relative group"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
    <button
      type="button"
      className="text-green-800 hover:text-green-600 mr-8 px-3 py-2 rounded-md text-sm font-semibold flex items-center focus:outline-none">
      Sort by
      <FaChevronDown className="ml-1" />
    </button>
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
      style={{ zIndex: "20" }}>
      <div className="py-1">
        <Link
          to="/popularCategories/fashionAccessories"
          className="text-green-800 hover:text-green-500 block px-4 py-2 text-sm">
          New products
        </Link>
        <Link
          to="/popularCategories/fashionAccessories"
          className="text-green-800 hover:text-green-500 block px-4 py-2 text-sm">
          Old products
        </Link>
      </div>
    </div>
  </div>
);

export default Dropdown;
