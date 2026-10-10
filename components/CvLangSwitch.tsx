"use client";

import type { CvLang } from "./cv";

// Same key as LANG_KEY in lang.ts (not imported, so this page skips the Arabic dictionary).
const LANG_KEY = "nelmkt-lang";

// Switching the CV's language also switches the site's, so the two stay in step.
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
