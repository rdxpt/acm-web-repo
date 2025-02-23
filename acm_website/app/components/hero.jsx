import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const words = ["Innovation", "Learning", "Networking", "Computing Machinery"];

  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplayedText("");
          setWordIndex(0);
          setIsDeleting(false);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.75 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;
    const currentWord = words[wordIndex];
    const isLastWord = wordIndex === words.length - 1;

    const type = () => {
      // For typing
      if (!isDeleting) {
        if (displayedText === currentWord) {
          // Word is complete - wait before deleting
          if (!isLastWord) {
            timeout = setTimeout(() => {
              setIsDeleting(true);
            }, 700);
            return;
          }
          return; // Stop at last word
        }

        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100);
        return;
      }

      // For deleting
      if (displayedText === "") {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
        return;
      }

      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 50);
    };

    type();

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, isVisible]);

  return (
    <>
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            border-color: #fff;
          }
          50% {
            border-color: transparent;
          }
        }
        .cursor {
          border-right: 3px solid #fff;
          animation: blink 1.2s ease-in-out infinite;
        }
      `}</style>

      <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
        <div className="relative h-full flex items-center justify-between px-16 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-4">
            <h1 className="text-gray-200 text-6xl font-bold">
              Association for
            </h1>
            <div className="bg-[#8097FF] bg-opacity-45 backdrop-blur-sm px-6 py-3 w-[37vw] rounded-lg">
              <h2 className="text-white text-5xl py-1 font-bold">
                <span className="cursor">{displayedText}</span>
              </h2>
            </div>
          </div>

          <div className="relative w-[30rem] h-[30rem]">
            <Image
              src="/acm_icon.svg"
              alt="ACM Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
