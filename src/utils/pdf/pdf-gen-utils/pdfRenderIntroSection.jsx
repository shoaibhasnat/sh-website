import { pdfInitialization } from "./pdfInitialization";
import { drawText, loadImage, setPdfFont } from "./pdfUtilFunctions";

export const pdfRenderIntroSection = async (introSection, startY, doc) => {
  const { layout, colors, fonts, spacing, pageWidth, pageHeight, margin } =
    await pdfInitialization();

  doc.addPage();
  doc.setFillColor(...colors.pageBg);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  let y = 36;
  const containerPadding = 16;
  const containerWidth = pageWidth - margin * 2;
  const containerBorderRadius = 16;

  // --- Container Box ---
  const containerHeightEstimate = 350; // approximate, will grow dynamically if needed
  doc.setFillColor(...colors.pageBg); // background
  doc.setLineWidth(1); // 1px
  doc.roundedRect(
    margin,
    y,
    containerWidth,
    containerHeightEstimate,
    containerBorderRadius,
    containerBorderRadius,
    "F",
  );

  // Content start position
  let contentY = y + containerPadding + containerPadding;
  const boxWidth = containerWidth / 2 - containerPadding * 1.5;
  const textGap = 16;

  // --- Left Box: Client Details ---
  const clientX = margin + containerPadding;

  let clientTextY = contentY;

  clientTextY = drawText(doc, "Our Client", clientX, clientTextY, {
    fontSize: 18,
    fontStyle: "bold",
    color: [0, 153, 255],
    align: "left",
    lineGap: 20,
  });

  clientTextY = drawText(
    doc,
    introSection.clientDetail.clientName,
    clientX,
    clientTextY,
    {
      fontSize: 14,
      fontStyle: "bold",
      color: colors.text,
      align: "left",
      lineGap: 20,
    },
  );

  clientTextY = drawText(
    doc,
    `Company: ${introSection.clientDetail.companyName}`,
    clientX,
    clientTextY,
    {
      fontSize: 12,
      fontStyle: "normal",
      color: colors.secondaryText,
      align: "left",
      lineGap: textGap,
    },
  );

  clientTextY = drawText(
    doc,
    `Industry: ${introSection.clientDetail.clientIndustry}`,
    clientX,
    clientTextY,
    {
      fontSize: 12,
      fontStyle: "normal",
      color: colors.secondaryText,
      align: "left",
      lineGap: textGap,
    },
  );
  clientTextY += 5;

  clientTextY = drawText(doc, "Services Offering", clientX, clientTextY, {
    fontSize: 14,
    fontStyle: "bold",
    color: colors.text,
    align: "left",
    lineGap: 15,
  });

  setPdfFont(doc, "normal");
  doc.setFontSize(12);
  doc.setTextColor(...colors.secondaryText);
  introSection.clientDetail.clientServices.forEach((service) => {
    doc.text(`\u2022 ${service}`, clientX + 5, clientTextY);
    clientTextY += textGap;
  });

  // --- Right Box: Summary + Problem Statement ---
  const rightX = margin + containerWidth / 2 + containerPadding / 2;
  let rightY = contentY + 30;

  rightY = drawText(doc, introSection.summary.title, rightX, rightY, {
    width: boxWidth,
    fontSize: 16,
    fontStyle: "bold",
    color: colors.text,
    align: "left",
    lineGap: textGap,
  });
  rightY += 10;

  // rightY = drawText(doc, introSection.summary.highlight, rightX, rightY, {
  //   width: boxWidth,
  //   fontSize: 14,
  //   fontStyle: "bold",
  //   color: [0, 153, 255],
  //   align: "left",
  //   lineGap: textGap,
  // });
  // rightY += 5;

  rightY = drawText(doc, introSection.summary.description, rightX, rightY, {
    width: boxWidth,
    fontSize: 12,
    fontStyle: "normal",
    color: colors.secondaryText,
    align: "left",
    lineGap: textGap,
  });
  rightY += 25;

  rightY = drawText(doc, "Problem Statement", clientX, rightY, {
    fontSize: 14,
    fontStyle: "bold",
    color: colors.text,
    align: "left",
    lineGap: 18,
  });

  setPdfFont(doc, "normal");
  doc.setFontSize(12);
  doc.setTextColor(...colors.secondaryText);
  introSection.clientDetail.problemStatement.forEach((problem) => {
    doc.text(`\u2022 ${problem}`, clientX + 5, rightY);
    rightY += 20;
  });

  // Return bottom y for next section
  const containerBottom = Math.max(clientTextY, rightY);
  return containerBottom;
};
