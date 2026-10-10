"use client";

import type { CvLang } from "./cv";

const LANG_KEY = "nelmkt-lang";

export default function CvLangSwitch({ lang, href, label }: { lang: CvLang; href: string; label: string }) {
  return (
    <a
      href={href}
      className="cv-lang"
      lang={lang}
      onClick={() => {
        try {
          localStorage.setItem(LANG_KEY, lang);
        } catch {}
      }}
    >
      {label}
    </a>
  );
}
