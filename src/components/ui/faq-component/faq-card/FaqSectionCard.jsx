// FaqSectionCard.js
// - Individual FAQ card with expandable answer.
// - Animates line when the card scrolls into view using GSAP.
// - Generates a stable unique ID for accessibility (aria-controls).

import { useRef, useEffect, useState } from "react";
import { animateLineOnScroll } from "./FaqSectionCardUtils";
import styles from "./faq-section-card.module.css";

export default function FaqSectionCard({ faq }) {
  const boxRef = useRef(null);
  const lineRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Animate line on scroll
  useEffect(() => {
    const cleanup = animateLineOnScroll(boxRef, lineRef);
    return cleanup;
  }, []);

  // Generate stable ID once
  const answerIdRef = useRef(null);

  if (answerIdRef.current === null) {
    answerIdRef.current = `faq-answer-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  }

  const answerId = answerIdRef.current;

  return (
    <div
      ref={boxRef}
      className={`${styles.cardBox} bgGlassWGlow ${open ? styles.open : ""}`}
    >
      <button
        className={styles.cardHeader}
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-controls={answerId}
        aria-label={faq.question}
      >
        <span className={styles.question}>{faq.question}</span>
        <span className={`${styles.icon}`} aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        id={answerId}
        className={`${styles.answer} ${open ? styles.open : ""}`}
        role="region"
      >
        <p>{faq.answer}</p>
      </div>

      <div ref={lineRef} className={styles.line}></div>
    </div>
  );
}
