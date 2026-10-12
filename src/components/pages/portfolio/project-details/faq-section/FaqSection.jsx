import FaqComponent from "../../../../ui/faq-component/FaqComponent";
const FaqSection = ({ project }) => {
  // Data absence checks
  if (!project || !project.faqs || !Array.isArray(project.faqs)) {
    return null;
  }

  return <FaqComponent data={project?.faqs} />;
};

export default FaqSection;
