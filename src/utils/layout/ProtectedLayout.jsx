// src/utils/layout/ProtectedLayout.jsx
// Wraps routes with the main Layout and renders lazy-loaded route pages.
// The keyed outlet remounts each page on client-side navigation so GSAP page
// animations run again without needing a full browser refresh.

import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { PageRevealFallback } from "../../components/ui/page-reveal/PageReveal";

const RouteContent = () => {
  const location = useLocation();
  const routeKey = `${location.pathname}${location.search}`;

  // useLayoutEffect(() => {
  //   const refresh = () => {
  //     try {
  //       ScrollTrigger.refresh(true);
  //     } catch {}
  //   };

  //   const raf = window.requestAnimationFrame(() => {
  //     window.requestAnimationFrame(refresh);
  //   });
  //   const timer = window.setTimeout(refresh, 700);

  //   return () => {
  //     window.cancelAnimationFrame(raf);
  //     window.clearTimeout(timer);
  //   };
  // }, [routeKey]);

  return (
    <div key={routeKey} className="route-content">
      <Outlet />
    </div>
  );
};

const ProtectedLayout = () => {
  return (
    <Layout>
      <Suspense fallback={<PageRevealFallback />}>
        <RouteContent />
      </Suspense>
    </Layout>
  );
};

export default ProtectedLayout;
