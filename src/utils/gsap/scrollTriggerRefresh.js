// Shared ScrollTrigger refresh helpers.
// These helpers are intentionally centralized so lazy sections do not fight each
// other with repeated refresh calls while chunks/images/fonts are still settling.

let refreshTimer = null;
let refreshInFlight = false;

const importScrollTrigger = async () => {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);

  gsap.registerPlugin(ScrollTrigger);
  return ScrollTrigger;
};

export const refreshScrollTriggerNow = async ({ sort = true } = {}) => {
  if (typeof window === "undefined") return;

  try {
    const ScrollTrigger = await importScrollTrigger();

    if (sort) ScrollTrigger.sort?.();
    ScrollTrigger.refresh(true);

    // Let Lenis/listeners know dimensions may have changed.
    window.dispatchEvent(new CustomEvent("system-heuristics:layout-refresh"));
  } catch {
    // Keep refresh best-effort. A missing route chunk should never crash UI.
  }
};

export const scheduleScrollTriggerRefresh = ({ delay = 80, sort = true } = {}) => {
  if (typeof window === "undefined") return;

  window.clearTimeout(refreshTimer);

  refreshTimer = window.setTimeout(() => {
    if (refreshInFlight) return;
    refreshInFlight = true;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(async () => {
        await refreshScrollTriggerNow({ sort });
        refreshInFlight = false;
      });
    });
  }, delay);
};

export const refreshAfterFontsAndImages = async (root) => {
  if (typeof window === "undefined") return;

  scheduleScrollTriggerRefresh({ delay: 80 });

  try {
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => scheduleScrollTriggerRefresh({ delay: 60 }));
    }
  } catch {}

  const images = root?.querySelectorAll?.("img") || [];

  images.forEach((image) => {
    if (image.complete) return;

    const refresh = () => scheduleScrollTriggerRefresh({ delay: 60 });
    image.addEventListener("load", refresh, { once: true });
    image.addEventListener("error", refresh, { once: true });
  });

  window.setTimeout(() => scheduleScrollTriggerRefresh({ delay: 0 }), 450);
};
