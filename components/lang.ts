"use client";

import { createContext, useContext } from "react";
import { AR } from "./ar";
import { KO } from "./ko"; // TEMPORARY Korean

export type Lang = "en" | "ar" | "ko";

export const LANG_KEY = "nelmkt-lang";

export const LangContext = createContext<Lang>("en");

export function translate(lang: Lang, s: string) {
  if (lang === "ar") return AR[s] ?? s;
  if (lang === "ko") return KO[s] ?? s;
  return s;
}

export function useT() {
  const lang = useContext(LangContext);
  return (s: string) => translate(lang, s);
}

export function applyLang(lang: Lang) {
  const d = document.documentElement;
  d.lang = lang;
  d.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = lang === "ar" ? "نيللي المكتوم" : lang === "ko" ? "넬리 알마크툼" : "Nelly Almaktoum";
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {}
}
