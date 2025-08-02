import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-green-500 text-3xl">
            <i className="fas fa-bolt"></i>
          </div>
          <Link to="/" className="text-2xl font-bold text-gray-800 font-playfair">
            Wattigoenergies
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium font-playfair">
          <Link to="/" className="relative group hover:text-green-500">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/about" className="relative group hover:text-green-500">
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/services" className="relative group hover:text-green-500">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/project" className="relative group hover:text-green-500">
            Collections
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/contact" className="relative group hover:text-green-500">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-4">
          {/* Register Button */}
          <Link
            to="/register"
            className="text-sm font-semibold text-gray-800 border border-gray-400 rounded-full px-4 py-1 hover:bg-gray-100"
          >
            Register
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="text-sm font-semibold text-white bg-gray-800 px-4 py-1 rounded-full hover:bg-gray-700"
          >
            Login
          </Link>

          {/* Vendor Button */}
          <Link
            to="/vendor"
            className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-5 rounded-full animate-slide-in-right"
          >
            Are you Vendor?
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
