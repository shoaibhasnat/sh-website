import React from "react";
import { Dialog, DialogContent, DialogActions, Divider } from "@mui/material";
import styles from "./job-dialog.module.css";
import { BriefcaseBusiness, CircleDollarSign } from "lucide-react";
import Button from "../../../../ui/button/Button";
import { Constants } from "../../../../../utils/global/Constants";

const JobDialog = ({ open, job, onClose }) => {
  if (!job) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      className={styles.dialog}
    >
      <DialogContent dividers className={styles.content}>
        <h4>{job.title}</h4>
        <Divider sx={{ margin: "15px 0px" }} />

        <p>
          <strong>Description:</strong>
        </p>
        <p>{job.description}</p>

        <p>
          <strong>Location:</strong>
        </p>
        <p>{job.location}</p>

        <p>
          <strong>Job Type:</strong>
        </p>
        <p>{job.jobType}</p>

        <p>
          <BriefcaseBusiness size={18} />
          <strong>Employment Type:</strong>
        </p>
        <p>{job.employmentType}</p>

        {/* <p>
          <CircleDollarSign size={18} />
          <strong>Pay Range:</strong>
        </p>
        <p>{job.payRange}</p> */}

        <p>
          <strong>About Us:</strong>
        </p>
        <p>{job.aboutUs}</p>

        <p>
          <strong>Position Summary:</strong>
        </p>
        <p>{job.positionSummary}</p>

        <p>
          <strong>Key Responsibilities:</strong>
        </p>
        <ul>
          {job.keyResponsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {job.qualificationsRequired && (
          <>
            <p>
              <strong>Qualifications Required:</strong>
            </p>
            <ul>
              {job.qualificationsRequired.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {job.qualificationsPreferred && (
          <>
            <p>
              <strong>Qualifications Preferred:</strong>
            </p>
            <ul>
              {job.qualificationsPreferred.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <p>
          <strong>Personal Attributes:</strong>
        </p>
        <p>{job.personalAttributes}</p>

        <p>
          <strong>What We Offer:</strong>
        </p>
        <ul>
          {job.whatWeOffer.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p>
          <strong>Application Instructions:</strong>
        </p>
        <p>{job.applicationInstructions}</p>

        <p>
          <strong>Equal Opportunity:</strong>
        </p>
        <p>{job.equalOpportunityStatement}</p>
        <p>
          <strong style={{ margin: "0px" }}>
            To apply for this job send your resume at:
          </strong>
        </p>
        <p>{Constants?.company?.hrEmail}</p>
      </DialogContent>

      <DialogActions>
        <Button
          ariaLabel={"Close"}
          onClick={onClose}
          width="200px"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobDialog;
