import React from "react";
import { Outlet } from "react-router-dom";
// import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
// import AdminFooter from './components/AdminFooter';

const AdminLayout = () => {
  return (
    <div>
      {/* <AdminNavbar /> */}
      <Outlet />
      {/* <AdminFooter /> */}
    </div>
  );
};

export default AdminLayout;
