"use client";
import { useState, useEffect } from "react";

const cheatCodes = {
  fart: "/sounds/fart.mp3",
  shoot: "/sounds/shoot.mp3",
  bomb: "/sounds/bomb.mp3",
  bass: "/sounds/bass.mp3",
  bruh: "/sounds/bruh.mp3",
  slap: "/sounds/slap.mp3",
  cat:"/sounds/cat.mp3",
  dog:"/sounds/dog.mp3",
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
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // Persistent AudioContext

  useEffect(() => {
    const handleKeyDown = (e) => {
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
    audio.volume = 1.0; // Set volume (adjust if needed)
    audio.currentTime = 0; // Ensure it starts from the beginning
    audio.play();
  };

  const playTone = (frequency) => {
    if (!frequency || audioCtx.state === "suspended") audioCtx.resume(); // Resume if suspended
    const oscillator = audioCtx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3); // Play for 0.3s
  };

  return null; // No UI needed, just runs in the background
};

export default KonamiCode;
