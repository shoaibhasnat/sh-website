export const data = {
  id: 1,
  projectName: "ATARA",
  projectImage: "/images/pages/portfolio/project-details/atara_fobi.avif",
  category: ["Healthcare Software", "AI Platform", "SaaS"],
  display: {
    description:
      "An AI-powered triage assistant that streamlines patient intake and accelerates clinical decision-making through avatar interactions.",
  },
  banner: {
    heading: "AI-Powered Triage & Rapid Assessment Platform (ATARA)",
    description:
      "ATARA is an intelligent healthcare triage assistant designed to streamline patient intake, accelerate clinical decision-making, and reduce operational burden for hospitals and care providers through AI-driven avatar conversations.",
    url: "https://atarafobi.com/",
    bannerImage: "/images/pages/home/portfolio/atara_fobi.avif",
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
    leftSectionImage: "/images/pages/portfolio/project-details/ichiban_parts.avif",
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
        image: "/images/pdf-images/tech-icons/Techstack-Framework-FastAPI.png",
        url: "https://fastapi.tiangolo.com/", // official docs :contentReference[oaicite:0]{index=0}
      },
      // {
      //   name: "Python",
      //   image: "/images/pdf-images/tech-icons/Techstack-Lang-Python.png",
      //   url: "https://www.python.org/",
      // },
      // {
      //   name: "React + Vite",
      //   image: "/images/pdf-images/tech-icons/Techstack-Framework-ReactVite.png",
      //   url: "https://vitejs.dev/",
      // },
      // {
      //   name: "MongoDB",
      //   image: "/images/pdf-images/tech-icons/Techstack-Framework-MongoDB.png",
      //   url: "https://www.mongodb.com/",
      // },
      // {
      //   name: "AWS",
      //   image: "/images/pdf-images/tech-icons/Techstack-Platform-AWS.png",
      //   url: "https://aws.amazon.com/",
      // },
      // {
      //   name: "OpenAI",
      //   image: "/images/pdf-images/tech-icons/Techstack-Platform-OpenAI.png",
      //   url: "https://openai.com/",
      // },
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
};
