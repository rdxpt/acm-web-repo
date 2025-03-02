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

      <div ref={heroRef} className=" w-full h-screen overflow-hidden">
        <div className="md:flex md:flex-row flex flex-col-reverse items-center justify-center md:h-full mt-[28vh] md:mt-0 px-16 max-w-1/2 ">
          <div className="flex flex-col items-start md:mt-0 mt-[3rem] justify-center ml-[10%] space-y-[0.3vw] ">
            <h1 className="text-gray-200 md:text-[3.6vw] text-[7vw] font-bold">
              Association for
            </h1>
            <div className="bg-[#8097FF] bg-opacity-30 border border-white border-opacity-15 backdrop-blur-sm md:w-[35vw] w-[72vw] pl-[0.8vw] py-[0.4vw] rounded-lg">
              <h2 className="text-white md:text-[3vw] text-[6.5vw] font-bold">
                <span className="cursor">{displayedText}</span>
              </h2>
            </div>
          </div>

          <div className=" flex items-center justify-center md:w-1/2 w-[60vw] h-full">
            <Image
              src="/acm_large2.svg"
              alt="ACM Logo"
              width={65}
              height={65}
              className="scale-125 md:w-3/4 md:h-3/4 w-full h-full "
              
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
