import { toggleMobileMenuGsap } from "../utils/NavUtils";

export const useMobileMenu = ({
  mobileMenuRef,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  styles,
}) => {
  const toggleMobileMenu = () =>
    toggleMobileMenuGsap(
      mobileMenuRef,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      styles
    );

  return { toggleMobileMenu };
};
