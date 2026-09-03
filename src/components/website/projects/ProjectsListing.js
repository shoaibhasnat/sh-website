import FeaturedProjects from "./featured-projects/FeaturedProjects";
import ProjectsEmptyState from "./projects-empty-state/ProjectsEmptyState";
import ProjectsFilters from "./projects-filters/ProjectsFilters";
import ProjectsGrid from "./projects-grid/ProjectsGrid";
import {
  getFeaturedProjects,
  getIndustryHeading,
  getProjectsByIndustry,
  normalizeIndustryParam,
  ProjectsPageData,
} from "@/data/pages/projects/ProjectsData";
import styles from "./projects-listing.module.css";

export default function ProjectsListing({ industryParam }) {
  const industry = normalizeIndustryParam(industryParam);
  const projects = getProjectsByIndustry(industry);
  const featured = getFeaturedProjects(industry);
  const featuredSlugs = new Set(featured.map((project) => project.slug));
  const remaining = projects.filter(
    (project) => !featuredSlugs.has(project.slug),
  );
  const showFeatured = featured.length >= 2;
  const gridProjects = showFeatured ? remaining : projects;
  const heading = getIndustryHeading(industry);

  return (
    <div className={styles.scope}>
      <ProjectsFilters activeIndustry={industry} />

      <section
        className={styles.section}
        aria-labelledby="projects-listing-heading"
      >
        <div className={styles.inner}>
          {showFeatured ? <FeaturedProjects projects={featured} /> : null}

          <div className={styles.header}>
            <p className={styles.eyebrow}>
              {showFeatured
                ? ProjectsPageData.allProjects.eyebrow
                : "PROJECTS"}
            </p>
            <h2 id="projects-listing-heading" className={styles.heading}>
              {heading}
            </h2>
          </div>

          {projects.length === 0 ? (
            <ProjectsEmptyState />
          ) : (
            <ProjectsGrid projects={gridProjects} />
          )}
        </div>
      </section>
    </div>
  );
}
