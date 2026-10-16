// src/utils/Constants?.js
// Contains global constants for the company such as contact info and social links.
// Some fields use the CopyOrLink component to allow copying text or linking externally.

import CopyOrLink from "../../components/ui/copy-link-text/CopyOrLink";

export const Constants = {
  company: {
    name: "System Heuristics",
    email: (
      <CopyOrLink
        text={
          <img
            src="/images/pages/sensitive-information/email.png"
            alt="Email address"
            width={150}
            height={16}
            decoding="async"
            style={{
              height: "clamp(12px, 14px, 16px)",
              width: "auto",
            }}
          />
        }
        copyText={"info@systemheuristics.com"}
      />
    ),
    hrEmail: (
      <CopyOrLink
        text={
          <img
            src="/images/pages/sensitive-information/hr-email.png"
            alt="HR email address"
            width={170}
            height={16}
            decoding="async"
            style={{ height: "clamp(12px, 14px, 16px)", width: "auto" }}
          />
        }
        copyText={"hr@systemheuristics.com"}
      />
    ),
    website: (
      <CopyOrLink
        text="https://systemheuristics.com"
        copyText={"https://systemheuristics.com"}
      />
    ),
    address: (
      <CopyOrLink
        url={"https://maps.app.goo.gl/1QH8St298VjX3Snr8"}
        text={
          <img
            src="/images/pages/sensitive-information/address.png"
            alt="Office address"
            width={170}
            height={14}
            decoding="async"
            style={{ height: "clamp(11px, 12px, 14px)", width: "auto" }}
          />
        }
      />
    ),
    contactNo: (
      <CopyOrLink
        text="+92 334 4377198"
        copyText={"+92 334 4377198"}
      />
    ),
    timings: "Mon-Fri from 9am to 6pm.",
  },
  socials: {
    whatsapp: "https://wa.me/923344377198",
    linkedin: "https://www.linkedin.com/company/system-heuristics/",
    facebook: "https://www.facebook.com/share/1G4fA8pz4h/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/system.heuristics/",
  },
};
