import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";
import { CareersData } from "../../../../data/pages/careers/CareersData";
import { initJobCardsAnimation } from "./CategoriesSectionUtils";
import styles from "./categories-section.module.css";
import JobCard from "./job-card/JobCard";
import JobDialog from "./job-dialog/JobDialog";
import SectionIntro from "../../../ui/section-intro/SectionIntro";

/**
 * CategoriesSection Component
 * ----------------------------
 * Renders the careers categories section with:
 * 1. Section intro (title + description)
 * 2. Category tabs
 * 3. Job cards filtered by category
 * 4. Scroll-based card animation using GSAP
 * 5. Job dialog modal
 */
const CategoriesSection = () => {
  const containerRef = useRef(null); // ref to the container holding all cards
  const cardRefs = useRef([]);       // ref array for all job cards

  const [selectedJob, setSelectedJob] = useState(null); // currently selected job for dialog
  const [openDialog, setOpenDialog] = useState(false);  // controls dialog visibility
  const [activeCategory, setActiveCategory] = useState("All"); // current active category tab

  // Data absence checks
  if (!CareersData?.careers || !CareersData.careers.intro || !Array.isArray(CareersData.careers.categories) || !Array.isArray(CareersData.careers.jobData)) {
    return null;
  }

  const { title, description } = CareersData.careers.intro;
  const categories = CareersData.careers.categories; // list of job categories
  const allJobs = CareersData.careers.jobData;       // all jobs

  // Filter jobs based on selected category
  const filteredJobs =
    activeCategory === "All"
      ? allJobs
      : allJobs.filter((job) => job.category === activeCategory);

  // ----------------------------
  // Prevent body scrolling when job dialog is open
  // ----------------------------
  useEffect(() => {
    if (openDialog) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-lenis-prevent", "true"); // for Lenis scroll
    } else {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-lenis-prevent");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-lenis-prevent");
    };
  }, [openDialog]);

  // Open and close job dialog
  const openJobDialog = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };
  const closeJobDialog = () => {
    setOpenDialog(false);
    setSelectedJob(null);
  };

  // Handle category tab change
  const handleCategoryChange = (_, newCategory) => {
    setActiveCategory(newCategory);
  };

  // ----------------------------
  // Initialize GSAP scroll animations for job cards
  // ----------------------------
  useLayoutEffect(() => {
    const cleanup = initJobCardsAnimation(cardRefs);
    return cleanup;
  }, [filteredJobs]); // re-run animation whenever jobs list changes

  return (
    <div>
      {/* Section Intro (title + description) */}
      <SectionIntro
        title={title}
        description={description}
        titleTag="h1"
        maxWidth="850px"
      />

      {/* Main container for categories and job cards */}
      <Container
        maxWidth="xl"
        ref={containerRef}
        className={styles.container}
        id="careers-categories"
      >
        {/* Category Tabs */}
        <Box sx={{ marginBottom: 4 }} className={styles.tabsWrapper}>
          <Tabs
            value={activeCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              minHeight: 48,
              "& .MuiTabs-flexContainer": {
                justifyContent: "flex-start", // align tabs left
              },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>
        </Box>

        {/* Job Cards */}
        <section className={styles.section}>
          {filteredJobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              onView={openJobDialog}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </section>
      </Container>

      {/* Job Dialog Modal */}
      <JobDialog open={openDialog} job={selectedJob} onClose={closeJobDialog} />
    </div>
  );
};

export default CategoriesSection;
