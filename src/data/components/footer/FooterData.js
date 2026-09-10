import { Constants } from "@/utils/Constants";

export const FooterData = {
  brand: {
    name: "System Heuristics",
    href: "/",
    logo: {
      src: "/images/logo.svg",
      alt: "System Heuristics logo",
      width: 36,
      height: 36,
    },
    tagline: "Intelligent systems for businesses that want to grow.",
    description:
      "We help businesses improve sales, marketing and operations through AI agents, automation, integrations and custom software.",
  },
  contactLinks: [
    {
      key: "linkedin",
      label: "LinkedIn",
      href: Constants.socials.linkedin,
      external: true,
    },
    {
      key: "email",
      label: "Email",
      href: `mailto:${Constants.company.email}`,
      external: false,
    },
    {
      key: "call",
      label: "Call",
      href: `tel:${Constants.company.contactNo.replace(/\s+/g, "")}`,
      external: false,
    },
  ],
  columns: [
    {
      title: "What We Offer",
      links: [
        { label: "Sales Automation", href: "/#sales-automation" },
        { label: "Marketing Automation", href: "/#marketing-automation" },
        { label: "AI Agents", href: "/#ai-agents" },
        { label: "Business Automation", href: "/#business-automation" },
        { label: "Custom Software", href: "/#custom-software" },
      ],
    },
    {
      title: "Case Studies",
      links: [
        { label: "Healthcare", href: "/projects?industry=healthcare" },
        { label: "Construction", href: "/projects?industry=construction" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Projects", href: "/projects" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  legal: {
    companyName: "System Heuristics",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
};
