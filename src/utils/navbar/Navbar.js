"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { NavbarData } from "@/data/components/navbar/NavbarData";
import { PrimaryButton } from "@/utils/buttons";
import { colors } from "@/app/variables";
import styles from "./navbar.module.css";

/** Smallest scroll movement that counts as a deliberate direction change. */
const SCROLL_DELTA = 5;
/** Keep the bar visible while near the top of the page. */
const REVEAL_ZONE = 80;

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
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);

  const { brand, navItems, cta } = NavbarData;

  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      // Rounded so sub-pixel scroll positions can't land either side of the
      // threshold comparison by accident.
      const y = Math.round(window.scrollY);
      const delta = y - lastYRef.current;

      if (y <= REVEAL_ZONE) {
        lastYRef.current = y;
        setHidden(false);
        return;
      }

      // Leave the anchor untouched for jitter so small movements accumulate
      // until they add up to a deliberate direction change.
      if (delta <= -SCROLL_DELTA) {
        lastYRef.current = y;
        setHidden(false);
      } else if (delta >= SCROLL_DELTA) {
        lastYRef.current = y;
        setHidden(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Never leave the bar hidden behind the mobile drawer or after navigating.
  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  useEffect(() => {
    setHidden(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${hidden ? styles.headerHidden : ""}`}>
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
          <PrimaryButton
            text={cta.label}
            href={cta.href}
            className={styles.ctaDesktop}
            height={40}
          />

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

          <PrimaryButton
            text={cta.label}
            href={cta.href}
            onClick={closeDrawer}
            className={styles.ctaMobile}
            height={40}
            block
          />
        </nav>
      </Drawer>
    </header>
  );
}
