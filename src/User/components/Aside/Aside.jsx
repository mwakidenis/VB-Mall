import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaSignOutAlt } from "react-icons/fa";

const iconStyles = { height: "20px", width: "20px" };
const lordIcons = {
  profile: "https://cdn.lordicon.com/hrjifpbq.json",
  orders: "https://cdn.lordicon.com/xljvqlng.json",
  cart: "https://cdn.lordicon.com/pbrgppbb.json",
  wishlist: "https://cdn.lordicon.com/ulnswmkk.json",
  notifications: "https://cdn.lordicon.com/lznlxwtc.json",
  help: "https://cdn.lordicon.com/ojnjgkun.json",
  contact: "https://cdn.lordicon.com/srsgifqc.json",
};
const NavLink = ({ to, icon, label, collapsed, isActive }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 p-2 rounded-md relative transition-all duration-300 ${
      isActive ? "bg-green-700" : "hover:bg-green-700"
    }`}>
    <lord-icon
      style={iconStyles}
      src={icon}
      trigger="hover"
      colors="primary:#ffffff"></lord-icon>
    {!collapsed && <span>{label}</span>}
  </Link>
);
const CartIcon = ({ collapsed }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const noOfItems = cartItems.reduce((a, b) => a + b.quantity, 0);
  return (
    <NavLink
      to="/dashboard-cart"
      icon={lordIcons.cart}
      label="Cart"
      collapsed={collapsed}
      isActive={window.location.pathname === "/dashboard-cart"}>
      {!collapsed && (
        <div className="absolute right-2 top-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
          {noOfItems}
        </div>
      )}
    </NavLink>
  );
};

const WishlistIcon = ({ collapsed }) => {
  const wishlistItems = useSelector((state) => state.wishlist.items || []);
  const noOfItem = wishlistItems.reduce((a, b) => a + (b.quantity ?? 1), 0);

  return (
    <NavLink
      to="/dashboard-wishlist"
      icon={lordIcons.wishlist}
      label="Wishlist"
      collapsed={collapsed}
      isActive={window.location.pathname === "/dashboard-wishlist"}>
      {!collapsed && (
        <div className="absolute right-2 top-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
          {noOfItem}
        </div>
      )}
    </NavLink>
  );
};

const Aside = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");

    if (name) {
      localStorage.setItem("username", name);
    }
  }, [location]);

  const username = localStorage.getItem("username") || "Admin";

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

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={`bg-[#2d4031] text-white flex flex-col fixed top-0 mt-1 ${
        collapsed ? "w-20" : "w-64"
      } transition-width duration-300`}
      style={{ position: "sticky" }}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div className="h-10 bg-green-700 flex items-center justify-center p-8 rounded-lg gap-2">
            <lord-icon
              style={{ height: "40px", width: "40px" }}
              src={lordIcons.profile}
              trigger="hover"
              colors="primary:#ffffff"></lord-icon>
            <span className="text-white">{username}</span>
          </div>
        )}
        <button
          className="bg-green-700 p-2 rounded-full transition-transform duration-300 hover:bg-green-600"
          onClick={toggleCollapse}>
          <GoArrowRight
            className={`transform ${
              collapsed ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          />
        </button>
      </div>
      <nav className="flex-1 px-4 py-8 space-y-2">
        <NavLink
          to="/profile"
          icon={lordIcons.profile}
          label="My Profile"
          collapsed={collapsed}
          isActive={window.location.pathname === "/profile"}
        />

        <NavLink
          to="/dashboard-order"
          icon={lordIcons.orders}
          label="Orders"
          collapsed={collapsed}
          isActive={window.location.pathname === "/dashboard-order"}
        />

        <CartIcon collapsed={collapsed} />

        <WishlistIcon collapsed={collapsed} />

        <NavLink
          to="/dashboard-notifications"
          icon={lordIcons.notifications}
          label="Notifications"
          collapsed={collapsed}
          isActive={window.location.pathname === "/dashboard-notifications"}>
          {!collapsed && (
            <span className="absolute right-2 top-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
              2
            </span>
          )}
        </NavLink>

        <NavLink
          to="/Help"
          icon={lordIcons.help}
          label="Help"
          collapsed={collapsed}
          isActive={window.location.pathname === "/Help"}
        />

        <NavLink
          to="/contact"
          icon={lordIcons.contact}
          label="Contact Us"
          collapsed={collapsed}
          isActive={window.location.pathname === "/contact"}
        />

        <div className="flex items-center space-x-2 p-2 relative justify-center mt-auto">
          <button
            type="button"
            onClick={handleLogout}
            className="bg-green-700 flex items-center justify-center p-2 rounded-md transition-all duration-300 hover:bg-green-600"
            style={{
              padding: collapsed ? "12px" : "12px 30px",
              borderRadius: "8px",
              border: "1px solid #98bf8cff",
            }}>
            {collapsed ? <FaSignOutAlt className="text-white" /> : "Logout"}
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
