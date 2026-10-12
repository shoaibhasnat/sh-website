// src/utils/layout/Layout.jsx
// Main site layout wrapper.
// Lenis is kept globally here so route changes and lazy section mounting do not
// recreate the scroll instance or leave ScrollTrigger pointing at stale scrollers.

import { useMemo } from "react";
import ReactLenis from "lenis/react";
import styles from "./layout.module.css";
import { Footer } from "../../components/ui/footer/Footer";
import Nav from "../../components/ui/nav/Nav";
import SEOHelmet from "../../components/seo/SEOHelmet";
import CalFloatButton from "../../components/ui/cal-float-button/CalFloatButton";
import LenisScrollSync from "../gsap/LenisScrollSync";

const getLenisOptions = () => {
  const isMobile =
    typeof window !== "undefined" &&
    (window.innerWidth < 1024 || "ontouchstart" in window);

  return {
    duration: isMobile ? 0 : 1.6,
    wheelMultiplier: isMobile ? 1 : 0.7,
    smoothWheel: !isMobile,
    smoothTouch: false,
    easing: (t) => 1 - Math.pow(1 - t, 4),
  };
};

const Layout = ({ children }) => {
  const lenisOptions = useMemo(() => getLenisOptions(), []);

  return (
    <ReactLenis root options={lenisOptions}>
      <LenisScrollSync />

      <div className={styles.main}>
        <SEOHelmet />
        <Nav />
        {children}
        <Footer />
        <CalFloatButton />
      </div>
    </ReactLenis>
  );
};

export default Layout;
