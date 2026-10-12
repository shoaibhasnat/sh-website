// Reb2bTracker.jsx
// Loads the RB2B visitor identification script once on mount.
// Renders nothing — purely a side-effect component.

import { useEffect } from "react";

const REB2B_KEY = "0NW1GHZDJ8O4";

export default function Reb2bTracker() {
  useEffect(() => {
    if (window.reb2b?.loaded) return;

    window.reb2b = { loaded: true };

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${REB2B_KEY}/${REB2B_KEY}.js.gz`;

    const first = document.getElementsByTagName("script")[0];
    first.parentNode.insertBefore(script, first);
  }, []);

  return null;
}