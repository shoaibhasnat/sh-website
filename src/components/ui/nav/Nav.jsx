// Nav.js
// - Renders the website navigation bar for desktop and mobile.
// - Handles scroll-based shrinking and hiding/showing of navbar.
// - Manages mobile menu open/close state with GSAP animations.
// - Data sources:
//    - NavData.navItems: array of nav items with label and href
//    - Constants?.company?.name: used for logo text
// - Refs used for:
//    - navRef: main nav element (for scroll and width animations)
//    - mobileMenuRef: mobile menu container (for open/close animations)
// - Effects:
//    - setupNavbarScroll: shrinks/expands and hides/shows navbar on scroll
//    - body scroll lock/unlock when mobile menu is open
// - Utility functions:
//    - toggleMobileMenuGsap: animates mobile menu open/close
//    - setupNavbarScroll: animates navbar based on scroll and resize

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import styles from "./nav.module.css";
import { toggleMobileMenuGsap, setupNavbarScroll } from "./NavUtils";
import { Container } from "@mui/material";
import { NavData } from "../../../data/components/nav/NavData";
import { Constants } from "../../../utils/global/Constants";
import LazyImage from "../lazy-image/LazyImage";
import AppLink from "../app-link/AppLink";

const Nav = () => {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { navItems } = NavData;

  useEffect(() => {
    const cleanup = setupNavbarScroll(navRef, setIsScrolled);
    return cleanup;
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;

    // lock background scroll (works on iOS + Android)
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      // restore
      const top = document.body.style.top; // "-123px"
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, parseInt(top || "0") * -1);
    };
  }, [isMobileMenuOpen]);

  // Helper to determine if link is active
  const isLinkActive = (href) => {
    const currentPath = location.pathname.replace(/\/$/, "");
    return href === "/" ? currentPath === "/" : currentPath.startsWith(href);
  };

  // Render nav links for desktop
  const renderNavLinks = () => {
    return navItems?.map(({ label, href }) => (
      <li key={label}>
        <AppLink href={href} className={isLinkActive(href) ? styles.activeLink : ""}>
          {label}
        </AppLink>
      </li>
    ));
  };

  // Render nav links for mobile
  const renderMobileNavLinks = () => {
    return navItems?.map(({ label, href }) => (
      <li key={label} className={styles.mobileNavLink}>
        <AppLink
          href={href}
          className={isLinkActive(href) ? styles.activeLink : ""}
          onClick={() =>
            toggleMobileMenuGsap(
              mobileMenuRef,
              isMobileMenuOpen,
              setIsMobileMenuOpen,
              styles,
            )
          }
        >
          {label}
        </AppLink>
      </li>
    ));
  };

  return (
    <Container maxWidth="xl">
      <nav
        ref={navRef}
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={`${styles.navContainer} bgGlassWGlow`}>
          <p className={styles.logo}>
            <AppLink href="/">
              <LazyImage src="/logo.svg" alt="System Heuristics logo" width={36} height={36} />
              {Constants?.company?.name}
            </AppLink>
          </p>

          <ul className={styles.navLinks}>{renderNavLinks()}</ul>

          <button
            className={styles.mobileMenuButton}
            aria-label="Menu"
            onClick={() =>
              toggleMobileMenuGsap(
                mobileMenuRef,
                isMobileMenuOpen,
                setIsMobileMenuOpen,
                styles,
              )
            }
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div ref={mobileMenuRef} className={`${styles.mobileMenu} bgGlassWGlow`}>
        <ul className={styles.mobileNavLinks}>{renderMobileNavLinks()}</ul>
      </div>
    </Container>
  );
};

export default Nav;
