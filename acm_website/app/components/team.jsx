import Image from "next/image";
import TeamGrid from "./TeamGrid";
import { useState, useEffect } from "react";

const sprayImages = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg"];

export const Team = () => {
  const [sprayedImages, setSprayedImages] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newImage = {
        id: Date.now(),
        x: e.pageX, // 🔥 Use `pageX` for exact position
        y: e.pageY, // 🔥 Use `pageY` to prevent offset issues
        src: sprayImages[Math.floor(Math.random() * sprayImages.length)],
      };

      setSprayedImages((prev) => {
        const newTrail = [...prev, newImage];
        return newTrail.length > 10 ? newTrail.slice(-10) : newTrail; // Keep max 10 images
      });

      setTimeout(() => {
        setSprayedImages((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full max-w-[1440px] h-[2048px] mx-auto flex flex-col overflow-hidden">
      {/* Office Section */}
      <div className="h-1/2 flex">
        <div className="w-1/4 flex items-center justify-center">
          <h1
            className="text-transparent text-[128px] font-[900] tracking-widest text-center -rotate-90 italic"
            style={{
              fontFamily: "Inter, sans-serif",
              WebkitTextStroke: "2px #F6F2E6",
            }}
          >
            OFFICE <br /> BEARERS
          </h1>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-xl">Office Column 2</h1>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-xl">Office Column 3</h1>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-xl">Office Column 4</h1>
        </div>
      </div>

      {/* Team Section */}
      <div id="team-section" className="relative flex-1 flex">
        {/* Teams Grid */}
        <div className="w-3/4 flex items-center justify-center">
          <TeamGrid />
        </div>

        {/* Team Members Title */}
        <div className="w-1/4 flex items-center justify-center">
          <h1
            className="text-transparent text-[128px] font-[900] tracking-widest text-center rotate-90 italic"
            style={{
              fontFamily: "Inter, sans-serif",
              WebkitTextStroke: "2px #F6F2E6",
            }}
          >
            TEAM <br /> MEMBERS
          </h1>
        </div>
      </div>

      {/* Spray Images */}
      {sprayedImages.map((img) => (
        <Image
          key={img.id}
          src={img.src}
          alt="Sprayed Image"
          width={40}
          height={40}
          className="pointer-events-none transition-opacity duration-500"
          style={{
            position: "fixed", // 🔥 Prevents scrolling misalignment
            top: `${img.y}px`,
            left: `${img.x}px`,
            opacity: 0.8, // Higher visibility
            zIndex: 50, // Ensures it appears above everything
            borderRadius: "50%", // Makes the images circular
            transition: "opacity 0.5s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default Team;
