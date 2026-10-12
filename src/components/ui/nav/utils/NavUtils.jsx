import { gsap } from "gsap";

export const toggleMobileMenuGsap = (
  mobileMenuRef,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  styles
) => {
  if (!mobileMenuRef.current) return;

  if (!isMobileMenuOpen) {
    setIsMobileMenuOpen(true);
    gsap
      .timeline()
      .set(mobileMenuRef.current, { display: "flex" })
      .fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      )
      .fromTo(
        `.${styles.mobileNavLink}`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.3 },
        "-=0.2"
      );
  } else {
    gsap
      .timeline()
      .to(`.${styles.mobileNavLink}`, {
        opacity: 0,
        y: -10,
        stagger: 0.05,
        duration: 0.2,
      })
      .to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          setIsMobileMenuOpen(false);
          gsap.set(mobileMenuRef.current, { display: "none" });
        },
      });
  }
};
export const setupNavbarScroll = (navRef, setIsScrolled) => {
  if (!navRef.current) return;

  const navContainer = navRef.current.querySelector(":scope > div");

  const lastScrollY = { current: window.scrollY };
  const isNavVisible = { current: true };

  const widths = { original: 0, reduced: 0 };

  const measureWidths = () => {
    if (!navContainer) return;
    gsap.set(navContainer, { width: "auto" });
    widths.original = Math.min(window.innerWidth, 1600);

    //if < 1100 then reduce lesser space
    if (widths.original < 1100) {
      //if < 576px then dont reduce width
      if (widths.original < 576) {
        widths.reduced = Math.max(widths.original - 0, 0);
      } else {
        widths.reduced = Math.max(widths.original - 100, 0);
      }
    } else {
      widths.reduced = Math.max(widths.original - 260, 0);
    }
    gsap.set(navContainer, { width: widths.original });
  };

  requestAnimationFrame(measureWidths);

  gsap.fromTo(
    navRef.current,
    { y: -120, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
  );

  const showNav = () => {
    if (!isNavVisible.current) {
      gsap.to(navRef.current, { y: 0, duration: 0.35, ease: "power2.out" });
      isNavVisible.current = true;
    }
  };

  const hideNav = () => {
    if (isNavVisible.current) {
      gsap.to(navRef.current, {
        y: -120,
        duration: 0.35,
        ease: "power2.inOut",
      });
      isNavVisible.current = false;
    }
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const scrollingDown = currentScroll > lastScrollY.current;
    const scrollingUp = currentScroll < lastScrollY.current;

    // set isScrolled based on scroll threshold
    setIsScrolled(currentScroll > 100);

    // reduce navbar width
    if (navContainer) {
      if (currentScroll > 100) {
        gsap.to(navContainer, {
          width: widths.reduced,
          duration: 0.35,
          ease: "power2.out",
        });
      } else {
        gsap.to(navContainer, {
          width: widths.original,
          duration: 0.35,
          ease: "power2.out",
        });
      }
    }

    // show/hide navbar
    if (scrollingDown && isNavVisible.current && currentScroll > 100) hideNav();
    if ((scrollingUp && !isNavVisible.current) || currentScroll <= 100)
      showNav();

    lastScrollY.current = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", measureWidths);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", measureWidths);
  };
};
