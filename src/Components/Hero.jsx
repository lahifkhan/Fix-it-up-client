import React from "react";

import reportImg from "../assets/ai-generated-8603207_1280.jpg";
import cleanupImg from "../assets/ai-generated-8603210_1280.jpg";
import sustainabilityImg from "../assets/recyclable-6638729_1280.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    <div>
      <div className="w-full h-[50vh] md:h-[70vh] my-11 ">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-full  flex gap-4 items-center justify-center  text-2xl md:text-5xl font-bold">
                <div className="flex-1">
                  <img
                    className="rounded-2xl h-full"
                    src={slide.image}
                    alt=""
                  />
                </div>
                <div className="text-primary  p-4  leading-tight flex-1">
                  {slide.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
