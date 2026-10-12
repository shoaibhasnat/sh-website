import React, { forwardRef } from "react";
import styles from "./job-card.module.css";
import Button from "../../../../ui/button/Button";
import { BriefcaseBusiness, CircleDollarSign, MapPin } from "lucide-react";
import Divider from "@mui/material/Divider";

const JobCard = forwardRef(({ job, onView }, ref) => {
  return (
    <div ref={ref} className={`${styles.card} bgGlassWGlow`}>
      <div className={styles.info}>
        <div className={styles.infoText}>
          <h6 className={styles.title}>{job.title}</h6>
          <Divider />
          <p className={`description ${styles.description}`}>
            {job.description}
          </p>

          <p className={styles.tags}>
            <span className={`${styles.tag} bgGlassWOGlow`}>
              <BriefcaseBusiness size={18} />
              {job.employmentType}
            </span>
            <span>|</span>
            <span className={`${styles.tag} bgGlassWOGlow`}>
              <MapPin size={18} />
              {job.jobType}
            </span>
          </p>
        </div>

        <Button
          ariaLabel={"View Job"}
          onClick={() => onView(job)}
          className={styles.viewBtn}
        >
          View Job →
        </Button>
      </div>
    </div>
  );
});

JobCard.displayName = "JobCard";
export default JobCard;
