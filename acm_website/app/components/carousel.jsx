"use client";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Carousel({ autoScrollInterval = 5000 }) {
  const itemsImage = useMemo(
    () => [
      {
        image: "/gallery/1.jpg",
      },
      {
        image: "/gallery/2.jpg",
      },
      {
        image: "/gallery/3.jpg",
      },
      {
        image: "/gallery/4.jpg",
      },
      {
        image: "/gallery/5.jpg",
      },
      {
        image: "/gallery/6.jpg",
      },
    ],
    []
  );
  const items = Array.from({ length: 6 }, (_, i) => i + 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [direction, setDirection] = useState(0);
  const thumbnailsRef = useRef(null);
  const itemRefs = useRef([]);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const preloadImages = () => {
      if (typeof window !== "undefined") {
        itemsImage.forEach((item) => {
          const img = new window.Image();
          img.src = item.image;
        });
      }
    };
    preloadImages();
  }, [itemsImage]);

  const wrapIndex = (index) => (index + items.length) % items.length;
  const leftIndex = wrapIndex(currentIndex - 1);
  const rightIndex = wrapIndex(currentIndex + 1);

  const goNext = () => {
    if (!isChanging) {
      setIsChanging(true);
      setDirection(1);
      setCurrentIndex(rightIndex);
      setTimeout(() => setIsChanging(false), isMobile ? 50 : 300);
    }
  };

  const goPrev = () => {
    if (!isChanging) {
      setIsChanging(true);
      setDirection(-1);
      setCurrentIndex(leftIndex);
      setTimeout(() => setIsChanging(false), isMobile ? 50 : 300);
    }
  };

  useEffect(() => {
    if (isMobile && thumbnailsRef.current && itemRefs.current[currentIndex]) {
      const container = thumbnailsRef.current;
      const activeThumb = itemRefs.current[currentIndex];

      if (activeThumb) {
        const scrollLeft =
          activeThumb.offsetLeft -
          container.clientWidth / 2 +
          activeThumb.clientWidth / 2 -
          20;
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex, isMobile]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isChanging) {
        goNext();
      }
    }, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex, isChanging, autoScrollInterval]);

  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (isChanging) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      goNext();
    } else if (diff < -50) {
      goPrev();
    }
  };

  const mobileBounceVariants = {
    initial: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0.8,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: {
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 0.6,
          velocity: 10,
        },
        opacity: { duration: 0.05 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? "80%" : "-80%",
      opacity: 0,
      transition: {
        // Fast exit animation
        x: {
          type: "spring",
          stiffness: 800,
          damping: 15,
          mass: 0.6,
          duration: 0.1,
        },
        opacity: { duration: 0.05 },
      },
    }),
  };

  return (
    <>
      {isMobile ? (
        <div className="w-full flex flex-col items-center">
          <div className="rounded-2xl w-[90%] h-[16rem] sm:h-[20rem] relative overflow-hidden">
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              initial={false}
            >
              <motion.div
                key={`mobile-${currentIndex}`}
                custom={direction}
                variants={mobileBounceVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.05}
                onDragStart={() => {
                  if (isChanging) return;
                }}
                onDragEnd={(e, info) => {
                  if (!isChanging) {
                    if (info.offset.x < -30) {
                      setDirection(1);
                      goNext();
                    } else if (info.offset.x > 30) {
                      setDirection(-1);
                      goPrev();
                    }
                  }
                }}
                className="absolute inset-0 rounded-3xl cursor-pointer w-full h-full bg-gray-600 overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={itemsImage[currentIndex].image}
                    alt={`Image ${currentIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 50vw"
                    priority={true}
                    className="object-cover rounded-2xl"
                    quality={70}
                    draggable={false}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY2NjY2Ii8+PC9zdmc+"
                  />
                  <div className="absolute top-3 right-3 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse">
                      <span className="sr-only">Auto-scroll active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            ref={thumbnailsRef}
            className="mt-4 w-[90%] overflow-x-auto flex items-center space-x-3 py-3 px-4 scrollbar-hide"
            style={{
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-x",
            }}
          >
            {itemsImage.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                onClick={() => {
                  if (!isChanging) {
                    setDirection(index > currentIndex ? 1 : -1);
                    setIsChanging(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsChanging(false), 50);
                  }
                }}
                className={`relative min-w-[7.5rem] h-20 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer transition-all duration-300
                  ${
                    currentIndex === index
                      ? "carousel-preview-border shadow-lg z-10"
                      : "opacity-60 hover:opacity-80 border border-transparent"
                  }`}
              >
                <div className="absolute inset-0 z-10" />
                <Image
                  src={item.image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="56px"
                  className={`object-cover pointer-events-none transition-all duration-300 ${
                    currentIndex === index ? "brightness-105" : "brightness-90"
                  }`}
                  quality={40}
                  priority={
                    index === currentIndex ||
                    index === leftIndex ||
                    index === rightIndex
                  }
                  loading={
                    index === currentIndex ||
                    index === leftIndex ||
                    index === rightIndex
                      ? "eager"
                      : "lazy"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen flex flex-col items-center justify-center mt-9">
          <div className="flex items-center justify-center w-full max-w-6xl md:max-w-7xl px-4 space-x-3 md:space-x-6 2xl:max-w-full">
            <motion.div
              key={`left-${items[leftIndex]}`}
              onClick={goPrev}
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="bg-white rounded-3xl flex items-center justify-center text-2xl text-black w-[30%] md:w-[15%] h-[8rem] md:h-[26rem] 3xl:w-[15%] 3xl:h-[40rem]"
            >
              <Image
                width={100}
                height={100}
                src={itemsImage[leftIndex].image}
                alt="Left Card"
                draggable="false"
                className="object-cover w-full h-full rounded-3xl"
                priority={true}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY2NjY2Ii8+PC9zdmc+"
              />
            </motion.div>

            <motion.div
              key={`center-${items[currentIndex]}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(e, info) => {
                if (!isChanging) {
                  if (info.offset.x < -100) {
                    setDirection(1);
                    goNext();
                  } else if (info.offset.x > 100) {
                    setDirection(-1);
                    goPrev();
                  }
                }
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="bg-gray-600 rounded-3xl flex items-center justify-center text-white text-3xl w-[80%] md:w-[70%] h-[10rem] md:h-[30rem] 3xl:w-[70%] 3xl:h-[45rem] overflow-hidden relative"
            >
              <Image
                width={100}
                height={100}
                src={itemsImage[currentIndex].image}
                alt="Center Card"
                draggable="false"
                className="object-cover w-full h-full rounded-3xl"
                priority={true}
                loading="eager"
                sizes="(max-width: 768px) 80vw, 60vw"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY2NjY2Ii8+PC9zdmc+"
              />
              <div className="absolute top-4 right-4 z-10">
                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse">
                  <span className="sr-only">Auto-scroll active</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              key={`right-${items[rightIndex]}`}
              onClick={goNext}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="bg-white rounded-3xl flex items-center justify-center text-2xl text-black w-[30%] md:w-[15%] h-[8rem] md:h-[26rem] 3xl:w-[15%] 3xl:h-[40rem]"
            >
              <Image
                width={100}
                height={100}
                src={itemsImage[rightIndex].image}
                alt="Right Card"
                draggable="false"
                className="object-cover w-full h-full rounded-3xl"
                priority={true}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY2NjY2Ii8+PC9zdmc+"
              />
            </motion.div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div className="text-sm md:text-lg text-black bg-white px-3 py-1 rounded-full">
              {currentIndex + 1}/{items.length}
            </div>
          </div>
        </div>      )}
    </>
  );
}
