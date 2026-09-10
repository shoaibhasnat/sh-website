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

  reviews: {
    eyebrow: "CLIENT REVIEWS",
    heading: "Trusted by Teams Who Ship Real Work.",
    description:
      "Feedback from operators, clinicians, builders, and founders who use systems we designed with them.",
    items: [
      {
        quote:
          "ATARA reduced our patient intake time by 50% and significantly decreased documentation errors. The AI assistant handles preliminary assessments consistently, allowing our staff to focus on critical cases.",
        author: "Hospital Administrator",
        role: "Director of Emergency Services",
        avatar: "/images/pages/home/testimonials/natalie.png",
      },
      {
        quote:
          "The workflow customization feature lets us tailor assessments to specific medical conditions. The automated summaries save me valuable time during patient reviews.",
        author: "Dr. Sarah Chen",
        role: "Emergency Medicine Physician",
        avatar: "/images/pages/home/testimonials/andrew_andrawes.png",
      },
      {
        quote:
          "The Magento store allowed us to manage a massive inventory efficiently while providing our customers with a smooth shopping experience.",
        author: "Ichiban Parts Team",
        role: "Operations Manager",
        avatar: "/images/pages/home/testimonials/mike.png",
      },
      {
        quote:
          "AIDN has revolutionized how I manage my patients. The blood report analysis feature saves me hours of manual review, and the personalized recommendations help me provide better care.",
        author: "Dr. Sarah Johnson",
        role: "Private Practice Physician",
        avatar: "/images/pages/home/testimonials/jacob.png",
      },
      {
        quote:
          "The comprehensive patient profiles give me a complete picture of my patients' health journey. Tracking onboarding data, health goals, and ongoing check-ins in one place improved practice efficiency.",
        author: "Dr. Michael Chen",
        role: "Family Medicine Specialist",
        avatar: "/images/pages/home/testimonials/evan.png",
      },
      {
        quote:
          "One5 Health has revolutionized how we manage patient intake. The AI-generated summaries save us hours of documentation time, and comprehensive health profiles give us immediate insights.",
        author: "Dr. Sarah Mitchell",
        role: "Private Practice Physician",
        avatar: "/images/pages/home/testimonials/aloysius.png",
      },
      {
        quote:
          "As a patient, I love being able to track my health goals and see my progress over time. The platform makes it easy to communicate with my doctor and keep all my health information in one place.",
        author: "Patient User",
        role: "One5 Health Patient",
        avatar: "/images/pages/home/testimonials/willy.png",
      },
      {
        quote:
          "Drexel Construction Management reduced our document creation time by 70% and eliminated formatting inconsistencies. The wizard interface makes it easy to generate professional documents.",
        author: "Project Manager",
        role: "Senior Construction Project Manager",
        avatar: "/images/pages/home/testimonials/abdullah.png",
      },
      {
        quote:
          "The template system allows us to maintain consistency across all our construction projects. Automated PDF and DOCX conversion saves hours of manual work.",
        author: "Documentation Specialist",
        role: "Construction Documentation Lead",
        avatar: "/images/pages/home/testimonials/veltio.png",
      },
      {
        quote:
          "MCSGPT helped me work through workbook activities systematically. The mentor kept me accountable and provided insights I hadn't considered.",
        author: "Sarah Johnson",
        role: "Career Transition Professional",
        avatar: "/images/pages/home/testimonials/natalie.png",
      },
      {
        quote:
          "The WhatsApp booking system with Lesta has revolutionized our customer service. We handle bookings 24/7 without additional staff, and booking efficiency increased by 70%.",
        author: "Resort Manager",
        role: "Operations Director",
        avatar: "/images/pages/home/testimonials/mike.png",
      },
      {
        quote:
          "The QuickBooks integration saves us hours of manual data entry. All bookings are automatically synced, and invoice generation is seamless.",
        author: "Finance Manager",
        role: "Accounting Department",
        avatar: "/images/pages/home/testimonials/evan.png",
      },
      {
        quote:
          "This automation eliminated manual order handling completely. Everything updates instantly and our team stays informed at all times.",
        author: "Operations Manager",
        role: "E-commerce Business",
        avatar: "/images/pages/home/testimonials/jacob.png",
      },
      {
        quote:
          "This chatbot saved us countless hours by automatically answering common client questions with accurate and natural responses.",
        author: "Business Owner",
        role: "Creative Services",
        avatar: "/images/pages/home/testimonials/andrew_andrawes.png",
      },
      {
        quote:
          "This automation replaced hours of manual hashtag research. Now we get structured influencer profile data in minutes—ready for outreach and analysis.",
        author: "Marketing Team",
        role: "Growth & Influencer Research",
        avatar: "/images/pages/home/testimonials/aloysius.png",
      },
      {
        quote:
          "This scraping solution enabled us to collect large volumes of product data reliably without being blocked. The automation significantly reduced manual effort.",
        author: "Data Engineer",
        role: "E-commerce Analytics Team",
        avatar: "/images/pages/home/testimonials/abdullah.png",
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
