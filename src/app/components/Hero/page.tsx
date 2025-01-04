import Image from "next/image";
import React from "react";
import { Navbar } from "react-bootstrap";
import { FaUtensils } from "react-icons/fa"; // Importing a food-related icon

// Importing fonts
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: "100",
});

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10 object-cover"
        src="/hero2.png"
        width={1000}
        height={600}
        alt="hero_bg"
      />
      <Navbar className="z-20 shadow-md" />
      <div
        className={`container h-[calc(100vh-120px)] flex items-center justify-center ${poppins.className}`}
      >
        <div className="space-y-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl p-10 shadow-lg max-w-lg w-full text-center">
          {/* Header Section */}
          <p
            className={`uppercase font-medium text-white tracking-widest text-sm ${roboto.className}`}
          >
            A Feast of Flavors Awaits
          </p>
          <h2
            className={`text-4xl sm:text-5xl font-bold text-white leading-tight ${roboto.className}`}
          >
            Savor Every Bite of Our{" "}
            <span style={{ color: "#04683d" }}>Delicious Food</span>
          </h2>
          <p
            className={`text-white text-sm sm:text-base leading-relaxed ${roboto.className}`}
          >
            Indulge in the perfect blend of taste, aroma, and freshness. Our
            menu offers a variety of mouth-watering dishes, from appetizers to
            hearty meals. Ready to satisfy your cravings?
          </p>

          {/* React Icon */}
          <div className=" flex items-center justify-center gap-5 text-6xl text-white mx-auto">
            <FaUtensils />
            <button className="bg-[#04683d] text-white px-8 py-3 rounded-3xl text-lg sm:text-xl hover:bg-[#035a2e] focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
              Explore Our Menu
            </button>
          </div>

          {/* Call to Action Button */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
