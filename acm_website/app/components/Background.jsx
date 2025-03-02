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
    });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        let t = 0;
        const animateFloat = () => {
            setFloatOffset1X(Math.sin(t / 60) * 30);
            setFloatOffset1Y(Math.cos(t / 21) * 10);
            setFloatOffset2X(Math.cos(t / 37) * 60);
            setFloatOffset2Y(Math.sin(t / 60) * 60);
            t += 1.25;
            requestAnimationFrame(animateFloat);
        };

        animateFloat();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
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


    const translateY = -(((scrollY + windowSize.height) % (2.375 * window.innerHeight)) - (1 * window.innerHeight));
    const translateY1 = -(((scrollY * 0.8 + windowSize.height) % (2.375 * window.innerHeight)) - (1 * window.innerHeight));
    return (
        <div className="fixed inset-0 z-[-1] w-full h-full bg-black">
            <img
                src="/ellipse10.png"
                alt="Background"
                className="absolute"
                style={{
                    height: 1.2 * windowSize.height,
                    width: 0.6 * windowSize.width,
                    bottom: -0.8 * windowSize.height,
                    right: 0.55 * windowSize.width,
                    transform: `translateY(${translateY1 + floatOffset1Y}px)
            translateX(${floatOffset1X}px)`,
                }}
            />
            <img
                src="/ellipse10.png"
                alt="Background"
                className="absolute"
                style={{
                    height: 1.2 * windowSize.height,
                    width: 0.6 * windowSize.width,
                    left: 0.45 * windowSize.width,
                    transform: `translateY(${translateY + floatOffset2Y}px)
            translateX(${floatOffset2X}px)`,
                }}
            />
            {/* <div className="absolute bottom-[-70vh] left-[-40vh] w-[100vh] h-[120vh] "
          style={{ transform: `translateY(${translateY2}px)` }} >
          <div className="absolute inset-0 w-full h-full rounded-full bg-[radial-gradient(circle,rgba(41,10,118,0.6)_10%,rgba(31,66,227,0.5)_40%,rgba(255,51,190,0.2)_80%,transparent)] Gradient blur-[200px]" />
        </div> */}

        </div>
    );
}