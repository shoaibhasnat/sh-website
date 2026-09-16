import {
  ORGANIZATION_SAME_AS,
  SITE_EMAIL,
  SITE_LOGO,
  SITE_NAME,
  SITE_NAV_LINKS,
  SITE_PHONE,
  SITE_URL,
  absoluteUrl,
} from "./siteSeo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO,
    },
    image: SITE_LOGO,
    description:
      "System Heuristics is a software company specializing in AI automation, custom software solutions, healthcare and construction systems, business audits, AI agents, and system integrations.",
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    sameAs: ORGANIZATION_SAME_AS,
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    knowsAbout: [
      "AI automation",
      "Custom software development",
      "Healthcare software",
      "Construction software",
      "Business process automation",
      "AI agents",
      "System integrations",
      "Software audits",
      "CRM automation",
      "Marketing automation",
    ],
    slogan: "Real Problems. Better Systems. Measurable Outcomes.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        availableLanguage: ["English"],
        url: absoluteUrl("/contact"),
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        availableLanguage: ["English"],
      },
    ],
  };
}

/** WebSite + SearchAction helps Google sitelinks / sitelinks search box eligibility. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Best software company for AI automations, custom solutions, healthcare and construction systems, and software audits.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/projects?industry={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function siteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#sitenavigation`,
    name: `${SITE_NAME} primary navigation`,
    itemListElement: SITE_NAV_LINKS.filter((link) =>
      ["/", "/about", "/case-studies", "/projects", "/careers", "/contact"].includes(
        link.path.split("?")[0],
      ),
    ).map((link, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: link.name,
      url: absoluteUrl(link.path),
    })),
  };
}

export function breadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(faqItems = []) {
  if (!faqItems.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema({
  path = "/",
  name,
  description,
  type = "WebPage",
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function jobPostingSchema(job) {
  if (!job) return null;

  const description =
    job.shortDescription ||
    job.description ||
    `Join System Heuristics as a ${job.title}.`;

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description,
    identifier: {
      "@type": "PropertyValue",
      name: SITE_NAME,
      value: job.slug,
    },
    datePosted: job.datePosted || undefined,
    employmentType: job.employmentType || "FULL_TIME",
    hiringOrganization: {
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location || "Remote",
        addressCountry: "PK",
      },
    },
    jobLocationType: job.workMode?.toLowerCase().includes("remote")
      ? "TELECOMMUTE"
      : undefined,
    url: absoluteUrl(`/careers/${job.slug}`),
    directApply: true,
  };
}

export function creativeWorkSchema(project) {
  if (!project) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description:
      project.shortSolution ||
      project.shortProblem ||
      `${project.name} — custom software and automation project by ${SITE_NAME}.`,
    url: absoluteUrl(`/projects/${project.slug}`),
    creator: { "@id": `${SITE_URL}/#organization` },
    about: project.industryLabel || "Custom software",
    keywords: [
      project.industryLabel,
      "AI automation",
      "custom software",
      ...(project.tags || []),
    ]
      .filter(Boolean)
      .join(", "),
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} services`,
    itemListElement: [
      {
        "@type": "Service",
        name: "AI Automation",
        description:
          "AI automations and intelligent workflows for sales, marketing, support, and operations.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        name: "Custom Software Solutions",
        description:
          "Custom software, dashboards, portals, SaaS, and internal business applications.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        name: "Healthcare Software Systems",
        description:
          "Healthcare software, clinic workflows, patient operations, and care-team automation.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        name: "Construction Software Systems",
        description:
          "Construction software for field crews, project coordination, and operations automation.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
      {
        "@type": "Service",
        name: "Software & Automation Audits",
        description:
          "Business and systems audits that produce a prioritized automation and implementation roadmap.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    ],
  };
}
