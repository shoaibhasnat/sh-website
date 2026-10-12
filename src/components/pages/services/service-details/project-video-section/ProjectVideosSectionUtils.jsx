// ProjectVideosSectionUtils.jsx
//
// Sequential card arrival conveyor.
// Cards fly in one by one from the right as user scrolls.
//
// TEXT SYNC STRATEGY:
//   Text is NOT driven by async callbacks (no onComplete).
//   activeI is derived directly from scroll progress each frame.
//   When activeI changes: DOM is written synchronously, then a
//   short time-based tween plays the visual transition.
//   On scroll-back: activeI decreases, text is immediately reset
//   to the correct state with no async dependency.

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// On mobile (<=768px): cards are single-width, each exits left as next arrives.
// On desktop: cards sit side by side in fixed slots.
const isMobile  = typeof window !== "undefined" && window.innerWidth <= 768;
const SLOT_GAP  = isMobile ? 0 : 28;   // vw between card centres (desktop)
const OFF_RIGHT = 130;                  // vw — off-screen right start
const OFF_LEFT  = -130;                 // vw — off-screen left exit (mobile only)

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
const norm = (v, s, e) => gsap.utils.clamp(0, 1, (v - s) / (e - s));

export function initConveyorShowcase({
  sectionRef,
  stageRef,
  cardRefs,
  nameRef,
  metaRef,
  descRef,
  counterRef,
  count,
  projects,
}) {
  if (!sectionRef.current || count === 0) return;

  const section = sectionRef.current;
  const cards   = cardRefs.current.filter(Boolean);

  // ── Fixed slot positions (vw, relative to stage centre) ──────────────────
  const slots = cards.map((_, i) => {
    const centre = (count - 1) / 2;
    return (i - centre) * SLOT_GAP;
  });

  // ── SplitText ─────────────────────────────────────────────────────────────
  let nameSplit = null;

  // buildSplit: splits current text — does NOT revert first.
  // Caller must ensure old split is cleared before calling.
  function buildSplit() {
    if (!nameRef.current) return;
    nameSplit = SplitText.create(nameRef.current, { type: "lines", mask: "lines" });
  }

  // clearSplit: removes SplitText wrappers and nulls the ref.
  // Must be called BEFORE writing new text so revert doesn't restore old content.
  function clearSplit() {
    if (nameSplit) {
      try { nameSplit.revert(); } catch {}
      nameSplit = null;
    }
  }

  // Initial split on mount text
  buildSplit();

  // ── Write text directly to DOM ────────────────────────────────────────────
  function writeDOM(index) {
    const p = projects[index];
    if (!p) return;
    if (nameRef.current) nameRef.current.textContent = p.name;
    if (descRef.current) descRef.current.textContent = p.description;
    if (counterRef.current) {
      const cur = counterRef.current.querySelector("[data-cur]");
      if (cur) cur.textContent = String(index + 1).padStart(2, "0");
    }
    if (metaRef.current) {
      metaRef.current.innerHTML = p.category
        .slice(0, 2)
        .map((cat) => `<span data-chip>${cat}</span>`)
        .join("");
    }
  }

  // ── Instantly hide all text elements ─────────────────────────────────────
  function hideText() {
    // Name SplitText only used on mobile (desktop has per-card static titles)
    if (isMobile && nameSplit?.lines) gsap.set(nameSplit.lines, { y: "115%", opacity: 0 });
    if (descRef.current) gsap.set(descRef.current, { y: 10, opacity: 0 });
    if (metaRef.current) gsap.set(metaRef.current, { y: 10, opacity: 0 });
  }

  // ── Play text-in animation (non-blocking, fires and forgets visually) ─────
  // These tweens are killed before re-firing so there's no pile-up.
  function playTextIn() {
    // DOM already has new text (writeDOM ran before this).
    // clearSplit was already called, so we just build fresh on new content.
    buildSplit();

    const nameLines = nameSplit?.lines ?? [];
    const others = [descRef.current, metaRef.current].filter(Boolean);
    gsap.killTweensOf([...nameLines, ...others]);

    if (isMobile && nameLines.length) {
      gsap.set(nameLines, { y: "115%", opacity: 0 });
      gsap.to(nameLines, {
        y: "0%", opacity: 1,
        duration: 0.55, stagger: 0.08,
        ease: "power3.out",
      });
    }
    if (descRef.current) {
      gsap.set(descRef.current, { y: 10, opacity: 0 });
      gsap.to(descRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.14 });
    }
    if (metaRef.current) {
      gsap.set(metaRef.current, { y: 10, opacity: 0 });
      gsap.to(metaRef.current, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out", delay: 0.22 });
    }
  }

  // ── Initial states ────────────────────────────────────────────────────────
  cards.forEach((card) => gsap.set(card, { x: `${OFF_RIGHT}vw`, opacity: 0, scale: 0.88 }));
  hideText();
  if (counterRef.current) gsap.set(counterRef.current, { opacity: 0 });

  // ── Active index state ────────────────────────────────────────────────────
  let activeI = -1;

  function setActiveIndex(index) {
    if (index === activeI) return;

    const going_forward = index > activeI;
    activeI = index;

    // Clear split FIRST — revert() would restore old text, overwriting the new write
    clearSplit();

    // Write content synchronously — DOM is ready before any animation starts
    writeDOM(index);

    if (going_forward) {
      // Animate in from below
      playTextIn();
    } else {
      // Scrolling back — instantly place text in its visible state
      buildSplit();
      const nameLines = nameSplit?.lines ?? [];
      const others = [descRef.current, metaRef.current].filter(Boolean);
      gsap.killTweensOf([...nameLines, ...others]);
      if (isMobile && nameLines.length) gsap.set(nameLines, { y: "0%", opacity: 1 });
      if (descRef.current)  gsap.set(descRef.current,  { y: 0, opacity: 1 });
      if (metaRef.current)  gsap.set(metaRef.current,  { y: 0, opacity: 1 });
    }

    // Show counter once
    if (counterRef.current && !counterRef.current._shown) {
      counterRef.current._shown = true;
      gsap.to(counterRef.current, { opacity: 1, duration: 0.45, ease: "power2.out" });
    }


  }

  // ── Reset to fully hidden state ───────────────────────────────────────────
  function resetAll() {
    activeI = -1;
    if (counterRef.current) {
      counterRef.current._shown = false;
      gsap.killTweensOf(counterRef.current);
      gsap.set(counterRef.current, { opacity: 0 });
    }
    cards.forEach((card) => {
      gsap.killTweensOf(card);
      gsap.set(card, { x: `${OFF_RIGHT}vw`, opacity: 0, scale: 0.88 });
    });
    const nameLines = nameSplit?.lines ?? [];
    gsap.killTweensOf([...nameLines, descRef.current, metaRef.current].filter(Boolean));
    hideText();
    clearSplit();

  }

  // ── Entry reset — fires when section leaves upward ────────────────────────
  const resetTrigger = ScrollTrigger.create({
    trigger: section,
    start:   "top 90%",
    onLeaveBack: () => resetAll(),
  });

  // ── Main ScrollTrigger ────────────────────────────────────────────────────
  const scrollLength = window.innerHeight * count;

  const mainTrigger = ScrollTrigger.create({
    trigger:       section,
    start:         "top top",
    end:           `+=${scrollLength}`,
    pin:           true,
    pinSpacing:    true,
    scrub:         1,
    anticipatePin: 1,
    onUpdate: (self) => {
      const p = self.progress;

      // Derive active index directly from scroll progress — no async logic
      // A card becomes active once it has started its phase (p >= phaseStart)
      let newActiveI = -1;
      for (let i = 0; i < count; i++) {
        const phaseStart = i / count;
        if (p >= phaseStart) newActiveI = i;
      }

      if (newActiveI >= 0) setActiveIndex(newActiveI);

      // Move cards
      cards.forEach((card, i) => {
        const phaseStart = i / count;
        const phaseEnd   = (i + 1) / count;
        const localP     = easeOutQuart(norm(p, phaseStart, phaseEnd)); // 0→1 arrival
        const targetX    = slots[i]; // final resting slot (desktop: spread; mobile: 0)

        if (p < phaseStart) {
          // Card not yet started — keep off right
          gsap.set(card, { x: `${OFF_RIGHT}vw`, opacity: 0, scale: 0.88 });
        } else if (isMobile && i < count - 1) {
          // Mobile: card has TWO sub-phases —
          //   arrival   (phase i):   OFF_RIGHT → 0         (localP 0→1)
          //   exit left (phase i+1): 0         → OFF_LEFT  (nextP  0→1)
          const nextPhaseStart = (i + 1) / count;
          const nextPhaseEnd   = (i + 2) / count;
          const nextP = easeOutQuart(norm(p, nextPhaseStart, nextPhaseEnd)); // 0→1 exit

          if (p < nextPhaseStart) {
            // Still in arrival phase
            const x       = OFF_RIGHT + (0 - OFF_RIGHT) * localP;
            const opacity = gsap.utils.clamp(0, 1, localP * 1.6);
            const scale   = gsap.utils.clamp(0.88, 1, 0.88 + localP * 0.12);
            gsap.set(card, { x: `${x}vw`, opacity, scale });
          } else {
            // Exit phase — slide left and fade out
            const x       = 0 + (OFF_LEFT - 0) * nextP;
            const opacity = gsap.utils.clamp(0, 1, 1 - nextP * 1.5);
            const scale   = 1 - nextP * 0.06;
            gsap.set(card, { x: `${x}vw`, opacity, scale });
          }
        } else {
          // Desktop: fly from OFF_RIGHT → fixed slot and stay
          // Also handles the last mobile card (no exit phase needed)
          gsap.set(card, {
            x:       `${OFF_RIGHT + (targetX - OFF_RIGHT) * localP}vw`,
            opacity: gsap.utils.clamp(0, 1, localP * 1.6),
            scale:   gsap.utils.clamp(0.88, 1, 0.88 + localP * 0.12),
          });
        }
      });
    },
  });

  return () => {
    resetTrigger?.kill();
    mainTrigger?.kill();
    gsap.killTweensOf(cards);
    gsap.killTweensOf([nameRef.current, descRef.current, metaRef.current, counterRef.current].filter(Boolean));
    if (nameSplit) { try { nameSplit.revert(); } catch {} }
  };
}