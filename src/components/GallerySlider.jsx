'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryItems = [
  {
    img: 'Audi A4 2.0tdi.jpeg',
    caption: 'Audi A4 2.0tdi',
  },
  {
    img: 'Audi RS4.jpeg',
    caption: 'Audi RS4',
  },
  {
    img: 'Audi SQ5 3.0tfsi.jpeg',
    caption: 'Audi SQ5 3.0tfsi',
  },
  {
    img: 'Audi SQ7 4.0tdi V8.jpeg',
    caption: 'Audi SQ7 4.0tdi V8',
  },
  {
    img: 'Audi SQ7.jpeg',
    caption: 'Audi SQ7',
  },
  {
    img: 'BMW X6 3.0d.jpeg',
    caption: 'BMW X6 3.0d',
  },
  {
    img: 'Honda Civic.jpeg',
    caption: 'Honda Civic',
  },
  {
    img: 'Vauxhall Astra 1.4t.jpeg',
    caption: 'Vauxhall Astra 1.4t',
  },
];

const GallerySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false, // ✅ trigger multiple times
      mirror: true, // ✅ animate on scroll up as well
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 py-24 overflow-hidden transition-colors duration-500"
      id="gallery"
    >
      {/* Decorative Glow Gradient */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#004B93]/20 dark:bg-[#005BBB]/10 rounded-full blur-[150px]"></div>
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#004B93]/15 dark:bg-[#005BBB]/10 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white tracking-tight">
            Our Work Gallery
          </h2>
          <p className="text-[#555] dark:text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
            See how we transform performance, precision, and power — one vehicle at a time.
          </p>
          <div className="mt-4 w-24 h-[3px] bg-[#004B93] dark:bg-[#005BBB] mx-auto rounded-full"></div>
        </div>

        {/* Swiper Container */}
        <div
          className="relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {galleryItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-200 dark:hover:shadow-[#005BBB]/30 transition-shadow duration-500"
                  data-aos="zoom-in-up"
                  data-aos-delay={idx * 150}
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.caption}
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 text-center mb-6">
                    <span className="inline-block bg-[#004B93]/90 dark:bg-[#005BBB]/90 backdrop-blur-sm text-white text-base font-semibold px-5 py-2 rounded-full shadow-lg">
                      {item.caption}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-3 md:px-4 z-20">
            <button className="swiper-prev bg-white/90 dark:bg-neutral-800 hover:bg-[#004B93] dark:hover:bg-[#005BBB] text-[#004B93] dark:text-white hover:text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:shadow-blue-400/50 border border-[#004B93] dark:border-[#005BBB]">
              <FaChevronLeft className="text-xl" />
            </button>
            <button className="swiper-next bg-white/90 dark:bg-neutral-800 hover:bg-[#004B93] dark:hover:bg-[#005BBB] text-[#004B93] dark:text-white hover:text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:shadow-blue-400/50 border border-[#004B93] dark:border-[#005BBB]">
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
