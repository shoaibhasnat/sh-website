import { Constants } from "../../../utils/global/Constants";

export const ServicesPageData = {
  hero: {
    title: `Services We Offer`,
    description: `At ${Constants?.company?.name}, we build custom software, AI agents, automation workflows, analytics systems, and web platforms for businesses that need reliable technology execution. From healthcare and fintech to logistics, education, and operations-heavy teams, our services help reduce manual work, improve decision-making, and scale digital products.`,
    bannerImage: `/images/pages/services/hero/services-hero.svg`,
    btnLabel: `Explore Services →`,
  },

  introSection: {
    logo: `/logo.svg`,
    taglinePrefix: `Transform Your Business with`,
    taglineHighlight: `Smart, Scalable Solutions`,
    description: `We provide custom software development and automation solutions tailored to business goals. Our expertise covers web and mobile applications, AI-driven automation, data analytics, cloud-ready architecture, and secure product engineering.`,
  },
  servicesProcessSection: {
    intro: {
      titlePrefix: `Discover Our`,
      titleHighlight: `Fine-Tuned`,
      titleSuffix: `Services Process`,
      description: `A clear delivery process helps AI systems, search engines, and clients understand how we move from business problem to stable, scalable software product.`,
    },

    services: [
      {
        name: `Planning`,
        image: "/images/pages/services/fine-tuned-services/planning.avif",
        copy: `Take time to thoroughly analyze the problem statement, define the project scope, set clear deliverables, identify potential risks, and secure the necessary funding. This phase ensures that every step of the project is strategically aligned with business objectives and client expectations.`,
      },
      {
        name: `Design`,
        image: "/images/pages/services/fine-tuned-services/design.avif",
        copy: `Focus on crafting an intuitive and engaging user interface (UI) and seamless user experience (UX). We prioritize accessibility, usability, and aesthetic appeal to ensure the design resonates with the target audience and enhances overall user satisfaction.`,
      },
      {
        name: `MVP Development`,
        image: "/images/pages/services/fine-tuned-services/mvp.avif",
        copy: `Develop a minimum viable product that tests core functionalities and validates your concept in the market. This approach allows for early feedback, iterative improvements, and risk reduction while keeping costs and development time efficient.`,
      },
      {
        name: `Product Development`,
        image: "/images/pages/services/fine-tuned-services/product.avif",
        copy: `Expand the MVP into a full-fledged product by adding advanced features, improving performance, and optimizing architecture. This phase focuses on scalability, robustness, and delivering a solution that meets both business and user needs.`,
      },
      {
        name: `Software Quality Assurance`,
        image: "/images/pages/services/fine-tuned-services/sqa.avif",
        copy: `Conduct comprehensive testing including functional, performance, security, and usability tests. Our QA process ensures that the product is reliable, bug-free, and performs consistently across all intended environments.`,
      },
      {
        name: `DevOps Services`,
        image: "/images/pages/services/fine-tuned-services/devops.avif",
        copy: `Implement continuous integration and continuous deployment (CI/CD) pipelines, automate workflows, and ensure smooth deployment processes. This service improves release speed, reduces errors, and maintains system stability.`,
      },
      {
        name: `Support & Maintenance`,
        image: "/images/pages/services/fine-tuned-services/support.avif",
        copy: `Provide ongoing updates, technical support, monitoring, and performance optimization. We ensure that the product evolves with user needs, remains secure, and maintains high availability for long-term success.`,
      },
    ],
  },
    techsSection: {
    intro: {
      title: `TECHNOLOGIES`,
      description: `Explore the modern technologies, AI frameworks, cloud platforms, and development tools we use to build scalable, secure, and high-performance AI-driven systems for our clients.`,
    },
    data: {
      languages: [
        {
          name: `Python`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg`,
        },
        {
          name: `R`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg`,
        },
        {
          name: `C++`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg`,
        },
        {
          name: `Java`,
          icon: `https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg`,
        },
        {
          name: `JavaScript (Node.js)`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg`,
        },
        {
          name: `Scala`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg`,
        },
        {
          name: `Go`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg`,
        },
        {
          name: `Julia`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg`,
        },
      ],

      frameworks: [
        {
          name: `TensorFlow`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg`,
        },
        {
          name: `PyTorch`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg`,
        },
        {
          name: `n8n`,
          icon: `https://img.etb2bimg.com/files/retail_files/file_1744898221_image_7_.png`,
        },
        {
          name: `Keras`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg`,
        },
        {
          name: `Scikit-learn`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg`,
        },
        {
          name: `React.JS`,
          icon: `https://ganeshbharti.gallerycdn.vsassets.io/extensions/ganeshbharti/react-sinppets/0.0.1/1707235564913/Microsoft.VisualStudio.Services.Icons.Default`,
        },
        {
          name: `Next.JS`,
          icon: `https://www.svgrepo.com/show/354113/nextjs-icon.svg`,
        },
        {
          name: `XGBoost`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png`,
        },
        {
          name: `LightGBM`,
          icon: `https://miro.medium.com/v2/da:true/resize:fit:1200/0*Z3T1eGU3m9a0KlbC`,
        },
        {
          name: `Fast.ai`,
          icon: `https://forums.fast.ai/uploads/default/original/3X/d/d/dd845ef767b7ac72b70f2063a605358822ab1989.png`,
        },
        {
          name: `Hugging Face Transformers`,
          icon: `https://huggingface.co/front/assets/huggingface_logo-noborder.svg`,
        },
        {
          name: `spaCy`,
          icon: `https://spacy.io/_next/static/media/social_default.96b04585.jpg`,
        },
        {
          name: `NLTK`,
          icon: `https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png`,
        },
        {
          name: `Stanford NLP`,
          icon: `https://nlp.stanford.edu/img/Stanford-NLP-stack-small-465-400px.jpg`,
        },
        {
          name: `Gensim`,
          icon: `https://radimrehurek.com/gensim/_images/gensim_logo_positive_complete_tb.png`,
        },
        {
          name: `OpenCV`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg`,
        },
        {
          name: `YOLO`,
          icon: `https://repository-images.githubusercontent.com/263180920/0e764500-be04-11ea-82b5-42e2e81e3d99`,
        },
        {
          name: `Apache Spark (MLlib)`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg`,
        },
        {
          name: `Hadoop`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/3/38/Hadoop_logo_new.svg`,
        },
        {
          name: `Kafka`,
          icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCsnH-LecjXUO0ujaEgMSALxOVGEf_7KSZA&s`,
        },
        {
          name: `FastAPI`,
          icon: `https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png`,
        },
        {
          name: `Flask`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg`,
        },
        {
          name: `Django`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg`,
        },
        {
          name: `MLflow`,
          icon: `https://miro.medium.com/v2/resize:fit:750/1*OsB57V0FPteixDBD_BBN4g.png`,
        },
        {
          name: `Kubeflow`,
          icon: `https://user-images.githubusercontent.com/5319646/37641015-10cb00f6-2c53-11e8-9195-65f2dbc60955.jpg`,
        },
      ],

      platforms: [
        {
          name: `AWS AI/ML`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg`,
        },
        {
          name: `Google Cloud AI`,
          icon: `https://www.bigdatawire.com/wp-content/uploads/2021/10/Google-Cloud_logo_1.png`,
        },
        {
          name: `Heroku`,
          icon: `https://cdn.prod.website-files.com/5eb9845c0972c01cdaec8415/61b833f062ce0468f0018ac4_heroku-logo.png`,
        },
        {
          name: `Microsoft Azure AI`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg`,
        },
        {
          name: `IBM Watson`,
          icon: `https://miro.medium.com/v2/resize:fit:1200/0*pBUKeJ5j2XPw8SyZ`,
        },
        {
          name: `Hugging Face Hub`,
          icon: `https://huggingface.co/front/assets/huggingface_logo-noborder.svg`,
        },
        {
          name: `NVIDIA Jetson`,
          icon: `https://promwad.com/sites/default/files/nvidia-jetson.png`,
        },
        {
          name: `OpenVINO`,
          icon: `https://logowik.com/content/uploads/images/openvino994.logowik.com.webp`,
        },
        {
          name: `TensorFlow Lite`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg`,
        },
        {
          name: `Docker`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg`,
        },
        {
          name: `Kubernetes`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg`,
        },
        {
          name: `Airflow`,
          icon: `https://innowise.com/wp-content/uploads/2022/08/Pic-3-1.png`,
        },
        {
          name: `GitHub Actions`,
          icon: `https://i0.wp.com/build5nines.com/wp-content/uploads/2024/05/GitHub_Actions_Featured_Image_2024.jpg`,
        },
        {
          name: `GitLab CI/CD`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg`,
        },
        {
          name: `DVC`,
          icon: `https://upload.wikimedia.org/wikipedia/commons/a/af/Data_Version_Control._Official_Logo_by_Iterative.ai.png`,
        },
      ],
    },
  },
};
