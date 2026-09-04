import { Constants } from "@/utils/Constants";

const company = Constants.company.name;
const email = Constants.company.email;
const website = Constants.company.website;

export const PrivacyPolicyData = {
  eyebrow: "LEGAL",
  title: "Privacy Policy",
  lastUpdated: "September 4, 2026",
  intro:
    "This Privacy Policy explains how System Heuristics collects, uses, stores, and protects personal information when you visit our website, contact us, apply for a role, or use our services.",
  sections: [
    {
      title: "1. Who We Are",
      paragraphs: [
        `${company} ("we", "us", or "our") provides AI agents, automation, integrations, and custom software solutions for businesses.`,
        `If you have questions about this policy or your personal data, contact us at ${email} or visit ${website}.`,
      ],
    },
    {
      title: "2. Information We Collect",
      paragraphs: [
        "We may collect the following categories of information:",
      ],
      list: [
        "Contact details you submit through forms, such as name, email address, phone number, and company name.",
        "Message content and project details you share when requesting a consultation or support.",
        "Career application information, including resume/CV files, work history, and related application answers.",
        "Technical information such as IP address, browser type, device information, pages visited, and referral source.",
        "Communication records when you email us or interact with our team.",
      ],
    },
    {
      title: "3. How We Use Your Information",
      paragraphs: [
        "We use personal information to:",
      ],
      list: [
        "Respond to inquiries and schedule discovery or consultation calls.",
        "Provide, improve, and support our services and website experience.",
        "Evaluate job applications and communicate with candidates.",
        "Send relevant follow-up information related to your request.",
        "Maintain security, prevent abuse, and meet legal or compliance obligations.",
        "Analyze aggregated website usage to improve content and performance.",
      ],
    },
    {
      title: "4. Legal Bases for Processing",
      paragraphs: [
        "Where applicable, we process personal data based on one or more of the following:",
      ],
      list: [
        "Your consent, such as when you submit a form or apply for a role.",
        "Our legitimate interests in operating and improving our business and website.",
        "Performance of a contract or steps taken at your request before entering a contract.",
        "Compliance with legal obligations.",
      ],
    },
    {
      title: "5. Cookies and Analytics",
      paragraphs: [
        "Our website may use cookies or similar technologies to support basic functionality, remember preferences, and understand how visitors use the site.",
        "You can control cookies through your browser settings. Disabling certain cookies may affect site functionality.",
      ],
    },
    {
      title: "6. How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share information with trusted service providers who help us operate our website, email delivery, hosting, analytics, or recruitment processes, only as needed to perform those services.",
        "We may also disclose information if required by law, to protect our rights and users, or in connection with a business transfer such as a merger or acquisition.",
      ],
    },
    {
      title: "7. Data Retention",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including responding to inquiries, managing applications, maintaining business records, and meeting legal requirements.",
        "When information is no longer needed, we take reasonable steps to delete or anonymize it.",
      ],
    },
    {
      title: "8. Data Security",
      paragraphs: [
        "We use reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration.",
        "No method of transmission or storage is completely secure. Please contact us immediately if you believe your information has been compromised.",
      ],
    },
    {
      title: "9. Your Rights",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal information, or to withdraw consent where processing is based on consent.",
        `To exercise these rights, email ${email}. We may need to verify your identity before fulfilling certain requests.`,
      ],
    },
    {
      title: "10. Third-Party Links",
      paragraphs: [
        "Our website may include links to third-party websites or booking tools. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before providing personal information.",
      ],
    },
    {
      title: "11. Children's Privacy",
      paragraphs: [
        "Our website and services are intended for business and professional use. We do not knowingly collect personal information from children under 16.",
      ],
    },
    {
      title: "12. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will reflect the latest revision. Continued use of the website after changes means you acknowledge the updated policy.",
      ],
    },
    {
      title: "13. Contact Us",
      paragraphs: [
        `For privacy-related questions or requests, contact ${company} at ${email}.`,
      ],
    },
  ],
};

