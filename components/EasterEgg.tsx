"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { LangContext, useT } from "./lang";

const SECRETS = { en: "stay curious", ar: "ابقَ فضوليًا" };
const toBinary = (s: string) =>
  Array.from(new TextEncoder().encode(s), (b) => b.toString(2).padStart(8, "0")).join(" ");
const BINARY = { en: toBinary(SECRETS.en), ar: toBinary(SECRETS.ar) };

const BANNER = [
  " _  _  ___  _     __  __  _  __ _____ ",
  "| \\| || __|| |   |  \\/  || |/ /|_   _|",
  "| .` || _| | |__ | |\\/| || ' <   | |  ",
  "|_|\\_||___||____||_|  |_||_|\\_\\  |_|  ",
].join("\n");

export default function EasterEgg() {
  const t = useT();
  const lang = useContext(LangContext);
  const secret = SECRETS[lang];
  const binary = BINARY[lang];
  const [text, setText] = useState(binary);
  const [decoded, setDecoded] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    console.log(
      `%c${BANNER}\n\n%cHey, fellow curious one <3\nThe footer is speaking binary. Click it to translate, or decode it yourself:\n${BINARY.en}\n\nOld-school players might also try: up up down down left right left right B A`,
      "color:#ff3d8b;font-family:monospace;font-weight:bold",
      "color:#c08bd6;font-family:monospace",
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    setDecoded(false);
    setText(BINARY[lang]);
  }, [lang]);

  function toggle() {
    if (timer.current) clearInterval(timer.current);
    const target = decoded ? binary : secret;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setDecoded(!decoded);
    if (reduce) {
      setText(target);
      return;
    }
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
      data-hint={decoded ? undefined : t("psst… decode me")}
      aria-label={
        decoded
          ? t(`Decoded message: ${secret}. Click to encode again.`)
          : t("Binary-encoded secret message. Click to decode.")
      }
    >
      <span className="egg-text" dir={decoded && lang === "ar" ? "rtl" : "ltr"}>
        {text}
      </span>
    </button>
  );
}
