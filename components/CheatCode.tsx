"use client";

import { useEffect, useState } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

// ↑↑↓↓←→←→BA: rainbow mode for a few seconds and a cheat toast.
export default function CheatCode() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    let pos = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = key === KONAMI[pos] ? pos + 1 : key === KONAMI[0] ? 1 : 0;
      if (pos < KONAMI.length) return;
      pos = 0;
      setOn(true);
      document.body.classList.add("cheat");
      clearTimeout(timer);
      timer = setTimeout(() => {
        setOn(false);
        document.body.classList.remove("cheat");
      }, 5000);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(timer);
      document.body.classList.remove("cheat");
    };
  }, []);

  if (!on) return null;
  return (
    <div className="cheat-toast" role="status">
      CHEAT CODE ACTIVATED
      <br />
      <b>+99 LIVES</b> · RAINBOW MODE
    </div>
  );
}
