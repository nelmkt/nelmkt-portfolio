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

// Runs inline in <head> before first paint, so a returning visitor never sees the wrong theme flash.
// Only once the start screen has been passed this session; otherwise the visitor picks there.
export const modeBootScript = `try{if(sessionStorage.getItem("nelmkt-started")&&localStorage.getItem("${MODE_KEY}")==="pro")document.documentElement.dataset.mode="pro"}catch(e){}`;
