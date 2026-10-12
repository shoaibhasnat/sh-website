import React from "react";
import AppLink from "../../app-link/AppLink";

export const NavLinks = ({
  items = [],
  isLinkActive,
  onNavigate,
  activeClassName = "",
}) => {
  return items.map(({ label, href }) => (
    <li key={label}>
      <AppLink
        href={href}
        onClick={() => onNavigate(href)}
        className={isLinkActive(href) ? activeClassName : ""}
      >
        {label}
      </AppLink>
    </li>
  ));
};
