'use client';
import React from 'react';
import { FaCarSide, FaCogs, FaArrowRight } from 'react-icons/fa';

const AboutTuneItScotland = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Label */}
          <div className="flex items-center gap-2">
            <FaCarSide className="text-red-600 text-xl" />
            <span className="text-red-600 font-semibold uppercase tracking-wide text-sm">
              About Tune It Scotland
            </span>
          </div>

          {/* Headings */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Scotland’s Trusted Tuning & Performance Experts
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-xl">
            For decades, Tune It Scotland has been at the heart of the car scene — known for
            precision tuning, honest service, and a genuine passion for performance. We’ve built
            a strong reputation across Scotland by helping drivers unlock their car’s true potential.
          </p>

          {/* Experience & Professional Block */}
          <div className="flex items-start gap-4 mt-6">
            <div className="flex-shrink-0">
              <FaCogs className="text-red-600 text-3xl" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">
                Experience & Professional
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                With years of hands-on expertise and a love for all things automotive, our team
                delivers reliable results every time. From diagnostics to remaps, we combine
                skill, technology, and care to keep your vehicle running at its best.
              </p>
            </div>
          </div>

          {/* Get In Touch Button */}
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase px-6 py-3 rounded-md mt-6 transition-all duration-300">
            Get In Touch
            <FaArrowRight className="text-sm mt-[2px]" />
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
          {/* Main Image */}
          <div className="relative z-10">
            <img
              src="/tuneit-main.png"
              alt="Mechanic tuning car engine"
              className="rounded-lg shadow-xl w-[90%] md:w-[85%] object-cover"
            />
            {/* Red Corner Accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-600 -z-10 clip-triangle"></div>
          </div>

          {/* Overlapping Secondary Image */}
          <img
            src="/tuneit-main.png"
            alt="Car diagnostic tools in use"
            className="absolute -top-6 right-4 w-32 md:w-36 lg:w-40 rounded-md shadow-lg border-4 border-white hidden sm:block transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTuneItScotland;
