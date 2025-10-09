'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/pagination';

// ✅ Sample testimonial data (replace with real customer reviews)
const testimonials = [
  {
    name: 'James McLeod',
    role: 'Remap Client',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      "Absolutely brilliant service. My car feels completely transformed — smoother, faster, and more responsive. Highly recommend Tune-it Scotland!",
  },
  {
    name: 'Laura Hamilton',
    role: 'Carbon Cleaning Customer',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    review:
      "Friendly team, honest advice, and real results. The difference after my carbon clean was incredible. I’ll definitely be back!",
  },
  {
    name: 'Connor Stewart',
    role: 'Performance Upgrade Client',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    review:
      "Professional and passionate about what they do. My ECU remap was done quickly, and the power gains were amazing!",
  },
  {
    name: 'Rachel Gray',
    role: 'Diagnostics Customer',
    image: 'https://randomuser.me/api/portraits/women/62.jpg',
    review:
      "They took the time to explain everything clearly. It’s rare to find such honest, expert service — thank you Tune-it Scotland!",
  },
  {
    name: 'Ewan MacDonald',
    role: 'Stage 1 Tuning Client',
    image: 'https://randomuser.me/api/portraits/men/90.jpg',
    review:
      "Stage 1 tune exceeded my expectations. The car’s throttle response and torque are perfect now. Highly recommended!",
  },
];

const ReviewsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false, // ✅ allows animation to run again on scroll up/down
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      className="relative bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950 py-20 overflow-hidden transition-colors duration-500"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Heading */}
        <div className="mb-14" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-[#555] dark:text-gray-300 mt-3 text-lg">
            Trusted by performance enthusiasts across Scotland.
          </p>
          <div className="mt-4 w-24 h-[3px] bg-[#004B93] dark:bg-[#005BBB] mx-auto rounded-full"></div>
        </div>

        {/* Swiper Testimonials */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 dark:border-neutral-700 hover:border-[#004B93] dark:hover:border-[#005BBB] transition-all duration-500 transform hover:-translate-y-2`}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 150}
                >
                  {/* Card Content */}
                  <div className="p-8 flex flex-col items-center text-center">
                    {/* Avatar */}
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-[#004B93] dark:border-[#005BBB] mb-4"
                    />

                    {/* Name */}
                    <h4 className="text-lg font-bold text-[#2B2B2B] dark:text-white">
                      {t.name}
                    </h4>
                    <span className="text-sm text-[#004B93] dark:text-[#66A8FF] font-medium mb-3">
                      {t.role}
                    </span>

                    {/* Stars */}
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-[#555] dark:text-gray-300 text-sm leading-relaxed">
                      “{t.review}”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Decorative Blue Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#004B93]/10 dark:bg-[#005BBB]/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#004B93]/10 dark:bg-[#005BBB]/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default ReviewsSection;
