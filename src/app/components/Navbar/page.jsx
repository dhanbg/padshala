'use client'

import React, { useState } from "react";
import { Nunito } from "next/font/google";
import { Rubik } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({ subsets: ["latin"], weight: ["800"] });
const rubik = Rubik({ subsets: ["latin"], weight: ["400"] });

const Page = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${nunito.className} absolute z-10 top-0 left-0 w-full text-[#04683d] shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
              <img
                src="/logo.png"
                alt="Logo"
                style={{ width: "180px", height: "auto" }}
              />
          </Link>

          {/* Centered Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-4 mx-auto">
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
            >
              Order Now
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
            >
              Menu
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
            >
              Offers
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
            >
              Track Order
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
            >
              Contact Us
            </a>
          </div>

          {/* Login and Sign Up Buttons at the Right End */}
          <div className="ml-auto flex space-x-4">
            {/* Login Button */}
            <a
              href="#login"
              className="flex items-center space-x-2 text-[#04683d] bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12H9m0 0l3-3m-3 3l3 3M21 10V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2h4a2 2 0 002-2v-6"
                />
              </svg>
              <span>Login</span>
            </a>

            {/* Sign Up Button */}
            <a
              href="#signup"
              className="flex items-center space-x-2 text-[#04683d] bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-3 3m0 0l3 3m-3-3h6M3 15l3-3m0 0l-3-3m3 3H3M12 3v18"
                />
              </svg>
              <span>Sign Up</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white hover:bg-yellow-500 p-2 rounded-md focus:outline-none"
              onClick={toggleMenu} // Toggle mobile menu visibility
              aria-label="Open Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden text-[#04683d] p-4 space-y-4`}
        >
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
          >
            Order Now
          </a>
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
          >
            Menu
          </a>
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
          >
            Offers
          </a>
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
          >
            Track Order
          </a>
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium text-[#04683d] hover:bg-yellow-500"
          >
            Contact Us
          </a>
          {/* Mobile Login and Sign Up Buttons */}
          <a
            href="#login"
            className="flex items-center space-x-2 text-[#04683d] bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H9m0 0l3-3m-3 3l3 3M21 10V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2h4a2 2 0 002-2v-6"
              />
            </svg>
            <span>Login</span>
          </a>
          <a
            href="#signup"
            className="flex items-center space-x-2 text-[#04683d] bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-3 3m0 0l3 3m-3-3h6M3 15l3-3m0 0l-3-3m3 3H3M12 3v18"
              />
            </svg>
            <span>Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
