import { Suspense } from "react";
import ProjectsHero from "./projects-hero/ProjectsHero";
import ProjectsListing from "./ProjectsListing";
import ProjectsCta from "./projects-cta/ProjectsCta";

export default function ProjectsMain({ industryParam }) {
  return (
    <>
      <ProjectsHero />
      <Suspense fallback={null}>
        <ProjectsListing industryParam={industryParam} />
      </Suspense>
      <ProjectsCta />
    </>
  );
}
