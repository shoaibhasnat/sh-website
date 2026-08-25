"use client";

import { useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import { ContactData } from "@/data/pages/contact/ContactData";
import { colors } from "@/app/variables";
import styles from "./contact-form.module.css";

export default function ContactForm() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { form: formData, formSection } = ContactData;

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
        <p className={styles.successEyebrow}>REQUEST RECEIVED</p>
        <h3 className={styles.successHeading}>{formSection.success.heading}</h3>
        <p className={styles.successDescription}>
          {formSection.success.description}
        </p>
        <Button
          type="default"
          className={styles.resetButton}
          onClick={() => {
            setSuccess(false);
            setError("");
          }}
        >
          Send another request
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
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "First name is required." }]}
            >
              <Input placeholder="Jane" size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Last name is required." }]}
            >
              <Input placeholder="Doe" size="large" />
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
          label="What Can We Help With?"
          name="helpWith"
          rules={[
            {
              required: true,
              type: "array",
              min: 1,
              message: "Select at least one option.",
            },
          ]}
        >
          <Checkbox.Group className={styles.checkboxGroup}>
            {formData.helpOptions.map((option) => (
              <Checkbox key={option} value={option} className={styles.checkbox}>
                {option}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Form.Item>
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
            rows={5}
            placeholder={formData.problemPlaceholder}
            size="large"
          />
        </Form.Item>
      </div>

      <div className={styles.group}>
        <Form.Item label="Budget (optional)" name="budget">
          <Select
            allowClear
            placeholder="Select a budget range"
            size="large"
            options={formData.budgets.map((value) => ({
              value,
              label: value,
            }))}
          />
        </Form.Item>
      </div>

      <Button
        type="primary"
        htmlType="submit"
        size="large"
        loading={submitting}
        disabled={submitting}
        className={styles.submit}
        style={{ background: colors.primary, borderColor: colors.primary }}
      >
        {formData.submitLabel}
      </Button>
    </Form>
  );
}
