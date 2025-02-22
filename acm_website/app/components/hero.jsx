import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const words = ["Innovation", "Learning", "Networking", "Computing Machinery"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);

  const typingSpeedRef = useRef(100);
  const deletingSpeedRef = useRef(50);
  const pauseDurationRef = useRef(700); // 2 seconds pause after typing
  const currentWordRef = useRef(words[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimating(true);
          setCurrentWordIndex(0);
          setDisplayedText("");
          setIsDeleting(false);
          setIsPaused(false);
        }
      },
      { threshold: 0.9 }
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
    if (!isAnimating || isPaused) return;

    currentWordRef.current = words[currentWordIndex];
    const currentWord = currentWordRef.current;
    const isLastWord = currentWordIndex === words.length - 1;

    const tick = () => {
      setDisplayedText((current) => {
        if (!isDeleting) {
          // Typing
          if (current.length < currentWord.length) {
            return currentWord.slice(0, current.length + 1);
          }
          // Word is fully typed
          if (!isLastWord) {
            // Pause before starting to delete
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, pauseDurationRef.current);
          } else {
            setIsAnimating(false); // Stop at last word
          }
          return current;
        } else {
          // Deleting
          if (current.length > 0) {
            return current.slice(0, -1);
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => {
              if (prev < words.length - 1) {
                return prev + 1;
              }
              return prev;
            });
            return current;
          }
        }
      });
    };

    const speed = isDeleting
      ? deletingSpeedRef.current
      : typingSpeedRef.current;
    const timeoutId = setTimeout(tick, speed);

    return () => clearTimeout(timeoutId);
  }, [isAnimating, isDeleting, currentWordIndex, words, isPaused]);

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
