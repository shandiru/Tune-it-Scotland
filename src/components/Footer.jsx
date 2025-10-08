'use client';
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Tune-it <span className="text-[#004B93]">Scotland</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Scotland’s trusted vehicle tuning and performance experts. We deliver precision,
            reliability, and passion — helping you get the most out of your car.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href="#"
              className="p-2 bg-[#004B93] hover:bg-[#00376C] rounded-full text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-[#004B93] hover:bg-[#00376C] rounded-full text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-[#004B93] hover:bg-[#00376C] rounded-full text-white transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-[#004B93] inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-[#004B93] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#004B93] transition">About</a></li>
            <li><a href="#services" className="hover:text-[#004B93] transition">Services</a></li>
            <li><a href="#gallery" className="hover:text-[#004B93] transition">Gallery</a></li>
            <li><a href="#reviews" className="hover:text-[#004B93] transition">Reviews</a></li>
            <li><a href="#contact" className="hover:text-[#004B93] transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-[#004B93] inline-block pb-1">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Remapping & ECU Tuning</li>
            <li>Diagnostics & Servicing</li>
            <li>Carbon Cleaning</li>
            <li>OBD & Bench Tuning</li>
            <li>Performance Upgrades</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-[#004B93] inline-block pb-1">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#004B93] mt-1" />
              <span>
                Unit B8, 15 Carmyle Ave,<br />Glasgow G32 8HL, United Kingdom
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#004B93]" />
              <a
                href="tel:+447909445101"
                className="hover:text-[#004B93] transition"
              >
                +44 7909 445101
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#004B93]" />
              <a
                href="mailto:info@tuneitscotland.co.uk"
                className="hover:text-[#004B93] transition"
              >
                info@tuneitscotland.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{' '}
        <span className="text-white font-semibold">Tune-it Scotland</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
