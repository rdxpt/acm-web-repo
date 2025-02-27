"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Carousel() {
  const itemsImage = useMemo(
    () => [
      {
        image: "/gallery/1.webp",
      },
      {
        image: "/gallery/2.webp",
      },
      {
        image: "/gallery/3.webp",
      },
      {
        image: "/gallery/4.webp",
      },
      {
        image: "/gallery/5.webp",
      },
      {
        image: "/gallery/6.webp",
      },
    ],
    []
  );
  const items = Array.from({ length: 6 }, (_, i) => i + 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapIndex = (index) => (index + items.length) % items.length;
  const leftIndex = wrapIndex(currentIndex - 1);
  const rightIndex = wrapIndex(currentIndex + 1);
  const goNext = () => {
    setCurrentIndex((prev) => wrapIndex(prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => wrapIndex(prev - 1));
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center mt-9">
      <div className="flex items-center justify-center w-full max-w-6xl md:max-w-7xl px-4 space-x-3 md:space-x-6 2xl:max-w-full ">
        <motion.div
          key={`left-${items[leftIndex]}`}
          onClick={goPrev}
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="bg-white rounded-3xl flex items-center justify-center text-2xl text-black w-[30%] md:w-[20%] h-[8rem] md:h-[26rem] 2xl:w-[15%] 2xl:h-[40rem] relative"
        >
          <Image
            src={itemsImage[leftIndex].image}
            alt="Left Card"
            fill
            sizes="(max-width: 768px) 30vw, (max-width: 1536px) 20vw, 15vw"
            priority={false}
            className="object-cover rounded-3xl"
            quality={75}
          />
        </motion.div>
        <motion.div
          key={items[currentIndex]}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) goNext();
            else if (info.offset.x > 100) goPrev();
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="bg-gray-600 rounded-3xl flex items-center justify-center text-white text-3xl w-[80%] md:w-[60%] h-[10rem] md:h-[30rem] 2xl:w-[70%] 2xl:h-[45rem] relative"
        >
          <Image
            src={itemsImage[currentIndex].image}
            alt="Center Card"
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1536px) 60vw, 70vw"
            priority={true}
            className="object-cover rounded-3xl"
            quality={85}
            draggable={false}
          />
        </motion.div>
        <motion.div
          key={`right-${items[rightIndex]}`}
          onClick={goNext}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="bg-white rounded-3xl flex items-center justify-center text-2xl text-black w-[30%] md:w-[20%] h-[8rem] md:h-[26rem] 2xl:w-[15%] 2xl:h-[40rem] relative"
        >
          <Image
            src={itemsImage[rightIndex].image}
            alt="Right Card"
            fill
            sizes="(max-width: 768px) 30vw, (max-width: 1536px) 20vw, 15vw"
            priority={false}
            className="object-cover rounded-3xl"
            quality={75}
          />
        </motion.div>
      </div>
      <div className="mt-6 text-white text-sm md:text-lg">
        {currentIndex + 1}/{items.length}
      </div>
    </div>
  );
}
