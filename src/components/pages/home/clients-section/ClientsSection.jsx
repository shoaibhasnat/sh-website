import { useLayoutEffect, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
import { initClientsAnimation } from "./ClientsSectionUtils";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import styles from "./clients-section.module.css";
import { HomeData } from "../../../../data/pages/home/HomePageData";
import LazyImage from "../../../ui/lazy-image/LazyImage";

const ClientsSection = () => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  const clientsSection = HomeData?.clientsSection;

  const intro = clientsSection?.intro || {};
  const clients = Array.isArray(clientsSection?.list)
    ? clientsSection.list
    : [];

  useLayoutEffect(() => {
    // nothing to animate
    if (!clients.length) return;

    const result = initClientsAnimation({
      sectionRef,
      imageRefs,
    });

    // support multiple cleanup styles
    return () => {
      if (typeof result === "function") result();
      else if (result?.revert)
        result.revert(); // gsap context
      else if (result?.kill) result.kill(); // ScrollTrigger / timeline
    };
  }, [clients.length]);

  // If the whole section data is missing, render nothing
  if (!clientsSection) return null;

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Client Logos */}
      <div className={styles.images}>
        {clients.map((client, index) => {
          if (!client) return null;

          const name = client?.name || "";
          const href = client?.webLink || "#";
          const logo = client?.logo || "";

          return (
            <Tooltip key={client?.id ?? name ?? index} title={name} arrow>
              <a
                ref={(el) => (imageRefs.current[index] = el)}
                href={href}
                target={client?.webLink ? "_blank" : undefined}
                rel={client?.webLink ? "noopener noreferrer" : undefined}
                className={styles.imgWrapper}
              >
                <div className={styles.img}>
                  <LazyImage src={logo} alt={name} />
                  <span className={styles.imgName}>{name}</span>
                </div>
              </a>
            </Tooltip>
          );
        })}
      </div>

      {/* Center text overlay */}
      {intro?.heading || intro?.description ? (
        <div className={styles.textWrapper}>
          <span className={`${styles.text} bgGlassWGlow`}>
            {/* Heading */}
            {intro?.heading ? (
              <GradientScrollAnimation>
                <h3 className={styles.heading}>{intro.heading}</h3>
              </GradientScrollAnimation>
            ) : null}

            {/* Description */}
            {intro?.description ? (
              <GradientScrollAnimation>
                <p className={styles.description}>{intro.description}</p>
              </GradientScrollAnimation>
            ) : null}
          </span>
        </div>
      ) : null}
    </section>
  );
};

export default ClientsSection;
