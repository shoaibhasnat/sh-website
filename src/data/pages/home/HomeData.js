export const HomeData = {
  hero: {
    eyebrow: "GROW SALES • AUTOMATE FOLLOW-UPS • SCALE FASTER",
    heading: "Close More Deals. Automate the Busywork.",
    description:
      "System Heuristics helps teams capture leads, follow up faster, run AI agents, and turn disconnected tools into one revenue system.",
   primaryCta: {
      label: "See our Agents",
      href: "#ai-agents",
    },
    secondaryCta: {
      label: "Talk To Human",
      href: "/discovery-call",
    },
    proofPoints: [
      "Automated outreach & follow-ups",
      "CRM that stays current",
      "AI agents that do the work",
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
        src: "/images/pages/home/hero/strategy-meeting.jpg",
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
      "Growing businesses lose time through repetitive tasks, disconnected systems, manual follow-ups and processes that don't scale. We identify those gaps and turn them into connected systems.",
    items: [
      {
        title: "Increase Sales",
        description:
          "Automate lead capture, qualification, follow-ups, CRM updates and sales workflows.",
      },
      {
        title: "Automate Marketing",
        description:
          "Connect campaigns, lead nurturing, CRM data and customer journeys.",
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
        title: "Sales & Marketing",
        boldLine:
          "We automate the sales and marketing of the business, automated outreach and follow-up, CRM management, and automations inside your CRM.",
        description:
          "Qualify leads, nurture prospects, keep pipelines current, and keep campaigns moving without manual busywork.",
        image: {
          src: "/images/pages/home/agents/sales-marketing.jpg",
          alt: "Sales and marketing team collaborating in a modern office",
        },
      },
      {
        title: "Support",
        boldLine:
          "We automate customer support so common questions, ticket routing, and follow-ups are handled reliably around the clock.",
        description:
          "Answer customer questions, escalate complex cases, and keep support teams focused on work that needs a human.",
        image: {
          src: "/images/pages/home/agents/support.jpg",
          alt: "Customer support specialist assisting a client",
        },
      },
      {
        title: "Assistant",
        boldLine:
          "We automate day-to-day assistant work, research, scheduling, summaries, and repetitive operational tasks for your team.",
        description:
          "Support internal teams with research, documentation, coordination, and the recurring work that slows everyone down.",
        image: {
          src: "/images/pages/home/agents/assistant.jpg",
          alt: "Professional team collaborating on daily operations",
        },
      },
    ],
    cta: { label: "Build an AI Agent", href: "/contact" },
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
      },
      {
        name: "Michael Pedersen",
        rating: 5,
        url: "/images/pages/home/testimonials/mike.png",
        text: "They were excellent to work with. The team brought passion, collaboration, and enthusiasm to the project, which we truly appreciated. They will continue to be a valued partner on our projects moving forward.",
      },
      {
        name: "Abdullah Koc",
        rating: 5,
        url: "/images/pages/home/testimonials/abdullah.png",
        text: "A professional and passionate team with a strong drive to solve problems. Communication was clear and efficient throughout the project. We would be happy to work with them again.",
      },
      {
        name: "Willy Danenberg",
        rating: 5,
        url: "/images/pages/home/testimonials/willy.png",
        text: "Did a great job on time and to my satisfaction. Communicated well and followed up step by step making sure what he delivers is what I needed. Many thanks!",
      },
      {
        name: "Evan Cheney",
        rating: 5,
        url: "/images/pages/home/testimonials/evan.png",
        text: "Did a fantastic job with this project. He was fantastic with his communication, and did exactly what was asked of him in a timely manner.",
      },
      {
        name: "Veltio Inc.",
        rating: 5,
        url: "/images/pages/home/testimonials/veltio.png",
        text: "It was an absolute pleasure working with System Heuristics. The expertise can be seen in their work and how they communicates their effort.",
      },
      {
        name: "Andrew Andrawes",
        rating: 5,
        url: "/images/pages/home/testimonials/andrew_andrawes.png",
        text: "It was great working with their team, and we will be reaching out again for future automation projects.",
      },
      {
        name: "Aloysius Fobi",
        rating: 5,
        url: "/images/pages/home/testimonials/aloysius.png",
        text: "An extremely knowledgeable team with both practical and theoretical expertise.",
      },
      {
        name: "Natalie Carlson",
        rating: 5,
        url: "/images/pages/home/testimonials/natalie.png",
        text: "A Pro, communicative and highly competent.",
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
