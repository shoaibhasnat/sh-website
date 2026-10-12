import { useLayoutEffect, useRef } from "react";
import styles from "./industries-section.module.css";
import { initIndustriesAnimation } from "./IndustriesSectionUtils";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import LazyImage from "../../../ui/lazy-image/LazyImage";
import { IndustriesData } from "../../../../data/pages/industries/IndustriesData";

const IndustriesSection = ({ lenisRef, parent }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const splitsRef = useRef([]);

  // ---- Safe access ----
  const industriesSection = IndustriesData?.industriesSection;
  const intro = industriesSection?.intro;
  const industriesList = Array.isArray(industriesSection?.industries)
    ? industriesSection.industries
    : [];

  useLayoutEffect(() => {
    // nothing to animate
    if (!industriesList.length) return;

    const cleanup = initIndustriesAnimation({
      containerRef,
      itemRefs,
      splitsRef,
      lenisRef,
    });

    return () => cleanup?.();
  }, [industriesList.length, lenisRef]);

  // If data missing, render nothing (or add your fallback UI)
  if (!industriesSection) return null;

  return (
    <>
      {/* Section intro / header */}
      {intro ? (
        <div className={styles.title}>
          <SectionIntro
            title={intro?.title || ""}
            description={intro?.description || ""}
            {...(parent !== "industry"
              ? { buttonLabel: intro?.buttonLabel, btnHref: "/industries" }
              : {})}
            titleTag="h1"
          />
        </div>
      ) : null}

      {/* Main industries container */}
      <main
        ref={containerRef}
        className={styles.main}
        id={
          parent === "industry" ? "industries-page-industry-section" : undefined
        }
      >
        {industriesList.map((item, index) => {
          if (!item) return null;

          const href = item?.url || "#";
          const name = item?.name || "";

          return (
            <a key={item?.id ?? index} href={href}>
              <section
                ref={(el) => (itemRefs.current[index] = el)}
                className={styles.workItem}
              >
                <div className={styles.workItemImg}>
                  <LazyImage
                    src={item?.image || ""}
                    alt={name}
                    className={styles.workImg}
                  />

                  <div className={styles.workItemName}>
                    <h2 className={styles.workTitle}>
                      <span>{name}</span>
                    </h2>
                  </div>
                </div>
              </section>
            </a>
          );
        })}
      </main>
    </>
  );
};

export default IndustriesSection;
