import { useLayoutEffect, useRef } from "react";
import "./privacy-policy.css";
import { PrivacyPolicyData } from "../../../data/pages/privacy-policy/PrivacyPolicyData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  FileText,
  Zap,
  Share2,
  Clock,
  Shield,
  UserCheck,
  ExternalLink,
  Users,
  RefreshCcw,
  Mail,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicyMain = () => {
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);

  const {
    meta,
    introduction,
    informationWeCollect,
    howWeUseInformation,
    dataSharing,
    dataRetention,
    dataSecurity,
    userRights,
    thirdPartyLinks,
    childrenPrivacy,
    policyUpdates,
    thirdPartyTracking,
    contactInformation,
  } = PrivacyPolicyData;

  const allSections = [
    introduction,
    informationWeCollect,
    howWeUseInformation,
    dataSharing,
    dataRetention,
    dataSecurity,
    userRights,
    thirdPartyLinks,
    childrenPrivacy,
    policyUpdates,
    thirdPartyTracking,
  ];

  const icons = [
    <BookOpen size={22} strokeWidth={3} />,
    <FileText size={22} strokeWidth={3} />,
    <Zap size={22} strokeWidth={3} />,
    <Share2 size={22} strokeWidth={3} />,
    <Clock size={22} strokeWidth={3} />,
    <Shield size={22} strokeWidth={3} />,
    <UserCheck size={22} strokeWidth={3} />,
    <ExternalLink size={22} strokeWidth={3} />,
    <Users size={22} strokeWidth={3} />,
    <RefreshCcw size={22} strokeWidth={3} />,
    <Mail size={22} strokeWidth={3} />,
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
    <main ref={pageRef} className="pp-container">
      <header className="pp-header" ref={headerRef}>
        <h1>
          <BookOpen size={24} /> {meta.title}
        </h1>
        <p className="pp-meta">Last Updated: {meta.lastUpdated}</p>
      </header>

      {allSections.map((section, i) => (
        <section
          key={i}
          className="pp-section"
          ref={(el) => (sectionRefs.current[i] = el)}
        >
          <h2>
            {icons[i]} {section.heading}
          </h2>

          {section.content && <p>{section.content}</p>}

          {section.sections &&
            section.sections.map((item, idx) => (
              <div key={idx} className="pp-subsection">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}

          {section.purposes && (
            <ul>
              {section.purposes.map((purpose, idx) => (
                <li key={idx}>{purpose}</li>
              ))}
            </ul>
          )}

          {section.rights && (
            <ul>
              {section.rights.map((right, idx) => (
                <li key={idx}>{right}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section
        className="pp-section pp-contact"
        ref={(el) => (sectionRefs.current[sectionRefs.current.length] = el)}
      >
        <h2>
          <Mail size={18} /> {contactInformation.heading}
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

export default PrivacyPolicyMain;
