import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * setupServicesScroll
 * -------------------
 * Handles sticky pinning, progress bar, service indicator, and active service updates.
 *
 * @param {Object} refs - Refs used in the component
 * @param {Array} services - Array of service objects from data
 * @param {Function} setCurrentIndex - React state setter for active service
 * @returns {Function} cleanup - Function to remove ScrollTrigger
 */
export function setupServicesScroll({
  styles,
  stickyRef,
  servicesRef,
  progressRef,
  indicatorRef,
  currentCountRef,
  services,
  setCurrentIndex,
}) {
  if (!stickyRef?.current) return;
  if (!Array.isArray(services) || services.length === 0) return;

  const stickyHeight = window.innerHeight * 8;
  const serviceHeight = 38;

  // bail safely if refs missing
  const indicatorEl = indicatorRef?.current;
  const progressEl = progressRef?.current;
  const countEl = currentCountRef?.current;

  // measure widths (safe)
  const measure = document.createElement("div");
  measure.style.cssText = `
    position:absolute;
    visibility:hidden;
    white-space:nowrap;
    font-size:60px;
    font-weight:600;
    text-transform:uppercase;
  `;
  document.body.appendChild(measure);

  const serviceWidths = (servicesRef.current || []).map((el) => {
    measure.textContent = el?.innerText || "";
    return (measure.offsetWidth || 0) + 8;
  });

  document.body.removeChild(measure);

  if (indicatorEl && serviceWidths[0]) {
    gsap.set(indicatorEl, {
      width: serviceWidths[0],
      xPercent: -50,
      left: "50%",
      y: 0,
    });
  }

  let activeIndex = 0;

  const st = ScrollTrigger.create({
    trigger: stickyRef.current,
    start: "top top",
    end: `+=${stickyHeight}`,
    pin: true,
    pinSpacing: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const index = Math.min(
        services.length - 1,
        Math.floor(self.progress * services.length),
      );

      if (index !== activeIndex) {
        activeIndex = index;
        setCurrentIndex(index);

        (servicesRef.current || []).forEach((el, i) => {
          el?.classList.toggle(styles.active, i === index);
        });

        if (indicatorEl && serviceWidths[index]) {
          gsap.to(indicatorEl, {
            y: index * serviceHeight,
            width: serviceWidths[index],
            duration: 0.3,
            ease: "power3.out",
          });
        }

        if (countEl) {
          gsap.to(countEl, {
            innerText: index + 1,
            snap: { innerText: 1 },
            duration: 0.2,
            ease: "power3.out",
          });
        }
      }

      if (progressEl) {
        gsap.set(progressEl, { scaleY: self.progress });
      }
    },
  });

  return () => st?.kill();
}
