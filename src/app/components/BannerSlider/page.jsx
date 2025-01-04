"use client";

import React from "react";
import Navbar from "@/app/components/Navbar/page";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const slides = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

const page = () => {
  return (
    <>
      <Navbar />
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="banner-slider w-full h-screen" // Make Swiper take full width and height
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover" // Ensure the image covers the entire slide area
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default page;
