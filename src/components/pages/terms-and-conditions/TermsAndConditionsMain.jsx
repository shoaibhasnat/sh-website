import { useLayoutEffect, useRef } from "react";
import "./terms-and-conditions.css";
import { TermsAndConditionsData } from "../../../data/pages/terms-and-conditions/TermsAndConditionsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  CheckCircle,
  Server,
  UserCheck,
  FileText,
  Slash,
  CreditCard,
  AlertTriangle,
  Shield,
  XCircle,
  Gavel,
  RefreshCcw,
  Mail,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TermsConditionsMain = () => {
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);

  const {
    meta,
    introduction,
    acceptanceOfTerms,
    services,
    userResponsibilities,
    intellectualProperty,
    prohibitedActivities,
    payments,
    limitationOfLiability,
    indemnification,
    termination,
    governingLaw,
    changesToTerms,
    contactInformation,
  } = TermsAndConditionsData;

  const sections = [
    introduction,
    acceptanceOfTerms,
    services,
    userResponsibilities,
    intellectualProperty,
    prohibitedActivities,
    payments,
    limitationOfLiability,
    indemnification,
    termination,
    governingLaw,
    changesToTerms,
  ];

  const icons = [
    <BookOpen size={22} strokeWidth={3} />,
    <CheckCircle size={22} strokeWidth={3} />,
    <Server size={22} strokeWidth={3} />,
    <UserCheck size={22} strokeWidth={3} />,
    <FileText size={22} strokeWidth={3} />,
    <Slash size={22} strokeWidth={3} />,
    <CreditCard size={22} strokeWidth={3} />,
    <AlertTriangle size={22} strokeWidth={3} />,
    <Shield size={22} strokeWidth={3} />,
    <XCircle size={22} strokeWidth={3} />,
    <Gavel size={22} strokeWidth={3} />,
    <RefreshCcw size={22} strokeWidth={3} />,
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { x: -150, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              end: "top 20%",
              scrub: true,
            },
          },
        );
      }

      sectionRefs.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 20%",
              scrub: true,
            },
          },
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="tc-container">
      <header className="tc-header" ref={headerRef}>
        <h1>
          <BookOpen size={24} /> {meta.title}
        </h1>
        <p className="tc-meta">Last Updated: {meta.lastUpdated}</p>
      </header>

      {sections.map((section, i) => (
        <section
          key={i}
          className="tc-section"
          ref={(el) => (sectionRefs.current[i] = el)}
        >
          <h2>
            {icons[i]} {section.heading}
          </h2>

          {section.content && <p>{section.content}</p>}

          {section.responsibilities && (
            <ul>
              {section.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {section.activities && (
            <ul>
              {section.activities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section
        className="tc-section tc-contact"
        ref={(el) => (sectionRefs.current[sectionRefs.current.length] = el)}
      >
        <h2>
          <Mail size={22} /> {contactInformation.heading}
        </h2>
        <p>{contactInformation.content}</p>
        <p>
          <strong>Email:</strong> {contactInformation.details.email}
        </p>
        <p>
          <strong>Address:</strong> {contactInformation.details.address}
        </p>
      </section>
    </main>
  );
};

export default TermsConditionsMain;
