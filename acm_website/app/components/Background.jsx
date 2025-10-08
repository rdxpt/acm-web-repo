/**
* TODO 
* x path of animation
* x rotation? in animation
* x team nav link not working
* x image compression
* server rendering?
* performance?
*/

"use client";
import { useEffect } from "react";

export default function Background() {
    useEffect(() => {
        const handleScroll = () => {
            const translateY1 = -(((window.scrollY * 1.8 + 5 * window.innerHeight) % (10 * window.innerHeight)) - (5 * window.innerHeight));
            const translateY2 = -(((window.scrollY + 2 * window.innerHeight) % (4 * window.innerHeight)) - (2 * window.innerHeight));

            document.documentElement.style.setProperty("--scroll1y", `${translateY1}px`);
            document.documentElement.style.setProperty("--scroll2y", `${translateY2}px`);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // don't try to understand, just rol with it
    // jab time hoga, tab change for a better animation
    useEffect(() => {
        let t = 0; //time increment x Tick
        const animateFloat = () => {
            document.documentElement.style.setProperty("--float1x", `${Math.sin(t / 60) * 30}px`);
            document.documentElement.style.setProperty("--float1y", `${Math.cos(t / 21) * 10}px`);
            document.documentElement.style.setProperty("--float2x", `${Math.cos(t / 37) * 60}px`);
            document.documentElement.style.setProperty("--float2y", `${Math.sin(t / 60) * 60}px`);

            t += (window.innerWidth <= 425) ? 0.3 : 1;
            requestAnimationFrame(animateFloat);
        };

        animateFloat();
    }, []);


    return (
        <div className="fixed inset-0 z-[-1] w-full h-full bg-[#232227]">
            <img
                src="/eclipse11.png"
                alt=" "
                className="absolute bubbles1"
            />
            <img
                src="/eclipse11.png"
                alt=" "
                className="absolute bubbles2"
            />
        </div>
    );
}