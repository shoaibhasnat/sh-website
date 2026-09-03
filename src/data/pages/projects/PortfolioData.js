import { Constants } from "@/utils/Constants";

export const PortfolioData = {
  hero: {
    title: `Case Studies`,
    description: `Explore our case studies showcasing cutting-edge solutions across various industries. At ${Constants?.company?.name}, we craft innovative digital experiences, from web and mobile applications to enterprise solutions.`,

    bannerImage: `/images/pages/portfolio/hero/portfolio-hero.avif`,
  },
  introSection: {
    title: `Smart Technology Custom Software & Automation`,

    description: `At ${Constants?.company?.name}, we specialize in   developing cutting-edge
          software solutions tailored to diverse business needs. Our case studies
          include advanced web and mobile applications.`,
  },
  projectsSection: [
    {
      id: 1,
      private: false,
      projectName: "ATARA",
      projectImage: "/images/pages/portfolio/gallery/atara_fobi.avif",
      category: ["Healthcare Software", "AI Platform", "SaaS"],
      display: {
        description:
          "An AI-powered triage assistant that streamlines patient intake and accelerates clinical decision-making through avatar interactions.",
      },
      banner: {
        heading: "ATARA - AI-Powered Triage & Rapid Assessment Platform ",
        description:
          "ATARA is an intelligent healthcare triage assistant designed to streamline patient intake, accelerate clinical decision-making, and reduce operational burden for hospitals and care providers through AI-driven avatar conversations.",
        url: "https://atarafobi.com/",
        videoUrl:
          "https://drive.google.com/file/d/1KIb7z8RhqfPUm24BSPXaCOxGyvs1GyKq/view?usp=drive_link",
        localVideo: {
          url: "/images/3.mp4",
          orientation: "portrait",
        }, // e.g. "/videos/atara-demo.mp4"
        bannerImage: "/images/pages/portfolio/gallery/atara_fobi.avif",
      },
      introSection: {
        summary: {
          title: "Revolutionizing Patient Triage with AI",
          highlight: "Virtual Medical Assistant for Faster, Safer Assessments",
          description:
            "ATARA combines AI-driven avatar conversations, customizable medical workflows, and real-time clinical summaries to enable faster, safer, and more efficient patient assessments while maintaining HIPAA compliance and healthcare standards.",
        },
        clientDetail: {
          clientName: "Healthcare Institutions",
          companyName: "Various Hospitals & Clinics",
          clientIndustry: "Healthcare & Medical Services",
          clientServices: [
            "AI-Powered Patient Triage",
            "Clinical Workflow Automation",
            "Healthcare Data Analytics",
            "Patient Experience Enhancement",
          ],
          problemStatement: [
            "Time-consuming manual triage processes with inconsistent questioning",
            "Increased workload for healthcare professionals during patient intake",
            "Long waiting times impacting patient experience and outcomes",
            "Lack of standardized data collection and documentation",
            "Scalability challenges during peak hours or staff shortages",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Platform Features",
        description:
          "ATARA provides a comprehensive suite of features designed to transform healthcare triage operations through intelligent automation and structured workflows.",
        features: [
          "AI-powered video triage with virtual medical assistant avatar",
          "Customizable medical workflows with conditional branching logic",
          "Role-based access control for Admins, Doctors, Nurses, Patients, and Guests",
          "Automated patient summaries and key clinical insights extraction",
          "Multilingual workflow creation and patient interaction support",
          "Real-time conversation recording with subtitle-supported video playback",
        ],
      },
      challengesFaced: [
        {
          title: "Healthcare Compliance & Data Security",
          description:
            "Ensuring full HIPAA compliance while handling sensitive patient data required implementing end-to-end encryption, strict role-based access controls, and secure storage solutions for video recordings and medical information.",
        },
        {
          title: "Real-time Video Processing & AI Integration",
          description:
            "Integrating multiple third-party services (OpenAI, HeyGen) for AI-driven conversations and avatar video generation while maintaining performance required careful asynchronous processing and robust error handling.",
        },
        {
          title: "Complex Workflow Logic Implementation",
          description:
            "Developing a flexible system that allows healthcare professionals to create customizable medical workflows with conditional branching, response tags, and multilingual support required sophisticated data structures and UI design.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/atara_fobi.avif",
        heading: "AI-Driven Triage Platform Solution",
        description:
          "ATARA provides a comprehensive platform that automates preliminary patient assessments through AI avatar conversations, customizable workflows, and automated summarization, enabling healthcare providers to focus on critical care while maintaining data accuracy and compliance.",
        points: [
          "Virtual AI assistant conducts standardized patient interviews via video",
          "Healthcare providers create and manage condition-specific workflows",
          "Real-time processing of patient responses with dynamic question branching",
          "Automated generation of clinical summaries and key points for doctors",
          "Secure cloud infrastructure with encrypted data storage and transmission",
        ],
        techStackUsed: [
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            imagePng: "",
            url: "https://fastapi.tiangolo.com/", // official docs :contentReference[oaicite:0]{index=0}
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "React + Vite",
            image: "/images/tech-icons/Techstack-Framework-ReactVite.png",
            url: "https://vitejs.dev/",
          },
          {
            name: "MongoDB",
            image: "/images/tech-icons/Techstack-Framework-MongoDB.png",
            url: "https://www.mongodb.com/",
          },
          {
            name: "AWS",
            image: "/images/tech-icons/Techstack-Platform-AWS.png",
            url: "https://aws.amazon.com/",
          },
          {
            name: "OpenAI",
            image: "/images/tech-icons/Techstack-Platform-OpenAI.png",
            url: "https://openai.com/",
          },
          {
            name: "Material UI",
            image: "/images/tech-icons/material-ui.png",
            url: "https://mui.com/",
          },
          {
            name: "Redux",
            image: "/images/tech-icons/redux.png",
            url: "https://redux.js.org/",
          },
          {
            name: "ApexCharts",
            image: "/images/tech-icons/apexcharts.png",
            url: "https://apexcharts.com/",
          },
          {
            name: "WebRTC",
            image: "/images/tech-icons/webrtc.png",
            url: "https://webrtc.org/",
          },
          {
            name: "CryptoJS",
            image: "/images/tech-icons/cryptojs.png",
            url: "https://cryptojs.gitbook.io/docs/",
          },
          {
            name: "Recharts",
            image: "/images/tech-icons/recharts.png",
            url: "https://recharts.org/",
          },
          {
            name: "AES",
            image: "/images/tech-icons/aes.png",
            url: "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",
          },
          {
            name: "SHA",
            image: "/images/tech-icons/sha.png",
            url: "https://en.wikipedia.org/wiki/Secure_Hash_Algorithms",
          },
          {
            name: "HeyGen",
            image: "/images/tech-icons/heygen.png",
            url: "https://www.heygen.com/",
          },
          {
            name: "FFmpeg",
            image: "/images/tech-icons/ffmpeg.png",
            url: "https://ffmpeg.org/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Healthcare Administrators",
          role: "System Configuration & Analytics",
        },
        {
          name: "Doctors & Clinical Staff",
          role: "Workflow Design & Patient Review",
        },
        {
          name: "Nursing Teams",
          role: "Triage Assistant Operation",
        },
        {
          name: "System Administrators",
          role: "Deployment & Maintenance",
        },
        {
          name: "Implementation Teams",
          role: "Platform Setup & Training",
        },
      ],

      testimonials: [
        {
          quote:
            "ATARA reduced our patient intake time by 50% and significantly decreased documentation errors. The AI assistant handles preliminary assessments consistently, allowing our staff to focus on critical cases.",
          author: "Hospital Administrator",
          role: "Director of Emergency Services",
        },
        {
          quote:
            "The workflow customization feature lets us tailor assessments to specific medical conditions. The automated summaries save me valuable time during patient reviews.",
          author: "Dr. Sarah Chen",
          role: "Emergency Medicine Physician",
        },
      ],
      faqs: [
        {
          question: "What is ATARA and who is it for?",
          answer:
            "ATARA is an AI-powered triage and rapid assessment platform designed for hospitals, clinics, and healthcare providers. It assists in patient intake through virtual avatar conversations, workflow automation, and clinical summary generation.",
        },
        {
          question: "Does ATARA provide medical diagnosis?",
          answer:
            "No. ATARA is a clinical support tool that assists with preliminary patient assessment and data collection. It does not provide medical diagnosis, treatment recommendations, or replace professional medical judgment.",
        },
        {
          question: "How does the AI avatar work?",
          answer:
            "The AI avatar conducts video-based conversations with patients using pre-defined medical workflows. It asks questions, processes responses, and follows conditional logic paths based on patient answers, all while generating real-time video content.",
        },
        {
          question: "What security measures are in place?",
          answer:
            "ATARA implements HIPAA-compliant data handling, end-to-end encryption for sensitive data, encrypted video storage, role-based access control, secure authentication, and regular security audits to protect patient information.",
        },
        {
          question: "Can healthcare staff customize the assessment workflows?",
          answer:
            "Yes. Doctors and administrators can create, edit, and manage custom medical workflows with conditional branching, response tags, multilingual support, and default questions to match specific clinical needs.",
        },
        {
          question: "How does ATARA handle different user roles?",
          answer:
            "ATARA provides role-based access for Admins (full access), Doctors (workflow management & patient review), Nurses (triage operations), Patients (interaction only), and Guests (limited demo access), ensuring appropriate feature access for each user type.",
        },
        {
          question: "What technology stack powers ATARA?",
          answer:
            "Frontend: React + Vite with Material UI; Backend: FastAPI (Python) with OpenAI integration; Database: MongoDB; Avatar Generation: HeyGen; Deployment: AWS; Video Processing: FFmpeg & WebRTC.",
        },
        {
          question: "Can ATARA integrate with existing hospital systems?",
          answer:
            "While the current scope focuses on triage operations, ATARA is designed with scalability in mind. Future enhancements may include integration with Electronic Health Records (EHR) and other medical systems based on institutional requirements.",
        },
      ],
    },
    {
      id: 2,
      private: false,
      projectName: "Ichiban Parts",
      projectImage: "/images/pages/portfolio/gallery/ichiban_parts.avif",
      category: ["E-Commerce", "Automotive", "Magento Store"],
      display: {
        description:
          "A Magento-based automotive e-commerce platform with a large parts catalog and a fully responsive shopping experience.",
      },
      banner: {
        heading:
          "Ichiban Parts - High-Performance Automotive Parts E-Commerce Platform",
        description:
          "Ichiban Parts is a full-scale automotive e-commerce platform built on Magento, featuring thousands of performance car parts sourced through data scraping, structured catalog management, and a responsive shopping experience across all devices.",
        url: "https://www.ichibanparts.com/",
        videoUrl: "",
        localVideoUrl: "", // e.g. "/videos/ichiban-demo.mp4"
        bannerImage: `/images/pages/portfolio/gallery/ichiban_parts.avif`,
      },

      introSection: {
        summary: {
          title: "Performance Parts, Simplified Online",
          highlight: "Magento-Powered Auto Parts Store with Scalable Catalog",
          description:
            "Ichiban Parts was developed as a robust Magento e-commerce solution for selling high-performance automotive parts. The platform focuses on fast product discovery, reliable data structuring, seamless checkout, and mobile-first usability.",
        },

        clientDetail: {
          clientName: "Ichiban Parts",
          companyName: "Ichiban Performance Automotive",
          clientIndustry: "Automotive Aftermarket & Performance Parts",
          clientServices: [
            "Online Sale of Performance Car Parts",
            "Product Catalog Management",
            "Secure Checkout & Order Management",
            "Automotive Brand Distribution",
          ],
          problemStatement: [
            "Manual product listing was not feasible due to large product volume",
            "Inconsistent product data from multiple external sources",
            "Need for a scalable e-commerce solution for automotive parts",
            "Complex filtering requirements (vehicle, brand, price, category)",
            "Ensuring mobile-friendly shopping experience",
          ],
        },
      },

      mainFeatures: {
        heading: "Core Store Features",
        description:
          "Ichiban Parts delivers a complete automotive e-commerce experience using Magento’s flexibility combined with custom data handling and UI optimizations.",
        features: [
          "Magento-based scalable e-commerce architecture",
          "Automated product data scraping and structured imports",
          "Advanced product filtering (brand, price, category)",
          "Responsive design for desktop, tablet, and mobile",
          "Secure checkout with cart, coupons, and order summary",
        ],
      },

      challengesFaced: [
        {
          title: "Large-Scale Product Data Scraping",
          description:
            "Extracting thousands of automotive products from external sources required careful handling of inconsistent data formats, missing attributes, and duplicate entries.",
        },
        {
          title: "Magento Catalog Optimization",
          description:
            "Managing a large catalog with filters, pagination, and performance optimization required efficient indexing and Magento configuration tuning.",
        },
        {
          title: "Responsive UI Across Devices",
          description:
            "Ensuring a consistent shopping experience across desktop and mobile views required custom layout adjustments and mobile-first design decisions.",
        },
      ],

      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/ichiban_parts.avif",
        heading: "Scalable Magento E-Commerce Solution",
        description:
          "The solution combined Magento’s powerful e-commerce framework with automated product data scraping, optimized catalog structures, and a clean UI to deliver a high-performance automotive parts store.",
        points: [
          "Automated scraping and normalization of product data",
          "Bulk product imports into Magento catalog",
          "Custom category and attribute mapping",
          "Optimized filtering and pagination for large inventories",
          "Mobile-responsive UI for seamless shopping",
        ],
        techStackUsed: [
          {
            name: "Magento ",
            image: "/images/tech-icons/magento.png",
            url: "https://business.adobe.com/products/magento/magento-commerce.html",
          },
          {
            name: "Web Scraping",
            image: "/images/tech-icons/webscraping.png",
            url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_scraping",
          },
          {
            name: "Stripe",
            image: "/images/tech-icons/stripe.png",
            url: "https://stripe.com/",
          },
          {
            name: "PHP",
            image: "/images/tech-icons/php.png",
            url: "https://www.php.net/docs.php",
          },
          {
            name: "MySQL",
            image: "/images/tech-icons/mysql.png",
            url: "https://dev.mysql.com/doc/",
          },
          {
            name: "HTML5",
            image: "/images/tech-icons/html.png",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          {
            name: "CSS3",
            image: "/images/tech-icons/css.png",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
        ],
      },

      teamInvolved: [
        {
          name: "Frontend Developer",
          role: "UI Implementation & Responsive Design",
        },
        {
          name: "Backend Developer",
          role: "Magento Customization & Data Handling",
        },
        {
          name: "Data Engineer",
          role: "Product Data Scraping & Normalization",
        },
        {
          name: "QA Engineer",
          role: "Cross-Device & Checkout Testing",
        },
      ],

      testimonials: [
        {
          quote:
            "The Magento store allowed us to manage a massive inventory efficiently while providing our customers with a smooth shopping experience.",
          author: "Ichiban Parts Team",
          role: "Operations Manager",
        },
      ],

      faqs: [
        {
          question: "What is Ichiban Parts?",
          answer:
            "Ichiban Parts is an automotive e-commerce platform offering high-performance car parts through a Magento-based online store.",
        },
        {
          question: "How were products added to the store?",
          answer:
            "Products were sourced through automated data scraping, cleaned, normalized, and imported into Magento’s catalog system.",
        },
        {
          question: "Is the store mobile-friendly?",
          answer:
            "Yes. The platform is fully responsive and optimized for desktop, tablet, and mobile devices.",
        },
        {
          question: "What platform powers the store?",
          answer:
            "Ichiban Parts is built using Magento with custom PHP, JavaScript, and MySQL integrations.",
        },
      ],
    },
    {
      id: 3,
      private: false,
      projectName: "AIDN",
      projectImage: "/images/pages/portfolio/gallery/aidn.avif",
      category: ["Healthcare Software", "Patient Management Platform", "SaaS"],
      display: {
        description:
          "An intelligent patient management system for communication, health tracking, blood analysis, and personalized care recommendations.",
      },
      banner: {
        heading: "AIDN - AI-Powered Private Doctor Partner Platform",
        description:
          "AIDN is an intelligent healthcare management platform designed to connect private doctors with their patients, streamline patient data management, enable real-time communication, and provide comprehensive health insights through blood report analysis, health goal tracking, and personalized care recommendations.",
        url: "https://www.askaidn.com/",
        videoUrl: "",
        localVideo: {
          url: "/images/2.mp4",
          orientation: "portrait",
        },
        bannerImage: `/images/pages/portfolio/gallery/aidn.avif`,
      },
      introSection: {
        summary: {
          title: "Revolutionizing Private Healthcare with AI-Driven Insights",
          highlight:
            "Comprehensive Patient Management & Health Analytics Platform",
          description:
            "AIDN combines patient onboarding, health data tracking, blood report analysis with biomarker insights, personalized meal plans, health goal management, and real-time doctor-patient communication to enable private doctors to deliver personalized, data-driven healthcare while maintaining seamless patient engagement.",
        },
        clientDetail: {
          clientName: "Private Doctors & Healthcare Providers",
          companyName: "Various Private Medical Practices",
          clientIndustry: "Healthcare & Medical Services",
          clientServices: [
            "Patient Health Data Management",
            "Blood Report Analysis & Insights",
            "Health Goal Tracking & Recommendations",
            "Real-time Doctor-Patient Communication",
          ],
          problemStatement: [
            "Time-consuming manual review of blood reports and biomarker analysis",
            "Lack of personalized health recommendations based on patient-specific data",
            "Limited communication channels between doctors and patients for follow-ups",
            "Difficulty tracking patient onboarding progress and health goals over time",
            "Insufficient insights from health check-ins and patient responses",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Platform Features",
        description:
          "AIDN provides a comprehensive suite of features designed to transform private healthcare practice management through intelligent data analysis, patient engagement, and clinical insights.",
        features: [
          "Comprehensive patient management dashboard with search and pagination",
          "Detailed patient onboarding tracking (personal info, nutrition profile, energy tracking)",
          "Advanced blood report analysis with biomarker breakdown, priority classification, and clinical ranges",
          "Personalized meal plan recommendations (breakfast, lunch, dinner) with rationale",
          "Supplement recommendations with dosage and purpose",
        ],
      },
      challengesFaced: [
        {
          title: "Complex Blood Report Data Processing & Visualization",
          description:
            "Processing and displaying comprehensive blood report data including biomarker breakdowns, clinical ranges, optimal ranges, priority classifications, meal plans, supplements, and recommendations required sophisticated data structures, conditional rendering, and intuitive UI design to make complex medical information accessible.",
        },
        {
          title: "Real-time Chat Integration & Message Pagination",
          description:
            "Implementing a WhatsApp-style chat interface with infinite scroll pagination, message grouping by date, end-to-end encryption indicators, and seamless doctor-patient communication required careful state management, scroll position handling, and API integration for message history and real-time updates.",
        },
        {
          title: "Multi-role Authentication & Protected Route Management",
          description:
            "Managing multiple user roles (Admin, User, Combined) with different access levels and protected routes required sophisticated authentication logic, session management, and route protection to ensure appropriate feature access while maintaining security and user experience.",
        },
      ],
      proposedSolution: {
        leftSectionImage: "/images/pages/portfolio/project-details/aidn.avif",
        heading: "Comprehensive Healthcare Management Platform Solution",
        description:
          "AIDN provides an integrated platform that centralizes patient data, automates health report analysis, enables personalized care recommendations, and facilitates seamless doctor-patient communication, allowing private doctors to focus on patient care while the platform handles data management and insights generation.",
        points: [
          "Centralized patient management system with comprehensive profile views",
          "AI-driven blood report analysis with biomarker prioritization and clinical insights",
          "Personalized meal plans, supplement recommendations, and daily habit suggestions",
          "Health goal tracking with motivation, focus areas, and actionable next steps",
          "Real-time encrypted chat communication between doctors and patients",
          "Onboarding workflow tracking for nutrition profiles, activity levels, and health challenges",
        ],
        techStackUsed: [
          {
            name: "React + Vite",
            image: "/images/tech-icons/Techstack-Framework-ReactVite.png",
            url: "https://vitejs.dev/",
          },
          {
            name: "Material UI",
            image: "/images/tech-icons/material-ui.png",
            url: "https://mui.com/",
          },
          {
            name: "Redux",
            image: "/images/tech-icons/redux.png",
            url: "https://redux.js.org/",
          },
          {
            name: "Heroku",
            image: "/images/tech-icons/Heroku_logo.png",
            url: "https://www.heroku.com/",
          },
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            name: "MongoDB",
            image: "/images/tech-icons/Techstack-Framework-MongoDB.png",
            url: "https://www.mongodb.com/",
          },
          {
            name: "AWS",
            image: "/images/tech-icons/Techstack-Platform-AWS.png",
            url: "https://aws.amazon.com/",
          },
          {
            name: "OpenAI",
            image: "/images/tech-icons/Techstack-Platform-OpenAI.png",
            url: "https://openai.com/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "WB API",
            image: "/images/tech-icons/whatsapp.png",
            url: "https://developers.facebook.com/docs/whatsapp/",
          },
          {
            name: "Twilio",
            image: "/images/tech-icons/twilio.png",
            url: "https://www.twilio.com/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Private Doctors",
          role: "Patient Management & Clinical Decision Making",
        },
        {
          name: "Healthcare Administrators",
          role: "System Configuration & Patient Data Review",
        },
        {
          name: "Frontend Developers",
          role: "UI/UX Development & Feature Implementation",
        },
        {
          name: "Backend Developers",
          role: "API Development & Data Processing",
        },
        {
          name: "System Administrators",
          role: "Deployment & Infrastructure Management",
        },
      ],
      testimonials: [
        {
          quote:
            "AIDN has revolutionized how I manage my patients. The blood report analysis feature saves me hours of manual review, and the personalized recommendations help me provide better care. The chat feature keeps me connected with my patients between visits.",
          author: "Dr. Sarah Johnson",
          role: "Private Practice Physician",
        },
        {
          quote:
            "The comprehensive patient profiles give me a complete picture of my patients' health journey. Tracking their onboarding data, health goals, and ongoing check-ins in one place has significantly improved my practice efficiency.",
          author: "Dr. Michael Chen",
          role: "Family Medicine Specialist",
        },
      ],
      faqs: [
        {
          question: "What is AIDN and who is it for?",
          answer:
            "AIDN is a comprehensive healthcare management platform designed for private doctors and healthcare providers. It assists in patient data management, blood report analysis, health goal tracking, and facilitates real-time communication between doctors and patients.",
        },
        {
          question: "Does AIDN provide medical diagnosis?",
          answer:
            "No. AIDN is a clinical support and management tool that assists with patient data organization, blood report analysis, and health tracking. It does not provide medical diagnosis, treatment recommendations, or replace professional medical judgment. All insights are meant to support, not replace, clinical decision-making.",
        },
        {
          question: "How does the blood report analysis work?",
          answer:
            "AIDN processes uploaded blood reports and extracts biomarker data, comparing results against clinical and optimal ranges. The system prioritizes biomarkers (High, Medium, Low), generates personalized meal plans, supplement recommendations, daily habits, and actionable next steps based on the analysis.",
        },
        {
          question: "What security measures are in place?",
          answer:
            "AIDN implements secure authentication with role-based access control, encrypted data transmission, secure API endpoints with token-based authentication, and end-to-end encryption indicators for chat communications to protect sensitive patient health information.",
        },
        {
          question:
            "Can doctors communicate with patients through the platform?",
          answer:
            "Yes. AIDN includes a real-time WhatsApp-style chat interface that allows doctors to communicate directly with patients. Messages are paginated, grouped by date, and include encryption indicators for secure communication.",
        },
        {
          question: "How does AIDN handle different user roles?",
          answer:
            "AIDN provides role-based access for Admins (doctors with full patient management access), Users (patients with dashboard and profile access), and Combined roles (users with both admin and user permissions), ensuring appropriate feature access for each user type.",
        },
      ],
    },
    {
      id: 4,
      private: false,
      projectName: "One5 Health",
      projectImage: "/images/pages/portfolio/gallery/one_5_health.avif",
      category: [
        "Healthcare Platform",
        "AI-Powered Health Management",
        "SaaS",
        "Patient Portal",
      ],
      display: {
        description:
          "A healthcare platform that connects doctors and patients with AI-driven assessments, onboarding, and personalized care insights.",
      },
      banner: {
        heading: "One5 Health - AI-Powered Private Healthcare Partner Platform",
        description:
          "One5 Health is an intelligent healthcare management platform designed to connect private doctors with patients, streamline health assessments, and provide AI-driven insights for personalized care through comprehensive patient onboarding, health tracking, and clinical summary generation.",
        url: "https://one5health-prod-756bf5b72ea6.herokuapp.com/admin/dashboard",
        videoUrl: "",
        localVideo: {
          url: "/images/3.mp4",
          orientation: "portrait",
        }, // e.g. "/videos/atara-demo.mp4"
        bannerImage: "/images/pages/portfolio/gallery/one_5_health.avif",
      },
      introSection: {
        summary: {
          title: "Transforming Private Healthcare with AI",
          highlight:
            "Comprehensive Health Management Platform for Doctors and Patients",
          description:
            "One5 Health combines AI-powered patient intake analysis, health goal tracking, blood report management, and real-time clinical summaries to enable private doctors to deliver personalized, data-driven healthcare while empowering patients with comprehensive health insights and tracking capabilities.",
        },
        clientDetail: {
          clientName: "Private Healthcare Providers",
          companyName: "One5 Health",
          clientIndustry: "Private Healthcare & Medical Services",
          clientServices: [
            "AI-Powered Patient Intake & Assessment",
            "Health Profile Analysis & Scoring",
            "Clinical Summary Generation",
            "Health Goal Tracking",
          ],
          problemStatement: [
            "Time-consuming manual patient intake and assessment processes",
            "Lack of structured health data collection and analysis",
            "Difficulty in generating comprehensive patient summaries for doctors",
            "Limited visibility into patient health trends and goals",
            "Inefficient communication channels between doctors and patients",
            "Challenges in tracking and managing patient health data over time",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Platform Features",
        description:
          "One5 Health provides a comprehensive suite of features designed to transform private healthcare delivery through intelligent automation, structured data collection, and AI-driven insights.",
        features: [
          "AI-powered patient intake review with automated clinical summary generation",
          "Advanced health profile analysis with personal information, behavioral profile, and medical profile extraction",
          "Real-time patient summaries including chief complaints, relevant history, and flagged medications",
          "Health goal tracking and progress monitoring for patients",
          "Blood report management and historical tracking",
        ],
      },
      challengesFaced: [
        {
          title: "AI Summary Generation & Data Processing",
          description:
            "Implementing sophisticated AI algorithms to process patient onboarding data and generate comprehensive clinical summaries (personal information, behavioral profiles, medical profiles, chief complaints, relevant history, and medication flags) required complex data structuring, API integration with AI services, and handling various data formats (arrays, strings, objects).",
        },
        {
          title: "Real-time Data Synchronization & State Management",
          description:
            "Managing complex state across multiple components (user details, onboarding data, health goals, blood reports, chat messages) while ensuring real-time updates and proper data flow required implementing Redux for global state management, handling async operations, and managing loading states across the application.",
        },
        {
          title: "Role-Based Access Control & Multi-User Experience",
          description:
            "Developing separate interfaces and protected routes for Admin, User, and Combined roles while maintaining consistent functionality required sophisticated routing logic, permission management, and ensuring appropriate feature access for each user type without code duplication.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/one_5_health.avif",
        heading: "AI-Driven Healthcare Management Platform Solution",
        description:
          "One5 Health provides a comprehensive platform that automates patient intake processing, generates AI-powered clinical summaries, tracks health goals and reports, and facilitates seamless communication between doctors and patients, enabling healthcare providers to focus on personalized care while maintaining comprehensive patient records and insights.",
        points: [
          "AI processes patient onboarding questionnaires to extract key health insights",
          "Automated generation of clinical summaries with personal information, behavioral patterns, and medical profiles",
          "Real-time health goal tracking and blood report management for continuous monitoring",
          "Intelligent flagging of medications, chief complaints, and relevant medical history",
          "Secure messaging platform enabling direct doctor-patient communication",
        ],
        techStackUsed: [
          {
            name: "React + Vite",
            image: "/images/tech-icons/Techstack-Framework-ReactVite.png",
            url: "https://vitejs.dev/",
          },
          {
            name: "Material UI",
            image: "/images/tech-icons/material-ui.png",
            url: "https://mui.com/",
          },
          {
            name: "Redux",
            image: "/images/tech-icons/redux.png",
            url: "https://redux.js.org/",
          },
          {
            name: "Heroku",
            image: "/images/tech-icons/Heroku_logo.png",
            url: "https://www.heroku.com/",
          },
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            name: "MongoDB",
            image: "/images/tech-icons/Techstack-Framework-MongoDB.png",
            url: "https://www.mongodb.com/",
          },
          {
            name: "AWS",
            image: "/images/tech-icons/Techstack-Platform-AWS.png",
            url: "https://aws.amazon.com/",
          },
          {
            name: "OpenAI",
            image: "/images/tech-icons/Techstack-Platform-OpenAI.png",
            url: "https://openai.com/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "WB API",
            image: "/images/tech-icons/whatsapp.png",
            url: "https://developers.facebook.com/docs/whatsapp/",
          },
          {
            name: "Twilio",
            image: "/images/tech-icons/twilio.png",
            url: "https://www.twilio.com/",
          },
          {
            name: "PDF",
            image: "/images/tech-icons/pdf.png",
            url: "https://www.adobe.com/pdf/",
          },
          {
            name: "Excel (XLSX)",
            image: "/images/tech-icons/xlsx.png",
            url: "https://www.microsoft.com/en-us/microsoft-365/excel",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Healthcare Administrators",
          role: "Platform Management & User Administration",
        },
        {
          name: "Private Doctors",
          role: "Patient Review, Clinical Summary Analysis & Patient Communication",
        },
        {
          name: "Patients",
          role: "Health Data Input, Goal Tracking & Communication",
        },
        {
          name: "System Administrators",
          role: "Platform Deployment & Maintenance",
        },
        {
          name: "Development Team",
          role: "Feature Development & AI Integration",
        },
      ],
      testimonials: [
        {
          quote:
            "One5 Health has revolutionized how we manage patient intake. The AI-generated summaries save us hours of documentation time, and the comprehensive health profiles give us immediate insights into patient needs. The platform's ability to flag medications and suggest follow-up questions is invaluable.",
          author: "Dr. Sarah Mitchell",
          role: "Private Practice Physician",
        },
        {
          quote:
            "As a patient, I love being able to track my health goals and see my progress over time. The platform makes it easy to communicate with my doctor and keep all my health information in one place. The AI summaries help me understand my health profile better.",
          author: "Patient User",
          role: "One5 Health Patient",
        },
      ],
      faqs: [
        {
          question: "What is One5 Health and who is it for?",
          answer:
            "One5 Health is an AI-powered healthcare management platform designed for private doctors and their patients. It facilitates patient intake, generates clinical summaries, tracks health goals, manages blood reports, and enables secure communication between healthcare providers and patients.",
        },
        {
          question: "How does the AI summary generation work?",
          answer:
            "The platform uses AI to analyze patient onboarding questionnaires and automatically generate comprehensive clinical summaries including personal information, behavioral profiles, medical profiles, chief complaints, relevant medical history, flagged medications, and suggested follow-up questions. This helps doctors quickly understand patient needs and make informed decisions.",
        },
        {
          question: "What health data can patients track?",
          answer:
            "Patients can track health goals, upload and manage blood reports, view their health data history, monitor their profile score, and maintain comprehensive health records. The platform provides visualizations and analytics to help patients understand their health trends over time.",
        },
        {
          question: "How does the messaging system work?",
          answer:
            "One5 Health includes a secure WhatsApp-style messaging interface that enables direct communication between doctors and patients. Messages are encrypted, paginated for performance, and support real-time conversation with typing indicators and message timestamps.",
        },
        {
          question: "What user roles are supported?",
          answer:
            "The platform supports three main roles: Admin (full platform access and user management), User/Patient (health tracking and communication), and Combined (users with both admin and patient access). Each role has appropriate permissions and interface customization.",
        },
        {
          question: "Can patient data be exported?",
          answer:
            "Yes. Healthcare providers can generate and download comprehensive PDF reports containing patient details, clinical summaries, onboarding information, medical profiles, and behavioral insights. PDFs are formatted professionally and named using the onboarding ID for easy reference.",
        },
        {
          question: "What technology stack powers One5 Health?",
          answer:
            "Frontend: React + Vite with Material-UI for components; State Management: Redux Toolkit with Redux Persist; Charts: ApexCharts for data visualization; PDF Generation: jsPDF; Backend: FastAPI (Python) with MongoDB database; AI Integration: OpenAI for summary generation; Deployment: Heroku/AWS cloud infrastructure.",
        },
      ],
    },
    {
      id: 5,
      private: false,
      projectName: "Drexel Construction Management",
      projectImage: "/images/pages/portfolio/gallery/drexel.avif",
      category: ["Construction Software", "Document Management", "SaaS"],
      display: {
        description:
          "A document automation platform that streamlines construction workflows with template-based generation and wizard-driven management.",
      },
      banner: {
        heading:
          "Drexel - Intelligent Construction Document Generation Platform",
        description:
          "Drexel Construction Management is a comprehensive document automation platform designed to streamline construction project documentation, automate template-based document generation, and manage real estate construction workflows through an intuitive wizard-driven interface.",
        url: "",
        videoUrl: "",
        localVideoUrl: "", // e.g. "/videos/drexel-demo.mp4"
        bannerImage: `/images/pages/portfolio/gallery/drexel.avif`,
      },
      introSection: {
        summary: {
          title: "Transforming Construction Documentation with Automation",
          highlight:
            "Smart Document Generation for Faster, Accurate Project Documentation",
          description:
            "Drexel Construction Management combines template-based document creation, dynamic variable mapping, and automated PDF/DOCX generation to enable construction teams to create professional project documents efficiently while maintaining consistency and compliance with industry standards.",
        },
        clientDetail: {
          clientName: "Drexel Construction",
          companyName: "Drexel Construction Management",
          clientIndustry: "Construction & Real Estate Development",
          clientServices: [
            "Construction Document Automation",
            "Template-Based Document Generation",
            "Project Documentation Management",
            "Multi-Format Document Export",
          ],
          problemStatement: [
            "Time-consuming manual document creation with inconsistent formatting across projects",
            "Repetitive data entry for similar construction documents with varying project details",
            "Lack of standardized templates leading to documentation inconsistencies",
            "Difficulty managing and tracking multiple project documents",
            "Manual conversion between document formats (PDF, DOCX) requiring additional tools",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Platform Features",
        description:
          "Drexel Construction Management provides a comprehensive suite of features designed to transform construction documentation workflows through intelligent automation and structured template management.",
        features: [
          "Dynamic template creation and management with rich text editing capabilities",
          "Multi-step wizard interface for guided document generation with variable mapping",
          "Nested heading and sub-heading system with conditional point inclusion",
          "Automated HTML to PDF and DOCX conversion with professional formatting",
          "Google Drive integration for cloud-based document storage and sharing",
        ],
      },
      challengesFaced: [
        {
          title: "Complex Template Structure & Variable Management",
          description:
            "Implementing a flexible system that supports nested headings, sub-headings, and dynamic variable extraction from templates required sophisticated parsing logic and data structures to handle hierarchical document structures while maintaining template integrity.",
        },
        {
          title: "Multi-Format Document Conversion & Formatting",
          description:
            "Converting HTML content to both PDF and DOCX formats while preserving formatting, handling images (base64 encoding), maintaining proper page layouts, headers, footers, and page numbering required integration of multiple libraries (xhtml2pdf, python-docx) with custom styling logic.",
        },
        {
          title: "Dynamic Form Generation & State Management",
          description:
            "Creating a wizard interface that dynamically generates form fields based on template structure, manages complex state across multiple steps, handles conditional field visibility (e.g., budget amount based on budget type), and maintains data integrity throughout the document generation process.",
        },
      ],
      proposedSolution: {
        leftSectionImage: "/images/pages/portfolio/project-details/drexel.avif",
        heading: "Automated Construction Document Platform Solution",
        description:
          "Drexel Construction Management provides a comprehensive platform that automates construction document creation through template-based workflows, dynamic variable mapping, and multi-format export capabilities, enabling construction teams to focus on project execution while maintaining documentation consistency and compliance.",
        points: [
          "Template builder with rich text editor for creating reusable document structures",
          "Wizard-driven interface guides users through step-by-step document generation",
          "Dynamic variable extraction and replacement system for personalized documents",
          "Automated conversion to PDF and DOCX formats with professional formatting",
          "Cloud storage integration with Google Drive for centralized document management",
        ],

        techStackUsed: [
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            url: "https://fastapi.tiangolo.com/", // official docs :contentReference[oaicite:0]{index=0}
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "React + Vite",
            image: "/images/tech-icons/Techstack-Framework-ReactVite.png",
            url: "https://vitejs.dev/",
          },
          {
            name: "MongoDB",
            image: "/images/tech-icons/Techstack-Framework-MongoDB.png",
            url: "https://www.mongodb.com/",
          },
          {
            name: "AWS",
            image: "/images/tech-icons/Techstack-Platform-AWS.png",
            url: "https://aws.amazon.com/",
          },
          {
            name: "React DND",
            image: "/images/tech-icons/dnd.png",
            url: "https://react-dnd.github.io/react-dnd/",
          },
          {
            name: "React Quill",
            image: "/images/tech-icons/quill.png",
            url: "https://quilljs.com/",
          },
          {
            name: "OpenAI",
            image: "/images/tech-icons/Techstack-Platform-OpenAI.png",
            url: "https://openai.com/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Construction Project Managers",
          role: "Template Design & Document Workflow Configuration",
        },
        {
          name: "Documentation Specialists",
          role: "Template Creation & Content Management",
        },
        {
          name: "Construction Teams",
          role: "Document Generation & Project Documentation",
        },
        {
          name: "System Administrators",
          role: "Platform Deployment & Maintenance",
        },
        {
          name: "Quality Assurance Teams",
          role: "Document Review & Template Validation",
        },
      ],
      testimonials: [
        {
          quote:
            "Drexel Construction Management reduced our document creation time by 70% and eliminated formatting inconsistencies. The wizard interface makes it easy for our team to generate professional documents without technical expertise.",
          author: "Project Manager",
          role: "Senior Construction Project Manager",
        },
        {
          quote:
            "The template system allows us to maintain consistency across all our construction projects. The automated PDF and DOCX conversion saves us hours of manual work, and Google Drive integration makes document sharing seamless.",
          author: "Documentation Specialist",
          role: "Construction Documentation Lead",
        },
      ],
      faqs: [
        {
          question: "What is Drexel Construction Management and who is it for?",
          answer:
            "Drexel Construction Management is a document automation platform designed for construction companies, real estate developers, and project management teams. It assists in creating standardized construction documents through template-based workflows, reducing manual effort and ensuring consistency.",
        },
        {
          question: "How does the template system work?",
          answer:
            "Users can create reusable document templates with headings, sub-headings, and variables. The system automatically extracts variables from templates, and the wizard interface guides users to fill in these variables. Templates support rich text formatting, images, and nested structures for complex document layouts.",
        },
        {
          question: "What document formats are supported?",
          answer:
            "The platform generates documents in both PDF and DOCX formats. Documents are automatically converted from HTML with proper formatting, including headers, footers, page numbering, and embedded images. Both formats are uploaded to Google Drive for easy access and sharing.",
        },
        {
          question: "How does the wizard interface work?",
          answer:
            "The wizard guides users through a multi-step process: (1) Select a template, (2) Fill in template-level variables (address, description), (3) Select which headings to include, (4) Fill in heading-specific variables and toggle points, and (5) Review and edit the generated document before saving.",
        },
        {
          question: "Can users customize templates?",
          answer:
            "Yes. Users can create, edit, and delete templates using the template builder interface. Templates support drag-and-drop reordering of headings, rich text editing, image uploads, and variable definition. Changes to templates are immediately available for document generation.",
        },
        {
          question: "How does Google Drive integration work?",
          answer:
            "Generated documents (PDF and DOCX) are automatically uploaded to Google Drive in organized folders. The platform manages authentication, file organization, and provides direct links to documents. Users can also delete documents from both the platform and Google Drive.",
        },
        {
          question:
            "What technology stack powers Drexel Construction Management?",
          answer:
            "Frontend: React with Material-UI, React Router, React Hook Form, Quill Editor; Backend: FastAPI (Python) with MongoDB; Document Processing: python-docx, xhtml2pdf, BeautifulSoup; Cloud Storage: Google Drive API; Authentication: JWT with bcrypt password hashing.",
        },
      ],
    },
    {
      id: 6,
      private: false,
      projectName: "My Digital Self Career Coaching Agency",
      projectImage: "/images/pages/portfolio/gallery/my_digital_self.avif",
      category: [
        "Career Coaching",
        "AI Platform",
        "SaaS",
        "Educational Technology",
      ],
      display: {
        description:
          "An AI career coaching assistant that helps users discover their strengths through guided activities and personalized coaching.",
      },
      banner: {
        heading: "AI-Powered Career Guidance & Self-Discovery Platform",
        description:
          "My Digital Self Career Coaching Agency (MCSGPT) is an intelligent career guidance assistant designed to help individuals discover their career superpowers through interactive workbook activities, AI-powered coaching conversations, and personalized career development guidance based on the 'Revealing Your Career Superpower' methodology.",
        url: "",
        videoUrl: "",
        bannerImage: "/images/pages/portfolio/gallery/my_digital_self.avif",
      },
      introSection: {
        summary: {
          title: "Transforming Career Discovery with AI",
          highlight: "Personal AI Mentor for Career Growth & Self-Discovery",
          description:
            "MCSGPT combines AI-driven conversational guidance, structured workbook activities, and real-time coaching to enable individuals to explore their career path, identify their strengths, and make informed decisions about their professional journey through interactive self-reflection exercises.",
        },
        clientDetail: {
          clientName: "Career Seekers & Professionals",
          companyName: "My Digital Self Career Coaching Agency",
          clientIndustry: "Career Development & Professional Coaching",
          clientServices: [
            "AI-Powered Career Guidance",
            "Workbook Activity Coaching",
            "Career Self-Discovery Programs",
            "Professional Development Support",
          ],
          problemStatement: [
            "Lack of personalized, accessible career guidance for individuals seeking career clarity",
            "Difficulty in maintaining consistency and accountability in self-discovery exercises",
            "Limited availability of career coaches for one-on-one guidance",
            "Challenges in navigating complex workbook activities without structured support",
            "Need for instant feedback and motivation during career exploration journey",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Platform Features",
        description:
          "MCSGPT provides a comprehensive suite of features designed to transform career discovery and professional development through intelligent AI guidance and structured learning activities.",
        features: [
          "AI-powered career mentor with conversational guidance and real-time streaming responses",
          "Interactive workbook activity system with chapter-based structured exercises",
          "Knowledge companion for 'Revealing Your Career Superpower' book content",
          "User authentication and progress tracking with session management",
          "Activity flow control with skip, restart, and stop functionality",
        ],
      },
      challengesFaced: [
        {
          title: "Complex Activity Flow Management & Session State",
          description:
            "Implementing a robust system to manage workbook activity sessions with multiple states (chapter selection, activity confirmation, ongoing activity) while maintaining session persistence and preventing mid-activity topic switching required sophisticated state management and session handling logic.",
        },
        {
          title: "Message Classification & Intelligent Routing",
          description:
            "Developing an accurate classification system to distinguish between workbook questions, textbook reasoning queries, and general career chat required integrating OpenAI's classification API and handling edge cases for various user input formats and chapter/activity number variations.",
        },
        {
          title: "Vector Store Integration & Context Management",
          description:
            "Integrating OpenAI's vector store for book content retrieval while maintaining conversation context, managing previous response IDs for continuity, and ensuring relevant content extraction for textbook-related queries required careful API orchestration and context preservation.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/my_digital_self.avif",
        heading: "AI-Driven Career Coaching Platform Solution",
        description:
          "MCSGPT provides a comprehensive platform that automates career guidance through AI-powered conversations, structured workbook activities, and intelligent content retrieval, enabling individuals to discover their career superpowers at their own pace with consistent support and accountability.",
        points: [
          "AI career mentor conducts personalized coaching conversations via real-time streaming chat",
          "Users navigate workbook activities through structured chapter and activity selection flow",
          "Intelligent message classification routes queries to appropriate handlers (workbook, textbook, or chat)",
          "Vector store integration enables instant access to book content for summaries and explanations",
          "Session-based progress tracking maintains user state and conversation continuity",
        ],
        techStackUsed: [
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "Heroku",
            image: "/images/tech-icons/Heroku_logo.png",
            url: "https://www.heroku.com/",
          },
          {
            name: "MongoDB",
            image: "/images/tech-icons/Techstack-Framework-MongoDB.png",
            url: "https://www.mongodb.com/",
          },
          {
            name: "AWS",
            image: "/images/tech-icons/Techstack-Platform-AWS.png",
            url: "https://aws.amazon.com/",
          },
          {
            name: "OpenAI",
            image: "/images/tech-icons/Techstack-Platform-OpenAI.png",
            url: "https://openai.com/",
          },
          {
            name: "HTML5",
            image: "/images/tech-icons/html.png",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          {
            name: "CSS3",
            image: "/images/tech-icons/css.png",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            name: "Jinja",
            image: "/images/tech-icons/jinja.png",
            url: "https://jinja.palletsprojects.com/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Career Coaches & Content Creators",
          role: "Workbook Design & Career Methodology Development",
        },
        {
          name: "Platform Administrators",
          role: "User Management & Content Configuration",
        },
        {
          name: "Career Seekers & Users",
          role: "Workbook Activity Completion & Career Discovery",
        },
        {
          name: "System Administrators",
          role: "Deployment, Maintenance & Vector Store Management",
        },
        {
          name: "Development Team",
          role: "Platform Development & Feature Implementation",
        },
      ],
      testimonials: [
        {
          quote:
            "MCSGPT helped me work through the workbook activities systematically. The AI mentor kept me accountable and provided insights I hadn't considered. I discovered career paths I never knew aligned with my values.",
          author: "Sarah Johnson",
          role: "Career Transition Professional",
        },
        {
          quote:
            "The ability to ask questions about the book content and get instant clarifications made my learning journey so much smoother. The activity flow is intuitive, and I always know where I am in my progress.",
          author: "Michael Chen",
          role: "Recent Graduate",
        },
      ],
      faqs: [
        {
          question: "What is MCSGPT and who is it for?",
          answer:
            "MCSGPT (My Career Superpower GPT) is an AI-powered career guidance assistant designed for individuals seeking career clarity, professional development, and self-discovery. It's ideal for career changers, recent graduates, professionals in transition, and anyone looking to align their career with their values and strengths.",
        },
        {
          question: "How does the workbook activity system work?",
          answer:
            "Users select a chapter number and then choose an activity from that chapter. The AI mentor guides them through the activity step-by-step, asking one question at a time. Users can skip questions, restart activities, or stop at any time. Activities are 'locked' during completion to maintain focus.",
        },
        {
          question: "What is the 'Revealing Your Career Superpower' book?",
          answer:
            "It's the core methodology and content that MCSGPT is based on. The platform uses vector store technology to provide instant access to book content, allowing users to ask questions, get summaries, and receive explanations about career development concepts from the book.",
        },
        {
          question: "Can I use MCSGPT without the physical workbook?",
          answer:
            "Yes, MCSGPT provides access to workbook activities digitally. However, having the physical workbook can enhance the experience as it provides additional context and allows for offline reflection. The platform guides you through activities even without the physical book.",
        },
        {
          question: "How does the AI mentor maintain conversation context?",
          answer:
            "MCSGPT uses session-based state management and OpenAI's previous response ID tracking to maintain conversation continuity. Each user's progress, activity state, and conversation history are stored securely, allowing seamless continuation of coaching sessions.",
        },
        {
          question: "What types of questions can I ask the AI mentor?",
          answer:
            "You can ask about workbook activities, request book content summaries, seek career coaching advice, and discuss career-related topics. The AI is specifically trained to focus on career development and will politely redirect unrelated questions to maintain focus on your career journey.",
        },
        {
          question: "What technology stack powers MCSGPT?",
          answer:
            "Frontend: HTML/CSS/JavaScript with Jinja2 templates; Backend: FastAPI (Python) with OpenAI API integration; Database: MongoDB for user data, progress tracking, and chat logs; AI: OpenAI GPT models (GPT-4o, GPT-4o-mini) with vector store for book content; Authentication: bcrypt for password hashing and session management.",
        },
      ],
    },
    {
      id: 7,
      private: false,
      projectName: "Bayu Lestari Resort",
      projectImage: "/images/pages/portfolio/gallery/bayu_resort.avif",
      category: [
        "Hospitality Software",
        "Resort Management",
        "SaaS",
        "AI Automation",
      ],
      display: {
        description:
          "An AI-powered resort management system that automates bookings, operations, and guest communication via WhatsApp and virtual assistant Lesta.",
      },
      banner: {
        heading:
          "Bayu Lestari - AI-Powered Resort Automation & Booking Platform",
        description:
          "Bayu Lestari Resort Automation System is an intelligent hospitality management platform designed to streamline resort operations, automate customer bookings through WhatsApp, and enhance guest experience through AI-driven conversations with Lesta, the virtual booking assistant.",
        url: "",
        videoUrl: "",
        localVideoUrl: "", // e.g. "/videos/bayu-resort-demo.mp4"
        bannerImage: "/images/pages/portfolio/gallery/bayu_resort.avif",
      },
      introSection: {
        summary: {
          title: "Transforming Island Resort Operations with AI",
          highlight:
            "WhatsApp-Based Booking Assistant for Seamless Guest Experience",
          description:
            "Bayu Lestari Resort Automation System combines AI-driven WhatsApp conversations, comprehensive booking management, QuickBooks integration, and automated scheduling to enable efficient resort operations, seamless guest bookings, and streamlined financial management for the island resort located 25-30 minutes from Mersing Jetty, Johor.",
        },
        clientDetail: {
          clientName: "Bayu Lestari Island Resort",
          companyName: "Bayu Lestari Island Resort",
          clientIndustry: "Hospitality & Tourism",
          clientServices: [
            "WhatsApp-Based Booking Automation",
            "AI-Powered Customer Assistant (Lesta)",
            "Resort Management Dashboard",
            "QuickBooks Financial Integration",
          ],
          problemStatement: [
            "Manual booking processes causing delays and potential errors in reservation management",
            "High volume of customer inquiries requiring constant staff availability",
            "Complex pricing calculations for rooms, meals, boat transfers, and activities",
            "Lack of automated financial tracking and invoice generation",
            "Difficulty managing multiple booking channels and customer communication",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Platform Features",
        description:
          "Bayu Lestari Resort Automation System provides a comprehensive suite of features designed to transform resort operations through intelligent automation, AI-powered conversations, and integrated financial management.",
        features: [
          "AI-powered WhatsApp booking assistant (Lesta) for 24/7 customer support",
          "Automated room booking flow with 8 different room types (Exclusive Villas, Deluxe A-Frames, Executive Bungalows, etc.)",
          "Intelligent meal package management (Full Board, Breakfast, Lunch, Dinner) with age-based pricing",
          "Activity booking system for island hopping trips (3, 4, 5 islands), buggy rentals, and BBQ dinners",
          "Automated boat transfer cost calculation based on passenger age",
        ],
      },
      challengesFaced: [
        {
          title: "Complex Pricing Logic & Calculation",
          description:
            "Implementing accurate pricing calculations for multiple variables including room types (8 variants), meal packages (age-based pricing), boat transfers, activities, and extra charges required sophisticated logic to handle various combinations and edge cases while ensuring real-time accurate quotations.",
        },
        {
          title: "WhatsApp Integration & Conversation Flow Management",
          description:
            "Building a seamless WhatsApp-based booking experience with Twilio integration required developing complex conversation flows, state management for multi-step bookings, handling user interruptions, and maintaining context across different booking stages (lead generation, booking, queries).",
        },
        {
          title: "AI Assistant Integration & Context Management",
          description:
            "Integrating OpenAI's GPT-4o assistant to handle customer queries while maintaining accurate resort information (room types, pricing, policies, activities) required careful prompt engineering, context management, and ensuring the AI provides consistent and accurate information aligned with resort policies.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/bayu_resort.avif",
        heading: "Comprehensive Resort Automation Platform Solution",
        description:
          "Bayu Lestari Resort Automation System provides an end-to-end platform that automates customer bookings through WhatsApp conversations with AI assistant Lesta, manages complex pricing calculations, integrates with QuickBooks for financial tracking, and provides admin tools for efficient resort operations, enabling staff to focus on guest experience while maintaining operational efficiency.",
        points: [
          "Lesta AI assistant handles customer inquiries and bookings 24/7 via WhatsApp",
          "Automated multi-step booking flow collects guest information, room preferences, meal packages, and activities",
          "Real-time pricing calculation engine handles room rates, meal packages, boat transfers, and activity costs",
          "QuickBooks integration automatically syncs bookings and financial transactions",
          "Admin dashboard provides comprehensive view of bookings, customers, and resort analytics",
        ],

        techStackUsed: [
          {
            name: "React + Vite",
            image: "/images/tech-icons/Techstack-Framework-ReactVite.png",
            url: "https://vitejs.dev/",
          },
          {
            name: "Material UI",
            image: "/images/tech-icons/material-ui.png",
            url: "https://mui.com/",
          },
          {
            name: "Redux",
            image: "/images/tech-icons/redux.png",
            url: "https://redux.js.org/",
          },
          {
            name: "Heroku",
            image: "/images/tech-icons/Heroku_logo.png",
            url: "https://www.heroku.com/",
          },
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            name: "MongoDB",
            image: "/images/tech-icons/Techstack-Framework-MongoDB.png",
            url: "https://www.mongodb.com/",
          },
          {
            name: "AWS",
            image: "/images/tech-icons/Techstack-Platform-AWS.png",
            url: "https://aws.amazon.com/",
          },
          {
            name: "OpenAI",
            image: "/images/tech-icons/Techstack-Platform-OpenAI.png",
            url: "https://openai.com/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "WB API",
            image: "/images/tech-icons/whatsapp.png",
            url: "https://developers.facebook.com/docs/whatsapp/",
          },
          {
            name: "Twilio",
            image: "/images/tech-icons/twilio.png",
            url: "https://www.twilio.com/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Resort Administrators",
          role: "System Configuration & Booking Management",
        },
        {
          name: "Front Desk Staff",
          role: "Customer Support & Booking Verification",
        },
        {
          name: "Finance Team",
          role: "QuickBooks Integration & Financial Oversight",
        },
        {
          name: "System Administrators",
          role: "Platform Deployment & Maintenance",
        },
        {
          name: "Customer Service Team",
          role: "WhatsApp Communication & Guest Relations",
        },
      ],
      testimonials: [
        {
          quote:
            "The WhatsApp booking system with Lesta has revolutionized our customer service. We can now handle bookings 24/7 without additional staff, and the automated pricing calculations eliminate errors. Our booking efficiency has increased by 70%.",
          author: "Resort Manager",
          role: "Operations Director",
        },
        {
          quote:
            "The QuickBooks integration saves us hours of manual data entry. All bookings are automatically synced, and invoice generation is seamless. The admin dashboard gives us real-time insights into our operations.",
          author: "Finance Manager",
          role: "Accounting Department",
        },
        {
          quote:
            "Booking through WhatsApp with Lesta is so convenient! The AI assistant answered all my questions about room types, meal packages, and activities. The booking process was smooth and I received my confirmation immediately.",
          author: "Guest",
          role: "Customer",
        },
      ],
      faqs: [
        {
          question: "What is Bayu Lestari Resort Automation System?",
          answer:
            "Bayu Lestari Resort Automation System is a comprehensive hospitality management platform designed for the island resort. It automates customer bookings through WhatsApp conversations with AI assistant Lesta, manages room reservations, meal packages, activities, and integrates with QuickBooks for financial management.",
        },
        {
          question: "How does the WhatsApp booking system work?",
          answer:
            "Customers interact with Lesta, the AI-powered booking assistant, via WhatsApp. Lesta guides customers through a conversational booking flow, collecting information about check-in/check-out dates, room preferences, meal packages, and activities. The system automatically calculates pricing and generates booking confirmations.",
        },
        {
          question: "What room types are available for booking?",
          answer:
            "The system manages 8 room types: Exclusive Villa - Couple (Sea View, RM 450), Exclusive Villa - 3 Singles (Sea View, RM 450), Exclusive Villa - Family (Garden View, RM 500), Deluxe A-Frame (Garden View, RM 650), Standard Suite (Garden View, RM 850), Executive Bungalow - Sea View (RM 1,200), Executive Bungalow - Beach View (RM 1,100), and Balinese (Garden View, RM 350).",
        },
        {
          question: "How are meal packages and activities handled?",
          answer:
            "The system manages meal packages (Full Board, Breakfast, Lunch, Dinner) with age-based pricing for adults, children, and infants. It also handles activity bookings including island hopping trips (3, 4, or 5 islands), buggy rentals, and BBQ dinners, with automatic cost calculation.",
        },
        {
          question: "Does the system integrate with accounting software?",
          answer:
            "Yes, the platform integrates with QuickBooks for automated financial tracking. All bookings and transactions are automatically synced with QuickBooks, and the system handles OAuth token management and scheduled token refresh to maintain continuous integration.",
        },
        {
          question: "What technology stack powers the platform?",
          answer:
            "Frontend: React + Vite with Material UI and Redux for state management; Backend: FastAPI (Python) with MongoDB database; Integrations: Twilio for WhatsApp, OpenAI GPT-4o for AI assistant, QuickBooks API for accounting; Additional: APScheduler for automated tasks, xhtml2pdf/weasyprint for PDF generation.",
        },
        {
          question: "Can resort staff manage bookings through the system?",
          answer:
            "Yes, the platform includes an admin dashboard where resort staff can view all bookings, manage customer information, track booking status, view customer communication history, and access resort analytics. The system supports role-based access control for different staff levels.",
        },
      ],
    },
    {
      id: 8,
      private: true,
      projectName: "n8n – AI-Powered Google Sheets Automation",
      projectImage:
        "/images/pages/portfolio/gallery/bryan_mceire_automate_data_processing.avif",
      category: [
        "Workflow Automation",
        "Data Processing",
        "AI Integration",
        "SaaS",
      ],
      display: {
        description:
          "An advanced automation workflow that cleans, restructures, validates, and safely syncs Google Sheet data using an AI assistant.",
      },
      banner: {
        heading:
          "Automated Google Sheets Cleaning & Validation via GPT Assistant",
        description:
          "An advanced n8n-based automation workflow that ingests Google Sheet data, cleans and restructures it using an OpenAI GPT Assistant, validates output consistency, and safely appends the processed data back into Google Sheets with full lifecycle management.",
        url: "",
        videoUrl:
          "https://drive.google.com/file/d/1avtUp9UkCD_SbRyh7M9N2GlGjQZ2c-94/view?usp=drive_link",
        bannerImage:
          "/images/pages/portfolio/gallery/bryan_mceire_automate_data_processing.avif",
      },
      introSection: {
        summary: {
          title: "End-to-End AI Data Processing Pipeline",
          highlight:
            "Reliable, Validated, and Scalable AI-Assisted Sheet Automation",
          description:
            "The workflow orchestrates Google Sheets ingestion, structured data cleaning via GPT Assistant, polling-based execution control, output validation, and safe reinsertion into target sheets. It ensures accuracy by validating row counts before append operations and cleans up temporary OpenAI resources to maintain a production-grade automation environment.",
        },
        clientDetail: {
          clientName: "Internal Data Operations Teams",
          companyName: "System Heuristics",
          clientIndustry: "Data Automation & AI Systems",
          clientServices: [
            "Google Sheets Automation",
            "AI-Powered Data Cleaning",
            "Workflow Orchestration (n8n)",
            "Data Validation & Integrity Enforcement",
          ],
          problemStatement: [
            "Manual cleaning and restructuring of large Google Sheets is time-consuming and error-prone",
            "Inconsistent data formats across supplier inventory sheets",
            "Risk of corrupted or partial data being appended to production sheets",
            "Lack of validation mechanisms when using AI-generated outputs",
            "Need for scalable automation without leaving unused AI resources",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Features",
        description:
          "The workflow combines deterministic automation with AI reasoning while enforcing strict validation to ensure production safety.",
        features: [
          "Automated Google Sheet ingestion and XLSX download",
          "Custom data filtering and restructuring logic using JavaScript",
          "JSON row-length calculation for output validation",
          "Secure file upload to OpenAI Assistants API",
          "Thread-based GPT Assistant execution",
        ],
      },
      challengesFaced: [
        {
          title: "Complex Multi-Step Orchestration",
          description:
            "Designing a workflow that safely coordinates file upload, thread creation, assistant execution, polling, output retrieval, and cleanup required careful sequencing and branching logic.",
        },
        {
          title: "AI Output Reliability & Validation",
          description:
            "Ensuring that GPT-generated outputs exactly matched expected row counts required explicit validation logic to prevent silent data corruption.",
        },
        {
          title: "Asynchronous Assistant Execution",
          description:
            "Managing OpenAI Assistant runs required polling-based status checks with wait intervals while maintaining workflow state.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/bryan_mceire_automate_data_processing.avif",
        heading: "Validated AI-Assisted Sheet Processing Architecture",
        description:
          "A deterministic automation pipeline enhanced with GPT intelligence, designed with validation-first principles and full lifecycle management to ensure safe, scalable Google Sheets processing.",
        points: [
          "Google Sheets data is downloaded and normalized before AI processing",
          "Input row count is calculated and preserved",
          "GPT Assistant processes the file and returns a cleaned XLSX",
          "Polling ensures reliable completion before extraction",
          "Output is converted to structured JSON",
        ],
        techStackUsed: [
          {
            name: "n8n",
            image: "/images/tech-icons/n8n.png",
            url: "https://n8n.io/",
          },
          {
            name: "Google Sheets",
            image: "/images/tech-icons/sheets.png",
            url: "https://www.google.com/sheets/about/",
          },
          {
            name: "OpenAI",
            image: "/images/tech-icons/Techstack-Platform-OpenAI.png",
            url: "https://openai.com/",
          },
          {
            name: "Excel (XLSX)",
            image: "/images/tech-icons/xlsx.png",
            url: "https://www.microsoft.com/en-us/microsoft-365/excel",
          },
          {
            name: "REST API",
            image: "/images/tech-icons/rest_api.png",
            url: "https://restfulapi.net/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Automation Engineers",
          role: "Workflow Design & Validation Logic",
        },
        {
          name: "AI Engineers",
          role: "Prompt Engineering & Assistant Configuration",
        },
        {
          name: "Data Operations Team",
          role: "Sheet Structure & Mapping Rules",
        },
        {
          name: "System Administrators",
          role: "Credential, API & Resource Management",
        },
      ],
      testimonials: [],
      faqs: [
        {
          question: "What does this workflow do?",
          answer:
            "It automates Google Sheet data cleaning using a GPT Assistant, validates the results, and safely appends the cleaned data back into a target Google Sheet.",
        },
        {
          question: "How does it ensure data accuracy?",
          answer:
            "The workflow compares the number of input rows with the number of AI-processed output rows and only appends data if they match exactly.",
        },
        {
          question: "What happens if validation fails?",
          answer:
            "The append operation is skipped, preventing corrupted or incomplete data from entering the sheet.",
        },
        {
          question: "Are OpenAI resources cleaned up automatically?",
          answer:
            "Yes. Each assistant thread created during processing is deleted at the end of the workflow to prevent resource leakage.",
        },
      ],
    },
    {
      id: 9,
      private: true,
      projectName: "Zapier - Online Order & Inventory Automation With Zapier",
      projectImage:
        "/images/pages/portfolio/gallery/automation_inventory_zapier.avif",
      category: ["Automation", "Zapier", "Inventory Management"],
      display: {
        description:
          "A Zapier-powered automation system that streamlines online order handling, inventory updates, and real-time notifications across multiple tools.",
      },
      banner: {
        heading: "Online Order & Inventory Automation with Zapier",
        description:
          "This solution automates the entire order lifecycle—from form submission to inventory updates and team notifications—eliminating manual work, reducing errors, and ensuring real-time synchronization across business tools.",
        url: "",
        videoUrl:
          "https://drive.google.com/file/d/1Jnb-cgsUkeQjzaXa_3h0M2_-3iDFAHuX/view?usp=drive_link",
        bannerImage:
          "/images/pages/portfolio/gallery/automation_inventory_zapier.avif",
      },
      introSection: {
        summary: {
          title: "Simplifying Order & Inventory Management",
          highlight: "Real-Time Automation for Faster, Error-Free Operations",
          description:
            "Businesses often struggle with managing online orders and keeping inventory in sync when done manually. This Zapier-based automation ensures every order is logged, inventory is updated, and teams are notified instantly—creating a seamless, reliable workflow.",
        },
        clientDetail: {
          clientName: "E-commerce & Service-Based Businesses",
          companyName: "Multiple Small & Medium Businesses",
          clientIndustry: "E-commerce & Operations",
          clientServices: [
            "Online Order Automation",
            "Inventory Management",
            "Team Notifications",
            "Customer Communication Automation",
          ],
          problemStatement: [
            "Manual handling of online orders is time-consuming and error-prone",
            "Inventory levels are difficult to keep updated in real time",
            "Lack of synchronization between forms, inventory, and team notifications",
            "Delayed responses lead to poor customer experience",
            "Missed alerts when stock levels run low",
          ],
        },
      },
      mainFeatures: {
        heading: "Key Automation Features",
        description:
          "The automation ensures that all order-related actions are executed instantly and accurately without manual intervention.",
        features: [
          "Automated order capture from front-end form submissions",
          "Real-time inventory updates in Airtable",
          "Order logging in Google Sheets for tracking and reporting",
          "Instant team notifications via Slack",
          "Low-stock warning alerts for inventory management",
          "Automated SMS notifications using Twilio",
          "Order confirmation emails sent automatically to customers",
        ],
      },
      challengesFaced: [
        {
          title: "Manual Synchronization Across Tools",
          description:
            "Businesses relied on manually updating multiple systems, which often resulted in inconsistencies, delays, and human errors.",
        },
        {
          title: "Real-Time Inventory Accuracy",
          description:
            "Ensuring inventory levels were updated immediately after each order required precise automation logic and conditional workflows.",
        },
        {
          title: "Multi-Channel Notification Handling",
          description:
            "Coordinating alerts across Slack, SMS, and email while avoiding duplication or delays required careful Zapier workflow design.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/automation_inventory_zapier.avif",
        heading: "Fully Automated Order & Inventory Workflow",
        description:
          "A Zapier-powered automation that instantly processes orders, updates inventory, sends notifications, and confirms orders—ensuring operational efficiency and a smooth customer experience.",
        points: [
          "Customer submits an order via front-end form",
          "Order details are automatically logged in Google Sheets",
          "Inventory stock is updated instantly in Airtable",
          "Low-stock alerts are triggered when threshold is reached",
          "Slack notifications keep the entire team informed",
        ],
        techStackUsed: [
          {
            name: "Zapier",
            image: "/images/tech-icons/zapier.png",
            url: "https://zapier.com/",
          },
          {
            name: "Google Sheets",
            image: "/images/tech-icons/sheets.png",
            url: "https://www.google.com/sheets/about/",
          },
          {
            name: "Airtable",
            image: "/images/tech-icons/airtable.png",
            url: "https://www.airtable.com/",
          },
          {
            name: "Slack",
            image: "/images/tech-icons/slack.png",
            url: "https://slack.com/",
          },
          {
            name: "Twilio",
            image: "/images/tech-icons/twilio.png",
            url: "https://www.twilio.com/",
          },
          {
            name: "Gmail",
            image: "/images/tech-icons/gmail.png",
            url: "https://mail.google.com/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Automation Engineers",
          role: "Zapier Workflow Design & Integration",
        },
        {
          name: "Operations Team",
          role: "Inventory & Order Monitoring",
        },
        {
          name: "Customer Support",
          role: "Customer Communication Oversight",
        },
      ],

      testimonials: [
        {
          quote:
            "This automation eliminated manual order handling completely. Everything updates instantly and our team stays informed at all times.",
          author: "Operations Manager",
          role: "E-commerce Business",
        },
      ],
      faqs: [
        {
          question: "What problem does this automation solve?",
          answer:
            "It removes manual order processing and inventory updates by automating the entire workflow from form submission to notifications and confirmations.",
        },
        {
          question: "Which tools are integrated?",
          answer:
            "The automation integrates Zapier with Google Sheets, Airtable, Slack, Twilio, and Gmail.",
        },
        {
          question: "Does it support low-stock alerts?",
          answer:
            "Yes. When inventory reaches a predefined threshold, an automatic warning alert is sent to administrators.",
        },
        {
          question: "Are customers notified automatically?",
          answer:
            "Yes. Customers receive order confirmation emails and SMS notifications automatically after placing an order.",
        },
        {
          question: "Is this solution customizable?",
          answer:
            "Yes. The workflow can be customized to support different products, inventory rules, notification channels, and business processes.",
        },
      ],
    },
    {
      id: 10,
      private: true,
      projectName: "Make - AI Image Generation Automation",
      projectImage:
        "/images/pages/portfolio/gallery/image_generation_make.avif",
      category: ["AI Automation", "Make.com", "Generative AI"],
      display: {
        description:
          "A Make.com automation that converts simple text ideas into high-quality AI-generated images using OpenAI’s DALL·E 3 model, without requiring coding or prompt engineering skills.",
      },
      banner: {
        heading: "AI Image Generation Automation with Make.com",
        description:
          "This automation allows users to generate high-quality AI images by sending a simple text prompt. The workflow removes technical complexity by handling prompt delivery, image generation, and response handling automatically.",
        url: "",
        videoUrl:
          "https://drive.google.com/file/d/10grBpX2VW-DIdJ4_4n1YTu0Qkgz44Nz_/view?usp=drive_link",
        bannerImage:
          "/images/pages/portfolio/gallery/image_generation_make.avif",
      },
      introSection: {
        summary: {
          title: "Turning Ideas into Visuals Effortlessly",
          highlight: "From Simple Text to AI-Generated Images in Seconds",
          description:
            "Creating AI-generated images typically requires technical tools or carefully crafted prompts. This automation simplifies the process by allowing users to submit a simple idea and instantly receive a high-quality AI-generated image—no design or coding expertise required.",
        },
        clientDetail: {
          clientName: "Content Creators & Businesses",
          companyName: "Various Creators & Teams",
          clientIndustry: "Marketing, Design & Automation",
          clientServices: [
            "AI Image Generation Automation",
            "Prompt-to-Image Workflow Design",
            "Generative AI Integration",
            "No-Code Automation Solutions",
          ],
          problemStatement: [
            "AI image generation tools are often complex for non-technical users",
            "Writing effective prompts requires experience and iteration",
            "Manual image generation is time-consuming when repeated frequently",
            "Lack of automation limits scalability for content creation",
          ],
        },
      },
      mainFeatures: {
        heading: "Automation Capabilities",
        description:
          "The workflow is designed to make AI image generation fast, accessible, and repeatable for both individuals and teams.",
        features: [
          "Simple text prompt submission via Postman",
          "Webhook-based trigger using Make.com",
          "Automated image generation using OpenAI DALL·E 3",
          "Instant return of generated image URL",
          "High-quality AI-generated visuals",
          "Fully code-free and user-friendly workflow",
          "Reusable for social media and marketing content creation",
        ],
      },
      challengesFaced: [
        {
          title: "Simplifying AI Image Generation",
          description:
            "Reducing the complexity of AI image generation while maintaining output quality required abstracting prompt handling and API interactions into a single automated flow.",
        },
        {
          title: "Reliable API Communication",
          description:
            "Ensuring stable communication between Make.com, OpenAI’s DALL·E 3 API, and the webhook responder required careful request and response handling.",
        },
        {
          title: "Fast Turnaround Time",
          description:
            "Optimizing the workflow to return image URLs within seconds was essential for a smooth user experience.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/image_generation_make.avif",
        heading: "No-Code AI Image Generation Workflow",
        description:
          "A Make.com automation that converts user prompts into AI-generated images by orchestrating webhooks, HTTP requests, and OpenAI’s DALL·E 3 model in a seamless flow.",
        points: [
          "User sends a text prompt via Postman",
          "Make.com webhook receives the prompt",
          "Prompt is forwarded to OpenAI DALL·E 3 via HTTP request",
          "AI generates an image and returns a URL",
          "Webhook responder sends the image URL back to the user",
        ],
        techStackUsed: [
          {
            name: "Make.com",
            image: "/images/tech-icons/make.png",
            url: "https://www.make.com/",
          },
          {
            name: "OpenAI ",
            image: "/images/tech-icons/Techstack-Platform-OpenAI.png",
            url: "https://openai.com/",
          },
          {
            name: "Postman",
            image: "/images/tech-icons/postman.png",
            url: "https://www.postman.com/",
          },
          {
            name: "Webhooks",
            image: "/images/tech-icons/webhooks.png",
            url: "https://en.wikipedia.org/wiki/Webhook",
          },
          {
            name: "HTTP API",
            image: "/images/tech-icons/rest_api.png",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Automation Engineer",
          role: "Workflow Design & API Integration",
        },
        {
          name: "AI Engineer",
          role: "Model Integration & Prompt Handling",
        },
      ],
      testimonials: [
        {
          quote:
            "This automation makes AI image generation incredibly easy. I can turn ideas into visuals instantly without worrying about prompts or technical setup.",
          author: "Content Creator",
          role: "Digital Marketing",
        },
      ],
      faqs: [
        {
          question: "What does this automation do?",
          answer:
            "It converts a simple text prompt into a high-quality AI-generated image using OpenAI’s DALL·E 3 model through a no-code Make.com workflow.",
        },
        {
          question: "Do I need coding or design skills?",
          answer:
            "No. The entire process is automated and designed for non-technical users.",
        },
        {
          question: "How do users interact with the system?",
          answer:
            "Users send a text prompt via Postman, and the generated image URL is returned automatically.",
        },
        {
          question: "Can this be used for social media content?",
          answer:
            "Yes. The automation is ideal for quickly generating visuals for social media posts, marketing materials, and creative projects.",
        },
        {
          question: "Is the workflow reusable?",
          answer:
            "Yes. The Make.com automation can be reused and extended for various image generation use cases.",
        },
      ],
    },
    {
      id: 11,
      private: true,
      projectName: "n8n - Automated Questionnaire Chatbot",
      projectImage:
        "/images/pages/portfolio/gallery/qa_chatbot_automation.avif",
      category: ["Chatbot Automation", "n8n", "AI Assistants"],
      display: {
        description:
          "An automated questionnaire chatbot that answers repetitive client queries instantly using n8n, Google Sheets, and OpenAI, reducing manual workload and improving response speed.",
      },
      banner: {
        heading: "Automated Questionnaire Chatbot with n8n",
        description:
          "This smart chatbot automates responses to common customer questions such as pricing, services, and package details by combining structured business data with AI-powered natural language responses.",
        url: "",
        videoUrl:
          "https://drive.google.com/file/d/1VicC9YSb2ZfTn6bPThW2-32VYYvChFcU/view?usp=drive_link",
        bannerImage:
          "/images/pages/portfolio/gallery/qa_chatbot_automation.avif",
      },
      introSection: {
        summary: {
          title: "Eliminating Repetitive Client Queries",
          highlight: "Instant, Human-Like Answers Powered by AI",
          description:
            "Businesses often spend significant time responding to the same customer questions repeatedly. This automated questionnaire chatbot delivers instant, accurate, and natural replies by intelligently combining stored business information with AI-generated responses.",
        },
        clientDetail: {
          clientName: "Service-Based Businesses",
          companyName: "Photography & Creative Service Providers",
          clientIndustry: "Creative & Professional Services",
          clientServices: [
            "Customer Support Automation",
            "AI Chatbot Implementation",
            "Knowledge-Based Question Answering",
            "Workflow Automation",
          ],
          problemStatement: [
            "Repeated customer questions about services and pricing",
            "Manual responses consume time and slow down operations",
            "Inconsistent answers across different team members",
            "Delayed replies negatively impact customer experience",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Chatbot Capabilities",
        description:
          "The chatbot is designed to deliver fast, accurate, and context-aware responses while staying within the business knowledge scope.",
        features: [
          "Automated chatbot built using n8n workflows",
          "Webhook-based message intake from the frontend",
          "Business knowledge stored and managed in Google Sheets",
          "Context-aware question answering using OpenAI GPT-4",
          "Natural, human-like responses in real time",
          "Scope control to prevent unrelated or unsupported answers",
          "Instant responses without manual intervention",
        ],
      },
      challengesFaced: [
        {
          title: "Handling Repetitive Queries at Scale",
          description:
            "Manually answering recurring customer questions was inefficient and difficult to scale as business inquiries increased.",
        },
        {
          title: "Maintaining Accurate & Consistent Responses",
          description:
            "Ensuring that all chatbot responses were accurate and aligned with official business information required a centralized data source.",
        },
        {
          title: "Preventing Out-of-Scope Answers",
          description:
            "The chatbot needed to gracefully handle unrelated questions while maintaining trust and clarity with users.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/qa_chatbot_automation.avif",
        heading: "AI-Powered Knowledge-Based Chatbot",
        description:
          "A robust chatbot workflow that merges structured business data from Google Sheets with user queries and generates confident, natural responses using GPT-4—fully automated through n8n.",
        points: [
          "Frontend sends user questions to n8n via webhook",
          "n8n fetches relevant business data from Google Sheets",
          "Question and reference data are merged and formatted",
          "Prompt is sent to OpenAI GPT-4 for analysis",
          "AI generates a clear, relevant response",
          "Webhook responder sends the reply back to the frontend instantly",
        ],
        techStackUsed: [
          {
            name: "n8n",
            image: "/images/tech-icons/n8n.png",
            url: "https://n8n.io/",
          },
          {
            name: "Google Sheets",
            image: "/images/tech-icons/sheets.png",
            url: "https://www.google.com/sheets/about/",
          },
          {
            name: "OpenAI GPT-4",
            image: "/images/tech-icons/Techstack-Platform-OpenAI.png",
            url: "https://openai.com/",
          },
          {
            name: "Webhooks",
            image: "/images/tech-icons/webhooks.png",
            url: "https://en.wikipedia.org/wiki/Webhook",
          },
          {
            name: "Square Space",
            image: "/images/tech-icons/squarespace.png",
            url: "https://www.squarespace.com/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Automation Engineer",
          role: "n8n Workflow Design & Integration",
        },
        {
          name: "AI Engineer",
          role: "Prompt Design & Response Optimization",
        },
        {
          name: "Business Operations",
          role: "Knowledge Base Management",
        },
      ],
      galleryImages: [
        "https://via.placeholder.com/800x450/3B82F6/FFFFFF?text=n8n+Workflow",
        "https://via.placeholder.com/800x450/10B981/FFFFFF?text=Google+Sheets+Knowledge+Base",
        "https://via.placeholder.com/800x450/8B5CF6/FFFFFF?text=Chatbot+Frontend",
        "https://via.placeholder.com/800x450/F59E0B/FFFFFF?text=AI+Response+Example",
      ],
      videoSection: {
        title: "Automated Questionnaire Chatbot Demo",
        description:
          "See how the chatbot answers real client questions instantly using structured data and AI-powered reasoning.",
        videoUrl: "",
        localVideoUrl: "",
      },
      testimonials: [
        {
          quote:
            "This chatbot saved us countless hours by automatically answering common client questions with accurate and natural responses.",
          author: "Business Owner",
          role: "Creative Services",
        },
      ],
      faqs: [
        {
          question: "What does this chatbot do?",
          answer:
            "It automatically answers common customer questions by combining business data from Google Sheets with AI-generated responses using GPT-4.",
        },
        {
          question: "How does the chatbot get its knowledge?",
          answer:
            "All service details, FAQs, and business information are stored in a Google Sheet that the chatbot references in real time.",
        },
        {
          question: "Can it handle unrelated questions?",
          answer:
            "Yes. If a question is outside the chatbot’s knowledge scope, it politely informs the user instead of guessing.",
        },
        {
          question: "Is the chatbot customizable?",
          answer:
            "Yes. Businesses can easily update services, pricing, and FAQs directly in Google Sheets without changing the workflow.",
        },
        {
          question: "Which technologies power this chatbot?",
          answer:
            "The chatbot uses n8n for workflow automation, Google Sheets as a knowledge base, and OpenAI GPT-4 for natural language responses.",
        },
      ],
    },
    {
      id: 12,
      private: true,
      projectName: "n8n - Automated Instagram Scraper",
      projectImage:
        "/images/pages/portfolio/gallery/instagram_scraper_automation.avif",
      category: ["Web Scraping", "Automation", "Lead Generation"],
      display: {
        description:
          "A fully automated Instagram profile scraper that extracts influencer and competitor profile data from hashtags using n8n, Apify, and Google Sheets.",
      },
      banner: {
        heading: "Automated Instagram Scraper with n8n + Apify",
        description:
          "This automation eliminates manual Instagram hashtag research by collecting recent posts and extracting rich profile data (username, followers, bio, etc.) into Google Sheets for instant analysis and outreach workflows.",
        url: "",
        videoUrl:
          "https://drive.google.com/file/d/1BKfK7h54RvZeTps3Prpb36TA792tvnYX/view?usp=drive_link",
        bannerImage:
          "/images/pages/portfolio/gallery/instagram_scraper_automation.avif",
      },
      introSection: {
        summary: {
          title: "From Hashtags to Influencer Data Automatically",
          highlight: "Fast, Hands-Free Profile Extraction for Marketing Teams",
          description:
            "Manually searching Instagram for profiles using hashtags is slow and not scalable. This workflow automates the full process—accepting hashtags, finding recent related posts, extracting relevant profiles, and saving structured profile data directly into Google Sheets for easy filtering and decision-making.",
        },
        clientDetail: {
          clientName: "Businesses & Marketers",
          companyName: "Marketing Teams & Growth Agencies",
          clientIndustry:
            "Marketing, Influencer Outreach & Competitive Research",
          clientServices: [
            "Hashtag-Based Profile Discovery",
            "Influencer Lead Extraction",
            "Trend & Competitor Research Automation",
            "Structured Data Delivery in Google Sheets",
          ],
          problemStatement: [
            "Manual Instagram hashtag research takes too much time",
            "Hard to scale profile discovery across multiple hashtags",
            "Repetitive work with inconsistent data capture",
            "Marketers need organized profile data for analysis and outreach",
          ],
        },
      },
      mainFeatures: {
        heading: "Workflow Capabilities",
        description:
          "The workflow is designed to automate profile discovery and collect structured Instagram profile data for quick decision-making.",
        features: [
          "Accepts a list of hashtags via webhook",
          "Fetches recent Instagram posts using hashtag-based scraping",
          "Extracts up to 5 related profiles per hashtag",
          "Retrieves essential profile details (username, name, followers, bio, profile picture)",
          "Filters and formats profile data before saving",
          "Appends results automatically into Google Sheets",
          "Hands-free execution with scalable hashtag loops",
        ],
      },
      challengesFaced: [
        {
          title: "Manual Profile Discovery Was Not Scalable",
          description:
            "Searching Instagram manually for each hashtag was slow, repetitive, and impossible to scale for multiple campaigns.",
        },
        {
          title: "Reliable Profile Extraction in Looped Workflows",
          description:
            "Designing stable loops to process hashtags and profiles (one by one) required careful workflow structuring and filtering to ensure clean output.",
        },
        {
          title: "Producing Analysis-Ready Output",
          description:
            "Raw scraped data needed filtering and structuring so marketing teams could immediately use it inside Google Sheets.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/instagram_scraper_automation.avif",
        heading: "Automated Hashtag-to-Profile Scraping Pipeline",
        description:
          "A webhook-triggered automation that sends hashtags through a scraping pipeline, collects profile data via Apify, and writes clean structured outputs into Google Sheets—ready for influencer research, trend tracking, or competitor analysis.",
        points: [
          "Send hashtags to the workflow via webhook (e.g., from Postman)",
          "n8n extracts and loops through the hashtags",
          "Hashtags are sent to Apify to fetch relevant usernames from recent posts",
          "Usernames are looped and sent to Apify again for detailed profile data",
          "Profile information is filtered (username, name, followers, bio, profile picture)",
          "Structured rows are appended directly to Google Sheets",
          "User processing is limited (e.g., 5 profiles per hashtag) for controlled scraping",
        ],
        techStackUsed: [
          {
            name: "n8n",
            image: "/images/tech-icons/n8n.png",
            url: "https://n8n.io/",
          },
          {
            name: "Apify",
            image: "/images/tech-icons/apify.png",
            url: "https://apify.com/",
          },
          {
            name: "Google Sheets",
            image: "/images/tech-icons/sheets.png",
            url: "https://www.google.com/sheets/about/",
          },
          {
            name: "Webhooks",
            image: "/images/tech-icons/webhooks.png",
            url: "https://en.wikipedia.org/wiki/Webhook",
          },
          {
            name: "Postman",
            image: "/images/tech-icons/postman.png",
            url: "https://www.postman.com/",
          },
          {
            name: "Instagram API",
            image: "/images/tech-icons/instagram.png",
            url: "https://www.instagram.com/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Automation Engineer",
          role: "n8n Workflow Design & Orchestration",
        },
        {
          name: "Data Automation Specialist",
          role: "Scraping Logic, Filtering & Sheet Output Structuring",
        },
        {
          name: "Marketing / Growth Teams",
          role: "Hashtag Strategy & Influencer/Competitor Analysis",
        },
      ],
      testimonials: [
        {
          quote:
            "This automation replaced hours of manual hashtag research. Now we get structured influencer profile data in minutes—ready for outreach and analysis.",
          author: "Marketing Team",
          role: "Growth & Influencer Research",
        },
      ],
      faqs: [
        {
          question: "What does this automation do?",
          answer:
            "It accepts hashtags via webhook, scrapes recent Instagram posts, extracts relevant profiles, and stores structured profile data in Google Sheets automatically.",
        },
        {
          question: "What profile information does it collect?",
          answer:
            "It collects key details such as username, name, follower count, bio, and profile picture.",
        },
        {
          question: "How many profiles are extracted per hashtag?",
          answer:
            "The workflow supports controlled extraction and was configured to extract up to 5 profiles per hashtag.",
        },
        {
          question: "How is the workflow triggered?",
          answer:
            "Hashtags are sent to the workflow via a webhook (for example using Postman).",
        },
        {
          question: "Who is this useful for?",
          answer:
            "It’s useful for businesses and marketers who want influencer discovery, trend tracking, or competitor research without manual Instagram searching.",
        },
      ],
    },
    {
      id: 13,
      private: true,
      projectName: "Kroger Product Scraping",
      projectImage: "/images/pages/portfolio/gallery/kroger.avif",
      category: ["Web Scraping", "Data Extraction", "Automation"],
      display: {
        description:
          "Automated scraping of detailed product data from Kroger supermarket across multiple categories with high accuracy and stealth.",
      },
      banner: {
        heading: "Kroger Product Scraping Automation",
        description:
          "A scalable and stealthy scraping solution to extract detailed product information from Kroger’s online store across multiple categories.",
        // url: "https://www.kroger.com/",
        videoUrl: "",
        bannerImage: "/images/pages/portfolio/gallery/kroger.avif",
      },
      introSection: {
        summary: {
          title: "Efficient Large-Scale Retail Product Scraping",
          highlight: "Fast, Accurate & Undetectable Data Extraction",
          description:
            "This project focuses on scraping a large volume of Kroger product data using fully automated scripts that handle dynamic content, AJAX-based loading, and product variants while minimizing detection and blocking through real-user behavior simulation.",
        },
        clientDetail: {
          clientName: "E-commerce & Data Analytics Teams",
          companyName: "Retail Data Use Case (Kroger)",
          clientIndustry: "Retail & E-commerce",
          clientServices: [
            "Automated Product Data Scraping",
            "Category-wise Data Extraction",
            "Anti-Bot Detection Avoidance",
            "Structured Product Data Export",
          ],
          problemStatement: [
            "Scraping a huge volume of product data with minimal time and resources",
            "Ensuring fast and accurate extraction of product details",
            "Avoiding bot detection, IP blocking, and rate limiting",
            "Handling AJAX-loaded product listings",
            "Managing multiple variants under a single product",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Scraping Features",
        description:
          "The scraper is designed to reliably extract Kroger product data at scale while handling real-world scraping challenges.",
        features: [
          "Accurate extraction of product details such as name, price, size, and availability",
          "Fully automated scraping scripts",
          "Dynamic content handling for AJAX-loaded products",
          "Support for products with multiple variants",
          "Stealth scraping techniques to reduce detection and blocking",
        ],
      },
      challengesFaced: [
        {
          title: "Bot Detection",
          description:
            "Kroger actively detects and blocks automated scraping tools, requiring advanced stealth and session-handling techniques.",
        },
        {
          title: "AJAX-Based Product Loading",
          description:
            "Product data loads asynchronously, requiring intelligent waits and DOM monitoring to ensure complete data extraction.",
        },
        {
          title: "Product Variants",
          description:
            "Single products may contain multiple variants, increasing scraping complexity and data structuring requirements.",
        },
      ],
      proposedSolution: {
        leftSectionImage: "/images/pages/portfolio/project-details/kroger.avif",
        heading: "Stealth & Scalable Web Scraping Solution",
        description:
          "A robust scraping approach that combines IP rotation, real browser behavior, and session persistence to safely extract Kroger product data at scale.",
        points: [
          "Rotate requesting IPs to avoid rate limits and bans",
          "Simulate real user behavior such as scrolling and interaction",
          "Use real browser cookies and sessions via a Chrome extension",
          "Handle delayed AJAX responses with smart waits and retries",
          "Extract and normalize multiple product variants",
        ],
        techStackUsed: [
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "Chrome Extension",
            image: "/images/tech-icons/chrome-extension.png",
            url: "https://www.google.com/search?q=chrome+extension",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Web Scraper",
          role: "Scraping Script Development & Data Extraction Logic",
        },
      ],
      galleryImages: [
        "https://via.placeholder.com/800x450/3B82F6/FFFFFF?text=Kroger+Product+Listing",
        "https://via.placeholder.com/800x450/10B981/FFFFFF?text=Product+Detail+Page",
        "https://via.placeholder.com/800x450/8B5CF6/FFFFFF?text=Variant+Extraction",
        "https://via.placeholder.com/800x450/F59E0B/FFFFFF?text=Scraped+Data+Output",
      ],
      videoSection: {
        title: "Kroger Product Scraping Demo",
        description:
          "Demonstration of automated Kroger product scraping with stealth techniques.",
        videoUrl: "https://www.youtube.com/embed/kroger-scraping-demo",
      },
      testimonials: [
        {
          quote:
            "This scraping solution enabled us to collect large volumes of Kroger product data reliably without being blocked. The automation significantly reduced manual effort.",
          author: "Data Engineer",
          role: "E-commerce Analytics Team",
        },
      ],
      faqs: [
        {
          question: "What does this project do?",
          answer:
            "It automates the extraction of product details from Kroger’s website across multiple categories while handling dynamic content and anti-bot mechanisms.",
        },
        {
          question: "How does it avoid bot detection?",
          answer:
            "The scraper uses rotating IPs, real browser behavior, scrolling simulation, and real user cookies and sessions via a Chrome extension.",
        },
        {
          question: "Can it handle product variants?",
          answer:
            "Yes, the scraper detects and extracts all available variants for each product.",
        },
        {
          question: "Is the scraping fully automated?",
          answer:
            "Yes, once configured, the scraping runs automatically and outputs structured product data.",
        },
      ],
    },
    {
      id: 14,
      private: true,
      projectName: "Costco Product Scraping",
      projectImage: "/images/pages/portfolio/gallery/costco.avif",
      category: ["Web Scraping", "Data Extraction", "Automation"],
      display: {
        description:
          "Automated extraction of detailed product data from Costco’s online store, handling dynamic content, membership-based access, and strict anti-bot protections.",
      },
      banner: {
        heading: "Costco Product Scraping Automation",
        description:
          "A scalable and stealth-focused scraping solution designed to extract structured product data from Costco while navigating membership constraints and bot-detection mechanisms.",
        // url: "https://www.costco.com/",
        videoUrl: "",
        bannerImage: "/images/pages/portfolio/gallery/costco.avif",
      },
      introSection: {
        summary: {
          title: "Scraping Membership-Based Retail Platforms at Scale",
          highlight:
            "High-Accuracy Data Extraction from Protected Retail Systems",
          description:
            "This project focuses on scraping large-scale product data from Costco’s online platform, which enforces membership access, dynamic loading, and aggressive bot detection. The solution emphasizes session persistence, controlled request behavior, and accurate extraction of product and pricing details.",
        },
        clientDetail: {
          clientName: "Retail Analytics & E-commerce Intelligence Teams",
          companyName: "Retail Data Use Case (Costco)",
          clientIndustry: "Retail & Wholesale",
          clientServices: [
            "Automated Product Data Scraping",
            "Membership-Based Session Handling",
            "Dynamic Content Extraction",
            "Structured Retail Data Export",
          ],
          problemStatement: [
            "Membership-based access restricting anonymous product visibility",
            "Strict bot detection and traffic monitoring by Costco",
            "Dynamic product pages with delayed content loading",
            "Accurate extraction of pricing and availability data",
            "Handling multiple product variants and pack sizes",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Scraping Features",
        description:
          "The scraper is engineered to reliably extract Costco product data while respecting access constraints and minimizing detection risk.",
        features: [
          "Authenticated session handling for membership-based access",
          "Accurate extraction of product details including name, price, pack size, and availability",
          "Dynamic content handling for JavaScript-rendered product pages",
          "Support for products with multiple variants and bundle configurations",
          "Stealth scraping techniques to reduce blocking and rate limiting",
        ],
      },
      challengesFaced: [
        {
          title: "Membership Access & Session Persistence",
          description:
            "Costco restricts product visibility to logged-in members, requiring persistent authenticated sessions and careful cookie management to maintain access during scraping.",
        },
        {
          title: "Aggressive Bot Detection",
          description:
            "Costco actively monitors request patterns and browser behavior, necessitating advanced stealth techniques and realistic interaction simulation.",
        },
        {
          title: "Dynamic Page Rendering",
          description:
            "Many product details are rendered dynamically, requiring controlled waits, DOM observation, and retry mechanisms to ensure complete data extraction.",
        },
      ],
      proposedSolution: {
        leftSectionImage: "/images/pages/portfolio/project-details/costco.avif",
        heading: "Authenticated & Stealth Scraping Strategy",
        description:
          "A robust scraping strategy that combines authenticated browser sessions, controlled interaction patterns, and adaptive request handling to safely extract Costco product data at scale.",
        points: [
          "Maintain authenticated member sessions using real browser cookies",
          "Simulate natural user behavior such as scrolling and navigation",
          "Control request rates to avoid triggering detection systems",
          "Handle dynamic content loading with smart waits and retries",
          "Normalize product variants and bundle data into a consistent schema",
        ],
        techStackUsed: [
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Web Scraper",
          role: "Scraping Logic, Session Handling & Data Normalization",
        },
      ],
      testimonials: [
        {
          quote:
            "The scraping solution successfully handled Costco’s membership restrictions and bot detection, enabling reliable access to high-quality product data with minimal manual intervention.",
          author: "Data Engineer",
          role: "Retail Intelligence Team",
        },
      ],
      faqs: [
        {
          question:
            "Why is Costco scraping more complex than standard retail sites?",
          answer:
            "Costco enforces membership-based access and aggressive bot detection, requiring authenticated sessions and realistic browser behavior.",
        },
        {
          question: "How is membership access handled?",
          answer:
            "The scraper maintains authenticated browser sessions using real cookies and session persistence techniques.",
        },
        {
          question: "Does the scraper handle product variants?",
          answer:
            "Yes, it extracts and normalizes multiple variants and bundle configurations for a single product.",
        },
        {
          question: "Is the scraping process automated?",
          answer:
            "Yes, once configured, the scraper runs automatically and outputs structured product data.",
        },
      ],
    },
    {
      id: 15,
      private: true,
      projectName: "Albertsons Product Scraping",
      projectImage: "/images/pages/portfolio/gallery/albertsons.avif",
      category: ["Web Scraping", "Data Extraction", "Automation"],
      display: {
        description:
          "Automated scraping of detailed product data from Albertsons supermarket across multiple categories with high accuracy and stealth.",
      },
      banner: {
        heading: "Albertsons Product Scraping Automation",
        description:
          "A scalable and stealthy scraping solution to extract detailed product information from Albertsons’ online store across multiple categories.",
        // url: "https://www.albertsons.com/",
        videoUrl: "",
        localVideoUrl: "", // e.g. "/videos/albertsons-scraping-demo.mp4"
        bannerImage: "/images/pages/portfolio/gallery/albertsons.avif",
      },
      introSection: {
        summary: {
          title: "Efficient Large-Scale Retail Product Scraping",
          highlight: "Fast, Accurate & Undetectable Data Extraction",
          description:
            "This project focuses on scraping a large volume of Albertsons product data using fully automated scripts that handle dynamic content, AJAX-based loading, and product variants while minimizing detection and blocking through real-user behavior simulation.",
        },
        clientDetail: {
          clientName: "E-commerce & Data Analytics Teams",
          companyName: "Retail Data Use Case (Albertsons)",
          clientIndustry: "Retail & E-commerce",
          clientServices: [
            "Automated Product Data Scraping",
            "Category-wise Data Extraction",
            "Anti-Bot Detection Avoidance",
            "Structured Product Data Export",
          ],
          problemStatement: [
            "Scraping a huge volume of product data with minimal time and resources",
            "Ensuring fast and accurate extraction of product details",
            "Avoiding bot detection, IP blocking, and rate limiting",
            "Handling AJAX-loaded product listings",
            "Managing multiple variants under a single product",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Scraping Features",
        description:
          "The scraper is designed to reliably extract Albertsons product data at scale while handling real-world scraping challenges.",
        features: [
          "Accurate extraction of product details such as name, price, size, and availability",
          "Fully automated scraping scripts",
          "Dynamic content handling for AJAX-loaded products",
          "Support for products with multiple variants",
          "Stealth scraping techniques to reduce detection and blocking",
        ],
      },
      challengesFaced: [
        {
          title: "Bot Detection",
          description:
            "Albertsons actively detects and blocks automated scraping tools, requiring advanced stealth and session-handling techniques.",
        },
        {
          title: "AJAX-Based Product Loading",
          description:
            "Product data loads asynchronously, requiring intelligent waits and DOM monitoring to ensure complete data extraction.",
        },
        {
          title: "Product Variants",
          description:
            "Single products may contain multiple variants, increasing scraping complexity and data structuring requirements.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/albertsons.avif",
        heading: "Stealth & Scalable Web Scraping Solution",
        description:
          "A robust scraping approach that combines IP rotation, real browser behavior, and session persistence to safely extract Albertsons product data at scale.",
        points: [
          "Rotate requesting IPs to avoid rate limits and bans",
          "Simulate real user behavior such as scrolling and interaction",
          "Use real browser cookies and sessions via a Chrome extension",
          "Handle delayed AJAX responses with smart waits and retries",
          "Extract and normalize multiple product variants",
        ],
        techStackUsed: [
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "Chrome Extension",
            image: "/images/tech-icons/chrome-extension.png",
            url: "https://www.google.com/search?q=chrome+extension",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Web Scraper",
          role: "Scraping Script Development & Data Extraction Logic",
        },
      ],
      galleryImages: [
        "https://via.placeholder.com/800x450/3B82F6/FFFFFF?text=Albertsons+Product+Listing",
        "https://via.placeholder.com/800x450/10B981/FFFFFF?text=Product+Detail+Page",
        "https://via.placeholder.com/800x450/8B5CF6/FFFFFF?text=Variant+Extraction",
        "https://via.placeholder.com/800x450/F59E0B/FFFFFF?text=Scraped+Data+Output",
      ],
      videoSection: {
        title: "Albertsons Product Scraping Demo",
        description:
          "Demonstration of automated Albertsons product scraping with stealth techniques.",
        videoUrl: "https://www.youtube.com/embed/albertsons-scraping-demo",
        localVideoUrl: "", // e.g. "/videos/albertsons-scraping-demo.mp4"
      },
      testimonials: [
        {
          quote:
            "This scraping solution enabled us to collect large volumes of Albertsons product data reliably without being blocked. The automation significantly reduced manual effort.",
          author: "Data Engineer",
          role: "E-commerce Analytics Team",
        },
      ],
      faqs: [
        {
          question: "What does this project do?",
          answer:
            "It automates the extraction of product details from Albertsons’ website across multiple categories while handling dynamic content and anti-bot mechanisms.",
        },
        {
          question: "How does it avoid bot detection?",
          answer:
            "The scraper uses rotating IPs, real browser behavior, scrolling simulation, and real user cookies and sessions via a Chrome extension.",
        },
        {
          question: "Can it handle product variants?",
          answer:
            "Yes, the scraper detects and extracts all available variants for each product.",
        },
        {
          question: "Is the scraping fully automated?",
          answer:
            "Yes, once configured, the scraping runs automatically and outputs structured product data.",
        },
      ],
    },
    {
      id: 16,
      private: true,
      projectName: "Walmart Product Scraping",
      projectImage: "/images/pages/portfolio/gallery/walmart.avif",
      category: ["Web Scraping", "Data Extraction", "Automation"],
      display: {
        description:
          "Automated scraping of detailed product data from Walmart across multiple categories with high accuracy, scalability, and stealth.",
      },
      banner: {
        heading: "Walmart Product Scraping Automation",
        description:
          "A scalable and stealthy scraping solution to extract detailed product information from Walmart’s online store across multiple categories.",
        // url: "https://www.walmart.com/",
        videoUrl: "",
        localVideoUrl: "", // e.g. "/videos/walmart-scraping-demo.mp4"
        bannerImage: "/images/pages/portfolio/gallery/walmart.avif",
      },
      introSection: {
        summary: {
          title: "Scalable Large-Scale Retail Data Scraping",
          highlight: "High-Volume, Accurate & Resilient Data Extraction",
          description:
            "This project focuses on scraping a massive volume of Walmart product data using automated scripts capable of handling dynamic content, pagination, product variants, and aggressive anti-bot mechanisms while maintaining speed and data accuracy.",
        },
        clientDetail: {
          clientName: "E-commerce, Pricing & Market Research Teams",
          companyName: "Retail Data Use Case (Walmart)",
          clientIndustry: "Retail & E-commerce",
          clientServices: [
            "Automated Product Data Scraping",
            "Category & Search-Based Data Extraction",
            "Anti-Bot & Rate Limit Avoidance",
            "Structured Data Normalization & Export",
          ],
          problemStatement: [
            "Scraping extremely large catalogs with millions of products",
            "Handling frequent UI and API changes on Walmart’s platform",
            "Avoiding bot detection, CAPTCHAs, and IP bans",
            "Managing complex product variants and seller listings",
            "Ensuring consistent and accurate data at scale",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Scraping Features",
        description:
          "The scraper is engineered to reliably extract Walmart product data at scale while adapting to platform defenses and dynamic content.",
        features: [
          "Accurate extraction of product details such as name, price, brand, availability, and ratings",
          "Support for multi-seller and marketplace listings",
          "Dynamic content and pagination handling",
          "Automated extraction of product variants and configurations",
          "Stealth scraping techniques to minimize detection and blocking",
        ],
      },
      challengesFaced: [
        {
          title: "Advanced Bot Detection & CAPTCHA",
          description:
            "Walmart employs aggressive bot detection and CAPTCHA challenges, requiring advanced stealth techniques, session persistence, and human-like interaction patterns.",
        },
        {
          title: "Dynamic & API-Driven Content",
          description:
            "Product listings and details are heavily API-driven, requiring reverse engineering of network requests and fallback DOM parsing strategies.",
        },
        {
          title: "Marketplace & Seller Variants",
          description:
            "Single products may have multiple sellers, prices, and fulfillment options, significantly increasing data extraction complexity.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/walmart.avif",
        heading: "Stealth, Adaptive & Scalable Scraping Architecture",
        description:
          "A resilient scraping architecture combining IP rotation, session persistence, API inspection, and real browser automation to safely and efficiently extract Walmart product data at scale.",
        points: [
          "Rotate residential and datacenter IPs to avoid bans and throttling",
          "Simulate real user behavior including scrolling, clicks, and delays",
          "Persist real browser sessions and cookies across requests",
          "Leverage internal Walmart APIs where possible for stability",
          "Normalize complex product, variant, and seller data into structured formats",
        ],
        techStackUsed: [
          {
            name: "FastAPI",
            image: "/images/tech-icons/Techstack-Framework-FastAPI.png",
            url: "https://fastapi.tiangolo.com/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "Playwright / Selenium",
            image: "/images/tech-icons/playwright.png",
            url: "https://playwright.dev/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Web Scraper",
          role: "Scraping Architecture, Automation & Data Extraction",
        },
      ],
      testimonials: [
        {
          quote:
            "This Walmart scraping solution allowed us to collect accurate pricing and product data at scale despite aggressive bot protection. It significantly improved our market intelligence workflows.",
          author: "Senior Data Analyst",
          role: "Retail Intelligence Team",
        },
      ],
      faqs: [
        {
          question: "What does this project do?",
          answer:
            "It automates the extraction of detailed product, pricing, and seller information from Walmart’s website across multiple categories.",
        },
        {
          question: "How does it handle Walmart’s bot protection?",
          answer:
            "The scraper uses IP rotation, real browser automation, session persistence, and human-like interaction patterns to reduce detection and CAPTCHA triggers.",
        },
        {
          question: "Can it scrape marketplace sellers?",
          answer:
            "Yes, it extracts data for multiple sellers, prices, and fulfillment options associated with a single product.",
        },
        {
          question: "Is the scraping scalable?",
          answer:
            "Yes, the architecture is designed to scale horizontally and handle very large product catalogs reliably.",
        },
      ],
    },
    {
      id: 17,
      private: true,
      projectName: "Sprouts Product Scraping",
      projectImage: "/images/pages/portfolio/gallery/sprouts.avif",
      category: ["Web Scraping", "Data Extraction", "Automation"],
      display: {
        description:
          "Automated scraping of product data from Sprout using Selenium with dynamic scrolling and AJAX-based loading handled in a single browser tab.",
      },
      banner: {
        heading: "Sprouts Product Scraping Automation",
        description:
          "A Selenium-based scraping solution to extract Sprout product data by handling AJAX-loaded listings and avoiding URL redirection issues.",
        // url: "https://www.sprouts.com/",
        videoUrl: "",
        localVideoUrl: "", // e.g. "/videos/sprouts-scraping-demo.mp4"
        bannerImage: "/images/pages/portfolio/gallery/sprouts.avif",
      },
      introSection: {
        summary: {
          title: "Dynamic Product Scraping with Selenium",
          highlight: "Reliable Scraping for AJAX-Loaded Retail Platforms",
          description:
            "This project focuses on scraping product data from Sprout using Selenium by maintaining a single active browser tab. Products are dynamically loaded via AJAX as the user scrolls, allowing reliable extraction while avoiding forced URL redirections triggered when opening product pages in new tabs.",
        },
        clientDetail: {
          clientName: "E-commerce & Market Research Teams",
          companyName: "Retail Data Use Case (Sprout)",
          clientIndustry: "Retail & E-commerce",
          clientServices: [
            "Automated Product Data Scraping",
            "AJAX-Based Infinite Scroll Handling",
            "Selenium Browser Automation",
            "Structured Data Extraction & Export",
          ],
          problemStatement: [
            "Product URLs redirect when opened in new browser tabs",
            "AJAX-based product loading requiring scroll-based scraping",
            "Inconsistent DOM rendering during fast navigation",
            "Need to scrape large product catalogs reliably",
            "Avoiding data loss due to dynamic page updates",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Scraping Features",
        description:
          "The scraper is designed specifically to handle Sprout’s dynamic front-end behavior using Selenium and controlled browser interactions.",
        features: [
          "Single-tab Selenium scraping to avoid URL redirection issues",
          "Infinite scroll handling for AJAX-loaded product listings",
          "Accurate extraction of product details such as name, price, size, and availability",
          "Controlled scrolling and wait strategies to ensure full data load",
          "Automated data structuring and export",
        ],
      },
      challengesFaced: [
        {
          title: "Product URL Redirection in New Tabs",
          description:
            "Sprout redirects product URLs when opened in new tabs, breaking traditional multi-tab scraping approaches and requiring a single-tab scraping strategy.",
        },
        {
          title: "AJAX-Based Infinite Scrolling",
          description:
            "Products load dynamically as the user scrolls, requiring precise scroll automation and intelligent wait conditions to ensure all products are fully loaded.",
        },
        {
          title: "DOM Re-Renders During Scrolling",
          description:
            "Frequent DOM updates during AJAX loading required resilient element selection and retry logic to prevent stale element errors.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/sprouts.avif",
        heading: "Single-Tab Selenium Scraping Strategy",
        description:
          "A robust Selenium-based approach that avoids new tab navigation, relies on controlled scrolling, and captures product data directly from dynamically loaded listings.",
        points: [
          "Maintain a single active browser tab to prevent URL redirection",
          "Trigger AJAX product loading through controlled scrolling",
          "Implement explicit waits to ensure data is fully loaded",
          "Extract product data directly from listing cards",
          "Handle DOM refreshes with retry and stale-element protection",
        ],
        techStackUsed: [
          {
            name: "Selenium",
            image: "/images/tech-icons/selenium.png",
            url: "https://www.selenium.dev/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
          {
            name: "Chrome Browser",
            image: "/images/tech-icons/chrome-extension.png",
            url: "https://www.google.com/chrome/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Web Scraper",
          role: "Selenium Automation & Data Extraction Logic",
        },
      ],
      testimonials: [
        {
          quote:
            "Handling Sprout’s redirect behavior was challenging, but the single-tab Selenium approach made scraping stable and reliable. The solution worked flawlessly on dynamic pages.",
          author: "Automation Engineer",
          role: "Data Extraction Team",
        },
      ],
      faqs: [
        {
          question: "What makes Sprout scraping challenging?",
          answer:
            "Sprout redirects product URLs when opened in new tabs and uses AJAX-based infinite scrolling, making traditional scraping approaches unreliable.",
        },
        {
          question: "Why was Selenium used instead of requests-based scraping?",
          answer:
            "Because Sprout relies heavily on client-side rendering and AJAX loading, Selenium was required to simulate real browser behavior.",
        },
        {
          question: "How are products loaded during scraping?",
          answer:
            "Products are loaded dynamically as the scraper scrolls the page, triggering AJAX calls that load additional product listings.",
        },
        {
          question: "Is the scraping fully automated?",
          answer:
            "Yes, once started, the Selenium script automatically scrolls, waits for content to load, and extracts structured product data.",
        },
      ],
    },
    {
      id: 18,
      private: true,
      projectName: "99 Ranch Market Product Scraping",
      projectImage: "/images/pages/portfolio/gallery/99-ranch.avif",
      category: ["Web Scraping", "Data Extraction", "Automation"],
      display: {
        description:
          "High-speed product data scraping from 99 Ranch Market using Scrapy, leveraging static HTML responses without proxies or browser automation.",
      },
      banner: {
        heading: "99 Ranch Market Product Scraping Automation",
        description:
          "A Scrapy-based scraping solution to extract structured product information from 99 Ranch Market without AJAX handling or proxy usage.",
        videoUrl: "",
        localVideoUrl: "",
        bannerImage: "/images/pages/portfolio/gallery/99-ranch.avif",
      },
      introSection: {
        summary: {
          title: "Fast & Lightweight Static Web Scraping",
          highlight: "Proxy-Free Scraping with Scrapy",
          description:
            "This project focuses on scraping product data from 99 Ranch Market using Scrapy. Since the website serves product details via static HTML without AJAX-based loading, the scraper achieves high performance and stability without requiring proxies or browser automation.",
        },
        clientDetail: {
          clientName: "E-commerce & Grocery Analytics Teams",
          companyName: "Retail Data Use Case (99 Ranch Market)",
          clientIndustry: "Retail & Grocery",
          clientServices: [
            "Automated Product Data Scraping",
            "Category-Based Product Extraction",
            "Static HTML Parsing",
            "Structured Data Export",
          ],
          problemStatement: [
            "Need for fast extraction of grocery product data",
            "Avoiding unnecessary browser automation overhead",
            "Maintaining stable scraping without proxies",
            "Ensuring accurate parsing of static product pages",
            "Handling large category-wise product catalogs efficiently",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Scraping Features",
        description:
          "The scraper is optimized for static content extraction, allowing fast and reliable data collection with minimal infrastructure.",
        features: [
          "High-speed Scrapy-based scraping without browser automation",
          "Direct parsing of static HTML product pages",
          "Accurate extraction of product details such as name, price, size, and category",
          "Category-wise crawling with depth control",
          "Lightweight and resource-efficient execution",
        ],
      },
      challengesFaced: [
        {
          title: "HTML Structure Variations",
          description:
            "Different product categories used slightly varying HTML structures, requiring flexible selectors and fallback parsing logic.",
        },
        {
          title: "Data Normalization",
          description:
            "Product information needed normalization across categories to maintain consistent output schemas.",
        },
        {
          title: "Large Catalog Crawling",
          description:
            "Crawling multiple large categories required efficient request scheduling and throttling to maintain performance.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/99-ranch.avif",
        heading: "Efficient Scrapy-Based Crawling Strategy",
        description:
          "A lightweight scraping strategy leveraging Scrapy’s asynchronous crawling and static HTML parsing to efficiently extract product data without proxies or JavaScript execution.",
        points: [
          "Use Scrapy spiders for fast asynchronous crawling",
          "Parse static HTML responses directly using XPath and CSS selectors",
          "Implement category-wise crawling with pagination handling",
          "Normalize extracted data into a consistent schema",
          "Throttle requests to ensure stability without proxies",
        ],
        techStackUsed: [
          {
            name: "Scrapy",
            image: "/images/tech-icons/scrapy.png",
            url: "https://scrapy.org/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Web Scraper",
          role: "Scrapy Spider Development & Data Parsing",
        },
      ],
      testimonials: [
        {
          quote:
            "Using Scrapy without proxies made this scraper extremely fast and reliable. The static HTML structure of 99 Ranch Market allowed us to collect data efficiently at scale.",
          author: "Data Engineer",
          role: "Grocery Analytics Team",
        },
      ],
      faqs: [
        {
          question: "Why was Scrapy chosen for this project?",
          answer:
            "Because 99 Ranch Market serves product details via static HTML without AJAX, Scrapy provided the fastest and most efficient scraping approach.",
        },
        {
          question: "Were proxies required?",
          answer:
            "No. The website allowed stable crawling without proxies when using appropriate request throttling.",
        },
        {
          question: "What kind of data was extracted?",
          answer:
            "Product names, prices, categories, sizes, and availability details were extracted and normalized.",
        },
        {
          question: "Is this approach scalable?",
          answer:
            "Yes, Scrapy’s asynchronous architecture makes it highly scalable for large product catalogs.",
        },
      ],
    },
    {
      id: 19,
      private: true,
      projectName: "BobbyApproved & Vons Product Scraping",
      projectImage: "/images/pages/portfolio/gallery/bobby_approved.avif",
      category: ["Web Scraping", "Data Extraction", "Automation"],
      display: {
        description:
          "Scrape all ingredients listed on BobbyApproved app with their description and color. Scrape all listed products on Vons Store, along with ingredients and product image.",
      },
      banner: {
        heading: "Scraping Vons all products from BobbyApproved App",
        description:
          "Scrape all ingredients listed on BobbyApproved app with their description and color. Scrape all listed products on Vons Store, along with ingredients and product image.",
        videoUrl:
          "https://drive.google.com/file/d/1q7q-GdM2DBDZUE_dyjfk27-RDuWkz_vD/view?usp=drive_link",
        localVideoUrl: "",
        bannerImage: "/images/pages/portfolio/gallery/bobby_approved.avif",
      },
      introSection: {
        summary: {
          title:
            "Automated Ingredient & Product Intelligence from BobbyApproved and Vons",
          highlight:
            "Automated mobile and web scraping pipeline for structured ingredient and product data extraction.",
          description:
            "This solution extracts ingredient safety data from BobbyApproved and product listings from Vons using Appium and Selenium. It collects ingredient ratings, descriptions, product metadata, and images, then cleans and prepares the data for downstream use in nutrition analysis, app development, or retail intelligence.",
        },
        clientDetail: {
          clientName:
            "Health-tech Startups, Nutrition App Developers, Grocery Data Analysts",
          companyName: "Health & Wellness / Grocery Retail / Food Technology",
          clientIndustry: "Retail & Grocery",
          clientServices: [
            "Scraping Ingredients and their description with colors",
            "Scrape all listed products on Vons store",
            "Download product images",
            "Clean and resize the product images",
          ],
          problemStatement: [
            "No public API for BobbyApproved ingredient data, making manual extraction slow.",
            "Vons product listings changed frequently and at large scale.",
            "Ingredient ratings were locked inside a native mobile UI.",
            "Downloaded product images required cleanup and resizing.",
          ],
        },
      },
      mainFeatures: {
        heading: "Core Features",
        description:
          "Automated pipeline for extracting and structuring ingredient and grocery product data.",
        features: [
          "BobbyApproved ingredient extraction",
          "Vons product data scraping",
          "Automated image downloading",
          "Image cleaning and resizing",
          "Structured CSV/JSON export",
        ],
      },
      challengesFaced: [
        {
          title: "Mobile App Automation",
          description:
            "Extracting data from a native mobile app required handling dynamic UI states, scrolling, and emulator-based automation.",
        },
        {
          title: "Large Data Volume",
          description:
            "Scraping thousands of Vons products required efficient crawling and fault-tolerant processing.",
        },
        {
          title: "Image Pipeline Management",
          description:
            "Downloading, cleaning, resizing, and organizing large volumes of product images required robust processing logic.",
        },
      ],
      proposedSolution: {
        leftSectionImage:
          "/images/pages/portfolio/project-details/bobby_approved.avif",
        heading: "Appium + Selenium Dual-Layer Scraping",
        description:
          "Unified mobile and web scraping pipeline combining Appium and Selenium to automate ingredient extraction, product scraping, image processing, and structured data export.",
        points: [
          "Appium automation for BobbyApproved mobile scraping",
          "Selenium crawler for Vons product extraction",
          "Automated product image downloading",
          "Image cleaning and resizing pipeline",
          "CSV/JSON structured data export",
        ],
        techStackUsed: [
          {
            name: "Scrapy",
            image: "/images/tech-icons/scrapy.png",
            url: "https://scrapy.org/",
          },
          {
            name: "Appium",
            image: "/images/tech-icons/appium.png",
            url: "https://appium.io/",
          },
          {
            name: "Android Emulator",
            image: "/images/tech-icons/android_emulator.png",
            url: "https://developer.android.com/",
          },
          {
            name: "Python",
            image: "/images/tech-icons/Techstack-Lang-Python.png",
            url: "https://www.python.org/",
          },
        ],
      },
      teamInvolved: [
        {
          name: "Web Scraper",
          role: "Scrapy Spider Development & Data Parsing",
        },
      ],
      testimonials: [
        {
          quote:
            "The dual Appium and Selenium pipeline gave us a reliable way to automate ingredient and grocery data collection at scale.",
          author: "Product Data Lead",
          role: "Nutrition Intelligence Team",
        },
      ],
      faqs: [
        {
          question: "Will the scraper work after BobbyApproved UI updates?",
          answer:
            "Yes, minor UI changes can be handled quickly through locator updates when needed.",
        },
        {
          question: "How are product images delivered?",
          answer:
            "Images are cleaned, resized, standardized, and delivered in organized folders.",
        },
        {
          question: "Is the solution scalable?",
          answer:
            "Yes, it is built to handle large product catalogs and frequent data updates efficiently.",
        },
      ],
    },
    {
  id: 20,
  private: false,
  projectName: "Website Analytics & Reporting",
  projectImage:
    "/images/pages/portfolio/gallery/analytics.avif",

  category: [
    "Web Analytics",
    "Conversion Tracking",
    "Business Intelligence",
  ],

  display: {
    description:
      "A centralized analytics and reporting solution that tracks website engagement, conversions, advertising performance, and organic search visibility across multiple client projects.",
  },

  banner: {
    heading:
      "Website Analytics, Conversion Tracking & Performance Reporting",

    description:
      "A complete analytics implementation designed to track meaningful website interactions, validate conversion events, monitor marketing performance, and transform data from multiple platforms into clear, client-friendly dashboards.",

    url: "",

    videoUrl: "https://drive.google.com/file/d/1O99eB0LL9HTUe74FzWuM5GsczEwi5VBW/view?usp=drive_link",

    localVideo: {
      url: "/videos/veltio-website-tracking-gtm.mp4",
      orientation: "landscape",
    },

    bannerImage:
      "/images/pages/portfolio/gallery/analytics.avif",
  },

  introSection: {
    summary: {
      title:
        "Turning Website and Marketing Data into Actionable Insights",

      highlight:
        "Reliable Tracking, Centralized Reporting, and Clear Performance Visibility",

      description:
        "This analytics and reporting solution connects website tracking, conversion measurement, advertising data, and organic search performance into one structured reporting system. It enables businesses to understand how users interact with their websites, which marketing channels generate results, and where performance can be improved.",
    },

    clientDetail: {
      clientName: "Multiple Business Clients",

      companyName: "Veltio Client Portfolio",

      clientIndustry:
        "Multi-Industry Digital Marketing & Website Analytics",

      clientServices: [
        "Google Tag Manager Configuration",
        "Google Analytics 4 Implementation",
        "Website Conversion Tracking",
        "Google Ads Performance Reporting",
        "Google Search Console Reporting",
        "Looker Studio Dashboard Development",
      ],

      problemStatement: [
        "Important website interactions were not consistently tracked across client websites",
        "Form submissions, phone clicks, navigation actions, and other conversion events required reliable measurement",
        "Website, advertising, and organic search data existed across separate platforms",
        "Clients lacked a centralized view of their website and marketing performance",
        "Existing analytics configurations required testing, validation, and ongoing maintenance",
        "Raw analytics reports were too technical for non-technical stakeholders to interpret easily",
      ],
    },
  },

  mainFeatures: {
    heading:
      "Core Analytics & Reporting Capabilities",

    description:
      "The solution provides a complete workflow for capturing website interactions, validating analytics data, and presenting marketing performance through centralized dashboards.",

    features: [
      "Google Tag Manager implementation for website engagement and conversion events",
      "Tracking of form submissions, phone number clicks, button clicks, navigation interactions, and page engagement",
      "Real-time testing through Google Tag Manager Preview Mode and Google Tag Assistant",
      "Google Analytics 4 event, acquisition, traffic-source, landing-page, and engagement reporting",
      "Google Ads reporting for campaign spend, clicks, conversions, and cost efficiency",
      "Google Search Console reporting for organic clicks, impressions, search queries, and landing pages",
      "Centralized Looker Studio dashboards combining data from multiple platforms",
      "Interactive date controls and previous-period performance comparisons",
      "Client-friendly scorecards, charts, tables, filters, and performance summaries",
      "Reusable reporting structures adaptable to different client websites and industries",
    ],
  },

  challengesFaced: [
    {
      title:
        "Maintaining Accurate Tracking Across Multiple Websites",

      description:
        "Each client website had different structures, forms, buttons, navigation elements, and conversion requirements. Tracking configurations needed to be adapted to each website while maintaining consistent naming and reporting standards.",
    },

    {
      title:
        "Validating Tags, Triggers, and Conversion Events",

      description:
        "Existing Google Tag Manager containers often included multiple tags and triggers. Each important interaction had to be tested through Preview Mode, Tag Assistant, and GA4 Realtime reports to confirm that the correct events and parameters were being captured.",
    },

    {
      title:
        "Combining Data from Multiple Platforms",

      description:
        "Google Analytics, Google Ads, and Google Search Console use different metrics and reporting structures. Their data needed to be organized carefully so website, advertising, and organic search performance could be reviewed together.",
    },

  ],

  proposedSolution: {
    leftSectionImage:
      "/images/pages/portfolio/project-details/analytics.avif",

    heading:
      "Centralized Analytics & Reporting Solution",

    description:
      "A reusable analytics framework was implemented to measure important website interactions, verify conversion tracking, monitor marketing channels, and consolidate performance data within customized Looker Studio dashboards for multiple client projects.",

    points: [
      "Reviewed website structure and identified important engagement and conversion actions",
      "Configured Google Tag Manager tags, triggers, variables, and custom events",
      "Tested website interactions using Tag Assistant and GTM Preview Mode",
      "Verified incoming events through Google Analytics 4 Realtime and event reports",
      "Configured reporting for user acquisition, traffic sources, pages, and conversions",
      "Connected Google Ads data for campaign and conversion performance reporting",
    ],

    techStackUsed: [
      {
        name: "Google Tag Manager",
        image:
          "/images/tech-icons/google-tag-manager.png",
        url: "https://tagmanager.google.com/",
      },
      {
        name: "Google Analytics 4",
        image:
          "/images/tech-icons/google-analytics.png",
        url: "https://analytics.google.com/",
      },
      {
        name: "Google Ads",
        image:
          "/images/tech-icons/google-ads.png",
        url: "https://ads.google.com/",
      },
      {
        name: "Looker Studio",
        image:
          "/images/tech-icons/looker-studio.png",
        url: "https://lookerstudio.google.com/",
      },
    ],
  },

  teamInvolved: [
    {
      name: "Web Analytics Specialist",
      role:
        "Tracking Architecture, GTM Configuration & GA4 Validation",
    },
    {
      name: "Marketing Analytics Specialist",
      role:
        "Advertising Performance & Conversion Reporting",
    },
    {
      name: "Business Intelligence Developer",
      role:
        "Looker Studio Dashboard Design & Data Visualization",
    },
    {
      name: "SEO Specialist",
      role:
        "Organic Search Performance & Search Console Reporting",
    },
    {
      name: "Client Success Team",
      role:
        "Reporting Requirements, Feedback & Dashboard Delivery",
    },
  ],

  testimonials: [],

  faqs: [
    {
      question:
        "What is included in the analytics and reporting solution?",

      answer:
        "The solution includes website interaction tracking, conversion measurement, Google Analytics 4 reporting, Google Ads reporting, Google Search Console reporting, and centralized Looker Studio dashboards.",
    },

    {
      question:
        "Which website actions can be tracked?",

      answer:
        "Tracking can include form submissions, phone number clicks, email clicks, button interactions, navigation clicks, page views, scroll activity, downloads, outbound links, and other business-specific conversion actions.",
    },

    {
      question:
        "How is Google Tag Manager tracking tested?",

      answer:
        "Tags and triggers are tested using Google Tag Manager Preview Mode and Google Tag Assistant. The resulting events are then verified inside Google Analytics 4 Realtime and event reports.",
    },

    {
      question:
        "Which data sources are included in the dashboards?",

      answer:
        "Depending on the client requirements, dashboards can combine data from Google Analytics 4, Google Ads, Google Search Console, Meta advertising platforms, and other supported marketing sources.",
    },

    {
      question:
        "What metrics can clients review?",

      answer:
        "Clients can review sessions, users, traffic channels, conversions, form submissions, phone clicks, engagement, landing-page performance, advertising spend, campaign results, organic clicks, search impressions, queries, and conversion rates.",
    },

    {
      question:
        "Can the dashboards be customized for different clients?",

      answer:
        "Yes. The dashboard structure is reusable, but metrics, branding, report pages, filters, conversion events, and data sources can be customized for each client's business requirements.",
    },

    {
      question:
        "What reports are normally included?",

      answer:
        "A typical dashboard includes a website overview, acquisition performance, conversion reporting, Google Ads performance, organic search performance, landing-page analysis, and a glossary explaining key metrics.",
    },

    {
      question:
        "What was the overall outcome of the project?",

      answer:
        "The result was a reusable analytics and reporting system that provides accurate conversion tracking and gives multiple clients a clear, centralized view of their website and marketing performance.",
    },
  ],
}
  ],
};
