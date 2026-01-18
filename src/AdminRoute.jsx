import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const AdminRoute = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const { isAdmin } = useContext(AuthContext);

  // fallback to localStorage in case context isn't updated yet
  const isAdminFromLS = localStorage.getItem("isAdmin") === "true";
  const effectiveIsAdmin = isAdmin || isAdminFromLS;

  if (!isLoggedIn) return <Navigate to="/auth" replace />;
  if (!effectiveIsAdmin) return <Navigate to="/admin/login" replace />;

  return <Outlet />;
};

export default AdminRoute;
