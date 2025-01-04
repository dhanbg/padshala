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
        className="banner-slider w-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full relative">
              {/* Make image responsive */}
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    </>
  );
};

export default page;
