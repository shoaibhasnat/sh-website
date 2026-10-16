import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { OgData } from "../../data/seo/OgData";
import { ServiceDetailsData } from "../../data/pages/services/service-details/ServiceDetailsData";
import { IndustryDetailsData } from "../../data/pages/industries/industry-details/IndustryDetailsData";
import { PortfolioData } from "../../data/pages/portfolio/PortfolioData";
import { MediaData } from "../../data/pages/media/MediaData";

const SITE_URL = "https://www.systemheuristics.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/system-heuristics-og.png`;
const COMPANY_NAME = "System Heuristics";

const normalizePathname = (pathname = "/") => {
  let normalized = pathname.split("?")[0].split("#")[0];

  if (normalized !== "/" && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }

  if (normalized === "/home") {
    normalized = "/";
  }

  return normalized || "/";
};

const buildCanonicalUrl = (pathname) => {
  const normalized = normalizePathname(pathname);
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
};

const absoluteUrl = (url) => {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

const stripMarkdown = (value = "") =>
  String(value)
    .replace(/`{1,3}[^`]*`{1,3}/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~|-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (value = "", maxLength = 155) => {
  const text = stripMarkdown(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trim()}…`;
};

const toTitleCase = (value = "") =>
  value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const buildBreadcrumbSchema = (normalizedPathname) => {
  const segments = normalizedPathname.split("/").filter(Boolean);

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    ...segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        "@type": "ListItem",
        position: index + 2,
        name: toTitleCase(segment),
        item: buildCanonicalUrl(path),
      };
    }),
  ];

  return {
    "@type": "BreadcrumbList",
    "@id": `${buildCanonicalUrl(normalizedPathname)}#breadcrumb`,
    itemListElement,
  };
};

const buildFaqSchema = (faqs, canonicalUrl, label) => {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  const mainEntity = faqs
    .filter((faq) => faq?.question && faq?.answer)
    .map((faq) => ({
      "@type": "Question",
      name: stripMarkdown(faq.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkdown(faq.answer),
      },
    }));

  if (!mainEntity.length) return null;

  return {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    name: `${label} FAQs`,
    mainEntity,
  };
};

const getRouteEntity = (normalizedPathname) => {
  if (normalizedPathname.includes("/services/")) {
    const slug = normalizedPathname.split("/").pop();
    const service = ServiceDetailsData?.eachServiceDetails?.find(
      (item) => item.path === `/${slug}`,
    );
    return service ? { type: "service", item: service } : null;
  }

  if (normalizedPathname.includes("/industries/")) {
    const slug = normalizedPathname.split("/").pop();
    const industry = IndustryDetailsData.industries?.find(
      (item) => item.path === `/${slug}`,
    );
    return industry ? { type: "industry", item: industry } : null;
  }

  if (normalizedPathname.includes("/case-study/")) {
    const slug = normalizedPathname.split("/").pop();
    const project = PortfolioData.projectsSection?.find(
      (item) => item.id == +slug,
    );
    return project ? { type: "case-study", item: project } : null;
  }

  if (normalizedPathname.includes("/media/")) {
    const slug = normalizedPathname.split("/").pop();
    const media = MediaData.mediaItems?.find((item) => item.id == +slug);
    return media ? { type: "media", item: media } : null;
  }

  return null;
};

