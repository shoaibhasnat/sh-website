import React from "react";
import AppLink from "../../app-link/AppLink";

export const MobileNavLinks = ({
  items = [],
  isLinkActive,
  onNavigate,
  onItemClick,
  activeClassName = "",
  itemClassName = "",
}) => {
  return items.map(({ label, href }) => (
    <li key={label} className={itemClassName}>
      <AppLink
        href={href}
        className={isLinkActive(href) ? activeClassName : ""}
        onClick={() => {
          onNavigate(href);
          onItemClick?.();
        }}
      >
        {label}
      </AppLink>
    </li>
  ));
};
