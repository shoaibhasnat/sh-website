"use client";

import { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import { CareersData } from "@/data/pages/careers/CareersData";
import { colors } from "@/app/variables";
import styles from "./careers-application-form.module.css";

const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

function isAcceptedResume(file) {
  const name = (file?.name || "").toLowerCase();
  const hasExtension = ACCEPTED_EXTENSIONS.some((ext) => name.endsWith(ext));
  const hasType =
    !file?.type || ACCEPTED_RESUME_TYPES.includes(file.type);
  return hasExtension && hasType;
}

export default function CareersApplicationForm() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { application } = CareersData;

  const onFinish = async (values) => {
    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const resumeFile = values.resume?.[0]?.originFileObj;
      if (!resumeFile) {
        setError("Please attach your resume or CV.");
        return;
      }

      if (!isAcceptedResume(resumeFile)) {
        setError("Resume must be a PDF or Word document (.pdf, .doc, .docx).");
        return;
      }

      if (resumeFile.size > MAX_RESUME_BYTES) {
        setError("Resume must be 5 MB or smaller.");
        return;
      }

      const payload = new FormData();
      payload.append("fullName", values.fullName.trim());
      payload.append("email", values.email.trim());
      payload.append("phone", (values.phone || "").trim());
      payload.append("expertise", values.expertise);
      payload.append("linkedin", (values.linkedin || "").trim());
      payload.append("portfolio", (values.portfolio || "").trim());
      payload.append("introduction", values.introduction.trim());
      payload.append("resume", resumeFile);

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setError(
          result.error ||
            result.errors?.[0] ||
            "Something went wrong. Please try again.",
        );
        return;
      }

      setSuccess(true);
      form.resetFields();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <p className={styles.successEyebrow}>PROFILE RECEIVED</p>
        <h3 className={styles.successHeading}>{application.success.heading}</h3>
        <p className={styles.successDescription}>
          {application.success.description}
        </p>
        <Button
          type="default"
          className={styles.resetButton}
          onClick={() => {
            setSuccess(false);
            setError("");
          }}
        >
          Submit another profile
        </Button>
      </div>
    );
  }

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      onFinish={onFinish}
      className={styles.form}
      disabled={submitting}
    >
      {error ? (
        <Alert type="error" showIcon message={error} className={styles.alert} />
      ) : null}

      <Row gutter={[16, 0]}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Full name is required." }]}
          >
            <Input placeholder="Jane Doe" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required." },
              { type: "email", message: "Enter a valid email address." },
            ]}
          >
            <Input placeholder="jane@email.com" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Phone" name="phone">
            <Input placeholder="+1 555 000 0000" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Area of Expertise"
            name="expertise"
            rules={[
              { required: true, message: "Select an area of expertise." },
            ]}
          >
            <Select
              placeholder="Select an area"
              size="large"
              options={application.expertiseOptions.map((value) => ({
                value,
                label: value,
              }))}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="LinkedIn URL"
            name="linkedin"
            rules={[{ type: "url", message: "Enter a valid URL." }]}
          >
            <Input placeholder="https://linkedin.com/in/..." size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Portfolio / GitHub URL"
            name="portfolio"
            rules={[{ type: "url", message: "Enter a valid URL." }]}
          >
            <Input placeholder="https://github.com/..." size="large" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Short Introduction"
            name="introduction"
            rules={[
              { required: true, message: "Please introduce yourself." },
              {
                min: 40,
                message: "Please share a bit more (at least 40 characters).",
              },
            ]}
          >
            <Input.TextArea
              rows={5}
              placeholder="Tell us about your background, what you enjoy building, and why System Heuristics interests you."
              size="large"
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Resume / CV"
            name="resume"
            valuePropName="fileList"
            getValueFromEvent={(event) => {
              if (Array.isArray(event)) return event;
              return event?.fileList || [];
            }}
            rules={[
              {
                required: true,
                message: "Please attach your resume or CV.",
              },
            ]}
            extra="PDF or Word · max 5 MB"
          >
            <Upload
              beforeUpload={() => false}
              maxCount={1}
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            >
              <Button size="large" className={styles.uploadButton}>
                Upload resume
              </Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>

      <Button
        type="primary"
        htmlType="submit"
        size="large"
        loading={submitting}
        disabled={submitting}
        className={styles.submit}
        style={{ background: colors.primary, borderColor: colors.primary }}
      >
        {application.submitLabel}
      </Button>
    </Form>
  );
}
