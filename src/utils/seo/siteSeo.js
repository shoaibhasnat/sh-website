import { Constants } from "@/utils/Constants";

export const SITE_URL = Constants.company.website.replace(/\/$/, "");
export const SITE_NAME = Constants.company.name;
export const SITE_EMAIL = Constants.company.email;
export const SITE_PHONE = Constants.company.contactNo;
export const SITE_LOGO = `${SITE_URL}/favicon/favicon-96x96.png`;
export const SITE_OG_IMAGE = `${SITE_URL}/images/og/system-heuristics-og.png`;

/** Primary niches + commercial / GEO keyword bank (~200 terms). */
export const PRIMARY_KEYWORDS = [
  // Brand & commercial investigation
  "System Heuristics",
  "best software company",
  "best software house",
  "best software companies",
  "top software company",
  "top software house",
  "top software houses",
  "top 10 software houses",
  "top 10 software companies",
  "leading software company",
  "leading software house",
  "trusted software company",
  "reliable software company",
  "professional software company",
  "enterprise software company",
  "software development company",
  "custom software development company",
  "IT software company",
  "tech software house",
  "digital software company",

  // Software house / agency
  "software house",
  "software company",
  "software agency",
  "software development agency",
  "software consultancy",
  "software consulting company",
  "product engineering company",
  "web software company",
  "application development company",
  "app development company",
  "full stack software company",
  "offshore software company",
  "nearshore software house",
  "bespoke software company",

  // AI automation
  "AI automation",
  "AI automations",
  "artificial intelligence automation",
  "AI business automation",
  "AI workflow automation",
  "AI process automation",
  "intelligent automation",
  "intelligent process automation",
  "hyperautomation",
  "AI powered automation",
  "AI-powered workflows",
  "automation with AI",
  "AI automation company",
  "AI automation services",
  "AI automation solutions",
  "enterprise AI automation",
  "sales AI automation",
  "marketing AI automation",
  "operations AI automation",
  "AI ops automation",

  // AI agents
  "AI agents",
  "AI agent",
  "custom AI agents",
  "AI sales agents",
  "AI support agents",
  "AI customer support agents",
  "AI marketing agents",
  "autonomous AI agents",
  "business AI agents",
  "AI virtual agents",
  "AI chat agents",
  "AI agent development",
  "AI agent company",
  "deploy AI agents",
  "AI agent automation",

  // Custom software & solutions
  "custom software",
  "custom software solutions",
  "custom software development",
  "custom solutions",
  "bespoke software",
  "bespoke software development",
  "tailored software solutions",
  "custom business software",
  "custom enterprise software",
  "custom web applications",
  "custom SaaS development",
  "custom portals",
  "custom dashboards",
  "internal tools development",
  "business application development",
  "MVP software development",
  "product engineering",
  "software product development",

  // Business process & workflow
  "business process automation",
  "workflow automation",
  "process automation",
  "business automation",
  "office automation",
  "back office automation",
  "operations automation",
  "document automation",
  "form automation",
  "task automation",
  "RPA and AI automation",
  "no-code automation",
  "low-code automation",
  "n8n automation",
  "Zapier automation",
  "Make.com automation",

  // CRM / sales / marketing
  "CRM automation",
  "sales automation",
  "marketing automation",
  "lead automation",
  "lead follow up automation",
  "sales pipeline automation",
  "customer journey automation",
  "email automation",
  "outreach automation",
  "CRM integration",
  "sales systems",
  "marketing systems",

  // Integrations
  "system integrations",
  "software integration",
  "API integration",
  "API development",
  "third party integrations",
  "systems integration company",
  "enterprise integration",
  "data integration",
  "workflow integration",
  "connect business systems",
  "integration services",

  // Audits
  "software audit",
  "automation audit",
  "systems audit",
  "business systems audit",
  "IT audit for automation",
  "process audit",
  "digital transformation audit",
  "software discovery audit",
  "technology audit",
  "operations audit",
  "free software consultation",
  "software roadmap",
  "implementation roadmap",

  // Healthcare niche
  "healthcare software",
  "healthcare software company",
  "healthcare software development",
  "healthcare automation",
  "healthcare AI",
  "medical software",
  "clinic software",
  "clinic management software",
  "patient management software",
  "healthcare workflow automation",
  "healthcare AI agents",
  "hospital software systems",
  "telehealth software",
  "EHR integration",
  "healthcare custom software",
  "care team software",
  "healthcare operations software",

  // Construction niche
  "construction software",
  "construction software company",
  "construction software development",
  "construction automation",
  "construction management software",
  "construction project management software",
  "field operations software",
  "construction AI",
  "construction workflow automation",
  "contractor software",
  "job site software",
  "construction custom software",
  "engineering software systems",
  "construction CRM",

  // Industry / vertical
  "industry software solutions",
  "vertical software solutions",
  "domain specific software",
  "SMB software solutions",
  "mid market software company",
  "enterprise software solutions",

  // Platform / tech capability
  "SaaS development",
  "web application development",
  "dashboard development",
  "portal development",
  "internal apps",
  "admin panel development",
  "cloud software development",
  "Next.js software company",
  "React software development",
  "Node.js development company",
  "Python automation company",
  "FastAPI development",

  // Outcomes / intent
  "increase sales with automation",
  "reduce manual work",
  "automate repetitive tasks",
  "scale business operations",
  "improve lead response time",
  "24/7 AI agents",
  "automate follow ups",
  "connect tools and systems",
  "measurable business outcomes",
  "digital transformation partner",
  "software for business growth",

  // GEO / question-style long tails
  "best AI automation company",
  "best custom software company",
  "best software house for AI",
  "best healthcare software company",
  "best construction software company",
  "software company for AI agents",
  "software house for automation",
  "who builds custom AI agents",
  "AI automation for small business",
  "AI automation for mid size business",
  "custom software for healthcare clinics",
  "custom software for construction companies",
  "how to automate business workflows",
  "what is a software audit",
  "AI agents for sales teams",
  "AI agents for customer support",

  // Local / regional
  "software company Pakistan",
  "software house Pakistan",
  "AI automation company Pakistan",
  "custom software development Pakistan",
  "software consultancy Pakistan",
];

export const DEFAULT_DESCRIPTION =
  "System Heuristics is a top software company for AI automation, custom software solutions, healthcare and construction systems, audits, and business process automation.";

export const ORGANIZATION_SAME_AS = [
  Constants.socials.linkedin,
  Constants.socials.facebook,
  Constants.socials.instagram,
].filter(Boolean);

export const SITE_NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Projects", path: "/projects" },
  { name: "Healthcare Projects", path: "/projects?industry=healthcare" },
  { name: "Construction Projects", path: "/projects?industry=construction" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms and Conditions", path: "/terms-and-conditions" },
];

/**
 * Build Next.js Metadata for a page with canonical, Open Graph, Twitter, robots.
 */
export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = PRIMARY_KEYWORDS,
  noIndex = false,
  ogType = "website",
  images,
} = {}) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const fullTitle = title;
  const desc = description || DEFAULT_DESCRIPTION;
  const ogImages = images || [
    {
      url: "/images/og/system-heuristics-og.png",
      width: 1200,
      height: 630,
      alt: `${SITE_NAME} — ${fullTitle}`,
    },
  ];

  return {
    title: fullTitle,
    description: desc,
    keywords: Array.isArray(keywords) ? keywords : [keywords],
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description: desc,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: ["/images/og/system-heuristics-og.png"],
    },
  };
}

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
