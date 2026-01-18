import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";

const AdminNavbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      alert("Logout Successful.");
      navigate("/auth");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]); // Re-run effect when location changes

  return (
    <header
      className={`bg-white shadow-sm transition-all duration-300 ${
        isFixed ? "sticky top-0 left-0 right-0 z-50" : ""
      }`}
      style={{ position: isFixed ? "sticky" : "relative" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
         <Link to="/" ><img src={Logo} alt="Logo" className="h-[7vh]" /></Link>
          <nav className="hidden sm:block" >
            <ul className="flex space-x-10 text-gray-600">
                <Link to="/admin">Home</Link>
                <Link to="#">Contact Us</Link>
                <Link to="#">Help</Link>
                <Link to="#">Analytics</Link>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <span>Hello, {username}</span>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
