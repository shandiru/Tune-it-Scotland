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
    name: 'Dylan Sherman',
   
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      "Had an issue with my NC MX-5 ECU. I managed to corrupt and lock the ECU and my car wouldn't turn over. Called Daryn, he was very informative easy to work with and solved my issue very quickly. Good guy and good at what he dose. Highly recommend",
  },
  {
    name: 'Sean',
   
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    review:
      "Just got my mini tuned what a difference with mph torque etc very responsive instant power absolutely brilliant service would highly recommend to anyone looking for there car to be tuned.",
  },
  {
    name: 'Rob Murkowski',
  
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    review:
      "Great service from Tune-it Scotland! Had my Renault trafic sport 3 mapped and what a difference its made! The pull and extra mpg has made such a difference. Thanks again 💪👌🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  },
  {
    name: 'Bill Stewart',
   
    image: 'https://randomuser.me/api/portraits/women/62.jpg',
    review:
      "Done a great job my van is more driveable now",
  },
  {
    name: 'David Boyce',
   
    image: 'https://randomuser.me/api/portraits/men/90.jpg',
    review:
      "Very nice guy and honest lol What a difference he has made to the car I would recommend him to anybody thinking about upgrading there car",
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
