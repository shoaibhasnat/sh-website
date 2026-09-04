"use client";

import { useState } from "react";
import {
  Alert,
  Col,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import { ContactData } from "@/data/pages/contact/ContactData";
import { PrimaryButton } from "@/utils/buttons";
import styles from "./contact-form.module.css";

const DISCOVERY_CALL_PATH = "/discovery-call";

export default function ContactForm() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { form: formData } = ContactData;

  const onFinish = async (values) => {
    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (!response.ok || !result.ok) {
        setError(
          result.error ||
            result.errors?.[0] ||
            "Something went wrong. Please try again.",
        );
        setSubmitting(false);
        return;
      }

      // Only redirect after the email API has fully succeeded.
      window.location.assign(DISCOVERY_CALL_PATH);
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

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
        <Alert
          type="error"
          showIcon
          message={error}
          className={styles.alert}
        />
      ) : null}

      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Personal Information</h3>
        <Row gutter={[16, 0]}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Name is required." }]}
            >
              <Input placeholder="Jane Doe" size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Business Email"
              name="email"
              rules={[
                { required: true, message: "Business email is required." },
                { type: "email", message: "Enter a valid email address." },
              ]}
            >
              <Input placeholder="jane@company.com" size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Phone Number" name="phone">
              <Input placeholder="+1 555 000 0000" size="large" />
            </Form.Item>
          </Col>
        </Row>
      </div>

      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Company Information</h3>
        <Row gutter={[16, 0]}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[{ required: true, message: "Company name is required." }]}
            >
              <Input placeholder="Acme Inc." size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Company Website" name="companyWebsite">
              <Input placeholder="https://company.com" size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Industry" name="industry">
              <Select
                allowClear
                placeholder="Select industry"
                size="large"
                options={formData.industries.map((value) => ({
                  value,
                  label: value,
                }))}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Company Size" name="companySize">
              <Select
                allowClear
                placeholder="Select company size"
                size="large"
                options={formData.companySizes.map((value) => ({
                  value,
                  label: value,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>
      </div>

      <div className={styles.group}>
        <Form.Item
          label="Tell Us About the Problem"
          name="problem"
          rules={[
            {
              required: true,
              message: "Please describe the problem or opportunity.",
            },
            {
              min: 20,
              message: "Please share a bit more detail (at least 20 characters).",
            },
          ]}
        >
          <Input.TextArea
            rows={3}
            placeholder={formData.problemPlaceholder}
            size="large"
          />
        </Form.Item>
      </div>

      <PrimaryButton
        text={formData.submitLabel}
        type="submit"
        height={48}
        width="100%"
        loading={submitting}
        disabled={submitting}
      />
    </Form>
  );
}
