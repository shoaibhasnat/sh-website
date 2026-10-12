// Sync Lenis smooth scroll with GSAP ScrollTrigger.
// ScrollTrigger is dynamically imported so it does not block the first Home LCP paint.

import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const importScrollTrigger = async () => {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);

  gsap.registerPlugin(ScrollTrigger);
  return ScrollTrigger;
};

const runAfterPaint = (callback) => {
  const raf = window.requestAnimationFrame(() => {
    window.requestAnimationFrame(callback);
  });

  return () => window.cancelAnimationFrame(raf);
};

export default function LenisScrollSync() {
  const lenis = useLenis();
  const location = useLocation();
  const scrollTriggerRef = useRef(null);
  const hasMountedRouteRef = useRef(false);

  useLayoutEffect(() => {
    let cancelled = false;

    importScrollTrigger().then((ScrollTrigger) => {
      if (cancelled) return;
      scrollTriggerRef.current = ScrollTrigger;
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useLayoutEffect(() => {
    if (!lenis) return undefined;

    const updateScrollTrigger = () => scrollTriggerRef.current?.update?.();
    lenis.on("scroll", updateScrollTrigger);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
    };
  }, [lenis]);

  useLayoutEffect(() => {
    if (!lenis) return undefined;

    let cancelled = false;

    const refresh = async () => {
      if (cancelled) return;

      const ScrollTrigger = scrollTriggerRef.current || (await importScrollTrigger());
      if (cancelled) return;
      scrollTriggerRef.current = ScrollTrigger;

      try {
        lenis.resize?.();
      } catch {}

      try {
        ScrollTrigger.clearScrollMemory?.("manual");
      } catch {}

      try {
        ScrollTrigger.sort?.();
        ScrollTrigger.refresh(true);
      } catch {}
    };

    try {
      lenis.stop?.();
      lenis.scrollTo?.(0, { immediate: true, force: true });
      lenis.start?.();
    } catch {
      window.scrollTo(0, 0);
    }

    let cancelRaf = () => {};
    let timerOne;
    let timerTwo;

    if (!hasMountedRouteRef.current) {
      hasMountedRouteRef.current = true;
      timerOne = window.setTimeout(refresh, 1800);
      timerTwo = window.setTimeout(refresh, 2600);
    } else {
      cancelRaf = runAfterPaint(refresh);
      timerOne = window.setTimeout(refresh, 700);
      timerTwo = window.setTimeout(refresh, 1400);
    }

    return () => {
      cancelled = true;
      cancelRaf();
      window.clearTimeout(timerOne);
      window.clearTimeout(timerTwo);
    };
  }, [location.pathname, location.search, lenis]);

  useLayoutEffect(() => {
    if (!lenis) return undefined;

    let timer;
    let cancelled = false;

    const refresh = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(async () => {
        if (cancelled) return;

        const ScrollTrigger = scrollTriggerRef.current || (await importScrollTrigger());
        if (cancelled) return;
        scrollTriggerRef.current = ScrollTrigger;

        try {
          lenis.resize?.();
          ScrollTrigger.sort?.();
          ScrollTrigger.refresh(true);
        } catch {}
      }, 100);
    };

    window.addEventListener("system-heuristics:layout-refresh", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener("system-heuristics:layout-refresh", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, [lenis]);

  return null;
}
