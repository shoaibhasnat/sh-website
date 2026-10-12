import { Constants } from "../../../utils/global/Constants";

export const TermsAndConditionsData = {
  meta: {
    title: "Terms & Conditions",
    lastUpdated: "January 1, 2025",
    companyName: Constants?.company?.name,
    website: Constants?.company?.website,
    contactEmail: Constants?.company?.email,
  },

  introduction: {
    heading: "Introduction",
    content:
      "These Terms and Conditions govern your use of our website, products, and services. By accessing or using our platform, you agree to be legally bound by these terms. If you do not agree, please discontinue use immediately.",
  },

  acceptanceOfTerms: {
    heading: "Acceptance of Terms",
    content:
      "By accessing this website, you confirm that you are at least 18 years old and capable of entering into a legally binding agreement. Continued use constitutes acceptance of these Terms and any future updates.",
  },

  services: {
    heading: "Services",
    content:
      "We provide digital solutions including software development, design, and consulting services. All services are provided on an 'as-is' and 'as-available' basis unless otherwise stated in a written agreement.",
  },

  userResponsibilities: {
    heading: "User Responsibilities",
    responsibilities: [
      "Provide accurate and complete information",
      "Use the platform only for lawful purposes",
      "Avoid actions that may harm, disrupt, or misuse our services",
      "Maintain the confidentiality of your account credentials",
    ],
  },

  intellectualProperty: {
    heading: "Intellectual Property",
    content:
      "All content, designs, logos, software, and materials on this website are the exclusive property of the company unless otherwise stated. Unauthorized use, reproduction, or distribution is strictly prohibited.",
  },

  prohibitedActivities: {
    heading: "Prohibited Activities",
    activities: [
      "Unauthorized access to systems or data",
      "Reverse engineering or copying platform features",
      "Uploading malicious code or content",
      "Violating applicable laws or regulations",
    ],
  },

  payments: {
    heading: "Payments & Billing",
    content:
      "All payments for services must be made according to agreed pricing terms. Failure to complete payments may result in service suspension or termination.",
  },

  limitationOfLiability: {
    heading: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.",
  },

  indemnification: {
    heading: "Indemnification",
    content:
      "You agree to indemnify and hold harmless the company from any claims, damages, or expenses arising out of your misuse of the platform or violation of these Terms.",
  },

  termination: {
    heading: "Termination",
    content:
      "We reserve the right to suspend or terminate access to our services at any time without prior notice if these Terms are violated.",
  },

  governingLaw: {
    heading: "Governing Law",
    content:
      "These Terms shall be governed and interpreted in accordance with the laws of the applicable jurisdiction, without regard to conflict of law principles.",
  },

  changesToTerms: {
    heading: "Changes to Terms",
    content:
      "We may update these Terms periodically. Continued use of the platform after updates constitutes acceptance of the revised Terms.",
  },

  contactInformation: {
    heading: "Contact Information",
    content:
      "If you have any questions regarding these Terms and Conditions, please contact us using the information below.",

    details: {
      email: Constants?.company?.email,
      address: Constants?.company?.address,
    },
  },
};
