"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { NavbarData } from "@/data/components/navbar/NavbarData";
import { colors } from "@/app/variables";
import styles from "./navbar.module.css";

function isActivePath(pathname, href) {
  const current = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";

  if (target === "/") {
    return current === "/";
  }

  return current === target || current.startsWith(`${target}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { brand, navItems, cta } = NavbarData;

  const closeDrawer = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={brand.href} className={styles.brand} aria-label={brand.name}>
          <span className={styles.logoWrap}>
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              width={brand.logo.width}
              height={brand.logo.height}
              priority
              className={styles.logo}
            />
          </span>
          <span className={styles.brandName}>{brand.name}</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map(({ label, href }) => {
              const active = isActivePath(pathname, href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${active ? styles.active : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href={cta.href} className={styles.ctaDesktop}>
            <Button type="primary" className={styles.ctaButton}>
              {cta.label}
            </Button>
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <MenuOutlined aria-hidden />
          </button>
        </div>
      </div>

      <Drawer
        id="mobile-navigation"
        title={
          <div className={styles.drawerTitle}>
            <Image
              src={brand.logo.src}
              alt=""
              width={28}
              height={28}
              className={styles.logo}
            />
            <span>{brand.name}</span>
          </div>
        }
        placement="right"
        open={open}
        onClose={closeDrawer}
        closeIcon={<CloseOutlined aria-label="Close" />}
        className={styles.drawer}
        rootClassName={styles.drawerRoot}
        styles={{
          body: { padding: "8px 20px 28px" },
          header: { borderBottom: `1px solid ${colors.primaryLight}` },
        }}
      >
        <nav aria-label="Mobile">
          <ul className={styles.mobileList}>
            {navItems.map(({ label, href }) => {
              const active = isActivePath(pathname, href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.mobileLink} ${active ? styles.mobileActive : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={closeDrawer}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href={cta.href} className={styles.ctaMobile} onClick={closeDrawer}>
            <Button type="primary" block className={styles.ctaButton}>
              {cta.label}
            </Button>
          </Link>
        </nav>
      </Drawer>
    </header>
  );
}
