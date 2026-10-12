import { AboutUsData } from "../../../../data/pages/about-us/AboutUsData";
import FaqComponent from "../../../ui/faq-component/FaqComponent";

const FaqSection = () => {
  const faqs = Array.isArray(AboutUsData?.faqSection?.faqs)
    ? AboutUsData.faqSection.faqs
    : [];

  // ✅ nothing to render safely
  if (faqs.length === 0) return null;

  return <FaqComponent data={faqs} />;
};

export default FaqSection;
