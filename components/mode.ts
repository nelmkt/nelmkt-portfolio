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

export const THEME_KEY = "nelmkt-theme";

export function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {}
}

export const modeBootScript = `try{var d=document.documentElement;if(sessionStorage.getItem("nelmkt-started")&&localStorage.getItem("${MODE_KEY}")==="pro")d.dataset.mode="pro";d.dataset.theme=localStorage.getItem("${THEME_KEY}")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(localStorage.getItem("nelmkt-lang")==="ar"){d.lang="ar";d.dir="rtl";document.title="نيللي المكتوم"}}catch(e){}`;
