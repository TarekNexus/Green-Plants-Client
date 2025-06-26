import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Replace these with your actual image imports
import slider1 from "../assets/t-slider-1.jpg";
import slider2 from "../assets/slider-2.png";
import slider3 from "../assets/h1.png";
import slider4 from "../assets/h5.jpg";
import { useNavigate } from "react-router";
import { MdLocalFlorist } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GiPlantWatering } from "react-icons/gi";
import { BiBarChartAlt2 } from "react-icons/bi";

const Slider = () => {
  const navigate = useNavigate();
  const slides = [
    {
      image: slider1,
      title: "Explore Every Plant Type",
      description:
        "Browse all available plants, from succulents to rare houseplants, with detailed care info.",
      cta: "Explore Plants",
      path: "/all-plants",
      icon: <MdLocalFlorist />,
    },
    {
      image: slider2,
      title: "Add Your Plants",
      description:
        "Create entries for your own plants to track their watering, health, and growth history.",
      cta: "Add a Plant",
      path: "/Add-Plant",
      icon: <AiOutlinePlusCircle />,
    },
    {
      image: slider3,
      title: "Manage Your Collection",
      description:
        "View and organize all the plants you've added, with edit and delete options.",
      cta: "See Your Plants",
      path: "/my-plants",
      icon: <GiPlantWatering />,
    },
    {
      image: slider4,
      title: "Monitor Plant Health",
      description:
        "Use your personalized dashboard to stay on top of care routines and plant progress.",
      cta: "Go to Dashboard",
      path: "/dashboard",
      icon: <BiBarChartAlt2 />,
    },
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
                <button
                  onClick={() => navigate(slide.path)}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  <div className="flex items-center gap-2">
                    {slide.cta}
                    <span className="text-lg">{slide.icon}</span>
                  </div>
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
