import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <nav className="h-14 bg-white border-b flex items-center justify-between px-6 shadow-sm fixed top-0 w-full z-50">
      <Link to="/" className="text-xl font-bold text-purple-700">MemoryAI</Link>
      {!isAuthPage && (
        <div className="space-x-4 text-sm">
          <Link to="/login" className="text-gray-600 hover:text-purple-700">Login</Link>
          <Link to="/register" className="text-gray-600 hover:text-purple-700">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
