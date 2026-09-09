"use client";

import Link from "next/link";
import { CalendarOutlined } from "@ant-design/icons";
import styles from "./floating-cta.module.css";

export default function FloatingCta() {
  return (
    <Link
      href="/discovery-call"
      className={styles.fab}
      aria-label="Talk To Human — book a discovery call"
    >
      <span className={styles.label}>Talk To Human</span>
      <span className={styles.icon} aria-hidden="true">
        <CalendarOutlined className={styles.calendar} />
      </span>
    </Link>
  );
}
