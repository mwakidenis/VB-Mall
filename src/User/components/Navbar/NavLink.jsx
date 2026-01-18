// NavLink.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-large flex items-center"
    style={{ fontSize: "20px" }}
  >
    {icon}
    {children}
  </Link>
);

export default NavLink;