import { useEffect, useState } from "react";
import { addFooter, addWatermark } from "./pdf-gen-utils/pdfUtilFunctions";
import { data } from "./pdf-gen-utils/Data";
import { pdfRenderHero } from "./pdf-gen-utils/pdfRenderHero";
import { pdfRenderFAQsSection } from "./pdf-gen-utils/pdfRenderFAQsSection";
import { pdfRenderProposedSolutionSection } from "./pdf-gen-utils/pdfRenderProposedSolutionSection";
import { pdfRenderChallengesSection } from "./pdf-gen-utils/pdfRenderChallengesSection";
import { pdfRenderMainFeatures } from "./pdf-gen-utils/pdfRenderMainFeatures";
import { pdfRenderIntroSection } from "./pdf-gen-utils/pdfRenderIntroSection";
import { pdfInitialization } from "./pdf-gen-utils/pdfInitialization";
import Button from "../../components/ui/button/Button";

const PDFPage = ({ project }) => {
  const [pdfUrl, setPdfUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const revokeOldUrl = (oldUrl) => {
    if (oldUrl) URL.revokeObjectURL(oldUrl);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => revokeOldUrl(pdfUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadFromUrl = (url, filename = "System-Heuristics.pdf") => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const buildPdfAndGetUrl = async () => {
    const { doc } = await pdfInitialization();

    let y = 60;

    // Render sections
    y = await pdfRenderHero(project.banner, y, doc);
    y = await pdfRenderIntroSection(project.introSection, y, doc);
    y = await pdfRenderMainFeatures(project.mainFeatures, y, doc);
    y = await pdfRenderChallengesSection(project.challengesFaced, y, doc);
    y = await pdfRenderProposedSolutionSection(project.proposedSolution, y, doc);
    y = await pdfRenderFAQsSection(project.faqs, y, doc);

    // Footer + watermark on all pages
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      // await addWatermark(doc, "/images/pdf-images/watermark.png");
      // addFooter(doc, i);
    }

    const pdfBlob = doc.output("blob");
    return URL.createObjectURL(pdfBlob);
  };

  const generateAndDownload = async () => {
    if (isGenerating) return;

    try {
      setIsGenerating(true);
      setShowPreview(false);

      // Revoke previous url if user regenerates
      revokeOldUrl(pdfUrl);

      const url = await buildPdfAndGetUrl();
      setPdfUrl(url);

      // Download immediately
      downloadFromUrl(url, project.projectName || "System-Heuristics.pdf");
    } finally {
      setIsGenerating(false);
    }
  };

  const canPreview = Boolean(pdfUrl) && !isGenerating;

  return (
    <div
      style={{
        display: "none",
      }}
    >
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: window.innerWidth < 900 ? "center" : "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "start",
            flexDirection: "column",
            padding: "0 0",
          }}
        >
          <Button
            onClick={generateAndDownload}
            disabled={isGenerating}
            style={{
              cursor: isGenerating ? "not-allowed" : "pointer",
            }}
            width="350px"
          >
            {isGenerating ? "Generating..." : "Generate & Download PDF"}
          </Button>

          {/* <button
          onClick={() => setShowPreview((v) => !v)}
          disabled={!canPreview}
          style={{
            padding: "12px 18px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            cursor: canPreview ? "pointer" : "not-allowed",
            opacity: canPreview ? 1 : 0.6,
          }}
        >
          {showPreview ? "Hide Preview" : "Show Preview"}
        </button> */}
        </div>

        {/* {showPreview && pdfUrl && (
        <iframe
          src={pdfUrl}
          width="100%"
          height="700px"
          style={{ border: "1px solid #ccc", marginTop: "2rem" }}
          title="PDF Preview"
        />
      )} */}
      </div>
    </div>
  );
};

export default PDFPage;
