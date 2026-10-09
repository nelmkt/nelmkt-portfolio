// Two looks for the same portfolio: the pink arcade (default) and a plain,
// monochrome "professional" view for faculty and reviewers. The choice lives on
// <html data-mode> so CSS does the switching, and is remembered per browser.
export type Mode = "arcade" | "pro";

export const MODE_KEY = "nelmkt-mode";

export function setMode(mode: Mode) {
  document.documentElement.dataset.mode = mode;
  try {
    localStorage.setItem(MODE_KEY, mode);
  } catch {}
}

export function toggleMode() {
  setMode(document.documentElement.dataset.mode === "pro" ? "arcade" : "pro");
}

// Light or dark for professional mode; defaults to the visitor's system setting.
export const THEME_KEY = "nelmkt-theme";

export function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {}
}

// Runs inline in <head> before first paint, so a returning visitor never sees the wrong theme flash.
// Only once the start screen has been passed this session; otherwise the visitor picks there.
export const modeBootScript = `try{var d=document.documentElement;if(sessionStorage.getItem("nelmkt-started")&&localStorage.getItem("${MODE_KEY}")==="pro")d.dataset.mode="pro";d.dataset.theme=localStorage.getItem("${THEME_KEY}")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(localStorage.getItem("nelmkt-lang")==="ar"){d.lang="ar";d.dir="rtl"}}catch(e){}`;
