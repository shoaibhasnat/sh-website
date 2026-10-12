import { lazy, Suspense, useEffect, useState } from "react";

const SplashCursor = lazy(() => import("../splash-cursor/SplashCursor"));

const IdleSplashCursor = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const show = () => setEnabled(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(show, { timeout: 2500 });
      return () => window.cancelIdleCallback?.(id);
    }

    const timer = window.setTimeout(show, 1800);
    return () => window.clearTimeout(timer);
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <SplashCursor />
    </Suspense>
  );
};

export default IdleSplashCursor;
