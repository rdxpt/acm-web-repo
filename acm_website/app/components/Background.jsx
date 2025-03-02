"use client";
import { useState, useEffect } from "react";

export default function Background() {
    const [scrollY, setScrollY] = useState(0);
    const [floatOffset1X, setFloatOffset1X] = useState(0);
    const [floatOffset1Y, setFloatOffset1Y] = useState(0);
    const [floatOffset2X, setFloatOffset2X] = useState(0);
    const [floatOffset2Y, setFloatOffset2Y] = useState(0);

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        w: (window.innerWidth <= 425) ? 3 * window.innerWidth : 0.6 * window.innerWidth,
        h: (window.innerHeight <= 425) ? 3 * window.innerWidth : 0.85 * window.innerWidth,
        bottom: (window.innerWidth <= 425) ? -0.1 * window.innerHeight : -0.8 * window.innerHeight,
    });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        let t = 0;
        const animateFloat = () => {
            // if (window.innerWidth <= 425) {
            //     setFloatOffset1X(Math.sin(t / 60) * 10);
            //     setFloatOffset1Y(Math.cos(t / 21) * 10);
            //     setFloatOffset2X(Math.cos(t / 37) * 30);
            //     setFloatOffset2Y(Math.sin(t / 60) * 60);
            // }
            // else {
            //     setFloatOffset1X(Math.sin(t / 60) * 30);
            //     setFloatOffset1Y(Math.cos(t / 21) * 10);
            //     setFloatOffset2X(Math.cos(t / 37) * 60);
            //     setFloatOffset2Y(Math.sin(t / 60) * 60);
            // }
            // t += 1.25;
            setFloatOffset1X(Math.sin(t / 60) * 30);
            setFloatOffset1Y(Math.cos(t / 21) * 10);
            setFloatOffset2X(Math.cos(t / 37) * 60);
            setFloatOffset2Y(Math.sin(t / 60) * 60);
            if (window.innerWidth <= 425) {
            t += 0.3;
            }
            else {
            t += 1.25;
            }
            requestAnimationFrame(animateFloat);
        };

        animateFloat();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                w: (window.innerWidth <= 425) ? 20 * window.innerWidth : 0.6 * window.innerWidth,
                h: (window.innerHeight <= 425) ? 20 * window.innerWidth : 0.85 * window.innerWidth,
                bottom: (window.innerWidth <= 425) ? -0.1 * window.innerHeight : -0.8 * window.innerHeight,
            });
            console.log(window.innerWidth, windowSize.w);

        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    /**
     * TODO CREATIVE CHANGES -- SHIVAM
     * background blur confirm == more or less?
     * background scrollY range? extend?
     * prallax slow mo feel or not == more, less , none?
     * how to make window resize responsive using vh vw? idk
     * path of animation
     * rotation? in animation
     * team nav link not working
     * image compression
     * client server rendering?
     * performance?
     */


    const translateY = -(((scrollY + 2*windowSize.height) % (4 * window.innerHeight)) - (2 * window.innerHeight));
    const translateY1 = -(((scrollY * 1.8 + 5*windowSize.height) % (10 * window.innerHeight)) - (5 * window.innerHeight));

    return (
        <div className="fixed inset-0 z-[-1] w-full h-full bg-[#232227]">
            {/* <div className="absolute w-full h-full z-[-2] w-full h-full bg-[#1B1B23] brightness-[1.1] contrast-[0.97] sepia-[0.2]"/> */}
            <img
                src="/eclipse10.png"
                alt="Background"
                className="absolute"
                style={{
                    height: windowSize.h,
                    width: windowSize.w,
                    bottom: windowSize.bottom,
                    right: 0.55 * windowSize.width,
                    transform: `translateY(${translateY1 + floatOffset1Y}px)
            translateX(${floatOffset1X}px)`,
                }}
            />
            <img
                src="/eclipse10.png"
                alt="Background"
                className="absolute"
                style={{
                    height: windowSize.h,
                    width: windowSize.w,
                    left: 0.45 * windowSize.width,
                    transform: `translateY(${translateY + floatOffset2Y}px)
                    translateX(${floatOffset2X}px)`
                }}
            />
            {/* <div className="absolute bottom-[-70vh] left-[-40vh] w-[100vh] h-[120vh] "
          style={{ transform: `translateY(${translateY2}px)` }} >
          <div className="absolute inset-0 w-full h-full rounded-full bg-[radial-gradient(circle,rgba(41,10,118,0.6)_10%,rgba(31,66,227,0.5)_40%,rgba(255,51,190,0.2)_80%,transparent)] Gradient blur-[200px]" />
        </div> */}

        </div>
    );
}
