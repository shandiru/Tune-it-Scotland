'use client';
import React, { useEffect } from 'react';
import { FaHeart, FaTools, FaUserCheck, FaCogs } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false,  // ✅ repeat animations on scroll up/down
      mirror: true, // ✅ animate again when scrolling back up
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      className="relative bg-white dark:bg-neutral-900 py-24 overflow-hidden transition-colors duration-500"
      id="why-choose-us"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading Container with Background Text */}
        <div className="relative inline-block mb-12" data-aos="fade-down">
          {/* Background Text */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[60px] md:text-[140px] font-extrabold text-gray-100 dark:text-neutral-800 opacity-60 leading-none tracking-tight select-none pointer-events-none whitespace-nowrap">
            TUNE IT SCOTLAND
          </span>

          {/* Foreground Title */}
          <h2 className="relative text-3xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white z-10">
            Why Choose Us
          </h2>
        </div>

        {/* Description */}
        <div
          className="text-[#555] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-14"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="mb-6">
            At{' '}
            <span className="font-semibold text-[#2B2B2B] dark:text-white">
              Tune It Scotland
            </span>
            , we don’t just tune cars — we take pride in transforming how they
            drive, perform, and feel. Whether it’s a quick remap, in-depth
            diagnostics, or a full carbon clean, we treat every vehicle as if it’s
            our own. Our team is passionate about performance and genuinely cares
            about helping you get the most out of your car.
          </p>
          <p>
            From mobile callouts to in-house services at our unit, we make it easy
            and hassle-free to get expert tuning, servicing, and repairs. We
            believe in honesty, precision, and going above and beyond — every
            single time. No shortcuts. No guesswork. Just pure dedication to your
            vehicle’s performance and reliability.
          </p>
        </div>

        {/* Call to Action */}
        <div
          className="bg-[#004B93] hover:bg-[#00376C] dark:bg-[#005BBB] dark:hover:bg-[#004C96] text-white py-8 px-10 rounded-lg inline-block mb-20 shadow-lg transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h3 className="text-xl md:text-2xl font-bold">
            Book Your Free Vehicle Health Check
          </h3>
          <p className="text-sm md:text-base mt-3 text-blue-100 dark:text-blue-200 max-w-lg mx-auto leading-relaxed">
            We’ll assess your car’s performance, identify any hidden issues, and
            give you expert advice — free of charge. Our goal is to help you
            understand your car better and keep it running at its best.
          </p>
        </div>

        {/* Feature List */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div
            className="flex flex-col items-center text-center space-y-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaHeart className="text-[#004B93] text-4xl" />
            <h4 className="font-semibold text-lg text-[#2B2B2B] dark:text-white">
              Passion-Driven Service
            </h4>
          </div>

          <div
            className="flex flex-col items-center text-center space-y-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaTools className="text-[#004B93] text-4xl" />
            <h4 className="font-semibold text-lg text-[#2B2B2B] dark:text-white">
              Mobile or Workshop — Your Choice
            </h4>
          </div>

          <div
            className="flex flex-col items-center text-center space-y-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaUserCheck className="text-[#004B93] text-4xl" />
            <h4 className="font-semibold text-lg text-[#2B2B2B] dark:text-white">
              Customer-First Approach
            </h4>
          </div>

          <div
            className="flex flex-col items-center text-center space-y-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaCogs className="text-[#004B93] text-4xl" />
            <h4 className="font-semibold text-lg text-[#2B2B2B] dark:text-white">
              Expert Knowledge, Real Results
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
