
import { getQuicksandFontData } from "./quicksandFontData";

const isDataUrl = (value) => typeof value === "string" && value.startsWith("data:");
const extractBase64FromDataUrl = (dataUrl) => {
  const commaIndex = dataUrl.indexOf(",");
  return commaIndex >= 0 ? dataUrl.slice(commaIndex + 1) : dataUrl;
};

let jsPDFPromise = null;
const getJsPDF = async () => {
  if (!jsPDFPromise) {
    jsPDFPromise = import("jspdf").then((mod) => mod.default || mod);
  }
  return jsPDFPromise;
};

export const pdfInitialization = async () => {
  const jsPDF = await getJsPDF();
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  // Register Quicksand fonts only when valid base64 font data is provided.
  try {
    const fontData = getQuicksandFontData();

    if (fontData.regular && isDataUrl(fontData.regular)) {
      const regularBase64 = extractBase64FromDataUrl(fontData.regular);
      doc.addFileToVFS("Quicksand-Regular.ttf", regularBase64);
      doc.addFont("Quicksand-Regular.ttf", "Quicksand", "normal");
    }

    if (fontData.bold && isDataUrl(fontData.bold)) {
      const boldBase64 = extractBase64FromDataUrl(fontData.bold);
      doc.addFileToVFS("Quicksand-Bold.ttf", boldBase64);
      doc.addFont("Quicksand-Bold.ttf", "Quicksand", "bold");
    }
  } catch (error) {
    // Font registration failed. Use standard fallback fonts instead.
  }

  // =========================
  // Variables / Theme
  // =========================
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 30;

  const colors = {
    pageBg: [218, 237, 255], // #daedff
    text: [0, 33, 58], // --color-text
    secondaryText: [143, 158, 174], // --color-secondary
    highlight: [0, 179, 255], // highlight color
    buttonBorder: [0, 179, 255],
    buttonText: [0, 179, 255],
  };

  const fonts = {
    title: { size: 24, style: "bold" },
    highlight: { size: 20, style: "bold" },
    description: { size: 12, style: "normal" },
    button: { size: 14, style: "bold" },
  };

  const layout = {
    textX: margin,
    textWidth: pageWidth / 2 - margin * 1.5,
    imageX: pageWidth / 2 + margin / 2,
    imageHeight: 300,
    singleImageWidth: 200,
    singleImageHeight: 150,
  };

  const spacing = {
    lineGap: 20,
    titleGap: 25,
    highlightGap: 25,
    afterButton: 30,
  };
  return { doc, pageWidth, pageHeight, colors, fonts, layout, spacing ,margin};
};
