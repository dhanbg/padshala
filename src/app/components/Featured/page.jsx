import Image from "next/image";
import React from "react";
import Dash from "../Dash/page";

const Featured = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Our <span className="text-accent">Featured</span> Food
        </h2>
        <p className="max-w-[550px] mx-auto mt-4 text-gray-600 text-sm sm:text-base">
          A curated selection of our best dishes. Each recipe is a masterpiece, crafted with passion and premium ingredients to create flavors you'll fall in love with.
        </p>
        <Dash className="mt-6 mx-auto" />
      </div>

      {/* Food Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Food Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <Image
            className="w-full h-[200px] object-cover"
            src="/grid__1.png"
            width={400}
            height={300}
            alt="Shrimp Salad"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300">
              Shrimp Salad
            </h3>
            <p className="text-gray-600 mt-3">
              A refreshing mix of tender shrimp, crisp greens, and zesty dressing for a healthy indulgence.
            </p>
            <button className="mt-4 bg-accent text-white px-4 py-2 rounded-md text-sm hover:bg-accent-dark transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Food Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <Image
            className="w-full h-[200px] object-cover"
            src="/grid__2.png"
            width={400}
            height={300}
            alt="Baked Apples"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300">
              Baked Apples
            </h3>
            <p className="text-gray-600 mt-3">
              Sweet, spiced, and baked to perfection—our baked apples are a comforting dessert favorite.
            </p>
            <button className="mt-4 bg-accent text-white px-4 py-2 rounded-md text-sm hover:bg-accent-dark transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Food Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <Image
            className="w-full h-[200px] object-cover"
            src="/grid__3.png"
            width={400}
            height={300}
            alt="Cherries Chicken"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300">
              Cherries Chicken
            </h3>
            <p className="text-gray-600 mt-3">
              Succulent chicken glazed with a sweet and tangy cherry sauce—perfect for any occasion.
            </p>
            <button className="mt-4 bg-accent text-white px-4 py-2 rounded-md text-sm hover:bg-accent-dark transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
