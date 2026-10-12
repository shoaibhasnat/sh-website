import FaqComponent from "../../../../ui/faq-component/FaqComponent";

const FaqSection = ({ service }) => {
  const faqSection = service?.faqSection;

  // If FAQ data is missing or empty, don’t render
  if (
    !faqSection ||
    (Array.isArray(faqSection) && faqSection.length === 0) ||
    (typeof faqSection === "object" &&
      !Array.isArray(faqSection) &&
      Object.keys(faqSection).length === 0)
  ) {
    return null;
  }

  return <FaqComponent data={faqSection} />;
};

export default FaqSection;
