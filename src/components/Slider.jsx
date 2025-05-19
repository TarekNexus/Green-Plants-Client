import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Replace these with your actual image imports
import slider1 from "../assets/t-slider-1.jpg";
import slider2 from "../assets/t-slider-2.jpg";
import slider3 from "../assets/t-slider-3.jpg";
import slider4 from "../assets/t-slider-4.jpg";

const Slider = () => {
  const slides = [
    {
      image: slider1,
      title: "Your Plant Care Hub",
      description: "Track all your plants in one beautiful dashboard",
      cta: "Start Tracking"
    },
    {
      image: slider2,
      title: "Smart Watering Reminders",
      description: "Never forget when to water your green friends again",
      cta: "Set Reminders"
    },
    {
      image: slider3,
      title: "Health Monitoring",
      description: "Track growth and spot problems before they become serious",
      cta: "Monitor Plants"
    },
    {
      image: slider4,
      title: "Join Our Community",
      description: "Connect with fellow plant lovers and share tips",
      cta: "Join Now"
    }
  ];

  return (
    <div className="w-full h-[70vh] max-h-[800px] mb-12">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 ">
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover "
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
              <div className="max-w-2xl mx-auto text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 text-green-100">
                  {slide.description}
                </p>
                <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300">
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;