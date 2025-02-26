"use client";
import { useState, useEffect } from "react";

const KonamiCode = () => {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const konamiCode = ["f", "a", "r", "t"];
    let index = 0;

    const checkKonamiCode = (event) => {
      if (event.key === konamiCode[index]) {
        index++;
        if (index === konamiCode.length) {
          setActivated(true);
          new Audio("/sounds/secret-unlock.mp3").play();
          index = 0; // Reset after activation
        }
      } else {
        index = 0; // Reset if wrong key is pressed
      }
    };

    window.addEventListener("keydown", checkKonamiCode);
    return () => window.removeEventListener("keydown", checkKonamiCode);
  }, []);

  return <div>{activated}</div>;
};

export default KonamiCode;
