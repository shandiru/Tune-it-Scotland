'use client';
import React from 'react';
import { FaHeart, FaTools, FaUserCheck, FaCogs } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading Container with Background Text */}
        <div className="relative inline-block mb-12">
          {/* Background Text */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[60px] md:text-[140px] font-extrabold text-gray-100 opacity-60 leading-none tracking-tight select-none pointer-events-none whitespace-nowrap">
            TUNE IT SCOTLAND
          </span>

          {/* Foreground Title */}
          <h2 className="relative text-3xl md:text-5xl font-extrabold text-gray-900 z-10">
            Why Choose Us
          </h2>
        </div>

        {/* Description */}
        <div className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-14">
          <p className="mb-6">
            At <span className="font-semibold text-gray-900">Tune It Scotland</span>, we don’t just tune cars —
            we take pride in transforming how they drive, perform, and feel. Whether it’s a quick remap,
            in-depth diagnostics, or a full carbon clean, we treat every vehicle as if it’s our own.
            Our team is passionate about performance and genuinely cares about helping you get the most out of your car.
          </p>
          <p>
            From mobile callouts to in-house services at our unit, we make it easy and hassle-free to get
            expert tuning, servicing, and repairs. We believe in honesty, precision, and going above and beyond —
            every single time. No shortcuts. No guesswork. Just pure dedication to your vehicle’s performance
            and reliability.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-red-600 text-white py-8 px-10 rounded-lg inline-block mb-20 shadow-lg hover:bg-red-700 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold">
            Book Your Free Vehicle Health Check
          </h3>
          <p className="text-sm md:text-base mt-3 text-red-100 max-w-lg mx-auto leading-relaxed">
            We’ll assess your car’s performance, identify any hidden issues, and give you expert advice — free of charge.
            Our goal is to help you understand your car better and keep it running at its best.
          </p>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          <div className="flex flex-col items-center text-center space-y-3">
            <FaHeart className="text-red-600 text-4xl" />
            <h4 className="font-semibold text-lg text-gray-900">
              Passion-Driven Service
            </h4>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <FaTools className="text-red-600 text-4xl" />
            <h4 className="font-semibold text-lg text-gray-900">
              Mobile or Workshop — Your Choice
            </h4>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <FaUserCheck className="text-red-600 text-4xl" />
            <h4 className="font-semibold text-lg text-gray-900">
              Customer-First Approach
            </h4>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <FaCogs className="text-red-600 text-4xl" />
            <h4 className="font-semibold text-lg text-gray-900">
              Expert Knowledge, Real Results
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
