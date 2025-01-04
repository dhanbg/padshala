"use client";

import React, { useState } from "react";
import { Nunito } from "next/font/google";
import { Rubik } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({ subsets: ["latin"], weight: ["800"] });
const rubik = Rubik({ subsets: ["latin"], weight: ["400"] });

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${nunito.className} absolute z-10 top-0 left-0 w-full text-[#04683d] shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: "150px", height: "auto" }}
            />
          </Link>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white hover:bg-yellow-500 p-2 rounded-md focus:outline-none"
              onClick={toggleMenu}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 mx-auto">
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Order Now
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Menu
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Offers
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Track Order
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">
              Contact Us
            </a>
          </div>

          {/* Desktop Login and Sign Up */}
          <div className="ml-auto hidden md:flex space-x-4">
            <a
              href="#login"
              className="text-[#04683d] bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md text-sm"
            >
              Login
            </a>
            <a
              href="#signup"
              className="text-[#04683d] bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md text-sm"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden text-[#04683d] bg-white p-4 space-y-4 shadow-md`}
        >
          {/* Navigation Links */}
          <a
            href="#"
            className="block w-full text-center py-2 rounded-md text-sm font-medium hover:bg-yellow-500"
          >
            Order Now
          </a>
          <a
            href="#"
            className="block w-full text-center py-2 rounded-md text-sm font-medium hover:bg-yellow-500"
          >
            Menu
          </a>
          <a
            href="#"
            className="block w-full text-center py-2 rounded-md text-sm font-medium hover:bg-yellow-500"
          >
            Offers
          </a>
          <a
            href="#"
            className="block w-full text-center py-2 rounded-md text-sm font-medium hover:bg-yellow-500"
          >
            Track Order
          </a>
          <a
            href="#"
            className="block w-full text-center py-2 rounded-md text-sm font-medium hover:bg-yellow-500"
          >
            Contact Us
          </a>

          {/* Login and Sign Up Buttons */}
          <a
            href="#login"
            className="block w-full text-center py-2 text-xs text-[#04683d] bg-yellow-500 hover:bg-yellow-600 rounded-md font-medium"
          >
            Login
          </a>
          <a
            href="#signup"
            className="block w-full text-center py-2 text-xs text-[#04683d] bg-yellow-500 hover:bg-yellow-600 rounded-md font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
