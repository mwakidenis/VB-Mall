// MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";

const primaryLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/popularCategories/fashionAccessories", label: "Fashion" },
  { to: "/popularCategories/customizedGifts", label: "Gifts" },
  { to: "/popularCategories/furnitureDecor", label: "Furniture" },
  { to: "/popularCategories/printingStationery", label: "Stationary" },
  { to: "/popularCategories/bodyCare", label: "Body-Care" },
];

const MobileMenu = ({ isOpen, isLoggedIn, username, onClose, handleLogout }) => {
  const visibilityClasses = isOpen
    ? "opacity-100 translate-y-0 pointer-events-auto"
    : "opacity-0 -translate-y-4 pointer-events-none";

  const handleNavigate = () => {
    if (typeof onClose === "function") onClose();
  };

  const handleSignOut = () => {
    if (typeof handleLogout === "function") handleLogout();
    if (typeof onClose === "function") onClose();
  };

  return (
    <div
      className={`lg:hidden fixed inset-x-0 top-[100px] px-4 transition-all duration-300 ease-out ${visibilityClasses}`}
      aria-hidden={!isOpen}
    >
      <div className="bg-[#fffaf4]/95 backdrop-blur-xl border border-[#e5d3c1] rounded-3xl shadow-[0_12px_35px_rgba(0,0,0,0.14)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#f0dccc]">
          {isLoggedIn ? (
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Signed in as</span>
              <span className="text-xl font-semibold text-green-700 truncate">{username}</span>
            </div>
          ) : (
            <Link
              to="/auth"
              onClick={handleNavigate}
              className="flex items-center gap-3 text-green-800 font-semibold"
            >
              <lord-icon
                style={{ height: "30px", width: "30px" }}
                src="https://cdn.lordicon.com/hrjifpbq.json"
                trigger="hover"
                colors="primary:#15803D"
              ></lord-icon>
              Login
            </Link>
          )}
        </div>

        <div className="flex flex-col divide-y divide-[#f4e2cf]">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={handleNavigate}
              className="px-6 py-3 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="px-6 py-4 space-y-3 border-t border-[#f0dccc] bg-white/80">
          <Link
            to="/cart"
            onClick={handleNavigate}
            className="flex items-center gap-3 text-base font-semibold text-gray-800"
          >
            <lord-icon
              style={{ width: "30px", height: "30px", paddingTop: "2px", paddingLeft: "1px" }}
              src="https://cdn.lordicon.com/pbrgppbb.json"
              trigger="hover"
              colors="primary:#15803D"
            ></lord-icon>
            Cart
          </Link>

          <Link
            to="/wishlist"
            onClick={handleNavigate}
            className="flex items-center gap-3 text-base font-semibold text-gray-800"
          >
            <lord-icon
              style={{ width: "30px", height: "30px", paddingTop: "2px", paddingLeft: "1px" }}
              src="https://cdn.lordicon.com/ulnswmkk.json"
              trigger="hover"
              colors="primary:#15803D"
            ></lord-icon>
            Wishlist
          </Link>

          {isLoggedIn && (
            <button
              type="button"
              onClick={handleSignOut}
              className="w-full rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 py-3 text-white font-semibold shadow-md hover:shadow-lg transition-shadow"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
