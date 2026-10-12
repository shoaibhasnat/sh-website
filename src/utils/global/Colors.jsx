// src/utils/colors.js
export const getCssVar = (name) => {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
};

export const Colors = {
  primary: () => getCssVar("--color-primary"),
  primaryHover: () => getCssVar("--color-primary-hover"),
  primaryLight: () => getCssVar("--color-primary-light"),
  primaryLightHover: () => getCssVar("--color-primary-light-hover"),

  text: () => getCssVar("--color-text"),

  secondary: () => getCssVar("--color-secondary"),
  secondaryLight: () => getCssVar("--color-secondary-light"),

  success: () => getCssVar("--color-success"),
  danger: () => getCssVar("--color-danger"),
  warning: () => getCssVar("--color-warning"),
  info: () => getCssVar("--color-info"),

  light: () => getCssVar("--color-light"),
  dark: () => getCssVar("--color-dark"),
};
