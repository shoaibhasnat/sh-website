import { getProjects } from "@/data/pages/projects/ProjectsData";
import { CareersData } from "@/data/pages/careers/CareersData";
import { SITE_URL } from "@/utils/seo/siteSeo";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/case-studies", priority: 0.9, changeFrequency: "weekly" },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
    {
      path: "/projects?industry=healthcare",
      priority: 0.85,
      changeFrequency: "weekly",
    },
    {
      path: "/projects?industry=construction",
      priority: 0.85,
      changeFrequency: "weekly",
    },
    { path: "/careers", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    {
      path: "/terms-and-conditions",
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];

  const projectRoutes = getProjects()
    .filter((project) => project.slug && !project.private)
    .map((project) => ({
      path: `/projects/${project.slug}`,
      priority: project.featured ? 0.8 : 0.7,
      changeFrequency: "monthly",
    }));

  const careerRoutes = (CareersData.jobs || [])
    .filter((job) => job.active !== false && job.slug)
    .map((job) => ({
      path: `/careers/${job.slug}`,
      priority: 0.6,
      changeFrequency: "weekly",
    }));

  return [...staticRoutes, ...projectRoutes, ...careerRoutes].map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
