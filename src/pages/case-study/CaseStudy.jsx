import PortfolioMain from "../../components/pages/portfolio/PortfolioMain";

const CaseStudy = ({ private: isPrivate = false }) => {
  return <PortfolioMain private={isPrivate} />;
};

export default CaseStudy;
