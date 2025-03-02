"use client";
import { Element } from "react-scroll";
import Background from "./components/Background";
import Carousel from "./components/carousel";
import Event from "./components/Events"; // Keep this import unchanged
import Footer from "./components/Footer";
import Office from "./components/Office";
import Team from "./components/Team";
import Hero from "./components/hero";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Element
        name="home"
        className="h-screen flex items-center justify-center"
      >
        <Hero />
      </Element>

      <Element name="about" className=" flex items-center justify-center">
        <About />
      </Element>

      <Element
        name="gallery"
        className="h-80 md:h-screen flex items-center justify-center"
      >
        <Carousel />
      </Element>

      {/* Do not add h-screen here */}
      <Element name="events" className="">
        <Event />
      </Element>

      <Element name="office" className="">
        <Office />
      </Element>

      <Element name="Teams" className="">
        <Team />
      </Element>

      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
}
