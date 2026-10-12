import { Constants } from "../../../utils/global/Constants";

export const PrivacyPolicyData = {
  meta: {
    title: "Privacy Policy",
    lastUpdated: "2025-01-01",
    effectiveDate: "2025-01-01",
    companyName: Constants?.company?.name,
    website: Constants?.company?.website,
    contactEmail: Constants?.company?.email,
  },

  introduction: {
    heading: "Introduction",
    content: `
We value your privacy and are committed to protecting your personal information.
This Privacy Policy explains how we collect, use, disclose, and safeguard your data
when you visit our website or use our services.
By accessing or using our services, you agree to the practices described in this policy.
    `,
  },

  informationWeCollect: {
    heading: "Information We Collect",
    sections: [
      {
        title: "Personal Information",
        description: `
Information you voluntarily provide to us, such as your name, email address,
phone number, company details, or any other information submitted through
forms, contact pages, or communication channels.
        `,
      },
      {
        title: "Automatically Collected Information",
        description: `
When you visit our website, we may automatically collect certain information,
including IP address, browser type, operating system, device information,
pages visited, and interaction data.
        `,
      },
      {
        title: "Cookies and Tracking Technologies",
        description: `
We use cookies, web beacons, and similar technologies to enhance user experience,
analyze usage patterns, and improve website functionality.
        `,
      },
    ],
  },

  howWeUseInformation: {
    heading: "How We Use Your Information",
    purposes: [
      "To provide, operate, and maintain our services",
      "To communicate with you, including responding to inquiries and support requests",
      "To improve website performance, usability, and content",
      "To personalize user experience",
      "To comply with legal obligations and enforce our terms",
    ],
  },

  dataSharing: {
    heading: "Sharing of Information",
    content: `
We do not sell or rent your personal information. We may share information
with trusted third-party service providers who assist us in operating our website
and delivering services, provided they agree to keep your information confidential.
Information may also be disclosed when required by law or to protect our legal rights.
    `,
  },

  dataRetention: {
    heading: "Data Retention",
    content: `
We retain personal information only for as long as necessary to fulfill the purposes
outlined in this policy, unless a longer retention period is required or permitted by law.
    `,
  },

  dataSecurity: {
    heading: "Data Security",
    content: `
We implement appropriate technical and organizational security measures to protect
your personal data against unauthorized access, alteration, disclosure, or destruction.
However, no method of transmission over the internet is 100% secure.
    `,
  },

  userRights: {
    heading: "Your Privacy Rights",
    rights: [
      "Right to access your personal data",
      "Right to correct inaccurate or incomplete information",
      "Right to request deletion of your data",
      "Right to restrict or object to data processing",
      "Right to withdraw consent at any time",
    ],
    note: `
To exercise these rights, please contact us using the details provided below.
We may require verification of your identity before fulfilling requests.
    `,
  },

  thirdPartyLinks: {
    heading: "Third-Party Links",
    content: `
Our website may contain links to third-party websites.
We are not responsible for the privacy practices or content of those websites.
We encourage you to review their privacy policies before providing any information.
    `,
  },

  childrenPrivacy: {
    heading: "Children’s Privacy",
    content: `
Our services are not intended for individuals under the age of 13.
We do not knowingly collect personal information from children.
If we become aware that such data has been collected, we will take steps to delete it.
    `,
  },

  policyUpdates: {
    heading: "Changes to This Privacy Policy",
    content: `
We may update this Privacy Policy from time to time.
Any changes will be posted on this page with an updated revision date.
Continued use of our services constitutes acceptance of the updated policy.
    `,
  },

  thirdPartyTracking: {
    heading: "Third-Party Tracking and Marketing",
    content: `
When you visit or log in to our website, cookies and similar technologies may be used
by our online data partners or vendors to associate these activities with other personal
information they or others have about you, including by association with your email.
We (or service providers on our behalf) may then send communications and marketing
to these email addresses. You may opt out of receiving this advertising by visiting
https://app.retention.com/optout.
    `,
  },

  contactInformation: {
    heading: "Contact Us",
    content: `
If you have any questions or concerns regarding this Privacy Policy or our data practices,
please contact us at:
    `,
    details: {
      email: Constants?.company?.email,
      address: Constants?.company?.address,
    },
  },
};