import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Constants } from "../../../utils/global/Constants";
import styles from "./page-reveal.module.css";


export const PAGE_REVEAL_START_EVENT = "system-heuristics:page-reveal-start";

/**
 * Used by AppLink before navigation.
 * Keep this small so the site feels fast, but enough time for overlay to appear.
 */
export const PAGE_REVEAL_NAV_DELAY = 120;

/**
 * CSS max transition is now around 620ms + small stagger delay.
 * Keep JS unmount slightly higher to avoid flicker/glitch.
 */
const FIRST_LOAD_HOLD = 420;
const ROUTE_CHANGE_HOLD = 260;
const EXIT_DURATION = 720;
const refreshScrollAnimations = async () => {
  if (typeof window === "undefined") return;

  try {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]);

    gsap.registerPlugin(ScrollTrigger);

    try {
      ScrollTrigger.clearScrollMemory?.();
    } catch {}

    const refresh = () => {
      try {
        ScrollTrigger.refresh(true);
      } catch {}
    };

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(refresh);
    });

    window.setTimeout(refresh, 250);
    window.setTimeout(refresh, 550);
  } catch {}
};
export const PageRevealFallback = () => {
  return (
    <main className={styles.fallback} aria-live="polite" aria-busy="true">
      <div className={styles.fallbackInner}>
        <div className={styles.logoWrap}>
          <img
            src="/logo.svg"
            alt="System Heuristics"
            width={26}
            height={29}
            decoding="async"
          />
        </div>

        <p className={styles.brand}>
          {Constants?.company?.name || "System Heuristics"}
        </p>

        <div className={styles.loaderLine} />
      </div>
    </main>
  );
};

const PageReveal = () => {
  const location = useLocation();

  const [shouldRender, setShouldRender] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const mountedRef = useRef(false);
  const holdTimerRef = useRef(null);
  const unmountTimerRef = useRef(null);

  const clearTimers = () => {
    window.clearTimeout(holdTimerRef.current);
    window.clearTimeout(unmountTimerRef.current);
  };

  const showOverlay = () => {
    clearTimers();

    document.body.classList.add("page-reveal-active");
    setShouldRender(true);

    /**
     * Two RAFs make sure the hidden/base state is painted first,
     * then visible class is applied. This prevents first-frame glitch.
     */
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsActive(true);
      });
    });
  };

  const hideOverlay = (holdTime = ROUTE_CHANGE_HOLD) => {
    clearTimers();

    holdTimerRef.current = window.setTimeout(() => {
      setIsActive(false);
      document.body.classList.remove("page-reveal-active");

      /**
       * Wait until CSS exit animation is finished before removing overlay.
       */
      unmountTimerRef.current = window.setTimeout(() => {
        setShouldRender(false);
        refreshScrollAnimations();
      }, EXIT_DURATION);
    }, holdTime);
  };

  useEffect(() => {
    const handleRevealStart = () => {
      showOverlay();
    };

    window.addEventListener(PAGE_REVEAL_START_EVENT, handleRevealStart);

    return () => {
      window.removeEventListener(PAGE_REVEAL_START_EVENT, handleRevealStart);
      clearTimers();
      document.body.classList.remove("page-reveal-active");
    };
  }, []);

  useEffect(() => {
    // Do not show the reveal overlay on the first page load. It delays the LCP
    // element because Lighthouse counts the hero image as rendered only after it
    // is visually available. Route changes still use the reveal animation.
    if (!mountedRef.current) {
      mountedRef.current = true;
      window.setTimeout(refreshScrollAnimations, 900);
      return;
    }

    showOverlay();

    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch {
      window.scrollTo(0, 0);
    }

    hideOverlay(ROUTE_CHANGE_HOLD);
  }, [location.pathname, location.search]);

  if (!shouldRender) return null;

  return (
    <div
      className={`${styles.overlay} ${isActive ? styles.visible : styles.hidden}`}
      aria-hidden={!isActive}
    >
      <div className={styles.panel} />
      <div className={styles.panel} />
      <div className={styles.panel} />

      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <img
            src="/logo.svg"
            alt=""
            width={26}
            height={29}
            decoding="async"
          />
        </div>

        <p>{Constants?.company?.name || "System Heuristics"}</p>
      </div>
    </div>
  );
};

export default PageReveal;