import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import NavLogo from "./NavLogo";
import SearchBar from "../SearchBar/SearchBar";
import CartIcon from "./CartIcon";
import AuthButton from "./AuthButton";
import MobileMenu from "./MobileMenu";
// import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import WishlistIcon from "./WishlistIcon";

const UserNavbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const location = useLocation();

  const username = localStorage.getItem("username");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdminT = localStorage.getItem("isAdmin") === "true";

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);
  const handleSearch = (e) => setSearchTerm(e.target.value);

  const searchableItems = [
    { name: "Fashion & Accessories", link: "/popularCategories/fashionAccessories" },
    { name: "Printing & Stationery", link: "/popularCategories/printingStationery" },
    { name: "Food & Beverages", link: "/popularCategories/foodBeverages" },
    { name: "Beauty & Wellness", link: "/popularCategories/beautyWellness" },
    { name: "Furniture & Decor", link: "/popularCategories/furnitureDecor" },
    { name: "Body Care", link: "/popularCategories/bodyCare" },
    { name: "Health Supplements", link: "/popularCategories/healthSupplements" },
    { name: "Customized Gifts", link: "/popularCategories/customizedGifts" },
    { name: "Handmade Soaps", link: "/latestInMarket/handmadeSoaps" },
    { name: "Art Supplies", link: "/latestInMarket/artSupplies" },
    { name: "Ceramic Dinnerware", link: "/latestInMarket/ceramicDinnerware" },
    { name: "Bamboo Products", link: "/latestInMarket/bambooProducts" },
    { name: "Storage Baskets", link: "/latestInMarket/storageBaskets" },
    { name: "Organic Soaps", link: "/latestInMarket/organicSoaps" },
    { name: "Organic Tea", link: "/latestInMarket/organicTea" },
    { name: "Natural Cosmetics", link: "/latestInMarket/naturalCosmetics" },
  ];

  useEffect(() => {
    if (searchTerm) {
      const results = searchableItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("isLoggedIn", false);
        localStorage.removeItem("username");
        navigate("/auth");

        Swal.fire({
          title: "Logout successfully!",
          text: "Visit Again to VigyBag!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        });
      }
    });
  };

  const handleDropdownToggle = () => setShowDropdown((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/popularCategories/fashionAccessories", text: "Fashion" },
    { to: "/popularCategories/customizedGifts", text: "Gifts" },
    { to: "/popularCategories/furnitureDecor", text: "Furniture" },
    { to: "/popularCategories/printingStationery", text: "Stationary" },
    { to: "/popularCategories/bodyCare", text: "Body-Care" },
    //  { to: "/meet-the-makers", text: "Meet the Makers" },
  ];

  const handleResultClick = (link) => {
    navigate(link);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <nav className="bg-[#f4e4d7]/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.18),0_6px_25px_rgba(0,0,0,0.12),0_2px_12px_rgba(0,0,0,0.08)] fixed top-0 left-0 w-full z-50 border-b-2 border-[#e5d3c1]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          
          {/* Left: Logo Section with better alignment */}
          <div className="flex items-center">
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <NavLogo />
            </div>
          </div>

          {/* Center: Desktop Navigation Links - Perfectly Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="relative text-gray-700 font-bold text-[19px] hover:text-green-700 px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-md group">
                  <span className="relative z-10">{link.text}</span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Actions Section - Aligned to far right */}
          <div className="flex items-center gap-6">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:block">
              <SearchBar
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                searchResults={searchResults}
                onResultClick={handleResultClick}
              />
            </div>

            {/* Action Icons - Wishlist & Cart - Far Right */}
            <div className="flex items-center gap-4">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <WishlistIcon />
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <CartIcon />
              </div>
            </div>

            {/* User Profile / Login Button - Far Right */}
            <div className="hidden md:block">
              {isLoggedIn ? (
                <div className="relative flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                  <lord-icon
                    onClick={handleDropdownToggle}
                    className="cursor-pointer hover:scale-110 transition-all duration-300"
                    style={{
                      height: "36px",
                      width: "36px",
                    }}
                    src="https://cdn.lordicon.com/hrjifpbq.json"
                    trigger="hover"
                    colors="primary:#15803D"></lord-icon>
                  <span className="text-green-800 font-bold text-[15px]">
                    {username}
                  </span>
                      {showDropdown && (
                        <div
                          ref={dropdownRef}
                          className="absolute right-0 top-12 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] py-2 border border-gray-100">
                          {isAdminT && (
                            <Link
                              to="/admin"
                              className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-all duration-200">
                              Admin Dashboard
                            </Link>
                          )}
                          <Link
                            to="/dashboard"
                            className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-all duration-200">
                            Dashboard
                          </Link>

                           <Link
      to="/meet-the-makers"
      className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-all duration-200"
    >
      Meet the Makers
    </Link>
                          <button
                            onClick={handleLogout}
                            className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium w-full text-left transition-all duration-200">
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <AuthButton isLoggedIn={isLoggedIn} />
                  )}
            </div>
            
            {/* Mobile Menu Button - Better styling */}
            <div className="flex lg:hidden ml-3">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-green-700 hover:text-green-800 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-sm">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for outside click to close - Enhanced */}
      {isOpen && (
        <div
          onClick={closeNavbar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
        />
      )}

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleDropdown={handleDropdownToggle}
        openDropdown={showDropdown}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        username={username}
        onClose={closeNavbar}
      />
    </nav>
  );
};

export default UserNavbar;
