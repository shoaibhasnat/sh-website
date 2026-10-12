import { useEffect, useMemo, useRef } from "react";
import { Container } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PortfolioData } from "../../../../../data/pages/portfolio/PortfolioData";
import Slider from "../../../../ui/slider/Slider";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";

const refreshScrollTriggerSafely = () => {
  if (typeof window === "undefined") return;

  const refresh = () => {
    try {
      ScrollTrigger.refresh(true);
    } catch {}
  };

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(refresh);
  });

  window.setTimeout(refresh, 250);
  window.setTimeout(refresh, 650);
};

const ProjectsSection = ({ service }) => {
  const sectionRef = useRef(null);

  const name = service?.name ?? "";
  const description = service?.description ?? "";
  const projectIds = Array.isArray(service?.projectIds)
    ? service.projectIds
    : [];

  const slides = useMemo(() => {
    const projectsList = Array.isArray(PortfolioData?.projectsSection)
      ? PortfolioData.projectsSection
      : [];

    return projectIds
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
  }, [projectIds]);

  useEffect(() => {
    if (!slides.length) return undefined;

    refreshScrollTriggerSafely();

    const section = sectionRef.current;
    if (!section) return undefined;

    const images = Array.from(section.querySelectorAll("img"));
    const cleanupHandlers = [];

    images.forEach((image) => {
      if (image.complete) return;

      const handleLoad = () => refreshScrollTriggerSafely();
      image.addEventListener("load", handleLoad, { once: true });
      image.addEventListener("error", handleLoad, { once: true });

      cleanupHandlers.push(() => {
        image.removeEventListener("load", handleLoad);
        image.removeEventListener("error", handleLoad);
      });
    });

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());
    };
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <Container maxWidth="xl" ref={sectionRef}>
      <SectionIntro
        title={
          name ? `See Our Projects Related to ${name}` : "See Our Projects"
        }
        description={description}
      />

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
    </Container>
  );
};

export default ProjectsSection;
