// CalFloatButton.jsx
// Floating "Book a Call" button — fixed bottom-right on all pages.
// A text ribbon slides in from the left on hover to label the button.
// Clicking opens the Cal.com booking link in a new tab.

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import styles from "./cal-float-button.module.css";

const CAL_URL = "https://cal.com/byshoaib/15min"; // ← replace with your actual link

export default function CalFloatButton() {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    setHovered(true);
    const timer = setTimeout(() => setHovered(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
      aria-label="Book a Free Consultation"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Text ribbon — slides in from left on hover */}
      <span
        className={`${styles.ribbon} ${hovered ? styles.ribbonVisible : ""}`}
      >
        Book a Free Call
      </span>

      {/* Calendar icon button */}
      <span className={styles.btn}>
        <CalendarDays size={22} strokeWidth={2} />
      </span>
    </a>
  );
}
