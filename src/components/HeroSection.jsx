'use client';
import React from 'react';

const Hero = () => {
  return (
    <main className="relative h-screen w-full flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Background (video or image overlay) */}
      <div className="absolute inset-0">
        {/* Example: if you have a video background, replace below img with <video> */}
        <img
          src="/hero-car.png"
          alt="Car detailing hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-6xl font-extrabold uppercase tracking-wide">
          Car Detailing, Shop & Repair
        </h1>
        <p className="text-2xl md:text-4xl font-bold text-gray-300 mt-3 tracking-wider">
          WordPress Theme
        </p>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-10 flex flex-col items-center space-y-2 z-10">
        <span className="text-xs uppercase font-semibold tracking-widest">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </main>
  );
};

export default Hero;
