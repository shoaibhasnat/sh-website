import { Container } from "@mui/material";
import { PortfolioData } from "../../../../../data/pages/portfolio/PortfolioData";
import Slider from "../../../../ui/slider/Slider";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";

const ProjectsSection = ({ industry }) => {
  const name = industry?.name ?? "";
  const description = industry?.description ?? "";
  const projectIds = Array.isArray(industry?.projectIds)
    ? industry.projectIds
    : [];

  const projectsList = Array.isArray(PortfolioData?.projectsSection)
    ? PortfolioData.projectsSection
    : [];

  const slides = projectIds
    .map((id) => projectsList.find((p) => p?.id === id))
    .filter(Boolean)
    .map((project) => ({
      id: project.id,
      title: project.projectName ?? "",
      description: project.display?.description ?? "",
      imageUrl: project.projectImage ?? project.banner?.bannerImage ?? "",
      projectUrl: project.banner?.url ?? "#",
      features: Array.isArray(project.mainFeatures?.features)
        ? project.mainFeatures.features
        : [],
    }))
    .filter((s) => s.title || s.description || s.imageUrl);

  // If nothing meaningful exists, don’t render
  if (!slides.length && !name && !description) {
    return null;
  }

  return (
    <Container maxWidth="xl">
      {(name || description) && (
        <SectionIntro
          title={
            name ? `See Our Projects Related to ${name}` : "See Our Projects"
          }
          description={description}
        />
      )}

      {!!slides.length && (
        <div
          style={{
            minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slider slides={slides} autoPlayDelay={4000} />
        </div>
      )}
    </Container>
  );
};

export default ProjectsSection;
