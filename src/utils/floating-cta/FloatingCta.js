"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarOutlined } from "@ant-design/icons";
import styles from "./floating-cta.module.css";

const PEEK_DELAY_MS = 900;
const PEEK_DURATION_MS = 3200;

export default function FloatingCta() {
  const pathname = usePathname();
  const [peek, setPeek] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const delay = reduceMotion ? 0 : PEEK_DELAY_MS;

    setPeek(false);

    const showTimer = window.setTimeout(() => setPeek(true), delay);
    const hideTimer = window.setTimeout(
      () => setPeek(false),
      delay + PEEK_DURATION_MS,
    );

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname]);

  return (
    <Link
      href="/discovery-call"
      className={`${styles.fab}${peek ? ` ${styles.peek}` : ""}`}
      aria-label="Talk To Human — book a discovery call"
    >
      <span className={styles.label}>Talk To Human</span>
      <span className={styles.icon} aria-hidden="true">
        <CalendarOutlined className={styles.calendar} />
      </span>
    </Link>
  );
}
