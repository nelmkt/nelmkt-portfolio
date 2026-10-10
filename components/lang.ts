"use client";

import { createContext, useContext } from "react";
import { AR } from "./ar";

export type Lang = "en" | "ar";

export const LANG_KEY = "nelmkt-lang";

export const LangContext = createContext<Lang>("en");

export function translate(lang: Lang, s: string) {
  return lang === "ar" ? (AR[s] ?? s) : s;
}

export function useT() {
  const lang = useContext(LangContext);
  return (s: string) => translate(lang, s);
}

export function applyLang(lang: Lang) {
  const d = document.documentElement;
  d.lang = lang;
  d.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = lang === "ar" ? "نيللي المكتوم" : "Nelly Almaktoum";
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {}
}
