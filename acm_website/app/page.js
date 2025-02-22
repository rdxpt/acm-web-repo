"use client";
import { Element } from "react-scroll";
import Carousel from "./components/carousel";
import Event from "./components/Events"; // Keep this import unchanged
import Team from "./components/Team";

export default function Home() {
  return (
    <div className="bg-[#1B1B23]">
      <Element
        name="home"
        className="h-screen flex items-center justify-center bg-slate-500"
      ></Element>

      <Element
        name="about"
        className="h-screen flex items-center justify-center bg-red-400"
      ></Element>

      <Element
        name="gallery"
        className="h-screen flex items-center justify-center bg-gray-400"
      >
        <Carousel />
      </Element>

      <Team />

      {/* Do not add h-screen here */}
      <Element name="events" className="bg-black-400">
        <Event />
      </Element>

      <Element
        name="contact"
        className="h-screen flex items-center justify-center bg-green-400"
      ></Element>
    </div>
  );
}
