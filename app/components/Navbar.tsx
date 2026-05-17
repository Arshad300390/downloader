"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-5">
        {/* Top Navbar */}
        <div className="flex items-center justify-between h-14">
          
          {/* Logo */}
          <div className="text-xl font-extrabold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent truncate">
            Arshad.dev
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-semibold text-gray-800 hover:text-purple-500 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block w-full px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-purple-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}