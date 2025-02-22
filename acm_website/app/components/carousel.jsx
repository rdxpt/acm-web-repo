"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Carousel() {
  const itemsImage = useMemo(
    () => [
      {
        image:
          "https://img.freepik.com/free-photo/full-shot-students-preparing-exam_23-2149647062.jpg?t=st=1739709384~exp=1739712984~hmac=bb5d90da1492c81bed228e45187e1cf31d1f25e54957d12b96174d3c32e5e20c&w=1800",
      },
      {
        image:
          "https://img.freepik.com/free-photo/smiley-students-learning-stairs-front-view_23-2149647074.jpg?t=st=1739709700~exp=1739713300~hmac=4118692d223f47029488228e146c6af7178a7883805a2d94e39e3650a493d706&w=1800",
      },
      {
        image:
          "https://img.freepik.com/free-photo/full-shot-students-cramming-together_23-2149647137.jpg?t=st=1739709730~exp=1739713330~hmac=b070256c28f6633b94bc7beb6167adead559bfbb41a731538ac91a5fd664d99d&w=1800",
      },
      {
        image:
          "https://img.freepik.com/free-photo/full-shot-students-preparing-exam_23-2149647062.jpg?t=st=1739709384~exp=1739712984~hmac=bb5d90da1492c81bed228e45187e1cf31d1f25e54957d12b96174d3c32e5e20c&w=1800",
      },
      {
        image:
          "https://img.freepik.com/free-photo/smiley-students-learning-stairs-front-view_23-2149647074.jpg?t=st=1739709700~exp=1739713300~hmac=4118692d223f47029488228e146c6af7178a7883805a2d94e39e3650a493d706&w=1800",
      },
      {
        image:
          "https://img.freepik.com/free-photo/full-shot-students-cramming-together_23-2149647137.jpg?t=st=1739709730~exp=1739713330~hmac=b070256c28f6633b94bc7beb6167adead559bfbb41a731538ac91a5fd664d99d&w=1800",
      },
      {
        image:
          "https://img.freepik.com/free-photo/full-shot-students-preparing-exam_23-2149647062.jpg?t=st=1739709384~exp=1739712984~hmac=bb5d90da1492c81bed228e45187e1cf31d1f25e54957d12b96174d3c32e5e20c&w=1800",
      },
      {
        image:
          "https://img.freepik.com/free-photo/smiley-students-learning-stairs-front-view_23-2149647074.jpg?t=st=1739709700~exp=1739713300~hmac=4118692d223f47029488228e146c6af7178a7883805a2d94e39e3650a493d706&w=1800",
      },
      {
        image:
          "https://img.freepik.com/free-photo/full-shot-students-cramming-together_23-2149647137.jpg?t=st=1739709730~exp=1739713330~hmac=b070256c28f6633b94bc7beb6167adead559bfbb41a731538ac91a5fd664d99d&w=1800",
      },
    ],
    []
  );
  const items = Array.from({ length: 9 }, (_, i) => i + 1);
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
          className="bg-white rounded-3xl flex items-center justify-center text-2xl text-black w-[30%] md:w-[20%] h-[8rem] md:h-[26rem] 2xl:w-[15%] 2xl:h-[40rem]"
        >
          <img
            src={itemsImage[leftIndex].image}
            alt="Left Card"
            draggable="false"
            className="object-cover w-full h-full rounded-3xl"
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
          className="bg-gray-600 rounded-3xl flex items-center justify-center text-white text-3xl w-[80%] md:w-[60%] h-[10rem] md:h-[30rem] 2xl:w-[70%] 2xl:h-[45rem] "
        >
          <img
            src={itemsImage[currentIndex].image}
            alt="Center Card"
            draggable="false"
            className="object-cover w-full h-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          key={`right-${items[rightIndex]}`}
          onClick={goNext}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="bg-white rounded-3xl flex items-center justify-center text-2xl text-black w-[30%] md:w-[20%] h-[8rem] md:h-[26rem] 2xl:w-[15%] 2xl:h-[40rem]"
        >
          <img
            src={itemsImage[rightIndex].image}
            alt="Right Card"
            draggable="false"
            className="object-cover w-full h-full rounded-3xl"
          />
        </motion.div>
      </div>
      <div className="mt-6 text-white text-sm md:text-lg">
        {currentIndex + 1}/{items.length}
      </div>
    </div>
  );
}
