"use client";

import { Collapse } from "antd";
import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-faq.module.css";

export default function HomeFaq() {
  const { faq } = HomeData;

  const items = faq.items.map((item, index) => ({
    key: String(index),
    label: item.question,
    children: <p className={styles.answer}>{item.answer}</p>,
  }));

  return (
    <section
      className={`${shared.section} ${shared.sectionLight} ${styles.section}`}
      aria-labelledby="home-faq-heading"
    >
      <div className={shared.inner}>
        <div className={`${shared.header} ${shared.headerCenter}`}>
          <p className={shared.eyebrow}>{faq.eyebrow}</p>
          <h2 id="home-faq-heading" className={shared.heading}>
            {faq.heading}
          </h2>
        </div>

        <div className={styles.panel}>
          <Collapse
            accordion
            bordered={false}
            items={items}
            defaultActiveKey={["0"]}
            className={styles.collapse}
            expandIconPlacement="end"
          />
        </div>
      </div>
    </section>
  );
}
