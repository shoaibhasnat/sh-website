"use client";

import { useState } from "react";
import { Alert, Col, Form, Input, Row, Select } from "antd";
import { HomeData } from "@/data/pages/home/HomeData";
import { PrimaryButton } from "@/utils/buttons";
import styles from "./home-contact-form.module.css";

export default function HomeContactForm() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { contact } = HomeData;
  const { form: formData, success: successCopy } = contact;

  const onFinish = async (values) => {
    if (submitting) return;

    setSubmitting(true);
    setError("");

    const payload = {
      name: `${values.firstName || ""} ${values.lastName || ""}`.trim(),
      email: values.email,
      phone: values.phone || "",
      companyName: values.companyName,
      companyWebsite: values.companyWebsite || "",
      industry: values.industry || "",
      companySize: values.companySize || "",
      problem: values.problem,
      service: values.service,
      budget: values.budget || "",
      source: "home",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

      setSuccess(true);
      form.resetFields();
      setSubmitting(false);
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successEyebrow}>Request received</p>
        <h3 className={styles.successHeading}>{successCopy.heading}</h3>
        <p className={styles.successDescription}>{successCopy.description}</p>
        <PrimaryButton
          text="Send another request"
          type="button"
          height={44}
          onClick={() => {
            setSuccess(false);
            setError("");
          }}
        />
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
            <Form.Item label="Phone" name="phone">
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
        <h3 className={styles.groupTitle}>How Can We Help?</h3>
        <Row gutter={[16, 0]}>
          <Col xs={24} md={12}>
            <Form.Item
              label="What Can We Help With?"
              name="service"
              rules={[{ required: true, message: "Please select a service." }]}
            >
              <Select
                placeholder="Select a service"
                size="large"
                options={formData.services.map((value) => ({
                  value,
                  label: value,
                }))}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Budget" name="budget">
              <Select
                allowClear
                placeholder="Select budget range"
                size="large"
                options={formData.budgets.map((value) => ({
                  value,
                  label: value,
                }))}
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
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
                  message:
                    "Please share a bit more detail (at least 20 characters).",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder={formData.problemPlaceholder}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
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
