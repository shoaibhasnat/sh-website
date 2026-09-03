"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./copy-or-link.module.css";

/**
 * Renders text/content that can be copied and/or opened as an external link.
 */
export default function CopyOrLink({
  text,
  copyText,
  url,
  className = "",
  children,
}) {
  const [copied, setCopied] = useState(false);
  const content = children ?? text;
  const valueToCopy =
    typeof copyText === "string"
      ? copyText
      : typeof text === "string"
        ? text
        : "";

  const handleCopy = async (event) => {
    if (!valueToCopy) return;
    event.preventDefault();
    event.stopPropagation();

    try {
      await navigator.clipboard.writeText(valueToCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const classNames = [styles.root, className].filter(Boolean).join(" ");

  if (url) {
    return (
      <span className={classNames}>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {content}
        </Link>
        {valueToCopy ? (
          <button
            type="button"
            className={styles.copy}
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy"}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        ) : null}
      </span>
    );
  }

  if (valueToCopy) {
    return (
      <button type="button" className={classNames} onClick={handleCopy}>
        <span className={styles.content}>{content}</span>
        <span className={styles.copy}>{copied ? "Copied" : "Copy"}</span>
      </button>
    );
  }

  return <span className={classNames}>{content}</span>;
}
