import { Container } from "@mui/material";
import { Temp1 } from "./Temp1";
import { Temp2 } from "./Temp2";
import { PortfolioData } from "../../../../data/pages/portfolio/PortfolioData";
import styles from "./projects-section.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../ui/button/Button";
import { ArrowRight } from "lucide-react";

const PROJECT_LAYOUT_ORDER = [
  1, 2, 4, 3, 5, 6, 7, 8, 12, 9, 11, 10, 13, 14, 15, 16, 17, 18, 19, 20,
];

const getOrderedProjects = (projects = []) => {
  const projectMap = new Map(projects.map((project) => [project.id, project]));
  const orderedProjects = PROJECT_LAYOUT_ORDER.map((id) =>
    projectMap.get(id),
  ).filter(Boolean);
  const orderedIds = new Set(orderedProjects.map((project) => project.id));
  const remainingProjects = projects.filter(
    (project) => !orderedIds.has(project.id),
  );

  return [...orderedProjects, ...remainingProjects];
};

const buildProjectRows = (projects = []) => {
  const rows = [];
  let cursor = 0;
  let rowIndex = 0;

  while (cursor < projects.length) {
    if (rowIndex % 2 === 0) {
      rows.push({ type: "single", ids: [projects[cursor].id] });
      cursor += 1;
    } else {
      rows.push({
        type: "double",
        ids: [projects[cursor]?.id, projects[cursor + 1]?.id].filter(Boolean),
      });
      cursor += 2;
    }

    rowIndex += 1;
  }

  return rows;
};

/**
 * ProjectsSection Component
 * -------------------------
 * Renders case-study projects with the same Temp1/Temp2 visual structure.
 * Public page shows private=false projects.
 * Private portfolio page shows private=true projects only.
 */
const ProjectsSection = ({ private: isPrivate = false }) => {
  const navigate = useNavigate();
  const allProjects = Array.isArray(PortfolioData?.projectsSection)
    ? PortfolioData.projectsSection
    : [];

  const { pathname } = useLocation();

  const isPrivatePortfolioPath =
    pathname.replace(/\/$/, "") === "/private-portfolio";

  const orderedProjects = getOrderedProjects(allProjects);

  const projects = isPrivatePortfolioPath
    ? orderedProjects
    : orderedProjects.filter(
        (project) => Boolean(project.private) === Boolean(isPrivate),
      );

  const rows = buildProjectRows(projects);

  return (
    <Container maxWidth="xl">
      <div className={styles.projectsWrapper}>
        {rows.length > 0 ? (
          <>
            {rows.map((row, index) => {
              if (row.type === "single") {
                return (
                  <Temp1 key={`${row.type}-${row.ids[0]}`} id={row.ids[0]} />
                );
              }

              return (
                <Temp2
                  key={`${row.type}-${row.ids.join("-")}`}
                  id1={row.ids[0]}
                  id2={row.ids[1]}
                  direction="rtl"
                />
              );
            })}{" "}
            {!isPrivatePortfolioPath && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  width="380px"
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                  onClick={() => navigate("/private-portfolio")}
                >
                  Explore Our Project Directory <ArrowRight />
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className={`${styles.emptyState} bgGlassWGlow`}>
            <h4>
              {isPrivate ? "No private projects yet" : "No case studies found"}
            </h4>
            <p className="description">
              {isPrivate
                ? "Set private: true on any project inside PortfolioData to show it here."
                : "Add case studies in PortfolioData to show them here."}
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProjectsSection;
