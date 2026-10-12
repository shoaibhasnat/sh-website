import { pdfInitialization } from "./pdfInitialization";
import { drawText } from "./pdfUtilFunctions";

export const pdfRenderFAQsSection = async (faqs, startY, doc) => {
  const { layout, colors, fonts, spacing, pageWidth, margin, pageHeight } =
    await pdfInitialization();

  doc.addPage();
        doc.setFillColor(...colors.pageBg);
        doc.rect(0, 0, pageWidth, pageHeight, "F");

        let y = 60; // start y after top margin
        const containerPadding = 16;
        const containerWidth = pageWidth - margin * 2;
        const textGap = 12;
        const questionSpacing = 20;

        // --- Section Title ---
        let contentY = drawText(
          doc,
          "Frequently Asked Questions",
          margin + containerWidth / 2,
          y,
          {
            width: containerWidth - containerPadding * 2,
            fontSize: 18,
            fontStyle: "bold",
            color: colors.text,
            align: "center",
            lineGap: 24,
          },
        );
        contentY += 12;

        // --- Each FAQ ---
        faqs.forEach((faq, index) => {
          // Check page break for each FAQ
          if (contentY + 80 > pageHeight - margin) {
            doc.addPage();
            doc.setFillColor(...colors.pageBg);
            doc.rect(0, 0, pageWidth, pageHeight, "F");
            contentY = 60;
          }

          // Question Number + Question
          const questionText = `Q${index + 1}. ${faq.question}`;
          contentY = drawText(
            doc,
            questionText,
            margin + containerPadding,
            contentY,
            {
              width: containerWidth - containerPadding * 2,
              fontSize: 13,
              fontStyle: "bold",
              color: colors.text, // blue for questions
              align: "left",
              lineGap: 18,
            },
          );
          contentY += 4;

          // Answer
          contentY = drawText(
            doc,
            faq.answer,
            margin + containerPadding + 8, // slight indent for answer
            contentY,
            {
              width: containerWidth - containerPadding * 2 - 8,
              fontSize: 11,
              fontStyle: "normal",
              color: colors.secondaryText,
              align: "justify",
              lineGap: 16,
            },
          );

          contentY += questionSpacing; // spacing between FAQs
        });

        return contentY + containerPadding; // return bottom Y for next section
};
