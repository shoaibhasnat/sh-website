import { pdfInitialization } from "./pdfInitialization";
import { drawText, setPdfFont } from "./pdfUtilFunctions";

export const pdfRenderProposedSolutionSection = async (
  proposedSolution,
  startY,
  doc,
) => {
  const { layout, colors, fonts, spacing, pageWidth, margin, pageHeight } =
    await pdfInitialization();
  let y = startY;
  const containerPadding = 16;
  const containerWidth = pageWidth - margin * 2;
  const containerBorderRadius = 16;
  const textGap = 14;
  const bulletSize = 6;
  const iconSize = 20; // width/height of tech icons
  const iconSpacing = 35; // horizontal spacing between icons
  const rowSpacing = 12; // vertical spacing between icon rows

  // --- New page if needed ---
  if (y + 300 > pageHeight - margin) {
    doc.addPage();
    doc.setFillColor(...colors.pageBg);
    doc.rect(0, 0, pageWidth, pageHeight, "F");
    y = margin;
  }

  let contentY = y + containerPadding;

  // --- Section Title ---
  contentY = drawText(
    doc,
    proposedSolution.heading,
    margin + containerWidth / 2,
    contentY,
    {
      width: containerWidth - containerPadding * 2,
      fontSize: 18,
      fontStyle: "bold",
      color: colors.text,
      align: "center",
      lineGap: 24,
    },
  );
  contentY += 8;

  // --- Description ---
  contentY = drawText(
    doc,
    proposedSolution.description,
    margin + containerPadding,
    contentY,
    {
      width: containerWidth - containerPadding * 2,
      fontSize: 12,
      fontStyle: "normal",
      color: colors.secondaryText,
      align: "justify",
      lineGap: 18,
    },
  );
  contentY += 16;

  // --- Bullet Points ---
  proposedSolution.points.forEach((point) => {
    const bulletX = margin + containerPadding;
    const textX = bulletX + bulletSize + 6;

    doc.setFillColor(...colors.highlight);
    doc.circle(bulletX + bulletSize / 2, contentY - 6, bulletSize / 2, "F");

    contentY = drawText(doc, point, textX, contentY, {
      width: containerWidth - containerPadding * 3 - bulletSize,
      fontSize: 12,
      fontStyle: "normal",
      color: colors.text,
      align: "left",
      lineGap: 16,
    });

    contentY += 4;
  });
  contentY += 12;

  // --- Tech Stack Icons ---
  // --- Tech Stack Icons ---
  if (proposedSolution.techStackUsed && proposedSolution.techStackUsed.length) {
    let currentX = margin + containerPadding;
    let rowY = contentY;
    const maxRowWidth = containerWidth - containerPadding * 2;
    const iconLabelGap = 4; // space between icon and name

    for (let i = 0; i < proposedSolution.techStackUsed.length; i++) {
      const tech = proposedSolution.techStackUsed[i];

      // If icon exceeds container width, wrap to next row
      if (currentX + iconSize > margin + containerPadding + maxRowWidth) {
        currentX = margin + containerPadding;
        rowY += iconSize + 20 + rowSpacing; // 20 = icon + label height approx
      }

      // Draw icon
      try {
        doc.addImage(tech.image, "PNG", currentX, rowY, iconSize, iconSize);
      } catch (err) {
        console.warn("Failed to draw tech icon:", tech.name);
      }

      // --- Draw tech name centered below icon ---
      const textX = currentX + iconSize / 2; // center of icon
      const textY = rowY + iconSize + iconLabelGap + 10; // adjust 10 for text height
      setPdfFont(doc, "normal");
      doc.setFontSize(8);
      doc.setTextColor(...colors.text);
      doc.text(tech.name, textX, textY, { align: "center" });

      currentX += iconSize + iconSpacing;
    }

    // Update contentY for next section
    contentY = rowY + iconSize + 20 + containerPadding; // 20 = icon + label height
  }

  // --- Draw container after measuring content height ---
  const containerHeight = contentY - y;
  doc.setFillColor(...colors.pageBg);
  doc.setLineWidth(1);

  return contentY;
};
