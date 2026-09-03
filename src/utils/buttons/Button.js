"use client";

import Link from "next/link";
import styles from "./buttons.module.css";

const VARIANT_CLASS = {
  primary: styles.primary,
  secondary: styles.secondary,
  outline: styles.outline,
  ghost: styles.ghost,
};

function buildStyle({ color, height, width, fontSize }) {
  const style = {};

  if (height != null) {
    style.height = typeof height === "number" ? `${height}px` : height;
    style.minHeight = style.height;
  }

  if (width != null) {
    style.width = typeof width === "number" ? `${width}px` : width;
  }

  if (fontSize != null) {
    style.fontSize =
      typeof fontSize === "number" ? `${fontSize}px` : fontSize;
  }

  if (color) {
    style.backgroundColor = color;
    style.borderColor = color;
  }

  return style;
}

function isInternalHref(href) {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
}

/**
 * Shared website button.
 * Renders as Link, anchor, or <button> based on href / type.
 */
export default function Button({
  text,
  children,
  variant = "primary",
  color,
  height,
  width,
  fontSize,
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  loading = false,
  block = false,
  target,
  rel,
  ...rest
}) {
  const label = children ?? text;
  const isDisabled = disabled || loading;
  const classNames = [
    styles.button,
    VARIANT_CLASS[variant] || styles.primary,
    block ? styles.block : "",
    isDisabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = buildStyle({ color, height, width, fontSize });
  const content = (
    <>
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      {label}
    </>
  );

  const sharedProps = {
    className: classNames,
    style: Object.keys(style).length ? style : undefined,
    "aria-busy": loading || undefined,
    "aria-disabled": isDisabled || undefined,
    ...rest,
  };

  if (href && !isDisabled) {
    const isHashOrExternal =
      href.startsWith("#") ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (!isHashOrExternal && isInternalHref(href)) {
      return (
        <Link
          href={href}
          onClick={onClick}
          {...sharedProps}
          target={target}
          rel={rel}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        onClick={onClick}
        {...sharedProps}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      {...sharedProps}
    >
      {content}
    </button>
  );
}

export function PrimaryButton(props) {
  return <Button variant="primary" {...props} />;
}

export function SecondaryButton(props) {
  return <Button variant="secondary" {...props} />;
}

export function OutlineButton(props) {
  return <Button variant="outline" {...props} />;
}

export function GhostButton(props) {
  return <Button variant="ghost" {...props} />;
}
