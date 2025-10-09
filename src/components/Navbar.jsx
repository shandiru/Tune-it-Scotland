'use client';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ThemeToggle from '../components/ThemeToggle'; // ✅ import your toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[#2B2B2B]/90 backdrop-blur-md shadow-md'
          : 'bg-gradient-to-b from-[#2B2B2B]/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="logo-removebg-preview.png"
            alt="Tune-It Scotland Logo"
            className="w-auto h-12 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm uppercase tracking-wide text-white dark:text-gray-200">
          <a href="#home" className="hover:text-[#004B93] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#004B93] transition">
            About
          </a>
          <a href="#services" className="hover:text-[#004B93] transition">
            Services
          </a>
          <a href="#gallery" className="hover:text-[#004B93] transition">
            Gallery
          </a>
          <a href="#reviews" className="hover:text-[#004B93] transition">
            Reviews
          </a>
          <a href="#contact" className="hover:text-[#004B93] transition">
            Contact
          </a>
        </nav>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* ✅ Desktop WhatsApp Button */}
          <a
            href="https://wa.me/447909445101"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm uppercase px-5 py-2 rounded-sm transition shadow-md hover:shadow-xl"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white dark:text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#2B2B2B]/95 dark:bg-neutral-900 text-white dark:text-gray-200 text-center py-6 space-y-5 font-semibold uppercase tracking-wide transition-all duration-300">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#004B93]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#004B93]"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#004B93]"
          >
            Services
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#004B93]"
          >
            Gallery
          </a>
          <a
            href="#reviews"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#004B93]"
          >
            Reviews
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#004B93]"
          >
            Contact
          </a>

          {/* ✅ Mobile WhatsApp Button */}
          <a
            href="https://wa.me/447909445101"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm uppercase px-5 py-2 rounded-sm transition shadow-md hover:shadow-xl"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
