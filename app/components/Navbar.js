"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`text-white fixed w-full z-50 font-sans transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-12 md:h-16">
          {/* Logo with responsive sizing */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-6 h-7 sm:w-7 sm:h-8">
              <Image
                src="/logo.png"
                alt="Zenith Logo"
                fill
                sizes="(max-width: 768px) 24px, 28px"
                className="object-contain group-hover:scale-105 transition-transform duration-300 rounded-full"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-clip-text text-white bg-gradient-to-r from-amber-400 to-amber-600 font-montserrat tracking-wider group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
              𝓩𝓔𝓝𝓘𝓣𝓗
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["Home", "Menu", "About", "Reservations", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative group font-medium hover:text-amber-400 transition duration-300 text-sm lg:text-base"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Auth Buttons with responsive sizing */}
            <div className="flex space-x-3 lg:space-x-4 ml-6">
              <Link
                href="/login"
                className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-md hover:bg-amber-400 hover:bg-opacity-20 transition duration-300 font-medium border border-white border-opacity-30 text-sm lg:text-base"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-3 py-1.5 lg:px-4 lg:py-2 bg-amber-500 text-gray-900 rounded-md hover:bg-amber-400 transition duration-300 font-medium shadow-lg hover:shadow-amber-500/30 text-sm lg:text-base"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle - Improved touch target */}
          <button
            className="md:hidden focus:outline-none p-2 -mr-2 rounded-md hover:bg-white hover:bg-opacity-20 transition duration-200"
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

      {/* Mobile Navigation - Enhanced for better UX */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg animate-fadeIn">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {["Home", "Menu", "About", "Reservations", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="block px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-md font-medium transition duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Mobile Auth Buttons - Full width on small screens */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <Link
                href="/login"
                className="text-center px-4 py-2 border border-white border-opacity-30 hover:bg-white hover:bg-opacity-10 rounded-md font-medium transition duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-center px-4 py-2 bg-amber-500 hover:bg-amber-400 text-gray-900 rounded-md font-medium shadow-lg hover:shadow-amber-500/30 transition duration-200 text-sm"
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