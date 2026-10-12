// PageSectionsWrapper.jsx
// Generic wrapper to render page sections in normal document flow.
// It intentionally does not create Lenis instances or flex/gap layouts.
// Each section owns its own refs, GSAP setup, cleanup, and lazy boundary.

import React from "react";
import ScrollSection from "../../../utils/gsap/ScrollSection";

const PageSectionsWrapper = ({ sections, parent, extraProps = {} }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
          flexDirection: "column",
          gap: "40px",        position: "relative",
      }}
    >
      {sections.map(({ component: Section, scroll }, index) => {
        if (!Section) return null;

        const content = <Section parent={parent} {...extraProps} />;

        return scroll ? (
          <ScrollSection key={`scroll-section-${index}`}>{content}</ScrollSection>
        ) : (
          <React.Fragment key={`section-${index}`}>{content}</React.Fragment>
        );
      })}
    </div>
  );
};

export default PageSectionsWrapper;
