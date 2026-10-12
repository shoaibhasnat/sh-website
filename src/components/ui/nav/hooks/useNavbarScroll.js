import { useEffect, useState } from "react";
import { setupNavbarScroll } from "../utils/NavUtils";

export const useNavbarScroll = (navRef) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const cleanup = setupNavbarScroll(navRef, setIsScrolled);
    return cleanup;
  }, [navRef]);

  return { isScrolled };
};
