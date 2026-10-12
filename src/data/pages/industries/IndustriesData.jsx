import { Constants } from "../../../utils/global/Constants";

export const IndustriesData = {
  hero: {
    title: `Tech Solutions For Every Industry`,
    description: `At ${Constants?.company?.name}, we build industry-specific software and AI automation for healthcare, fintech, real estate, logistics, education, and operations-heavy businesses. Our solutions streamline workflows, improve customer experiences, support compliance, and help teams make better decisions with data.`,
    bannerImage: `/images/pages/industries/hero/industries-hero.svg`,
    btnLabel: `Explore Industries →`,
  },

  industriesSection: {
    intro: {
      title: `INDUSTRIES WE SERVE`,
      description: `Discover how custom software, AI agents, data systems, and workflow automation can solve industry-specific problems across healthcare, fintech, logistics, real estate, education, and AI-driven operations.`,
      buttonLabel: `Explore More →`,
    },
    industries: [
      {
        name: `HealthCare`,
        image: `/images/pages/industries/industry-details/hero/industries-healthcare.avif`,
        url: `/industries/healthcare`,
      },
      {
        name: `AI Automation`,
        image: `/images/pages/industries/industry-details/hero/industries-ai-automation.avif`,
        url: `/industries/ai-automation`,
      },
      {
        name: `Fintech`,
        image: `/images/pages/industries/industry-details/hero/industries-fintech.avif`,
        url: `/industries/fintech`,
      },
      {
        name: `Education`,
        image: `/images/pages/industries/industry-details/hero/industries-education.avif`,
        url: `/industries/education`,
      },
      {
        name: `Logistics`,
        image: `/images/pages/industries/industry-details/hero/industries-logistics.avif`,
        url: `/industries/logistics`,
      },
      {
        name: `Real Estate`,
        image: `/images/pages/industries/industry-details/hero/industries-real-estate.avif`,
        url: `/industries/real-estate`,
      },
    ],
  },
  howWeWorkSection: {
    intro: {
      title: `HOW WE WORK?`,
      description: `Our industry software development process moves through research, UX design, development, testing, deployment, and long-term support so each solution is practical, secure, scalable, and aligned with real business operations.`,
    },
    processSteps: [
      {
        img: `images/pages/industries/how-we-work/ideation-research-process.svg`,
        title: `Idea & Research`,
        description: `We begin by refining your concept and conducting in-depth research to validate feasibility. This ensures a strong foundation for building a solution from scratch or scaling your existing product effectively.`,
      },
      {
        img: `images/pages/industries/how-we-work/design-process.svg`,
        title: `Design & Prototyping`,
        description: `Our design team crafts intuitive wireframes and interactive prototypes to visualize the final product. This phase helps align expectations and fine-tune the user experience before development begins.`,
      },
      {
        img: `images/pages/industries/how-we-work/development-process.svg`,
        title: `Development`,
        description: `Skilled developers bring designs to life through precise coding, integration of features, and backend setup. We collaborate closely with you, valuing your feedback at every step to ensure the product meets your vision.`,
      },
      {
        img: `images/pages/industries/how-we-work/testing-process.svg`,
        title: `Testing`,
        description: `Comprehensive testing ensures your product is reliable and bug-free. We perform QA testing, beta testing, and functionality checks to guarantee performance, usability, and security.`,
      },
      {
        img: `images/pages/industries/how-we-work/deployment-process.svg`,
        title: `Deployment`,
        description: `We launch your product seamlessly on the chosen platform, optimizing for performance and minimizing downtime. Our goal is a smooth rollout with maximum impact and user satisfaction.`,
      },
      {
        img: `images/pages/industries/how-we-work/maintenance-process.svg`,
        title: `Maintenance & Support`,
        description: `Ongoing maintenance keeps your product efficient, secure, and up-to-date. We provide updates, bug fixes, and feature enhancements to ensure long-term success and scalability.`,
      },
    ],
  },
};
