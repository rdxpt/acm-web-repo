"use client";
import React from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <div className="flex w-full  bg-black/50 backdrop-blur-sm fixed top-0 z-50">
      <div className="flex w-full justify-around items-center max-w-7xl mx-auto px-4 py-4">
        <div className="flex space-x-12">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-yellow-50 cursor-pointer text-4xl font-black"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-yellow-50 cursor-pointer text-4xl font-black"
          >
            About
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="text-yellow-50 cursor-pointer text-4xl font-black"
          >
            gallery
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-yellow-50 cursor-pointer text-4xl font-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
