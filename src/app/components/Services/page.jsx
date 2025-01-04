import React from "react";
import Dash from "../Dash/page";

const servicesData = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-accent mx-auto"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c-5.523 0-10 3.582-10 8s4.477 8 10 8 10-3.582 10-8-4.477-8-10-8zm0 14c-4.337 0-8-2.468-8-6s3.663-6 8-6 8 2.468 8 6-3.663 6-8 6zm1-9h-2v5h2v-5zm-2 6h2v2h-2v-2z" />
      </svg>
    ),
    title: "Professional Kitchen",
    desc: "State-of-the-art kitchen equipped to deliver an exceptional culinary experience.",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-accent mx-auto"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.42 5.34L16 8.76V5H4.83l-2.41 5 2.41 5H16v-3.76l3.42 3.42 1.58-1.59L18.16 10l2.84-2.83-1.58-1.59z" />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "Quick and reliable delivery to ensure your items reach you on time.",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-accent mx-auto"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a9.934 9.934 0 0 0-7.07 2.93A9.934 9.934 0 0 0 2 12c0 5.522 4.478 10 10 10s10-4.478 10-10c0-2.683-1.053-5.12-2.93-7.07A9.934 9.934 0 0 0 12 2zm0 18c-4.411 0-8-3.589-8-8 0-2.121.832-4.081 2.343-5.657A7.975 7.975 0 0 1 12 4a7.975 7.975 0 0 1 5.657 2.343A7.975 7.975 0 0 1 20 12c0 4.411-3.589 8-8 8z" />
        <path d="M13 7h-2v6h2V7zm-2 8h2v2h-2z" />
      </svg>
    ),
    title: "Mobile Accessories",
    desc: "Top-quality accessories for your mobile devices, ensuring style and functionality.",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-accent mx-auto"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11 7v6h2V7h3l-4-4-4 4h3zM5 10v10h14V10h-3v8H8v-8H5zm-3 2h4v8h8v-8h4v10H2V12z" />
      </svg>
    ),
    title: "Screen Protectors",
    desc: "Premium protectors designed to keep your screen safe and scratch-free.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Choose the Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-xl mx-auto">
          Explore a variety of professional services tailored to meet your specific needs. 
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.svg}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
