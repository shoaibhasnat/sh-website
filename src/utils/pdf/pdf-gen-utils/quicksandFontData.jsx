// This module provides Quicksand font data for jsPDF registration
// Fonts are loaded dynamically from the public/fonts directory

export const getQuicksandFontData = () => {
  // Return font URLs - jsPDF can load fonts from URLs
  // Note: This requires the fonts to be publicly accessible
  
  return {
    regular: "/fonts/Quicksand-Regular.woff2",
    bold: "/fonts/Quicksand-Bold.woff2",
    medium: "/fonts/Quicksand-Medium.woff2",
    semibold: "/fonts/Quicksand-SemiBold.woff2",
  };
};

// Alternative: Load and encode fonts as base64 for embedded use
export const loadFontAsBase64 = async (fontPath) => {
  try {
    const response = await fetch(fontPath);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error(`Failed to load font from ${fontPath}:`, error);
    return null;
  }
};

// Preload and cache fonts
let fontCache = {};

export const preloadQuicksandFonts = async () => {
  const fontData = getQuicksandFontData();
  
  try {
    fontCache.regular = await loadFontAsBase64(fontData.regular);
    fontCache.bold = await loadFontAsBase64(fontData.bold);
  } catch (error) {
    console.warn("Error preloading fonts:", error);
  }
  
  return fontCache;
};

export const getCachedFonts = () => fontCache;
