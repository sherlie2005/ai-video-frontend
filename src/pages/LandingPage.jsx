import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 pt-14">
        <div className="text-center p-6 max-w-xl">
          <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Restructure Your Memories</h1>
          <p className="text-gray-700 text-lg mb-6">
            Describe a memory and let AI transform it into a beautiful 5-second animation.
          </p>
          <div className="space-x-4">
            <Link to="/login" className="px-6 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition">Login</Link>
            <Link to="/register" className="px-6 py-2 bg-white border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
