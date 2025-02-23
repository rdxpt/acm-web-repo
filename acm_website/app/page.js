"use client";
import { Element } from "react-scroll";
import Carousel from "./components/carousel";
import Event from "./components/Events"; // Keep this import unchanged
import Footer from "./components/Footer";
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

      <Element
        name="about"
        className=" flex items-center justify-center"
      >
        <About />
      </Element>

      <Element
        name="gallery"
        className="h-64 md:h-screen flex items-center justify-center"
      >
        <Carousel />
      </Element>

      {/* Do not add h-screen here */}
      <Element name="events" className="">
        <Event />
      </Element>

      <Team />
      <Element
        name="contact"
      >
        <Footer/>

      </Element>
    </div>
  );
}
