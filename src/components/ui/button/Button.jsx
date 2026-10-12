// Button.js
// Reusable button with optional route-aware link support.
// Internal href values navigate through React Router and trigger the page reveal
// overlay, so page animations can run again without forcing a full reload.

import styles from "./button.module.css";
import AppLink from "../app-link/AppLink";

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  width = "100%",
  // label = "",
  ariaLabel = "",
  style = {},
  href = "",
  variant = "default", // "default" | "outlined"
}) {
  const btnClass =
    variant === "outlined"
      ? `${styles.dsButtonOutlined} ${className}`
      : `${styles.dsButton} ${className}`;

  if (href) {
    return (
      <AppLink
        href={href}
        aria-label={ariaLabel}
        className={styles.buttonLink}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        style={{
          textDecoration: "none",
          display: "inline-flex",
          width,
          maxWidth: "100%",
        }}
      >
        <span
          className={btnClass}
          aria-disabled={disabled}
          style={{ ...style, width: "100%" }}
        >
          {children}
        </span>
      </AppLink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={btnClass}
      style={{ ...style, width }}
    >
      {children}
    </button>
  );
}
