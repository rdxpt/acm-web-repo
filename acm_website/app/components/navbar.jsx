"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleNav = () => {
    setNavVisible((prev) => !prev);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#28242c]/60 backdrop-blur-sm h-16 p-2 xl:px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/acm_large2.svg" height={50} width={50} alt="ACM Icon" />
        <div className="flex items-center space-x-2">
          <h3 className="text-[#00C0FF] font-bold max-md:text-xl text-2xl">
            ACM
          </h3>
          <span className="text-[#F7F7F7] max-md:hidden">|</span>
          <h3 className="text-lg xl:text-2xl font-bold text-[#F7F7F7] hidden lg:block">
            University School of Automation and Robotics
          </h3>
          <h3 className="max-lg:text-xl font-bold text-[#F7F7F7] lg:hidden">
            USAR
          </h3>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        aria-controls="primary-navigation"
        aria-expanded={navVisible}
        className="mobile-nav-toggle"
        onClick={toggleNav}
        style={{
          background: `url(${navVisible ? "/Close.svg" : "/menu.svg"}) center center / contain no-repeat`,
        }}
      >
        <span className="sr-only">{navVisible ? "Close menu" : "Open menu"}</span>
      </button>

      {/* Navigation Menu */}
      <nav
        id="primary-navigation"
        className={`primary-navigation text-white md:gap-4 font-normal max-md:text-lg text-xl transition-transform duration-300 ease-in-out ${
          navVisible ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <ul className="flex flex-col md:flex-row">
          <li className="active cursor-pointer px-2 py-1">
            <Link to="about" spy smooth offset={-70} duration={500} onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="active cursor-pointer px-2 py-1">
            <Link to="gallery" spy smooth offset={-70} duration={500} onClick={closeNav}>
              Gallery
            </Link>
          </li>
          <li className="cursor-pointer px-2 py-1">
            <Link
              activeClass="active"
              to="office"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Team

            </Link>
          </li>
          <li className="cursor-pointer md:bg-[#8097FF] md:bg-opacity-41 px-2 py-1 rounded-lg">
            <Link to="contact" spy smooth offset={-70} duration={500} onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Scroll Border Animation */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-transparent animate-gentlePulseNav transition-all duration-200 ease-out"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: "0px 0px 10px rgba(246, 242, 230, 0.7)",
          borderBottom: "2px solid rgba(246, 242, 230, 0.5)",
        }}
      />
    </header>
  );
};
