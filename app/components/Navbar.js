"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="text-white fixed w-full z-50 font-sans bg-transparent">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Improved with better visual hierarchy */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-7 h-8">
              <Image
                src="/logo.png" // Make sure this is a high-quality transparent PNG
                alt="Zenith Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300 rounded-full"
              />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-white bg-gradient-to-r from-amber-400 to-amber-600 font-montserrat tracking-wider group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
              𝓩𝓔𝓝𝓘𝓣𝓗
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {["Home", "Menu", "About", "Reservations", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative group font-medium hover:text-amber-400 transition duration-300"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Auth Buttons */}
            <div className="flex space-x-4 ml-6">
              <Link
                href="/login"
                className="px-4 py-2 rounded-md hover:bg-amber-400 hover:bg-opacity-20 transition duration-300 font-medium border border-white border-opacity-30"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-amber-500 text-gray-900 rounded-md hover:bg-amber-400 transition duration-300 font-medium shadow-lg hover:shadow-amber-500/30"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {["Home", "Menu", "About", "Reservations", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="block px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-md font-medium transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="flex space-x-2 pt-2">
              <Link
                href="/login"
                className="flex-1 text-center px-4 py-2 border border-white border-opacity-30 hover:bg-white hover:bg-opacity-10 rounded-md font-medium transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="flex-1 text-center px-4 py-2 bg-amber-500 hover:bg-amber-400 text-gray-900 rounded-md font-medium shadow-lg hover:shadow-amber-500/30 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;