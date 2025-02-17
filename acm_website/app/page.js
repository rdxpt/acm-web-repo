"use client";
import { Element } from "react-scroll";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <div>
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
      <Element
        name="contact"
        className="h-screen flex items-center justify-center bg-green-400"
      ></Element>
    </div>
  );
}
