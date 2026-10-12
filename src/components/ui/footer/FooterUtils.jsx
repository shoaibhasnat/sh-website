export const animateFooter = async ({
  linksRef,
  socialsRef,
  tagLineRef,
  bottomLinksRef,
}) => {
  if (!linksRef || !socialsRef || !tagLineRef || !bottomLinksRef) return;

  try {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]);

    gsap.registerPlugin(ScrollTrigger);

    linksRef.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        },
      );
    });

    if (tagLineRef.current) {
      gsap.fromTo(
        tagLineRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tagLineRef.current,
            start: "top 90%",
          },
        },
      );
    }

    socialsRef.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
          },
        },
      );
    });

    bottomLinksRef.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 99%",
          },
        },
      );
    });
  } catch {
    // Keep footer content visible if animation code cannot load.
  }
};
