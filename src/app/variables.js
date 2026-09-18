/* =========================
   Design tokens
========================= */

export const fonts = {
  primary: '"Quicksand", sans-serif',
  secondary: '"Arial", sans-serif',
  tertiary: '"Times New Roman", serif',
};

export const fontSize = {
  xxs: "10px",
  xs: "12px",
  sm: "14px",
  md: "16px",
  mdLg: "18px",
  standard: "20px",
  lg: "24px",
  xl: "28px",
  xxl: "32px",
};

export const heading = {
  xs: "20px",
  sm: "26px",
  default: "32px",
  lg: "38px",
  xl: "48px",
  xxl: "58px",
  xxxl: "68px",
  xxxxl: "80px",
};

export const description = "16px";

export const fontWeight = {
  light: 400,
  regular: 500,
  medium: 600,
  bold: 700,
};

export const layout = {
  paddingCard: "16px 24px",
  paddingLayout: "32px 64px",
  radius: "8px",
  rounded: "100px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

export const colors = {
  /* Accessible primary: ≥4.5:1 with white text (WCAG AA) */
  primary: "#007099",
  primaryHover: "#005f82",
  primaryBright: "#00b3ff",
  primaryLight: "#daedff",
  primaryLightHover: "#b3d9ff",

  text: "#00213a",
  /* Accessible muted text on white */
  secondary: "#5a6b7c",
  secondaryLight: "#4a5a6a",

  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",

  light: "#daedff",
  dark: "#001830",
};

export const cursor = {
  default: 'url("/images/pages/cursor/cursor.png") 8 8, auto',
  hover: 'url("/images/pages/cursor/cursor-hover.png") 8 8, auto',
};

/** Apply once on :root / <html> — do not redeclare in components */
export const cssVariables = {
  "--color-primary": colors.primary,
  "--color-primary-hover": colors.primaryHover,
  "--color-primary-bright": colors.primaryBright,
  "--color-primary-light": colors.primaryLight,
  "--color-primary-light-hover": colors.primaryLightHover,
  "--color-text": colors.text,
  "--color-secondary": colors.secondary,
  "--color-secondary-light": colors.secondaryLight,
  "--color-dark": colors.dark,
  "--color-light": colors.light,
  "--font-family-primary": fonts.primary,
  "--font-size-xxs": fontSize.xxs,
  "--font-size-xs": fontSize.xs,
  "--font-size-sm": fontSize.sm,
  "--font-size-md": fontSize.md,
  "--font-size-md-lg": fontSize.mdLg,
  "--font-size-standard": fontSize.standard,
  "--font-size-lg": fontSize.lg,
  "--font-size-xl": fontSize.xl,
  "--font-size-2xl": fontSize.xxl,
  "--heading-xs": heading.xs,
  "--heading-sm": heading.sm,
  "--heading": heading.default,
  "--heading-lg": heading.lg,
  "--heading-xl": heading.xl,
  "--heading-2xl": heading.xxl,
  "--heading-3xl": heading.xxxl,
  "--heading-4xl": heading.xxxxl,
  "--font-weight-light": String(fontWeight.light),
  "--font-weight-regular": String(fontWeight.regular),
  "--font-weight-medium": String(fontWeight.medium),
  "--font-weight-bold": String(fontWeight.bold),
  "--radius": layout.radius,
  "--rounded": layout.rounded,
  "--padding-card": layout.paddingCard,
  "--padding-layout": layout.paddingLayout,
  "--box-shadow": layout.boxShadow,
};
