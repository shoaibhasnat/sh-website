// Font registration for jsPDF
// Quicksand fonts - base64 encoded

export const registerFonts = (doc) => {
  // Note: For production, consider using jsPDF's font registration with URL-based fonts
  // or bundled font files. This is a placeholder for font registration setup.
  
  // jsPDF supports standard fonts: Helvetica, Times, Courier
  // For custom fonts like Quicksand, you have two options:
  
  // Option 1: Use web font loading (recommended for TTF files)
  // This requires additional setup with font loaders
  
  // Option 2: Use standard fonts as fallback
  // Already implemented in the code
  
  return doc;
};

// Alternative: Use this function if you have base64 encoded fonts
export const registerQuicksandFont = (doc) => {
  try {
    // Example of how to add custom fonts if you have base64 encoded data
    // doc.addFont(fontUrl, 'Quicksand', 'normal');
    // doc.addFont(fontUrl, 'Quicksand', 'bold');
  } catch (error) {
    console.warn("Font registration failed, using fallback fonts", error);
  }
  return doc;
};
