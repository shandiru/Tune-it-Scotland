'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo */}
        <a href="#" className="text-white font-bold text-2xl tracking-tight">
          <span className="text-white">Tune-it</span>
          <span className="text-red-600"> Scotland</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white font-semibold text-sm uppercase">
          <a href="#home" className="hover:text-red-500 transition">Home</a>
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#services" className="hover:text-red-500 transition">Services</a>
          <a href="#gallery" className="hover:text-red-500 transition">Gallery</a>
          <a href="#reviews" className="hover:text-red-500 transition">Reviews</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </nav>

        {/* Desktop CTA Button */}
        <a
          href="#book"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase px-5 py-2 rounded-sm transition"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur text-white text-center py-6 space-y-5 font-semibold uppercase tracking-wide transition-all duration-300">
          <a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-red-500">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-red-500">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-red-500">Services</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="block hover:text-red-500">Gallery</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="block hover:text-red-500">Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-red-500">Contact</a>
          <a
            href="#book"
            onClick={() => setIsOpen(false)}
            className="inline-block mt-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase px-5 py-2 rounded-sm transition"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