const buildRouteSchema = ({ routeEntity, normalizedPathname, canonicalUrl, seoData }) => {
  if (!routeEntity) {
    const slug = normalizedPathname === "/" ? "" : normalizedPathname.split("/")[1];
    const pageTypes = {
      "": "WebPage",
      "about-us": "AboutPage",
      contact: "ContactPage",
      services: "CollectionPage",
      industries: "CollectionPage",
      "case-study": "CollectionPage",
      media: "CollectionPage",
      careers: "CollectionPage",
      "privacy-policy": "WebPage",
      "terms-and-conditions": "WebPage",
    };

    return [
      {
        "@type": pageTypes[slug] || "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: seoData.title,
        description: seoData.description,
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
    ];
  }

  const { type, item } = routeEntity;

  if (type === "service") {
    return [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: item.name,
        serviceType: item.name,
        description: truncate(item.description || item.hero?.description, 300),
        provider: { "@id": `${SITE_URL}#organization` },
        url: canonicalUrl,
        image: absoluteUrl(item.hero?.bannerImage),
        areaServed: "Global",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Organizations seeking custom software, AI automation, and digital transformation",
        },
      },
      buildFaqSchema(item.faqSection, canonicalUrl, item.name),
    ].filter(Boolean);
  }

  if (type === "industry") {
    return [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#industry-service`,
        name: item.hero?.title || `${item.name} Software Development`,
        serviceType: `${item.name} software development and AI automation`,
        description: truncate(item.description || item.hero?.description, 300),
        provider: { "@id": `${SITE_URL}#organization` },
        url: canonicalUrl,
        image: absoluteUrl(item.hero?.bannerImage),
        areaServed: "Global",
        audience: {
          "@type": "BusinessAudience",
          audienceType: `${item.name} businesses and teams`,
        },
      },
      buildFaqSchema(item.faqsSection, canonicalUrl, item.name),
    ].filter(Boolean);
  }

  if (type === "case-study") {
    return [
      {
        "@type": "CreativeWork",
        "@id": `${canonicalUrl}#case-study`,
        headline: item.banner?.heading || `${item.projectName} Case Study`,
        name: `${item.projectName} Case Study`,
        description: truncate(
          item.banner?.description || item.display?.description || seoData.description,
          300,
        ),
        image: absoluteUrl(item.banner?.bannerImage || item.projectImage),
        url: canonicalUrl,
        creator: { "@id": `${SITE_URL}#organization` },
        publisher: { "@id": `${SITE_URL}#organization` },
        about: Array.isArray(item.category) ? item.category.join(", ") : item.category,
      },
      buildFaqSchema(item.faqs, canonicalUrl, item.projectName),
    ].filter(Boolean);
  }

  if (type === "media") {
    return [
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        headline: item.title,
        description: truncate(item.summary || item.description, 300),
        articleBody: truncate(item.description, 1000),
        image: absoluteUrl(item.primaryImage),
        datePublished: item.dateISO || item.date,
        author: { "@id": `${SITE_URL}#organization` },
        publisher: { "@id": `${SITE_URL}#organization` },
        mainEntityOfPage: canonicalUrl,
        articleSection: item.category,
      },
    ];
  }

  return [];
};

