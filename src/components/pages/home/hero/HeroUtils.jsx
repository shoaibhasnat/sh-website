/**
 * Initializes 3D hover + eye tracking.
 * GSAP is loaded only after the first paint/idle time so the Home LCP image can
 * render immediately without waiting for animation code evaluation.
 */
export function initRobotHover(robotElem, eyesElem) {
  if (!robotElem || !eyesElem || typeof window === "undefined") return () => {};

  let gsapInstance = null;
  let isKilled = false;

  const loadGsap = async () => {
    try {
      const mod = await import("gsap");
      gsapInstance = mod.gsap || mod.default || mod;
    } catch {
      gsapInstance = null;
    }
  };

  loadGsap();

  const clamp = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
  };

  const handleMouseMove = (e) => {
    if (isKilled) return;

    const rect = robotElem.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Robot tilt
    const rotateY = clamp(mouseX * 0.03, -10, 10);
    const rotateX = clamp(-mouseY * 0.03, -10, 10);

    robotElem.style.transform = `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    // Eyes follow cursor direction
    const maxXOffset = 4;
    const maxYOffset = 13;

    const x = clamp(mouseX * 0.035, -maxXOffset, maxXOffset);
    const y = clamp(mouseY * 0.035, -maxYOffset, maxYOffset);

    if (gsapInstance?.to) {
      gsapInstance.to(eyesElem, {
        duration: 0.25,
        x,
        y,
        ease: "power3.out",
        overwrite: "auto",
      });
    } else {
      eyesElem.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };

  const handleMouseLeave = () => {
    if (isKilled) return;

    robotElem.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";

    if (gsapInstance?.to) {
      gsapInstance.to(eyesElem, {
        duration: 0.35,
        x: 0,
        y: 0,
        ease: "power3.out",
        overwrite: "auto",
      });
    } else {
      eyesElem.style.transform = "translate3d(0px, 0px, 0)";
    }
  };

  document.addEventListener("mousemove", handleMouseMove, { passive: true });
  document.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    isKilled = true;

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseleave", handleMouseLeave);

    try {
      gsapInstance?.killTweensOf?.(eyesElem);
    } catch {}

    if (robotElem) {
      robotElem.style.transform = "";
    }

    if (eyesElem) {
      eyesElem.style.transform = "";
    }
  };
}

/**
 * Initializes blinking animation.
 * The open-eye state is handled in CSS so the LCP robot eyes are visible on the
 * first paint even if JS/GSAP has not initialized yet.
 */
export function initRobotBlink(lidsMaskElem) {
  if (!lidsMaskElem || typeof window === "undefined") return () => {};

  const animations = [];
  let gsapInstance = null;
  let isKilled = false;

  const run = async () => {
    try {
      const mod = await import("gsap");
      gsapInstance = mod.gsap || mod.default || mod;
    } catch {
      return;
    }

    if (isKilled || !gsapInstance) return;

    const blink = () => {
      if (isKilled) return;

      const tl = gsapInstance.timeline({ defaults: { ease: "power1.inOut" } });
      animations.push(tl);

      tl.to(lidsMaskElem, { duration: 0.3, clipPath: "inset(0% 0% 0% 0%)" });
      tl.to(lidsMaskElem, { duration: 0.01, clipPath: "inset(0% 0% 0% 0%)" });
      tl.to(lidsMaskElem, { duration: 0.3, clipPath: "inset(0% 0% 100% 0%)" });

      const delayedCall = gsapInstance.delayedCall(3, blink);
      animations.push(delayedCall);
    };

    gsapInstance.set(lidsMaskElem, { clipPath: "inset(0% 0% 100% 0%)" });
    const initialCall = gsapInstance.delayedCall(1.2, blink);
    animations.push(initialCall);
  };

  run();

  return () => {
    isKilled = true;
    animations.forEach((animation) => animation?.kill?.());
    try {
      gsapInstance?.killTweensOf?.(lidsMaskElem);
    } catch {}
  };
}
