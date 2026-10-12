// CopyOrLink.js
// - Renders a text that can either be copied to clipboard or open a URL in a new tab.
// - Displays a tooltip on hover/click to indicate action or copied status.

import React, { useState, useRef } from "react";

const CopyOrLink = ({ text, copyText, url }) => {
  const [tooltip, setTooltip] = useState("");
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  const showTooltip = () => {
    if (copyText) setTooltip("Click to copy");
    else if (url) setTooltip(url);
    setVisible(true);
  };

  const hideTooltip = () => {
    if (tooltip === "Copied!") return; // keep copied message visible
    setVisible(false);
  };

  const handleClick = async () => {
    if (copyText) {
      try {
        await navigator.clipboard.writeText(copyText);
        setTooltip("Copied!");
        setVisible(true);

        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setTooltip("Click to copy");
          setVisible(false);
        }, 1500);
      } catch (err) {
        setTooltip("Failed to copy");
        setVisible(true);
      }
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <span
      style={{
        position: "relative",
        display: "flex", alignItems: "center",
        cursor: "pointer",
      }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={handleClick}
    >
      {/* Stable wrapper for GSAP or animations */}
      <span
        data-no-split="true"
        style={{ userSelect: "none", display: "flex", alignItems: "center" }}
      >
        {text}
      </span>

      {/* Tooltip */}
      {visible && (
        <span
          style={{
            position: "absolute",
            bottom: "120%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          {tooltip}
          <span
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid rgba(0,0,0,0.85)",
            }}
          />
        </span>
      )}
    </span>
  );
};

export default CopyOrLink;
