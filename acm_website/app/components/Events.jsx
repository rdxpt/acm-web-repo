import React, { useEffect, useRef, useState } from "react";

const Events = () => {
  const timelineEvents = [
    { id: "header", title: "Events", date: "", isHeader: true },
    { id: 1, title: "Squid Games", date: "25 January 2024" },
    { id: 2, title: "Speaker Session", date: "26 March 2023" },
    { id: 3, title: "Hackathon", date: "13 November 2022" },
    { id: 4, title: "Ideathon", date: "6 May 2025" },
    { id: 5, title: "Mystery Room", date: "7 October 2018" },
  ];

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  const [sectionHeight, setSectionHeight] = useState("0px");
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const horizontalDistance = (timelineEvents.length - 1) * vw;
      setSectionHeight(`${vh + horizontalDistance + 200}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [timelineEvents.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !sectionRef.current ||
        !containerRef.current ||
        !horizontalRef.current
      )
        return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.pageYOffset;
      const vw = window.innerWidth;
      const horizontalDistance = (timelineEvents.length - 1) * vw;
      const progress = scrollY - sectionTop;

      if (progress < 0) {
        horizontalRef.current.style.transform = `translateX(0px)`;
      } else if (progress < horizontalDistance) {
        horizontalRef.current.style.transform = `translateX(-${progress}px)`;
      } else {
        horizontalRef.current.style.transform = `translateX(-${horizontalDistance}px)`;
      }

      containerRef.current.style.position = "sticky";
      containerRef.current.style.top = "0px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [timelineEvents.length, sectionHeight]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: sectionHeight }}
    >
      <div ref={containerRef} className="h-screen overflow-hidden">
        <div
          ref={horizontalRef}
          className="relative h-full transition-transform duration-75 ease-out"
          style={{ width: `${timelineEvents.length * 100}vw` }}
        >
          <div
            className="absolute bg-white"
            style={{
              top: "50%",
              left: "5%",
              width: "85%",
              height: "2px",
              transform: "translateY(-50%)",
            }}
          />

          {timelineEvents.map((item, index) => {
            const fraction =
              timelineEvents.length > 1
                ? index / (timelineEvents.length - 1)
                : 0;

            const leftPercent = 5 + fraction * 85;
            const isHeader = !!item.isHeader;

            const isAbove = isHeader ? true : index % 2 === 0;

            return (
              <div
                key={item.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${leftPercent}%`,
                  top: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {isAbove ? (
                  <div
                    className="flex flex-col items-center mb-2"
                    style={{ transform: "translateY(-110%)" }}
                  >
                    {isHeader ? (
                      <>
                        <div
                          className="bg-[#74BEFF] text-white px-4 py-2 rounded-md text-3xl
                        md:text-7xl font-bold mb-2"
                        >
                          {item.title}
                        </div>
                        <div className="h-4 w-[2px] bg-white" />
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col items-center space-y-0.5 md:space-y-2 mb-1">
                          <span className="text-white text-3xl md:text-7xl font-bold">
                            {item.title}
                          </span>
                          <span className="text-gray-300 text-xl md:text-4xl">
                            {item.date}
                          </span>
                        </div>
                        <div className="h-4 w-[2px] bg-white" />
                      </>
                    )}
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center mt-2"
                    style={{ transform: "translateY(10%)" }}
                  >
                    <div className="h-4 w-[2px] bg-white mb-2" />

                    <div className="flex flex-col items-center space-y-0.5 md:space-y-2">
                      <span className="text-white text-3xl md:text-7xl font-bold">
                        {item.title}
                      </span>
                      <span className="text-gray-300 text-xl md:text-4xl">
                        {item.date}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
