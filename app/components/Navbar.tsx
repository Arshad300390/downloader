"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-2xl font-extrabold text-blue-600 tracking-tight">
          MySite
        </div>
        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
        {/* Nav Links */}
        <ul
          className={`flex flex-col sm:flex-row sm:items-center absolute sm:static left-0 w-full sm:w-auto bg-white sm:bg-transparent transition-all duration-300 ease-in ${
            open ? "top-16" : "top-[-400px]"
          }`}
        >
          <li className="mx-4 my-2 sm:my-0">
            <a
              href="#"
              className="block px-3 py-2 rounded hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </a>
          </li>
          <li className="mx-4 my-2 sm:my-0">
            <a
              href="#"
              className="block px-3 py-2 rounded hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition"
            >
              About
            </a>
          </li>
          <li className="mx-4 my-2 sm:my-0">
            <a
              href="#"
              className="block px-3 py-2 rounded hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition"
            >
              Projects
            </a>
          </li>
          <li className="mx-4 my-2 sm:my-0">
            <a
              href="#"
              className="block px-3 py-2 rounded hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}