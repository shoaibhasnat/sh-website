import { PortfolioData } from "./PortfolioData";

export const PROJECT_INDUSTRIES = [
  { key: "all", label: "All", query: null },
  { key: "healthcare", label: "Healthcare", query: "healthcare" },
  { key: "construction", label: "Construction", query: "construction" },
  { key: "logistics", label: "Logistics", query: "logistics" },
];

export const ProjectsPageData = {
  hero: {
    eyebrow: "OUR PROJECTS",
    heading: "Systems Built to Solve Real Business Problems.",
    description:
      "Explore the AI agents, automations, integrations and custom software we've built to help businesses sell, operate and grow more efficiently.",
    supporting: "Browse our work by industry or explore everything we've built.",
  },
  featured: {
    eyebrow: "FEATURED WORK",
    heading: "Selected Projects",
  },
  allProjects: {
    eyebrow: "ALL PROJECTS",
    headingByIndustry: {
      all: "All Projects",
      healthcare: "Healthcare Projects",
      construction: "Construction Projects",
      logistics: "Logistics Projects",
    },
  },
  empty: {
    heading: "More Projects Coming Soon.",
    description:
      "We're continuing to build systems across this industry. Check back soon or tell us about the problem you're trying to solve.",
    primaryCta: {
      label: "Start Free",
      href: "/contact",
    },
    secondaryCta: {
      label: "View All Projects",
      href: "/projects",
    },
  },
  cta: {
    eyebrow: "HAVE A SIMILAR CHALLENGE?",
    heading: "Your Business Problem Could Be Our Next Project.",
    description:
      "Tell us what is slowing your team down, creating manual work or limiting growth. We'll help you find the right solution.",
    primaryCta: {
      label: "Start Free",
      href: "/contact",
    },
    secondaryCta: {
      label: "Learn About The Audit",
      href: "/contact",
    },
  },
};

function slugify(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveIndustry(project) {
  const industryText = String(
    project?.introSection?.clientDetail?.clientIndustry || "",
  ).toLowerCase();
  const categoryText = (project?.category || []).join(" ").toLowerCase();
  const haystack = `${industryText} ${categoryText}`;

  if (
    haystack.includes("healthcare") ||
    haystack.includes("medical") ||
    haystack.includes("patient") ||
    haystack.includes("clinical")
  ) {
    return "healthcare";
  }

  if (haystack.includes("construction") || haystack.includes("real estate")) {
    return "construction";
  }

  if (
    haystack.includes("logistics") ||
    haystack.includes("supply chain") ||
    haystack.includes("shipping") ||
    haystack.includes("freight")
  ) {
    return "logistics";
  }

  return null;
}

function summarize(text, max = 140) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  if (!value) return "";
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trim()}…`;
}

function mapProject(project) {
  const industry = resolveIndustry(project);
  const industryMeta = PROJECT_INDUSTRIES.find((item) => item.key === industry);
  const problemList =
    project?.introSection?.clientDetail?.problemStatement || [];
  const techTags = Array.isArray(project?.category)
    ? project.category.slice(0, 4)
    : [];
  const techStackNames = (project?.proposedSolution?.techStackUsed || [])
    .map((item) => item?.name)
    .filter(Boolean)
    .slice(0, 4);

  return {
    id: project.id,
    slug: slugify(project.projectName),
    name: project.projectName,
    image: project.projectImage || project?.banner?.bannerImage || "",
    industry,
    industryLabel: industryMeta?.label || "Project",
    private: project.private === true,
    featured: project.featured === true,
    shortProblem:
      summarize(problemList[0]) ||
      summarize(project?.display?.description) ||
      "",
    shortSolution:
      summarize(project?.proposedSolution?.description) ||
      summarize(project?.display?.description) ||
      "",
    tags: techTags.length ? techTags : techStackNames,
    href: `/projects/${slugify(project.projectName)}`,
    raw: project,
  };
}

function getSourceProjects() {
  return Array.isArray(PortfolioData?.projectsSection)
    ? PortfolioData.projectsSection
    : [];
}

/** Public listing projects (excludes private entries). */
export function getProjects() {
  return getSourceProjects()
    .filter((project) => project && project.private !== true)
    .map(mapProject);
}

export function getAllProjectsIncludingPrivate() {
  return getSourceProjects().filter(Boolean).map(mapProject);
}

export function getProjectBySlug(slug) {
  return (
    getAllProjectsIncludingPrivate().find((project) => project.slug === slug) ||
    null
  );
}

export function normalizeIndustryParam(value) {
  const key = String(value || "")
    .trim()
    .toLowerCase();
  if (!key || key === "all") return "all";
  const match = PROJECT_INDUSTRIES.find((item) => item.key === key);
  return match ? match.key : "all";
}

export function getProjectsByIndustry(industryParam) {
  const industry = normalizeIndustryParam(industryParam);
  const projects = getProjects();

  if (industry === "all") return projects;
  return projects.filter((project) => project.industry === industry);
}

export function getFeaturedProjects(industryParam) {
  return getProjectsByIndustry(industryParam).filter(
    (project) => project.featured,
  );
}

export function getIndustryHeading(industryParam) {
  const industry = normalizeIndustryParam(industryParam);
  return (
    ProjectsPageData.allProjects.headingByIndustry[industry] ||
    ProjectsPageData.allProjects.headingByIndustry.all
  );
}