const buildStructuredData = ({ normalizedPathname, canonicalUrl, seoData, routeEntity }) => {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: COMPANY_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      description:
        "System Heuristics builds custom software, AI agents, workflow automation, web platforms, and data-driven digital products for growing businesses.",
      email: "info@systemheuristics.com",
      telephone: "+92 334 4377198",
      sameAs: [
        "https://www.linkedin.com/company/system-heuristics/",
        "https://www.facebook.com/share/1G4fA8pz4h/?mibextid=wwXIfr",
        "https://www.instagram.com/system.heuristics/",
      ],
      knowsAbout: [
        "Custom software development",
        "Generative AI",
        "AI automation",
        "Natural language processing",
        "Computer vision",
        "Data analytics",
        "Machine learning",
        "Web scraping",
        "Web automation",
        "Healthcare software",
        "Fintech software",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: COMPANY_NAME,
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en",
    },
    buildBreadcrumbSchema(normalizedPathname),
    ...buildRouteSchema({ routeEntity, normalizedPathname, canonicalUrl, seoData }),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

const getSeoData = ({ normalizedPathname, title, description, canonicalUrl, routeEntity }) => {
  if (routeEntity?.type === "service") {
    const service = routeEntity.item;
    return {
      title: `${service.name} Services | ${COMPANY_NAME}`,
      description: truncate(
        service?.description || service?.hero?.description ||
          "Explore System Heuristics custom software and AI automation services.",
      ),
      keywords: `${service.name}, ${service.name} services, custom software development, AI automation, System Heuristics`,
      canonicalUrl: buildCanonicalUrl(normalizedPathname),
      ogType: "website",
      image: absoluteUrl(service?.hero?.bannerImage) || DEFAULT_OG_IMAGE,
    };
  }

  if (routeEntity?.type === "industry") {
    const industry = routeEntity.item;
    return {
      title: `${industry.name} Software Development | ${COMPANY_NAME}`,
      description: truncate(
        industry?.description || industry?.hero?.description ||
          "Discover industry-specific software development and AI automation solutions from System Heuristics.",
      ),
      keywords: `${industry.name} software development, ${industry.name} AI automation, custom software, System Heuristics`,
      canonicalUrl: buildCanonicalUrl(normalizedPathname),
      ogType: "website",
      image: absoluteUrl(industry?.hero?.bannerImage) || DEFAULT_OG_IMAGE,
    };
  }

  if (routeEntity?.type === "case-study") {
    const project = routeEntity.item;
    return {
      title: `${project.projectName} Case Study | ${COMPANY_NAME}`,
      description: truncate(
        project?.display?.description || project?.banner?.description ||
          "View a System Heuristics software development case study.",
      ),
      keywords: `${project.projectName}, case study, software development case study, AI automation case study, System Heuristics`,
      canonicalUrl: buildCanonicalUrl(normalizedPathname),
      ogType: "article",
      image: absoluteUrl(project?.banner?.bannerImage || project?.projectImage) || DEFAULT_OG_IMAGE,
    };
  }

  if (routeEntity?.type === "media") {
    const media = routeEntity.item;
    return {
      title: `${media.title} | ${COMPANY_NAME}`,
      description: truncate(media?.summary || media?.description || "Read the latest SH Media update from System Heuristics."),
      keywords: `${media.category}, SH Media, System Heuristics insights, AI automation, software development`,
      canonicalUrl: buildCanonicalUrl(normalizedPathname),
      ogType: "article",
      image: absoluteUrl(media?.primaryImage) || DEFAULT_OG_IMAGE,
      publishedTime: media?.dateISO || media?.date,
    };
  }

  if (title) {
    let finalCanonicalUrl;
    if (canonicalUrl) {
      try {
        const url = new URL(canonicalUrl);
        finalCanonicalUrl = buildCanonicalUrl(url.pathname);
      } catch (e) {
        finalCanonicalUrl = buildCanonicalUrl(canonicalUrl);
      }
    } else {
      finalCanonicalUrl = buildCanonicalUrl(normalizedPathname);
    }

    return {
      title,
      description: truncate(description || "System Heuristics builds custom software and AI automation solutions."),
      canonicalUrl: finalCanonicalUrl,
      ogType: "website",
      image: DEFAULT_OG_IMAGE,
    };
  }

  const slug = normalizedPathname === "/" ? "" : normalizedPathname.split("/")[1];
  return OgData.find((og) => og.slug === slug);
};

const SEOHelmet = ({ title, description, canonicalUrl } = {}) => {
  const location = useLocation();
  const normalizedPathname = normalizePathname(location.pathname);
  const routeEntity = getRouteEntity(normalizedPathname);

  const defaultData = {
    title: `${COMPANY_NAME} | Custom Software, AI Agents & Automation`,
    description:
      "System Heuristics builds custom software, AI agents, workflow automation, web platforms, and data-driven systems for growing businesses.",
    canonicalUrl: buildCanonicalUrl(normalizedPathname),
    keywords:
      "System Heuristics, custom software development, AI automation, generative AI, web automation, data analytics, software company",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  };

  const data = getSeoData({ normalizedPathname, title, description, canonicalUrl, routeEntity });
  const seoData = {
    ...defaultData,
    ...(data || {}),
    canonicalUrl: buildCanonicalUrl(normalizedPathname),
  };

  const structuredData = buildStructuredData({
    normalizedPathname,
    canonicalUrl: seoData.canonicalUrl,
    seoData,
    routeEntity,
  });

  const ogImage = seoData.image || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <html lang="en" />
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.description} />
      {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="author" content={COMPANY_NAME} />
      <meta name="publisher" content={COMPANY_NAME} />
      <meta name="application-name" content={COMPANY_NAME} />

      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={seoData.canonicalUrl} />
      <meta property="og:type" content={seoData.ogType} />
      <meta property="og:site_name" content={COMPANY_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={seoData.title} />
      {seoData.publishedTime && <meta property="article:published_time" content={seoData.publishedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={seoData.canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;
