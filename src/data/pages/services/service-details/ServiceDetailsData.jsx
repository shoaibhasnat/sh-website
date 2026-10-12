import {
  Code,
  FileText,
  PenTool,
  Volume2,
  MessageSquare,
  Smile,
  Mic,
  Globe,
  User,
  Eye,
  Heart,
  Cpu,
  BarChart2,
  Server,
  Users,
  ToolCase,
  AlertTriangle,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Key,
  Music2,
  Activity,
  Clock,
} from "lucide-react";

export const ServiceDetailsData = {
  servicesSection: {
    intro: {
      chipLabel: `What We Can Do`,
      title: `Beyond products, we build, support, and scale your digital journey.`,
    },
    services: [
      {
        id: 1,
        title: `Generative AI`,
        description: `Create intelligent content, automate workflows, and accelerate innovation using Generative AI.`,
        bannerImage: `/images/pages/services/service-details/service-generative-ai.svg`,
        url: `/services/generative-ai`,
      },
      {
        id: 2,
        title: `Language Processing`,
        description: `Build smarter communication systems using AI-powered language understanding and generation.`,
        bannerImage: `/images/pages/services/service-details/service-language-processing.svg`,
        url: `/services/language-processing`,
      },
      {
        id: 3,
        title: `Computer Vision`,
        description: `Analyze images and videos with AI to enable accurate visual recognition systems.`,
        bannerImage: `/images/pages/services/service-details/service-computer-vision.svg`,
        url: `/services/computer-vision`,
      },
      {
        id: 4,
        title: `Data Analytics`,
        description: `Convert complex data into meaningful insights that support confident decision making.`,
        bannerImage: `/images/pages/services/service-details/service-data-analytics.svg`,
        url: `/services/data-analytics`,
      },
      {
        id: 5,
        title: `Machine Learning`,
        description: `Design intelligent models that learn from data and continuously improve performance.`,
        bannerImage: `/images/pages/services/service-details/service-machine-learning.svg`,
        url: `/services/machine-learning`,
      },
      {
        id: 6,
        title: `AI-Driven Security`,
        description: `Protect digital systems using AI-based threat detection and proactive security measures.`,
        bannerImage: `/images/pages/services/service-details/service-ai-driven-security.svg`,
        url: `/services/ai-driven-security`,
      },
      {
        id: 7,
        title: `Web Scraping`,
        description: `Extract structured data from websites efficiently for analytics and business intelligence.`,
        bannerImage: `/images/pages/services/service-details/service-web-scraping.svg`,
        url: `/services/web-scraping`,
      },
      {
        id: 8,
        title: `Web Automation`,
        description: `Automate repetitive web tasks like form submissions, data extraction, and workflows.`,
        bannerImage: `/images/pages/services/service-details/service-web-automation.svg`,
        url: `/services/web-automation`,
      },
    ],
  },
  eachServiceDetails: [
    {
      id: 1,
      path: "/generative-ai",
      name: "Generative AI",
      description:
        "As a top generative AI software development company, we provide innovative solutions that leverage the power of artificial intelligence to generate creative content, such as text, images, and videos. Our services empower businesses to automate content creation, enhance personalization, and boost productivity, while ensuring scalability and flexibility.",
      projectIds: [1, 3, 4, 6, 7],
      hero: {
        title: "Generative AI Software Development Services",
        description:
          "As a top generative AI software development company, we provide innovative solutions that leverage the power of artificial intelligence to generate creative content, such as text, images, and videos. Our services empower businesses to automate content creation, enhance personalization, and boost productivity, while ensuring scalability and flexibility.",
        bannerImage:
          "/images/pages/services/service-details/service-generative-ai.svg",
      },
      infoSection: {
        title: "Unleash the Power of Creativity with Generative AI",
        highlight: "Transform Ideas into Reality",
        description:
          "Harness the capabilities of generative AI to automate content creation, design, and problem-solving processes. We offer advanced solutions that empower your business with AI-driven creativity.",
      },
      videosSection: {
        projects: [
          // There videos are uploaded on developer@systemheuristics.com cloudinary account, if you want to change them, please ask the team to upload new videos there and update the links here
          {
            id: "1",
            title: "I'm Adriana — Your AI Medical Triage Assistant",
            description:
              "A demonstration of ATARA, an AI-powered triage assistant that helps assess symptoms and support smarter healthcare decisions.",
            videoUrl:
              "https://res.cloudinary.com/dxva7cvqr/video/upload/v1780640743/0605_iup15v.mp4",
          },
          {
            id: "2",
            title: "I'm Jake — Real Estate Content Creator",
            description:
              "A sample video featuring a real estate YouTuber sharing insights on property trends and investment opportunities.",
            videoUrl:
              "https://res.cloudinary.com/dxva7cvqr/video/upload/v1780639821/2_gbddpt.mp4",
          },
          {
            id: "3",
            title: "I'm AIDN — Your Personal AI Health Assistant",
            description:
              "A demonstration of AIDN, an AI health assistant designed to guide patients, interpret health information, and support personalized care.",
            videoUrl:
              "https://res.cloudinary.com/dxva7cvqr/video/upload/v1780639821/1_bif1ys.mp4",
          },
        ],
      },
      servicesSliderSection: {
        header: {
          title: "Cutting-Edge Generative AI Solutions",
          description:
            "Leverage generative AI to create dynamic content, enhance automation, and drive innovation in various industries. Explore our range of generative AI services:",
        },
        cardsData: [
          {
            title: "AI Content Generation",
            description:
              "Generate high-quality text, images, and videos using state-of-the-art AI models. Our solutions can automate content creation, ensure consistency across platforms, and adapt to different styles and formats to engage your audience more effectively.",
            icon: FileText,
          },
          {
            title: "AI-Powered Design Tools",
            description:
              "Leverage AI to create stunning designs, logos, and creative assets with minimal effort. The tools suggest layouts, color schemes, and design variations, helping teams accelerate their creative workflows and maintain brand consistency.",
            icon: PenTool,
          },
          {
            title: "AI-Driven Code Generation",
            description:
              "Boost productivity with AI-assisted coding and software development. The AI can generate boilerplate code, suggest optimizations, and help debug errors, allowing developers to focus on complex logic and faster delivery of robust applications.",
            icon: Code,
          },
          {
            title: "Text & Speech Synthesis",
            description:
              "Convert text into realistic speech and enhance voice-based applications. Our models support multiple languages, accents, and tones, enabling more engaging user experiences for virtual assistants, audiobooks, and accessibility solutions.",
            icon: Volume2,
          },
          {
            title: "AI-Powered Music Composition",
            description:
              "Create unique music tracks using AI-powered composition models. The system can generate melodies, harmonies, and arrangements tailored to different genres, helping artists, content creators, and brands produce original music efficiently.",
            icon: Music2,
          },
        ],
      },
      faqSection: [
        {
          question: "How does Machine Learning benefit businesses?",
          answer:
            "Machine learning helps businesses by providing predictive insights, optimizing operations, and enabling data-driven decision-making.",
        },
        {
          question: "What types of problems can Machine Learning solve?",
          answer:
            "Machine learning can solve problems related to customer behavior prediction, supply chain optimization, fraud detection, and more.",
        },
        {
          question: "Can Machine Learning models adapt over time?",
          answer:
            "Yes, machine learning models can continuously improve as they are exposed to more data, allowing them to adapt to new trends and patterns.",
        },
        {
          question: "How do I start using Machine Learning in my business?",
          answer:
            "You can start by identifying business problems that can be solved with data, collecting relevant data, and implementing machine learning models to derive insights.",
        },
      ],
    },
    {
      id: 2,
      path: "/language-processing",
      name: "Language Processing",
      projectIds: [1, 3, 4, 6, 7],
      description:
        "As experts in language processing, we develop powerful NLP solutions to help businesses understand, interpret, and generate human language. Our NLP services enable applications such as sentiment analysis, chatbots, translation, and voice recognition, improving customer interaction and automating complex tasks.",
      hero: {
        title: "Natural Language Processing Software Development Services",
        description:
          "As experts in language processing, we develop powerful NLP solutions to help businesses understand, interpret, and generate human language. Our NLP services enable applications such as sentiment analysis, chatbots, translation, and voice recognition, improving customer interaction and automating complex tasks.",

        bannerImage:
          "/images/pages/services/service-details/service-language-processing.svg",
      },
      infoSection: {
        title: "Enhance Communication with Language Processing",
        highlight: "Revolutionizing Human-AI Interaction",
        description:
          "Leverage the power of natural language processing to improve customer engagement, automate communication, and extract valuable insights from unstructured data.",
      },
      servicesSliderSection: {
        header: {
          title: "Intelligent Language Processing Services",
          description:
            "Enhance communication, automate text analysis, and build smart chatbots with our NLP solutions. Explore our range of language processing services:",
        },
        cardsData: [
          {
            title: "Chatbots & Virtual Assistants",
            description:
              "Develop AI chatbots for customer support and business automation.",
            icon: MessageSquare, // Represents chat or messaging
          },
          {
            title: "Sentiment Analysis",
            description:
              "Analyze customer emotions and feedback with AI-powered sentiment analysis.",
            icon: Smile, // Represents sentiment / emotions
          },
          {
            title: "Speech Recognition",
            description:
              "Convert speech to text and enable voice-controlled applications.",
            icon: Mic, // Represents voice / microphone
          },
          {
            title: "Machine Translation",
            description:
              "Translate content accurately with AI-powered language translation.",
            icon: Globe, // Represents global languages / translation
          },
          {
            title: "Text Summarization",
            description:
              "Condense large text content into concise summaries using AI.",
            icon: FileText, // Represents text / documents
          },
        ],
      },
      faqSection: [
        {
          question: "What is Natural Language Processing (NLP)?",
          answer:
            "NLP is a field of AI focused on enabling computers to understand, interpret, and generate human language in a way that is meaningful.",
        },
        {
          question: "How does NLP improve customer service?",
          answer:
            "NLP can be used to automate responses, analyze customer sentiment, and extract actionable insights from interactions, improving customer service efficiency.",
        },
        {
          question: "What are the use cases of NLP in business?",
          answer:
            "NLP can be used for chatbots, sentiment analysis, voice recognition, document summarization, and more.",
        },
        {
          question: "How secure is NLP in terms of data privacy?",
          answer:
            "NLP systems should be designed with privacy in mind, ensuring that sensitive data is handled according to compliance standards like GDPR.",
        },
      ],
    },
    {
      id: 3,
      path: "/computer-vision",
      name: "Computer Vision",
      description:
        "As a top computer vision software development company, we provide solutions that allow machines to interpret and understand visual information. Our computer vision services are used in industries like manufacturing, healthcare, retail, and security to automate image analysis, facial recognition, and object detection, improving efficiency and accuracy.",
      projectIds: [1],
      hero: {
        title: "Computer Vision Software Development Services",
        description:
          "As a top computer vision software development company, we provide solutions that allow machines to interpret and understand visual information. Our computer vision services are used in industries like manufacturing, healthcare, retail, and security to automate image analysis, facial recognition, and object detection, improving efficiency and accuracy.",

        bannerImage:
          "/images/pages/services/service-details/service-computer-vision.svg",
      },
      infoSection: {
        title: "Empower Your Business with Computer Vision",
        highlight: "Unlock the Potential of Visual Data",
        description:
          "Our computer vision solutions enable you to analyze and interpret visual data for various applications, from object recognition to automated inspections, enhancing operational efficiency.",
      },
      servicesSliderSection: {
        header: {
          title: "Next-Gen Computer Vision Solutions",
          description:
            "Empower your applications with AI-driven image and video analysis. Explore our range of computer vision services:",
        },
        cardsData: [
          {
            title: "Facial Recognition",
            description:
              "Enable secure authentication and identity verification with AI-powered facial recognition.",
            icon: User, // Represents face / identity
          },
          {
            title: "Object Detection & Recognition",
            description:
              "Detect and classify objects in images and videos with AI.",
            icon: Eye, // Represents vision / detection
          },
          {
            title: "Medical Image Analysis",
            description:
              "Enhance healthcare diagnostics with AI-driven medical image processing.",
            icon: Heart, // Represents healthcare / medical
          },
          {
            title: "AI-Powered OCR",
            description:
              "Extract text from images and scanned documents with Optical Character Recognition (OCR).",
            icon: FileText, // Represents text extraction
          },
          {
            title: "Autonomous Vehicles Vision Systems",
            description:
              "Develop AI-driven vision systems for self-driving cars and smart navigation.",
            icon: Cpu, // Represents AI processing / autonomous systems
          },
        ],
      },
      faqSection: [
        {
          question: "How does Computer Vision improve business operations?",
          answer:
            "Computer vision automates visual inspections, enables facial recognition, enhances security, and streamlines production processes.",
        },
        {
          question: "Can Computer Vision be used in retail?",
          answer:
            "Yes, computer vision can be used for inventory tracking, customer behavior analysis, and cashier-less checkout systems in retail.",
        },
        {
          question: "How accurate are Computer Vision systems?",
          answer:
            "The accuracy of computer vision systems depends on the quality of the training data and the complexity of the task, but with proper training, it can achieve high accuracy.",
        },
        {
          question:
            "What are the applications of Computer Vision in healthcare?",
          answer:
            "Computer vision in healthcare can assist in diagnostics, medical imaging analysis, and monitoring patient conditions through visual data.",
        },
      ],
    },
    {
      id: 4,
      path: "/data-analytics",
      name: "Data Analytics",
      description:
        "As a premier data analytics software development company, we offer data-driven solutions that empower businesses to make informed decisions. Our analytics services include predictive analytics, data visualization, and business intelligence, enabling companies to gain valuable insights, optimize performance, and drive growth.",
      projectIds: [1, 3, 4],
      hero: {
        title: "Data Analytics Software Development Services",
        description:
          "As a premier data analytics software development company, we offer data-driven solutions that empower businesses to make informed decisions. Our analytics services include predictive analytics, data visualization, and business intelligence, enabling companies to gain valuable insights, optimize performance, and drive growth.",

        bannerImage:
          "/images/pages/services/service-details/service-data-analytics.svg",
      },
      infoSection: {
        title: "Drive Decisions with Data Analytics",
        highlight: "Turn Data into Valuable Insights",
        description:
          "Our data analytics services provide you with comprehensive insights that drive smart business decisions. We offer predictive and prescriptive analytics solutions to stay ahead of the curve.",
      },
      servicesSliderSection: {
        header: {
          title: "Data-Driven Insights with AI Analytics",
          description:
            "Transform raw data into actionable insights and informed decision-making. Explore our range of data analytics services:",
        },
        cardsData: [
          {
            title: "Business Intelligence",
            description:
              "Transform raw data into meaningful insights with AI-driven analytics.",
            icon: BarChart2, // Represents analytics / insights
          },
          {
            title: "Big Data Processing",
            description:
              "Process and analyze massive datasets efficiently with AI-powered tools.",
            icon: Server, // Represents data processing / servers
          },
          {
            title: "Customer Analytics",
            description:
              "Understand customer behavior and preferences with AI-based analytics.",
            icon: Users, // Represents customers / user behavior
          },
        ],
      },
      faqSection: [
        {
          question: "How can Data Analytics help my business?",
          answer:
            "Data analytics enables businesses to make informed decisions by analyzing trends, forecasting outcomes, and identifying opportunities for improvement.",
        },
        {
          question: "What types of analytics do businesses use?",
          answer:
            "Businesses use descriptive, diagnostic, predictive, and prescriptive analytics to understand past data, identify causes, predict future trends, and suggest actions.",
        },
        {
          question: "Is Data Analytics expensive for small businesses?",
          answer:
            "Data analytics tools vary in price, but there are affordable solutions for small businesses that can provide actionable insights and drive growth.",
        },
        {
          question: "How do I start using Data Analytics in my business?",
          answer:
            "Start by collecting relevant data, setting clear objectives, and using analytics tools to gain insights that help guide business decisions.",
        },
      ],
    },
    {
      id: 5,
      path: "/machine-learning",
      name: "Machine Learning",
      description:
        "As a leading machine learning software development company, we offer AI-driven solutions to help businesses unlock the power of data. From predictive analytics to recommendation systems, our machine learning services automate decision-making, optimize operations, and enhance user experiences, ensuring a competitive edge in the market.",
      projectIds: [6],
      hero: {
        title: "Machine Learning Software Development Services",
        description:
          "As a leading machine learning software development company, we offer AI-driven solutions to help businesses unlock the power of data. From predictive analytics to recommendation systems, our machine learning services automate decision-making, optimize operations, and enhance user experiences, ensuring a competitive edge in the market.",

        bannerImage:
          "/images/pages/services/service-details/service-machine-learning.svg",
      },
      infoSection: {
        title: "Unlock Insights with Machine Learning",
        highlight: "Transform Data into Actionable Solutions",
        description:
          "Our machine learning solutions help you gain insights, predict trends, and optimize operations through data-driven intelligence. We create custom models that adapt and evolve with your business.",
      },
      servicesSliderSection: {
        header: {
          title: "Advanced Machine Learning Solutions",
          description:
            "Unlock predictive insights and optimize operations with our custom machine learning models. Explore our range of machine learning services:",
        },
        cardsData: [
          {
            title: "Predictive Analytics",
            description:
              "Use AI to forecast trends, demand, and customer behavior.",
            icon: TrendingUp, // Represents forecasting / trends
          },
          {
            title: "Recommendation Systems",
            description:
              "Enhance user engagement with AI-driven personalized recommendations.",
            icon: Star, // Represents personalized recommendations / favorites
          },
          {
            title: "Anomaly Detection",
            description:
              "Identify unusual patterns and potential risks with AI-based anomaly detection.",
            icon: AlertTriangle, // Represents alerts / anomalies
          },
          {
            title: "Automated Data Labeling",
            description:
              "Speed up machine learning projects with AI-assisted data labeling.",
            icon: ToolCase, // Represents tools / automation
          },
          {
            title: "Deep Learning Solutions",
            description:
              "Develop powerful AI applications with advanced deep learning models.",
            icon: Cpu, // Represents AI processing / deep learning
          },
        ],
      },
      faqSection: [
        {
          question: "How does Machine Learning benefit businesses?",
          answer:
            "Machine learning helps businesses by providing predictive insights, optimizing operations, and enabling data-driven decision-making.",
        },
        {
          question: "What types of problems can Machine Learning solve?",
          answer:
            "Machine learning can solve problems related to customer behavior prediction, supply chain optimization, fraud detection, and more.",
        },
        {
          question: "Can Machine Learning models adapt over time?",
          answer:
            "Yes, machine learning models can continuously improve as they are exposed to more data, allowing them to adapt to new trends and patterns.",
        },
        {
          question: "How do I start using Machine Learning in my business?",
          answer:
            "You can start by identifying business problems that can be solved with data, collecting relevant data, and implementing machine learning models to derive insights.",
        },
      ],
    },
    {
      id: 6,
      path: "/ai-driven-security",
      name: "AI Driven Security",
      description:
        "As leaders in AI-driven security software development, we provide innovative solutions that enhance cybersecurity through artificial intelligence. Our services include threat detection, risk analysis, and real-time security monitoring, ensuring businesses are protected from evolving cyber threats and maintaining data privacy.",
      projectIds: [1, 3, 4],
      hero: {
        title: "AI-Driven Security Software Development Services",
        description:
          "As leaders in AI-driven security software development, we provide innovative solutions that enhance cybersecurity through artificial intelligence. Our services include threat detection, risk analysis, and real-time security monitoring, ensuring businesses are protected from evolving cyber threats and maintaining data privacy.",

        bannerImage:
          "/images/pages/services/service-details/service-ai-driven-security.svg",
      },
      infoSection: {
        title: "Protect Your Business with AI-Driven Security",
        highlight: "Enhance Security with Cutting-Edge AI Technology",
        description:
          "Our AI-driven security solutions proactively identify and mitigate threats, providing robust protection for your data, applications, and networks.",
      },
      servicesSliderSection: {
        header: {
          title: "Intelligent AI Security Solutions",
          description:
            "Enhance cybersecurity with AI-powered threat detection and risk mitigation. Explore our range of AI-driven security services:",
        },
        cardsData: [
          {
            title: "AI-Powered Threat Detection",
            description:
              "Identify and mitigate cyber threats in real-time with AI-driven security solutions.",
            icon: Shield, // Represents security / protection
          },
          {
            title: "Fraud Prevention",
            description:
              "Detect and prevent fraudulent activities using AI-based risk analysis.",
            icon: AlertTriangle, // Represents risk / alerts
          },
          {
            title: "Automated Incident Response",
            description:
              "Enhance cybersecurity with AI-driven automated threat response mechanisms.",
            icon: Zap, // Represents automation / rapid response
          },
          {
            title: "Behavioral Analytics",
            description:
              "Monitor and analyze user behavior to detect anomalies and potential security breaches.",
            icon: Activity, // Represents monitoring / behavior
          },
          {
            title: "Secure Identity Management",
            description:
              "Leverage AI for advanced identity verification and access control solutions.",
            icon: Key, // Represents identity / access control
          },
        ],
      },
      faqSection: [
        {
          question: "What is AI-driven security?",
          answer:
            "AI-driven security uses artificial intelligence to detect and prevent threats in real time, offering more proactive and efficient security solutions.",
        },
        {
          question: "How does AI improve cybersecurity?",
          answer:
            "AI enhances cybersecurity by identifying patterns, detecting anomalies, and responding to threats faster than traditional methods.",
        },
        {
          question: "Is AI security better than traditional methods?",
          answer:
            "AI security can provide faster response times and more accurate threat detection, making it an important complement to traditional methods.",
        },
        {
          question: "Can AI prevent all cyberattacks?",
          answer:
            "While AI enhances threat detection and response, it is not a guarantee against all attacks. It should be part of a broader, layered security strategy.",
        },
      ],
    },
    {
      id: 7,
      path: "/web-scraping",
      name: "Web Scraping",
      projectIds: [2, 13, 14, 15, 16, 17, 18, 19],
      hero: {
        title: "Web Scraping Services",
        description:
          "We provide professional web scraping services to help businesses collect, structure, and analyze online data efficiently. Our solutions enable competitive intelligence, market research, and data-driven decision-making at scale.",
        bannerImage:
          "/images/pages/services/service-details/service-web-scraping.svg",
      },
      infoSection: {
        title: "Unlock Data from the Web",
        highlight: "Automate Data Collection for Smarter Decisions",
        description:
          "Our web scraping services extract meaningful data from websites, transforming it into actionable insights. We handle everything from structured data extraction to complex multi-source scraping tasks.",
      },
      servicesSliderSection: {
        header: {
          title: "Advanced Web Scraping Solutions",
          description:
            "Collect, organize, and analyze online data with our professional web scraping services. Explore our range of solutions:",
        },
        cardsData: [
          {
            title: "E-Commerce Data Extraction",
            description:
              "Gather product, pricing, and inventory information for competitive analysis.",
            icon: TrendingUp, // Can represent analytics / trends
          },
          {
            title: "Lead Generation Scraping",
            description:
              "Extract targeted leads and business contact information efficiently.",
            icon: Star, // Can represent targeted leads / favorites
          },
          {
            title: "Market Research Data",
            description:
              "Collect data from multiple sources to analyze trends and consumer behavior.",
            icon: AlertTriangle, // Alerts / monitoring
          },
          {
            title: "Automated Data Collection",
            description:
              "Set up recurring scraping tasks to maintain updated datasets automatically.",
            icon: ToolCase, // Automation / tools
          },
          {
            title: "Data Cleaning & Structuring",
            description:
              "Transform raw scraped data into clean, structured, and usable formats for analytics.",
            icon: Cpu, // Data processing
          },
        ],
      },
      faqSection: [
        {
          question: "What is web scraping?",
          answer:
            "Web scraping is the automated process of extracting data from websites for analysis, reporting, or integration into other systems.",
        },
        {
          question: "What kind of data can be scraped?",
          answer:
            "Almost any publicly available web data can be scraped, including product info, pricing, reviews, business contacts, social media posts, and more.",
        },
        {
          question: "Is web scraping legal?",
          answer:
            "Web scraping is legal when done responsibly and in accordance with website terms of service. We ensure ethical practices and compliance for all projects.",
        },
        {
          question: "How frequently can data be scraped?",
          answer:
            "We can set up scraping on-demand, scheduled intervals, or continuously depending on the client’s needs and website constraints.",
        },
      ],
    },
    {
      id: 8,
      path: "/web-automation",
      name: "Web Automation",
      projectIds: [7, 8, 9, 10, 11, 12],
      hero: {
        title: "Web Automation Services",
        description:
          "Our web automation services help businesses automate repetitive web tasks, streamline workflows, and improve efficiency. From data entry to complex multi-step web processes, we deliver solutions that save time and reduce human error.",
        bannerImage:
          "/images/pages/services/service-details/service-web-automation.svg",
      },
      infoSection: {
        title: "Automate Repetitive Web Tasks",
        highlight: "Boost Efficiency with Web Automation",
        description:
          "We provide custom web automation solutions that handle repetitive tasks such as form submissions, data extraction, and workflow management, allowing your team to focus on higher-value activities.",
      },
      servicesSliderSection: {
        header: {
          title: "Comprehensive Web Automation Solutions",
          description:
            "Automate your web processes efficiently with our professional web automation services. Explore our range of solutions:",
        },
        cardsData: [
          {
            title: "Form Automation",
            description:
              "Automatically fill and submit web forms to save time and reduce errors.",
            icon: ToolCase, // Represents automation / tools
          },
          {
            title: "Data Extraction & Processing",
            description:
              "Extract and process data from web platforms automatically for reporting or analytics.",
            icon: TrendingUp, // Analytics / trends
          },
          {
            title: "Workflow Automation",
            description:
              "Integrate multiple web tasks into automated workflows for seamless operations.",
            icon: Zap, // Represents fast automation / triggers
          },
          {
            title: "Scheduled Task Automation",
            description:
              "Run web tasks on a schedule to maintain updated information without manual intervention.",
            icon: Clock, // Represents scheduling / automation
          },
          {
            title: "Error Handling & Notifications",
            description:
              "Ensure reliability with automated error detection, logging, and alert notifications.",
            icon: AlertTriangle, // Alerts / notifications
          },
        ],
      },
      faqSection: [
        {
          question: "What is web automation?",
          answer:
            "Web automation uses software to automatically perform repetitive tasks on websites, such as form submissions, data collection, and workflow execution.",
        },
        {
          question: "What tasks can be automated?",
          answer:
            "Tasks such as data entry, scraping, workflow integration, report generation, and multi-step online processes can be automated.",
        },
        {
          question: "How does web automation benefit businesses?",
          answer:
            "Web automation reduces manual effort, minimizes errors, speeds up processes, and allows teams to focus on higher-value activities.",
        },
        {
          question: "Is web automation safe?",
          answer:
            "Yes, when implemented responsibly, web automation is safe and designed to comply with website policies and ethical standards.",
        },
      ],
    },
  ],
};
