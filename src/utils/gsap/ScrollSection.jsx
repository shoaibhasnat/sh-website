// Section wrapper that keeps every page section in normal block flow.
// This wrapper intentionally does not animate anything. It exists only so
// sections have a stable block-level parent for GSAP ScrollTrigger cleanup and
// pin spacing.

import { useRef } from "react";

export default function ScrollSection({ children }) {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        isolation: "isolate",
      }}
    >
      {children}
    </section>
  );
}
