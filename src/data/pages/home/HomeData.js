export const HomeData = {
  hero: {
    eyebrow: "GROW SALES • AUTOMATE FOLLOW-UPS • SCALE FASTER",
    heading: "Automate the busywork. Do what actually matters",
    description:
      "We connect your tools and automate repetitive tasks, giving your team more time for customers, projects, and growth.",
   primaryCta: {
      label: "See our Agents",
      href: "#ai-agents",
    },
    secondaryCta: {
      label: "Talk To Human",
      href: "/discovery-call",
    },
    proofPoints: [
      "AI follows up with every lead within 60 seconds, no one falls through the cracks",
      "Your CRM updates itself from calls, emails, and forms, no manual data entry",
      "Custom AI agents handle FAQs, qualify leads, and book meetings 24/7",
    ],
    media: [
      {
        src: "/images/pages/home/hero/sales-team.jpg",
        alt: "Sales team collaborating on pipeline growth",
        label: "Sales teams moving faster",
      },
      {
        src: "/images/pages/home/hero/growth-dashboard.jpg",
        alt: "Growth dashboard and performance metrics",
        label: "Clearer pipeline visibility",
      },
      {
        src: "/images/pages/home/hero/financial-planning-project-management-session.jpg",
        alt: "Strategy meeting focused on business growth",
        label: "Systems built for growth",
      },
      {
        src: "/images/pages/home/agents/sales-marketing.jpg",
        alt: "Sales and marketing collaboration",
        label: "Marketing that feeds sales",
      },
    ],
    visualization: {
      center: "SYSTEM HEURISTICS",
      nodes: [
        { id: "sales", label: "Sales" },
        { id: "marketing", label: "Marketing" },
        { id: "operations", label: "Operations" },
        { id: "ai", label: "AI Agents" },
        { id: "automation", label: "Automation" },
        { id: "software", label: "Software" },
      ],
    },
  },

  problems: {
    eyebrow: "WHAT WE SOLVE",
    heading: "Your Business Has More Automation Opportunities Than You Think.",
    description:
      "Between job sites, client work, and paperwork, most operations lose hours to repetitive tasks, disconnected tools, and manual follow-ups. We find those gaps and turn them into connected systems",
    items: [
      {
        title: "Increase Sales",
        description:
          "Automate inquiry capture, qualification, follow-ups, and CRM updates so no lead or referral falls through the cracks.",
      },
      {
        title: "Automate Intake & Scheduling",
        description:
          "Automate client or patient intake, scheduling, and reminders so requests get triaged and routed without staff manually managing every step.",
      },
      {
        title: "Deploy AI Agents",
        description:
          "Build agents that can communicate, analyze information and execute defined business tasks.",
      },
      {
        title: "Eliminate Manual Work",
        description:
          "Automate repetitive operational and administrative processes.",
      },
      {
        title: "Connect Your Systems",
        description:
          "Make CRM, accounting, communication, databases and business tools work together.",
      },
      {
        title: "Build Custom Software",
        description:
          "Create dashboards, portals and applications when existing tools aren't enough.",
      },
    ],
  },

  capabilities: {
    eyebrow: "OUR CAPABILITIES",
    heading: "Technology Built Around Your Business.",
    items: [
      {
        title: "Sales Systems",
        points: [
          "CRM automation",
          "Lead qualification",
          "Follow-ups",
          "Proposal workflows",
          "Pipeline automation",
        ],
        href: "/contact",
      },
      {
        title: "Marketing Systems",
        points: [
          "Lead nurturing",
          "Campaign automation",
          "Customer journeys",
          "Segmentation",
          "Reporting",
        ],
        href: "/contact",
      },
      {
        title: "AI Agents",
        points: [
          "Sales agents",
          "Support agents",
          "Operations agents",
          "Knowledge agents",
          "Document agents",
        ],
        href: "/contact",
      },
      {
        title: "Business Automation",
        points: [
          "Workflow automation",
          "Approvals",
          "Notifications",
          "Data synchronization",
          "Reporting",
        ],
        href: "/contact",
      },
      {
        title: "Custom Software",
        points: [
          "Dashboards",
          "Portals",
          "Internal applications",
          "SaaS products",
          "API integrations",
        ],
        href: "/contact",
      },
    ],
  },

  plans: {
    eyebrow: "A SIMPLE PATH",
    heading: "Start Small. Build What Creates Value.",
    items: [
      {
        number: "01",
        title: "Start Free",
        price: "Free",
        description:
          "Tell us about your business and the problem you're trying to solve.",
        includes: [
          "Initial requirement review",
          "Business problem assessment",
          "Recommended next step",
        ],
        cta: { label: "Talk To Human", href: "/discovery-call" },
        recommended: false,
      },
      {
        number: "02",
        title: "The Audit",
        price: "$2,000",
        description:
          "We audit all types of systems, then suggest the best automation for your business.",
        guarantee:
          "If our suggested improvement is not the actual improvement, the audit is free of cost, we will not charge for that audit.",
        includes: [
          "Workflow mapping",
          "Best automation recommendation",
          "AI opportunities",
          "Solution architecture",
          "Implementation roadmap",
        ],
        cta: { label: "Start The Audit", href: "/contact" },
        recommended: true,
      },
      {
        number: "03",
        title: "Custom Build",
        price: "Custom Pricing",
        description: "We design and build the solution.",
        examplesLabel: "Examples",
        includes: [
          "AI agents",
          "Automations",
          "Integrations",
          "CRM systems",
          "Dashboards",
          "Portals",
          "Custom software",
        ],
        cta: { label: "Discuss Your Project", href: "/contact" },
        recommended: false,
      },
    ],
  },

  aiAgents: {
    eyebrow: "AI AGENTS",
    heading: "AI That Doesn't Just Answer. It Works.",
    description:
      "We build AI agents that can understand requests, retrieve information, interact with business systems and complete defined workflows.",
    items: [
      {
        title: "Client & Lead Follow-Up",
        boldLine:
          "We automate outreach, follow-ups, and CRM updates so new leads and inquiries get a fast, consistent response without manual chasing.",
        image: {
          src: "/images/pages/home/agents/healthcare-clinic-desk.jpg",
          alt: "Healthcare staff reviewing patient records and scheduling at a clinic desk",
        },
      },
      {
        title: "Intake & Scheduling",
        boldLine:
          "We automate intake forms, scheduling, and routine questions so requests get triaged and routed correctly, 24/7, without staff manually sorting through them.",
        image: {
          src: "/images/pages/home/agents/construction-blueprint.jpg",
          alt: "Construction team reviewing blueprints together on a job site",
        },
      },
      {
        title: "Back-Office Operations",
        boldLine:
          "We automate the paperwork behind the scenes, proposals, documentation, reporting, and repetitive admin work, so your team spends less time on busywork and more time on the job.",
        image: {
          src: "/images/pages/home/agents/back-office-operations.png",
          alt: "Office team reviewing analytics dashboards in a meeting",
        },
      },
    ],
    cta: { label: "Build an AI Agent", href: "/contact" },
  },

  stats: {
    eyebrow: "WHAT CLIENTS GAIN",
    heading: "The Outcomes We Design For.",
    description:
      "When follow-ups, intake, and back-office work run as systems — not inbox chores — the numbers look different.",
    items: [
      {
        value: 60,
        suffix: "s",
        unit: "",
        body: "Target response time for new leads and inquiries — so nothing sits unanswered.",
        footer: "LEAD FOLLOW-UP",
      },
      {
        value: 24,
        suffix: "/7",
        unit: "",
        body: "AI agents that qualify, answer routine questions, and book meetings while your team sleeps.",
        footer: "ALWAYS-ON AGENTS",
      },
      {
        value: 2,
        suffix: "x",
        unit: "",
        body: "Faster follow-ups when outreach and CRM updates stop depending on manual chasing.",
        footer: "SALES MOMENTUM",
      },
      {
        value: 6,
        suffix: "",
        unit: "weeks",
        body: "From clarity to first automation in production — weeks of building, not months of waiting.",
        footer: "TIME TO FIRST SHIP",
      },
    ],
  },

  automation: {
    eyebrow: "CONNECTED SYSTEMS",
    heading: "Your Team Shouldn't Be the Integration Between Your Software.",
    description:
      "We connect the tools your business already uses so information moves automatically between teams and systems.",
    steps: [
      "Lead Captured",
      "AI Qualification",
      "CRM Updated",
      "Sales Team Assigned",
      "Follow-Up Triggered",
      "Proposal Generated",
      "Invoice Created",
      "Operations Notified",
      "Dashboard Updated",
    ],
  },

  testimonialsSection: {
    intro: {
      title: "TESTIMONIALS",
      description:
        "Hear directly from business leaders who partner with System Heuristics to build high-impact AI solutions that streamline operations and drive measurable growth.",
    },
    items: [
      {
        name: "Jacob Rothefield",
        rating: 5,
        url: "/images/pages/home/testimonials/jacob.png",
        text: "Professional team and after a short briefing was able to work independently to produce an excellent product at a very high level of quality. He is a smart guy and a pleasure to work with. I would work with him again, thank you.",
        linkedin: "https://www.linkedin.com/in/rothfield/",
      },
      {
        name: "Michael Pedersen",
        rating: 5,
        url: "/images/pages/home/testimonials/mike.png",
        text: "They were excellent to work with. The team brought passion, collaboration, and enthusiasm to the project, which we truly appreciated. They will continue to be a valued partner on our projects moving forward.",
        linkedin: "https://www.linkedin.com/in/michaelp-dk/",
      },
      {
        name: "Abdullah Koc",
        rating: 5,
        url: "/images/pages/home/testimonials/abdullah.png",
        text: "A professional and passionate team with a strong drive to solve problems. Communication was clear and efficient throughout the project. We would be happy to work with them again.",
        linkedin: "https://www.linkedin.com/in/abdullah-koc/",
      },
      {
        name: "Willy Danenberg",
        rating: 5,
        url: "/images/pages/home/testimonials/willy.png",
        text: "Did a great job on time and to my satisfaction. Communicated well and followed up step by step making sure what he delivers is what I needed. Many thanks!",
        linkedin: "https://www.linkedin.com/in/willydanenberg/",
      },
      {
        name: "Evan Cheney",
        rating: 5,
        url: "/images/pages/home/testimonials/evan.png",
        text: "Did a fantastic job with this project. He was fantastic with his communication, and did exactly what was asked of him in a timely manner.",
        linkedin: "https://www.linkedin.com/in/evan-cheney-895232328/",
      },
      {
        name: "Veltio Inc.",
        rating: 5,
        url: "/images/pages/home/testimonials/veltio.png",
        text: "It was an absolute pleasure working with System Heuristics. The expertise can be seen in their work and how they communicates their effort.",
        linkedin: "https://www.linkedin.com/in/andrewtsionas/",
      },
      {
        name: "Andrew Andrawes",
        rating: 5,
        url: "/images/pages/home/testimonials/andrew_andrawes.png",
        text: "It was great working with their team, and we will be reaching out again for future automation projects.",
        linkedin: "https://www.linkedin.com/in/andrew-andrawes-b9454629/",
      },
      {
        name: "Aloysius Fobi",
        rating: 5,
        url: "/images/pages/home/testimonials/aloysius.png",
        text: "An extremely knowledgeable team with both practical and theoretical expertise.",
        linkedin: "https://www.linkedin.com/in/afobi/",
      },
      {
        name: "Natalie Carlson",
        rating: 5,
        url: "/images/pages/home/testimonials/natalie.png",
        text: "A Pro, communicative and highly competent.",
        linkedin: "https://www.linkedin.com/in/natalie-carlson-9b47b37a/",
      },
    ],
  },

  clients: {
    eyebrow: "CLIENTS",
    heading: "Organizations That Trust System Heuristics.",
    description:
      "From healthcare platforms to construction operators and growth-focused brands, real teams, real systems.",
    items: [
      {
        name: "AIDN",
        logo: "/images/pages/home/clients/aidn.avif",
        website: "https://www.askaidn.com/",
      },
      {
        name: "One5 Health",
        logo: "/images/pages/home/clients/one5.avif",
        website: "https://www.one5.health/",
      },
      {
        name: "US Medical",
        logo: "/images/pages/home/clients/usmedical.avif",
        website: "https://usmedicaldirectors.com/",
      },
      {
        name: "AZ Net Marketing",
        logo: "/images/pages/home/clients/clients-AZNetMarketing.avif",
        website: "https://aznetmarketing.com/",
      },
      {
        name: "Bayu Lestari",
        logo: "/images/pages/home/clients/clients-BayuLestari.avif",
        website: "https://www.bayulestari.com/",
      },
      {
        name: "Carmichael",
        logo: "/images/pages/home/clients/clients-Carmichael.avif",
        website: "https://www.askaidn.com/",
      },
      {
        name: "Ichiban Parts",
        logo: "/images/pages/home/clients/clients-Ichiban-Parts.avif",
        website: "https://www.ichibanparts.com/",
      },
      {
        name: "Visual Artistry",
        logo: "/images/pages/home/clients/clients-Visual-Artistry.avif",
        website: "https://www.visualartistry.co/",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Questions Before You Start?",
    items: [
      {
        question: "What does System Heuristics do?",
        answer:
          "We help businesses improve sales, marketing and operations through AI agents, automation, system integrations and custom software.",
      },
      {
        question: "Do you only work with Healthcare and Construction?",
        answer:
          "No. These are industries where we have deeper experience, but our approach is designed for businesses across industries. We start by understanding your workflow and business problem.",
      },
      {
        question: "What is The Audit?",
        answer:
          "The Audit is a $2,000 discovery and planning engagement where we analyze your processes, systems and opportunities and provide a prioritized implementation roadmap. We audit all types of systems and recommend the best automation. If our suggested improvement is not the actual improvement, the audit is free of cost.",
      },
      {
        question: "Do I need to know what technology I need?",
        answer:
          "No. You only need to explain the business problem. We'll help determine whether automation, AI, integration or custom software is the right solution.",
      },
      {
        question: "Can you work with our existing software?",
        answer:
          "Yes. We can integrate and automate many existing business systems rather than replacing everything.",
      },
      {
        question: "Do you build custom AI agents?",
        answer:
          "Yes. We design AI agents for sales, customer support, operations, knowledge management, document processing and other defined workflows.",
      },
      {
        question: "How does the Free option work?",
        answer:
          "Submit your business details and describe the problem you're facing. We'll review the request and recommend the most useful next step.",
      },
      {
        question: "How much does custom software cost?",
        answer:
          "Custom projects are priced based on scope, complexity, integrations and requirements. We recommend starting with a free review or The Audit when the problem requires deeper discovery.",
      },
    ],
  },

  contact: {
    id: "home-contact",
    eyebrow: "START HERE",
    heading: "Tell Us What You Want to Improve.",
    description:
      "You don't need to know the solution. Tell us what's taking too long, creating manual work, losing opportunities or preventing your business from scaling.",
    infoCards: [
      {
        title: "Sales & Marketing",
        description: "Lead generation, CRM and marketing automation.",
      },
      {
        title: "AI & Automation",
        description: "AI agents and intelligent workflows.",
      },
      {
        title: "Custom Software",
        description: "Business systems, dashboards, portals and applications.",
      },
      {
        title: "Operations & Workflow",
        description:
          "Intake, scheduling, proposals, and back-office paperwork.",
      },
    ],
    note: "Start with the problem. We'll help you determine the next step.",
  },

  cta: {
    eyebrow: "READY TO IMPROVE THE WAY YOUR BUSINESS WORKS?",
    heading: "What Would You Automate If You Could Start Today?",
    description:
      "Tell us where your team is losing time, where opportunities are being missed, or where your current systems aren't keeping up.",
    primaryCta: { label: "Talk To Human", href: "/discovery-call" },
    secondaryCta: { label: "Explore Our Projects", href: "/projects" },
  },
};
