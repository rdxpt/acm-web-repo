"use client";
import { useState, useEffect, useRef } from "react";

const cheatCodes = {
  fart: "/sounds/fart.mp3",
  shoot: "/sounds/shoot.mp3",
  bomb: "/sounds/bomb.mp3",
  bass: "/sounds/bass.mp3",
  bruh: "/sounds/bruh.mp3",
  slap: "/sounds/slap.mp3",
  cat: "/sounds/cat.mp3",
  dog: "/sounds/dog.mp3",
  beep: "C4",
  lala: "D5",
  deep: "E5",
};

const frequencies = {
  C4: 261.63,
  D5: 587.33,
  E5: 659.25,
};

const KonamiCode = () => {
  const [input, setInput] = useState("");
  const audioCtxRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!audioCtxRef.current) return;

      // Ensure AudioContext is resumed before playing any sound
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const newInput = (input + e.key).slice(-Math.max(...Object.keys(cheatCodes).map(c => c.length)));
      setInput(newInput);

      if (cheatCodes[newInput]) {
        if (cheatCodes[newInput].startsWith("/sounds/")) {
          playSound(cheatCodes[newInput]); // Play MP3
        } else {
          playTone(frequencies[cheatCodes[newInput]]); // Play generated tone
        }

        setInput(""); // Reset input to allow rapid triggering
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.volume = 1.0;
    audio.currentTime = 0;
    audio.play();
  };

  const playTone = (frequency) => {
    if (!audioCtxRef.current || !frequency) return;

    const audioCtx = audioCtxRef.current;

    if (audioCtx.state === "suspended") {
      audioCtx.resume(); // Resume context if suspended
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    
    // Smoothly fade out the tone
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3);
  };

  return null;
};

export default KonamiCode;
