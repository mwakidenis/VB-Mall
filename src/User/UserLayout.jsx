
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserNavbar from "./components/Navbar/UserNavbar";
import AdminNavbar from "../Admin/components/AdminNavbar/AdminNavbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/gototop";
import ScrollProgressBar from "./components/progressbar/ScrollProgressBar";
import FeedbackButton from "./components/FeedbackForm/FeedBtn";

const UserLayout = () => {
  const location = useLocation();

  // Determine which navbar to show based on the current route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Show AdminNavbar only for /admin routes */}
      {isAdminRoute ? <AdminNavbar /> : <UserNavbar />}

      {/* Scroll Progress bar */}
      <ScrollProgressBar />

      {/* Main Outlet (page content) */}
      <Outlet />

      {/* Common Footer */}
      <Footer />

      {/* Back to top button */}
      <GoToTop />

      {/* Show Feedback Button only for non-admin routes */}
      {!isAdminRoute && <FeedbackButton />}
    </>
  );
};

export default UserLayout;
