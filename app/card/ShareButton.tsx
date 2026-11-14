"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = "https://nelmkt.com/card";
    try {
      if (navigator.share) {
        await navigator.share({ title: "Nelly Almaktoum", text: "Nelly Almaktoum - ML researcher & inventor", url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <button type="button" className="cp-share" onClick={share} aria-label="Share this contact card">
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 15V4 M7.5 8.5L12 4l4.5 4.5 M5 13v7h14v-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      </svg>
      <span>{copied ? "COPIED" : "SHARE"}</span>
    </button>
  );
}
