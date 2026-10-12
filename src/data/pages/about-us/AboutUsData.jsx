import {
  Brain,
  Eye,
  MessageSquareText,
  PieChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Constants } from "../../../utils/global/Constants";

export const AboutUsData = {
  hero: {
    title: "About Us",
    description: `At ${Constants?.company?.name}, we design and build custom software, AI agents, automation systems, and data-driven digital products that help businesses operate faster, smarter, and more reliably.`,

    bannerImage: "/images/pages/about-us/hero/about-us-hero.avif",
    buttonLabel: "Lets Talk →",
  },
  whoWeAre: {
    title: "WHO WE ARE?",
    description:
      "A software and AI automation team helping organizations turn complex workflows into reliable digital systems.",
    teamInfo: [
      {
        title: "AI Specialists",
        description:
          "Our machine learning, deep learning, and analytics experts transform raw data into actionable insights, enabling smarter decision-making and sustained growth.",
      },
      {
        title: "Software Developers",
        description:
          "With a passion for innovation and efficiency, our development team creates robust, scalable, and user-friendly applications designed to drive operational excellence.",
      },
      {
        title: "Industry Professionals",
        description:
          "From healthcare and fintech to legal, real estate, logistics, and education, our domain specialists understand the unique challenges and regulations of each sector, ensuring that our solutions are tailor-made for real-world impact.",
      },
      {
        title: "Compliance & Regulatory Experts",
        description:
          "We prioritize trust and integrity. Our compliance officers stay ahead of ever-changing industry regulations, ensuring that our technologies meet the highest standards of security, privacy, and ethical responsibility.",
      },
      {
        title: "Experience Designers & Strategists",
        description:
          "Our dedicated UX/UI designers and business strategists work collaboratively to ensure that every solution we deliver is not just powerful, but also intuitive, user-centric, and aligned with our clients’ broader objectives.",
      },
    ],
  },
  ourTeamSection: {
    header: {
      title: "MEET OUR TEAM",
      description: "Our team of talented professionals making it all happen.",
    },
    members: [
      {
        profile: "/images/pages/about-us/our-team/OurTeams-ShoaibHasnat.avif",
        name: "Shoaib H",
        role: "Co-Founder",
      },
      {
        profile: "/images/pages/about-us/our-team/OurTeams-Umair.avif",
        name: "Umair S",
        role: "Co-Founder",
      },
      {
        profile: "/images/pages/about-us/our-team/OurTeams-Kashif.avif",
        name: "Dr. Kashif Z",
        role: "Senior A.I Consultant",
      },
      {
        profile: "/images/pages/about-us/our-team/Aslam-Javed.avif",
        name: "Dr. Aslam J.",
        role: "Senior Consultant",
      },
      {
        profile: "/images/pages/about-us/our-team/OurTeams-Taqdeem.avif",
        name: "Taqdeem Z",
        role: "Bussiness Relations",
      },
    ],
  },
  faqSection: {
    faqs: [
      {
        question: `What is ${Constants?.company?.name}?`,
        answer: `${Constants?.company?.name} is a custom software and AI automation company that builds web platforms, AI agents, workflow automation, data systems, and digital products for businesses that need measurable operational improvements.`,
      },
      {
        question: `How does ${Constants?.company?.name} improve efficiency?`,
        answer: `We leverage AI, machine learning, and intelligent automation to streamline workflows, reduce manual effort, and enhance overall operational efficiency for businesses.`,
      },
      {
        question: `Is the system secure?`,
        answer: `Yes, we implement advanced security protocols, encryption, and best practices to protect your data and ensure system integrity.`,
      },
      {
        question: `Can I integrate your solutions with other platforms?`,
        answer: `Absolutely! Our solutions support APIs and other integration methods to connect seamlessly with your existing systems and services.`,
      },
      {
        question: `What are the pricing plans?`,
        answer: `We offer flexible pricing options tailored to different business needs. Contact us to get a customized quote based on your requirements.`,
      },
      {
        question: `How can I get support?`,
        answer: `Our support team is available via email, live chat, and phone to assist you with any questions or technical issues.`,
      },
      {
        question: `Which industries do you serve?`,
        answer: `We serve industries including healthcare, fintech, SaaS, e-commerce, and enterprise operations. Our AI agents and automation systems help organizations streamline workflows, improve decision-making, and achieve measurable efficiency and growth across data-driven and operations-heavy environments.`,
      },
    ],
  },
  statisticsSection: {
    intro: {
      chipLabel: `Our Achievements`,
      title: `Driving Results Beyond Technology`,
      // description: `We combine AI-powered solutions data-driven strategies to boost efficiency, decision-making, and deliver measurable outcomes every business.`,
    },
    stats: [
      {
        id: 2,
        number: 100,
        suffix: `%`,
        title: `Client Success Rate`,
      },
      {
        id: 4,
        image: `/images/Countries-Served-Our-Results.avif`,
        number: 10,
        suffix: `+`,
        title: `Countries Served`,
      },
      {
        id: 3,
        number: 80,
        suffix: `%`,
        title: `Repeating clients`,
      },
      {
        id: 1,
        number: 60,
        suffix: `+`,
        title: `Projects Delivered`,
      },
    ],
  },
  whyChooseUsSection: {
    intro: {
      chipLabel: `We Are The Best Fit`,
      title: (
        <>
          WHY <br /> CHOOSE US?
        </>
      ),
      // description: `We combine deep technical expertise with business understanding to deliver intelligent solutions that integrate seamlessly into your workflows, reduce costs, and produce measurable performance gains. Our focus on reliability, scalability, and long-term value ensures every system we build continues to drive results as your business grows.`,
    },
    reasons: [
      {
        title: `Multi-Industry Expertise`,
        content: `With in-depth experience across healthcare, fintech, legal, real estate, logistics, and education, our team delivers AI solutions informed by real-world industry insights. This multidisciplinary knowledge ensures every product we create is both innovative and highly relevant to your sector.`,
        icon: `faFactory`,
      },
      {
        title: `Tailored, Scalable Solutions`,
        content: `We understand that each organization faces unique challenges. That’s why we take a personalized approach—partnering closely with you to develop custom solutions that address your specific goals, adapt to evolving market conditions, and support long-term growth.`,
        icon: `faGears`,
      },
      {
        title: `Enterprise-Grade Architecture`,
        content: `From our rigorous development standards to our responsive support, we’re committed to exceeding expectations at every step. You can trust us to deliver robust, user-friendly technologies that not only meet your requirements but also set you up for ongoing success.`,
        icon: `faStar`,
      },
      {
        title: `Full Regulatory Compliance`,
        content: `In an era of heightened data protection and industry oversight, we ensure that all solutions align with the latest regulations and best practices. Our strict adherence to compliance standards provides peace of mind, safeguarding your organization’s reputation and integrity.`,
        icon: `faShieldHalved`,
      },
    ],
  },
  principlesSection: {
    title: "OUR PRINCIPLES",
    description:
      "The foundation of everything we do, our mission, vision, and values guide how we build technology, empower people, and shape the future.",

    vision: `At ${Constants?.company?.name}, our vision is to lead the evolution of AI solutions that empower individuals and organizations, setting new standards in well-being, efficiency, and sustainable growth. We aim to shape a future where cutting-edge technologies seamlessly integrate into everyday life, enabling people to achieve more than they ever thought possible.`,
    mission: `Our mission is to design and deliver AI-driven tools that enhance human potential, streamline operations, and foster lasting success. By combining advanced data analytics, intuitive software, and human-centric design, we equip businesses and communities with the insights and capabilities they need to thrive in a rapidly evolving digital landscape.`,
    values: `We are guided by five core values: Innovation, Integrity, Collaboration, Impact, and Inclusivity. We constantly push the boundaries of what technology can achieve while maintaining the highest ethical standards. We unite diverse talents and perspectives to develop solutions that truly matter, ensuring our technologies uplift individuals, reflect the richness of human experience, and help build a more equitable and prosperous world for all.`,
  },
  expertiseSection: {
    title: "OUR EXPERTISE",
    description:
      "We deliver innovative, AI-powered solutions and data-driven strategies that drive business growth, optimize performance, and empower organizations to thrive in a rapidly evolving digital world.",

    cardsData: [
      {
        title: "Machine Learning & Predictive Analytics",
        description:
          "Develop intelligent systems with advanced ML algorithms to automate complex business decisions, identify trends, and forecast outcomes. Our solutions transform your data into actionable insights for improved efficiency and strategic planning.",
        icon: Brain, // Or use a BarChart, TrendingUp, or Cpu icon
      },
      {
        title: "Generative AI for Workflow Automation",
        description:
          "Leverage state-of-the-art Generative AI models to create dynamic content, automate repetitive documentation tasks, and enhance creative processes. This enables your teams to achieve greater consistency and productivity across platforms.",
        icon: Sparkles, // Or use FileText, Zap, Bot
      },
      {
        title: "AI-Powered Language Processing",
        description:
          "Enhance communication and data analysis with AI-driven language models. We build solutions for intelligent text analysis, sentiment-aware chatbots, and automated document processing to streamline operations and improve customer engagement.",
        icon: MessageSquareText, // Or use Languages, MessageCircle
      },
      {
        title: "Computer Vision & Image Analysis",
        description:
          "Empower your business with AI for visual data. Our computer vision solutions enable automated image and video analysis, facial recognition for security or personalization, and object detection for quality control and logistics.",
        icon: Eye, // Or use Camera, Scan
      },
      {
        title: "Data Science & Real-Time Analytics",
        description:
          "Transform raw, complex data into clear, actionable insights. We build custom analytics platforms and predictive models that provide real-time reporting and dashboards, giving you the power to make faster, data-driven decisions.",
        icon: PieChart, // Or use Database, Activity
      },
      {
        title: "AI-Driven Security & Compliance",
        description:
          "Strengthen your cybersecurity posture with AI-powered threat detection, automated risk assessment, and compliance monitoring. Our systems are built with advanced encryption and adherence to regulatory standards to protect your data integrity.",
        icon: ShieldCheck, // Or use Lock, Shield
      },
    ],
  },
  collaborateSection: {
    title: "Collaborate With Us",
    description:
      "Ready to elevate your organization’s potential? Partner with our AI and machine learning experts to discover innovative solutions, make data-driven decisions, and transform the way you do business. Let’s work together to build a smarter, more efficient, and more impactful future.",
    btnText: "Talk to a Specialist",
  },
};
