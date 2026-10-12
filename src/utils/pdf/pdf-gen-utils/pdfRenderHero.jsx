import { pdfInitialization } from "./pdfInitialization";
import { drawText, loadImage } from "./pdfUtilFunctions";

export const pdfRenderHero = async (banner, startY, doc) => {
  const { layout, colors, fonts, spacing, pageWidth, pageHeight } =
    await pdfInitialization();

  doc.setFillColor(...colors.pageBg);
  doc.rect(0, 0, pageWidth, pageHeight, "F");
  let y = startY;
  const centerX = pageWidth / 2;
  // --- Logo (centered and clickable) ---
  // try {
  //   const logoData = await loadImage("/images/pdf-images/logo.png"); // path to your logo
  //   const logo = new Image();
  //   logo.src = logoData;
  //   await logo.decode();

  //   const logoMaxWidth = 170; // adjust as needed
  //   const aspect = logo.height / logo.width;
  //   const logoWidth = logoMaxWidth;
  //   const logoHeight = logoWidth * aspect;

  //   const logoX = centerX - logoWidth / 2; // center horizontally
  //   doc.addImage(logoData, "PNG", logoX, y, logoWidth, logoHeight);

  //   // Make logo clickable
  //   doc.link(logoX, y, logoWidth, logoHeight, {
  //     url: "https://systemheuristics.com",
  //   });

  //   y += logoHeight + 60; // spacing after logo
  // } catch (err) {
  //   console.warn("Logo failed to load:", err);
  // }

  // --- Title (centered) ---
  y = drawText(doc, banner.heading, centerX, y, {
    width: layout.textWidth * 2,
    fontSize: fonts.title.size,
    fontStyle: fonts.title.style,
    color: colors.text,
    align: "center",
    lineGap: 30,
  });
  y += spacing.titleGap ;

  // --- Banner Image (centered) ---
  if (banner.bannerImage) {
    const imgData = await loadImage(banner.bannerImage);
    const img = new Image();
    img.src = imgData;
    await img.decode();

    const MAX_WIDTH = 450;
    const MAX_HEIGHT = 400;

    const widthRatio = MAX_WIDTH / img.width;
    const heightRatio = MAX_HEIGHT / img.height;
    const scale = Math.min(widthRatio, heightRatio, 1); // never upscale

    const imgWidth = img.width * scale;
    const imgHeight = img.height * scale;

    const imgX = centerX - imgWidth / 2; // center horizontally

    doc.addImage(imgData, "PNG", imgX, y, imgWidth, imgHeight);

    y += imgHeight + spacing.lineGap + 30;
  }

  // --- Description (centered) ---
  y = drawText(doc, banner.description, centerX, y, {
    width: layout.textWidth * 1.8,
    fontSize: fonts.description.size,
    fontStyle: fonts.description.style,
    color: colors.secondaryText,
    align: "center",
    lineGap: spacing.lineGap,
  });

  return y; // return next Y position
};