export const TermsAndConditionsData = {
  eyebrow: "LEGAL",
  title: "Terms & Conditions",
  lastUpdated: "September 4, 2026",
  intro:
    "These Terms & Conditions govern your access to and use of the System Heuristics website and related online materials. By using this website, you agree to these terms.",
  sections: [
    {
      title: "1. Agreement to Terms",
      paragraphs: [
        `By accessing ${website} or using any content, forms, or booking links provided by ${company}, you agree to be bound by these Terms & Conditions and our Privacy Policy.`,
        "If you do not agree, please do not use the website.",
      ],
    },
    {
      title: "2. About Our Services",
      paragraphs: [
        `${company} provides consulting and technology services including AI agents, business automation, integrations, and custom software development.`,
        "Website content is provided for general informational purposes and does not create a client engagement unless confirmed in a separate written agreement.",
      ],
    },
    {
      title: "3. Use of the Website",
      paragraphs: [
        "You agree to use the website only for lawful purposes. You must not:",
      ],
      list: [
        "Attempt to gain unauthorized access to the website, systems, or data.",
        "Interfere with the website’s security, availability, or performance.",
        "Submit false, misleading, or harmful information through forms or applications.",
        "Copy, scrape, or reuse website content for commercial purposes without our prior written permission.",
        "Use the website in any way that violates applicable laws or third-party rights.",
      ],
    },
    {
      title: "4. Inquiries, Discovery Calls, and Proposals",
      paragraphs: [
        "Submitting a contact form, booking a discovery call, or requesting information does not guarantee project acceptance, pricing, timelines, or availability.",
        "Any project scope, deliverables, fees, timelines, and responsibilities will be defined only in a separate proposal, statement of work, or contract agreed by both parties.",
      ],
    },
    {
      title: "5. Intellectual Property",
      paragraphs: [
        `All website content, branding, text, graphics, logos, layout, and design elements are owned by ${company} or its licensors and are protected by applicable intellectual property laws.`,
        "You may view and temporarily download pages for personal, non-commercial use. You may not reproduce, distribute, modify, or create derivative works from our website content without prior written consent.",
        "Client project materials remain subject to the terms of the relevant client agreement.",
      ],
    },
    {
      title: "6. Portfolio and Case Study Content",
      paragraphs: [
        "Project summaries, screenshots, and outcomes shown on this website are provided for illustration. Results vary by client, industry, scope, and implementation conditions.",
        "Some details may be anonymized or summarized to protect confidential client information.",
      ],
    },
    {
      title: "7. Careers and Applications",
      paragraphs: [
        "Submitting a job application does not create an employment relationship or guarantee an interview or offer.",
        "We may retain application materials according to our Privacy Policy and recruitment needs.",
      ],
    },
    {
      title: "8. Third-Party Services and Links",
      paragraphs: [
        "The website may link to third-party tools such as calendars, social platforms, or external resources. Those services are governed by their own terms and privacy policies.",
        `${company} is not responsible for third-party content, availability, or practices.`,
      ],
    },
    {
      title: "9. Disclaimer of Warranties",
      paragraphs: [
        'The website and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.',
        "We do not warrant that the website will be uninterrupted, error-free, or free of harmful components, or that information on the website is always complete or current.",
      ],
    },
    {
      title: "10. Limitation of Liability",
      paragraphs: [
        `To the fullest extent permitted by law, ${company} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the website.`,
        "Our total liability related to website use shall not exceed the amount you paid us, if any, for accessing the website content, or zero if the website is provided free of charge.",
      ],
    },
    {
      title: "11. Indemnification",
      paragraphs: [
        `You agree to indemnify and hold harmless ${company} and its team from claims, damages, losses, and expenses arising from your misuse of the website or violation of these terms.`,
      ],
    },
    {
      title: "12. Changes to These Terms",
      paragraphs: [
        "We may update these Terms & Conditions at any time. The “Last updated” date shows when the latest changes took effect.",
        "Continued use of the website after updates constitutes acceptance of the revised terms.",
      ],
    },
    {
      title: "13. Governing Law",
      paragraphs: [
        "These terms are governed by the laws applicable in the jurisdiction where System Heuristics operates, without regard to conflict-of-law principles.",
        "Any disputes arising from website use shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction, unless otherwise required by law.",
      ],
    },
    {
      title: "14. Contact",
      paragraphs: [
        `For questions about these Terms & Conditions, contact ${company} at ${email}.`,
      ],
    },
  ],
};
