// import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="px-6 py-2 text-sm bg-gray-50 rounded-md">
      <ol className="flex text-gray-600">
        <li>
          <Link to="/" className="text-green-700 hover:underline">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">›</span>
              {isLast ? (
                <span className="text-gray-500 capitalize">{value}</span>
              ) : (
                <Link to={to} className="hover:underline capitalize">{value}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
