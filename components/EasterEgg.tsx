"use client";

import { useEffect, useRef, useState } from "react";

// A line from Nelly's own post about her journey, hidden as 8-bit ASCII binary.
const SECRET = "stay curious";
const BINARY = Array.from(SECRET, (c) => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");

const BANNER = [
  " _  _  ___  _     __  __  _  __ _____ ",
  "| \\| || __|| |   |  \\/  || |/ /|_   _|",
  "| .` || _| | |__ | |\\/| || ' <   | |  ",
  "|_|\\_||___||____||_|  |_||_|\\_\\  |_|  ",
].join("\n");

export default function EasterEgg() {
  const [text, setText] = useState(BINARY);
  const [decoded, setDecoded] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    console.log(
      `%c${BANNER}\n\n%cHey, fellow curious one <3\nThe footer is speaking binary. Click it to translate, or decode it yourself:\n${BINARY}\n\nOld-school players might also try: up up down down left right left right B A`,
      "color:#ff3d8b;font-family:monospace;font-weight:bold",
      "color:#c08bd6;font-family:monospace",
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  function toggle() {
    if (timer.current) clearInterval(timer.current);
    const target = decoded ? BINARY : SECRET;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setDecoded(!decoded);
    if (reduce) {
      setText(target);
      return;
    }
    // Scramble from binary into the message (or back), one character at a time.
    let i = 0;
    timer.current = setInterval(() => {
      i++;
      const settled = target.slice(0, i);
      const noise = Array.from({ length: Math.max(0, Math.min(target.length - i, 24)) }, () =>
        Math.random() < 0.5 ? "0" : "1",
      ).join("");
      setText(settled + noise);
      if (i >= target.length && timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    }, 28);
  }

  return (
    <button
      type="button"
      className={`egg${decoded ? " open" : ""}`}
      onClick={toggle}
      title={decoded ? "Back to binary" : "Psst… decode me"}
      aria-label={decoded ? `Decoded message: ${SECRET}. Click to encode again.` : "Binary-encoded secret message. Click to decode."}
    >
      <span className="egg-label">{decoded ? "DECODED" : "01 // SECRET"}</span>
      <span className="egg-text">{text}</span>
    </button>
  );
}
