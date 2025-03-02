"use client";
import { useState, useEffect } from "react";

export default function Background() {
    const [scrollY, setScrollY] = useState(0);
    const [floatOffset1X, setFloatOffset1X] = useState(0);
    const [floatOffset1Y, setFloatOffset1Y] = useState(0);
    const [floatOffset2X, setFloatOffset2X] = useState(0);
    const [floatOffset2Y, setFloatOffset2Y] = useState(0);

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
        w: 0,
        h: 0,
        bottom: 0,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                w: (window.innerWidth <= 425) ? 3 * window.innerWidth : 0.6 * window.innerWidth,
                h: (window.innerHeight <= 425) ? 3 * window.innerWidth : 0.85 * window.innerWidth,
                bottom: (window.innerWidth <= 425) ? -0.1 * window.innerHeight : -0.8 * window.innerHeight,
            });
        }
    }, []);

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

            t += window.innerWidth <= 425 ? 0.3 : 1.25;

            requestAnimationFrame(animateFloat);
        };

        if (typeof window !== "undefined") {
            animateFloat();
        }
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

    const translateY = -(((scrollY + 2 * windowSize.height) % (4 * windowSize.height)) - (2 * windowSize.height));
    const translateY1 = -(((scrollY * 1.8 + 5 * windowSize.height) % (10 * windowSize.height)) - (5 * windowSize.height));

    return (
        <div className="fixed inset-0 z-[-1] w-full h-full bg-[#232227]">
            <img
                src="/eclipse10.png"
                alt="Background"
                className="absolute"
                style={{
                    height: windowSize.h,
                    width: windowSize.w,
                    bottom: windowSize.bottom,
                    right: 0.55 * windowSize.width,
                    transform: `translateY(${translateY1 + floatOffset1Y}px) translateX(${floatOffset1X}px)`,
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
                    transform: `translateY(${translateY + floatOffset2Y}px) translateX(${floatOffset2X}px)`,
                }}
            />
        </div>
    );
}
