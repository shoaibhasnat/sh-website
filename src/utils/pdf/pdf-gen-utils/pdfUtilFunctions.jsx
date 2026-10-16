export const loadImage = async (url) => {
  const img = new Image();
  img.src = url;
  await img.decode(); // wait for image to load
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx?.drawImage(img, 0, 0);
  return canvas.toDataURL("image/png");
};

export const setPdfFont = (doc, fontStyle = "normal") => {
  try {
    doc.setFont("Quicksand", fontStyle);
  } catch (error) {
    const fallbackName = "Helvetica";
    const fallbackStyle = fontStyle === "bold" ? "bold" : "normal";
    doc.setFont(fallbackName, fallbackStyle);
  }
};

// Helper: Add footer to a page
export const addFooter = (doc, pageNumber) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 30;

  const footerY = pageHeight - 20; // 20pt from bottom
  const fontSize = 10;
  const color = [143, 158, 174]; // gray

  // --- Draw thin line above footer ---
  doc.setDrawColor(...color); // same gray
  doc.setLineWidth(0.3); // 0.5pt
  doc.line(margin, footerY - 14, pageWidth - margin, footerY - 16); // horizontal line above text

  // --- Footer Text ---
  setPdfFont(doc, "normal");
  doc.setFontSize(fontSize);
  doc.setTextColor(...color);

  // Left
  doc.text("+92 334 4377198", margin, footerY);

  // Center
  const centerText = "systemheuristics.com";
  const centerX = pageWidth / 2 - doc.getTextWidth(centerText) / 2;
  doc.text(centerText, centerX, footerY);

  // Right
  const rightText = "info@systemheuristics.com";
  const rightX = pageWidth - margin - doc.getTextWidth(rightText);
  doc.text(rightText, rightX, footerY);
};

export const addWatermark = async (doc, imgUrl) => {
  const imgData = await loadImage(imgUrl); // reuse your loadImage function
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const watermarkWidth = 450; // adjust size
  const img = new Image();
  img.src = imgData;
  await img.decode();
  const aspect = img.height / img.width;
  const watermarkHeight = watermarkWidth * aspect;

  const x = pageWidth / 2 - watermarkWidth / 2;
  const y = pageHeight / 2 - watermarkHeight / 2;

  // Set opacity
  doc.setGState(new doc.GState({ opacity: 0.03 })); // very faint watermark
  doc.addImage(imgData, "PNG", x, y, watermarkWidth, watermarkHeight);
  doc.setGState(new doc.GState({ opacity: 1 })); // reset opacity
};

export const drawText = (doc, text, x, y, options = {}) => {
  const {
    width = 200,
    fontSize = 12,
    fontStyle = "normal",
    color = [0, 0, 0],
    align = "left",
    lineGap = 18,
  } = options;

  setPdfFont(doc, fontStyle);
  doc.setFontSize(fontSize);
  doc.setTextColor(...color);

  const lines = doc.splitTextToSize(text, width);

  lines.forEach((line, i) => {
    let textX = x;
    if (align === "center") {
      textX = x - doc.getTextWidth(line) / 2;
    } else if (align === "right") {
      textX = x - doc.getTextWidth(line);
    }
    doc.text(line, textX, y + i * lineGap);
  });

  return y + lines.length * lineGap; // return next Y
};
