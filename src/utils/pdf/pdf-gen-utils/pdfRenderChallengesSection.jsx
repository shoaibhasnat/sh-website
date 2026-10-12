import { pdfInitialization } from "./pdfInitialization";
import { drawText } from "./pdfUtilFunctions";

export const pdfRenderChallengesSection = async (challenges, startY, doc) => {
  const { layout, colors, fonts, spacing, pageWidth, margin, pageHeight } =
    await pdfInitialization();

  let y = startY;
  const containerPadding = 16;
  const containerWidth = pageWidth - margin * 2;
  const containerBorderRadius = 16;
  const textGap = 12;

  // Check if we need a new page
  if (y + 300 > pageHeight - margin) {
    doc.addPage();
    doc.setFillColor(...colors.pageBg);
    doc.rect(0, 0, pageWidth, pageHeight, "F");
    y = margin;
  }

  // --- Outer Container ---
  doc.setFillColor(...colors.pageBg); // background
  doc.setLineWidth(1);
  const containerHeightEstimate = 50 + challenges.length * 80; // rough estimate
  doc.roundedRect(
    margin,
    y,
    containerWidth,
    containerHeightEstimate,
    containerBorderRadius,
    containerBorderRadius,
    "F",
  );

  let contentY = y + containerPadding + containerPadding;

  // --- Section Title ---
  contentY = drawText(
    doc,
    "Challenges Faced",
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

  // --- Each Challenge ---
  challenges.forEach((challenge) => {
    // Challenge Title
    contentY = drawText(
      doc,
      challenge.title,
      margin + containerPadding,
      contentY,
      {
        width: containerWidth - containerPadding * 2,
        fontSize: 14,
        fontStyle: "bold",
        color: [0, 153, 255], // blue highlight for titles
        align: "left",
        lineGap: 18,
      },
    );

    // Challenge Description
    contentY = drawText(
      doc,
      challenge.description,
      margin + containerPadding,
      contentY,
      {
        width: containerWidth - containerPadding * 2,
        fontSize: 12,
        fontStyle: "normal",
        color: colors.secondaryText,
        align: "left",
        lineGap: 16,
      },
    );

    contentY += textGap; // spacing between challenges
  });

  return contentY + containerPadding; // return bottom Y for next section
};
