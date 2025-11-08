import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import reportImg from "../assets/ai-generated-8603207_1280.jpg";
import cleanupImg from "../assets/ai-generated-8603210_1280.jpg";
import sustainabilityImg from "../assets/recyclable-6638729_1280.png";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: reportImg,
      text: "Report Local Issues Quickly: Garbage, Broken Footpaths, Waterlogging, and More",
    },
    {
      id: 2,
      image: cleanupImg,
      text: "Join or Request Cleanup Drives to Improve Your Community",
    },
    {
      id: 3,
      image: sustainabilityImg,
      text: "Take Action for a Sustainable Future: Make a Positive Impact Locally",
    },
  ];

  return (
    <div className="my-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper "
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="w-[250px] md:w-[400px] lg:w-[500px]"
          >
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.text}
                className="rounded-2xl w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute right-0 bottom-5 left-0  bg-black/50 text-white text-center text-sm md:text-lg font-medium p-3 ">
                {slide.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
