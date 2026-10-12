import { pdfInitialization } from "./pdfInitialization";
import { drawText, loadImage } from "./pdfUtilFunctions";

export const pdfRenderMainFeatures = async (mainFeatures, startY, doc) => {
  const { layout, colors, fonts, spacing, pageWidth, pageHeight, margin } =
    await pdfInitialization();

  let y = startY + 16;
  const containerPadding = 16;
  const containerWidth = pageWidth - margin * 2;
  const containerBorderRadius = 16;
  const textGap = 16;
  const boxSpacing = 12; // space between feature boxes

  // Check if we need a new page
  if (y + 350 > pageHeight - margin) {
    doc.addPage();
    doc.setFillColor(...colors.pageBg);
    doc.rect(0, 0, pageWidth, pageHeight, "F");
    y = margin;
  }

  // --- Outer Container (no border now) ---
  const containerHeightEstimate = 120; // approximate, will expand with content
  doc.setFillColor(...colors.pageBg);
  doc.roundedRect(
    margin,
    y,
    containerWidth,
    containerHeightEstimate,
    containerBorderRadius,
    containerBorderRadius,
    "F", // only fill, no border
  );

  // Content start position
  let contentY = y + containerPadding + containerPadding;
  const textWidth = containerWidth - containerPadding * 2;
  const centerX = margin + containerWidth / 2;

  // --- Title ---
  contentY = drawText(doc, mainFeatures.heading, centerX, contentY, {
    width: textWidth,
    fontSize: 18,
    fontStyle: "bold",
    color: colors.text,
    align: "center",
    lineGap: 24,
  });

  // --- Description ---
  contentY = drawText(doc, mainFeatures.description, centerX, contentY, {
    width: textWidth,
    fontSize: 12,
    fontStyle: "normal",
    color: colors.secondaryText,
    align: "center",
    lineGap: 20,
  });
  contentY += 10;

  // --- Features List (one per line, dynamic height) ---
  mainFeatures.features.forEach((feature) => {
    const boxWidth = containerWidth / 1.1; // adjust width as needed
    const boxX = margin + (containerWidth - boxWidth) / 2; // center horizontally

    // Calculate height dynamically based on text
    const splitText = doc.splitTextToSize(feature, boxWidth - 16); // 16px padding
    const boxHeight = splitText.length * 14 + 16; // line height + padding

    // Draw feature box with border
    doc.setFillColor(...colors.pageBg); // background fill
    doc.setDrawColor(255, 255, 255); // white border
    doc.setLineWidth(1); // 1px border
    doc.roundedRect(boxX, contentY + -12, boxWidth, boxHeight, 6, 6, "FD"); // fill + border

    // Feature text (centered inside box)
    drawText(doc, feature, boxX + boxWidth / 2, contentY + 6, {
      width: boxWidth - 16,
      fontSize: 12,
      fontStyle: "normal",
      color: colors.text,
      align: "center",
      lineGap: 14,
    });

    contentY += boxHeight + 12; // move y for next feature (spacing)
  });

  // Return bottom y for next section
  return contentY + containerPadding;
};
