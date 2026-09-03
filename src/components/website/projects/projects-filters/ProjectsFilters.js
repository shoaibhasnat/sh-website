import Link from "next/link";
import { PROJECT_INDUSTRIES } from "@/data/pages/projects/ProjectsData";
import styles from "./projects-filters.module.css";

function industryHref(query) {
  if (!query) return "/projects";
  return `/projects?industry=${query}`;
}

export default function ProjectsFilters({ activeIndustry = "all" }) {
  return (
    <div className={styles.wrap}>
      <div
        className={styles.bar}
        role="tablist"
        aria-label="Filter projects by industry"
      >
        {PROJECT_INDUSTRIES.map((industry) => {
          const isActive = activeIndustry === industry.key;

          return (
            <Link
              key={industry.key}
              href={industryHref(industry.query)}
              scroll={false}
              role="tab"
              aria-selected={isActive}
              className={`${styles.filter} ${isActive ? styles.active : ""}`}
            >
              {industry.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
