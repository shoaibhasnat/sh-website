/**
 * Careers page content + job listings.
 * Job roles live in `CareersJobsData.js`.
 * Individual routes use `/careers/[slug]`.
 */
import { careersCategories, careersJobs } from "./CareersJobsData";

export const CareersData = {
  hero: {
    eyebrow: "CAREERS AT SYSTEM HEURISTICS",
    heading: "Build Systems That Businesses Actually Use.",
    description:
      "Join a team working across AI, automation, software engineering, business systems and digital transformation.",
    supporting:
      "We look for people who enjoy understanding difficult problems, challenging assumptions and building practical technology that creates real business value.",
    primaryCta: {
      label: "View Open Positions",
      href: "#open-positions",
    },
    secondaryCta: {
      label: "Learn About Us",
      href: "/about",
    },
    nodes: ["AI", "Engineering", "Automation", "Product", "Business"],
  },

  benefits: {
    eyebrow: "WHY WORK WITH US",
    heading: "Work on Problems That Go Beyond Code.",
    description:
      "Our projects sit at the intersection of business operations and technology. You'll work on real workflows, real integrations and systems that directly affect how companies operate.",
    items: [
      {
        title: "Meaningful Problems",
        description:
          "Work on systems that solve real operational and business challenges.",
      },
      {
        title: "Modern Technology",
        description:
          "Build with AI, APIs, automation platforms, modern web technologies and cloud systems.",
      },
      {
        title: "Ownership",
        description:
          "Take responsibility for solutions from understanding the problem through implementation.",
      },
      {
        title: "Continuous Learning",
        description:
          "Work across industries, technologies and business processes.",
      },
      {
        title: "Direct Impact",
        description:
          "See how the systems you build affect customers, employees and business performance.",
      },
      {
        title: "Collaborative Thinking",
        description:
          "Work with people across engineering, automation, design and business strategy.",
      },
    ],
  },

  culture: {
    eyebrow: "OUR CULTURE",
    heading: "Think Deeply. Build Practically.",
    items: [
      {
        title: "Understand Before Building",
        description:
          "Ask questions and understand the underlying problem before implementing a solution.",
      },
      {
        title: "Take Ownership",
        description:
          "Own your work, communicate clearly and follow problems through to completion.",
      },
      {
        title: "Keep It Simple",
        description:
          "Complex business problems do not always require complex solutions.",
      },
      {
        title: "Challenge Assumptions",
        description:
          "We value people who question whether there is a better way.",
      },
      {
        title: "Care About Quality",
        description:
          "Build systems that are reliable, maintainable and easy to understand.",
      },
      {
        title: "Keep Learning",
        description:
          "Technology changes quickly, so learning is part of the job.",
      },
    ],
  },

  areas: {
    eyebrow: "WHAT WE WORK ON",
    heading: "Different Skills. One Connected Mission.",
    items: [
      {
        title: "AI & Agents",
        description:
          "LLM applications, AI agents, RAG, intelligent workflows and AI-powered products.",
      },
      {
        title: "Automation",
        description:
          "Business process automation, Make, Zapier, workflow orchestration and integrations.",
      },
      {
        title: "Software Engineering",
        description:
          "Web applications, APIs, internal systems, portals and SaaS products.",
      },
      {
        title: "Frontend Engineering",
        description:
          "Modern responsive interfaces using React, Next.js and component-based design systems.",
      },
      {
        title: "Backend & Integrations",
        description:
          "APIs, databases, third-party integrations, authentication and business logic.",
      },
      {
        title: "Product & Business Systems",
        description:
          "Understand workflows and translate business problems into practical technology.",
      },
      {
        title: "UI/UX Design",
        description:
          "Create clear, usable interfaces for complex business systems.",
      },
      {
        title: "Sales & Growth",
        description:
          "Help identify business opportunities and communicate how technology can solve them.",
      },
    ],
  },

  /**
   * Job listing schema — see CareersJobsData.js
   */
  categories: careersCategories,
  jobs: careersJobs,

  jobsSection: {
    id: "open-positions",
    eyebrow: "OPEN POSITIONS",
    heading: "Find Your Next Challenge.",
    intro:
      "Find your dream job and grow your career with us. Explore opportunities across development, data, and administration.",
    empty: {
      heading: "No Open Positions Right Now.",
      description:
        "We're always interested in meeting talented people working in AI, automation, software engineering, design, sales and business systems.",
      cta: {
        label: "Send Your Profile",
        href: "#general-application",
      },
    },
  },

  application: {
    id: "general-application",
    eyebrow: "DON'T SEE YOUR ROLE?",
    heading: "Good People Don't Always Fit a Job Title.",
    description:
      "If you think your skills can help us build better systems, we'd still like to hear from you.",
    expertiseOptions: [
      "AI / Machine Learning",
      "Automation",
      "Frontend Engineering",
      "Backend Engineering",
      "Full-Stack Engineering",
      "UI/UX Design",
      "Product",
      "Sales",
      "Marketing",
      "Business Analysis",
      "Other",
    ],
    submitLabel: "Send Your Profile",
    success: {
      heading: "Thanks — your profile has been received.",
      description:
        "Our team will review your information and reach out if there's a relevant opportunity.",
    },
  },

  process: {
    eyebrow: "WHAT TO EXPECT",
    heading: "A Simple, Practical Hiring Process.",
    steps: [
      {
        number: "01",
        title: "Application",
        description:
          "Send us your profile, experience and relevant work.",
      },
      {
        number: "02",
        title: "Conversation",
        description:
          "A short discussion about your experience, interests and the role.",
      },
      {
        number: "03",
        title: "Practical Evaluation",
        description:
          "Depending on the position, this may include a technical or practical assessment.",
      },
      {
        number: "04",
        title: "Final Conversation",
        description:
          "Discuss expectations, responsibilities and next steps.",
      },
    ],
  },

  cta: {
    eyebrow: "BUILD WITH US",
    heading: "Help Us Build Better Business Systems.",
    description:
      "We're building at the intersection of AI, automation, software and real-world business operations.",
    primaryCta: {
      label: "View Open Positions",
      href: "#open-positions",
    },
    secondaryCta: {
      label: "Send Your Profile",
      href: "#general-application",
    },
  },
};

export function getActiveJobs() {
  return (CareersData.jobs || []).filter((job) => job.active !== false);
}

export function getJobBySlug(slug) {
  return (CareersData.jobs || []).find(
    (job) => job.slug === slug && job.active !== false,
  );
}
