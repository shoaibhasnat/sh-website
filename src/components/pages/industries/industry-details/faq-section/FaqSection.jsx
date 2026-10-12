import FaqComponent from "../../../../ui/faq-component/FaqComponent";

const FaqSection = ({ industry }) => {
  const faqsSection = industry?.faqsSection;

  // If no FAQ data, don’t render
  if (
    !faqsSection ||
    (Array.isArray(faqsSection) && faqsSection.length === 0) ||
    (typeof faqsSection === "object" &&
      !Array.isArray(faqsSection) &&
      Object.keys(faqsSection).length === 0)
  ) {
    return null;
  }

  return <FaqComponent data={faqsSection} />;
};

export default FaqSection;
