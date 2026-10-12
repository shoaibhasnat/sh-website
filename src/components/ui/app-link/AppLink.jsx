import { forwardRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PAGE_REVEAL_NAV_DELAY,
  PAGE_REVEAL_START_EVENT,
} from "../page-reveal/PageReveal";

const isModifiedClick = (event) => {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
};

const isInternalHref = (href) => {
  if (!href || typeof href !== "string") return false;
  if (href.startsWith("#")) return false;
  if (href.startsWith("//")) return false;
  if (/^(https?:|mailto:|tel:|sms:)/i.test(href)) return false;
  return href.startsWith("/");
};

const normalizePath = (value = "") => value.replace(/\/$/, "") || "/";

const AppLink = forwardRef(
  (
    {
      href,
      to,
      children,
      onClick,
      target,
      replace = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    const navigate = useNavigate();
    const location = useLocation();
    const destination = to || href || "#";
    const shouldUseRouter = isInternalHref(destination) && !target;

    const handleClick = (event) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      if (!shouldUseRouter) return;
      if (event.button !== 0 || isModifiedClick(event)) return;

      event.preventDefault();

      const currentUrl = `${location.pathname}${location.search}${location.hash}`;
      const isSameDestination = normalizePath(currentUrl) === normalizePath(destination);

      if (isSameDestination) {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } catch {
          window.scrollTo(0, 0);
        }
        return;
      }

      window.dispatchEvent(new CustomEvent(PAGE_REVEAL_START_EVENT));

      window.setTimeout(() => {
        navigate(destination, { replace });
      }, PAGE_REVEAL_NAV_DELAY);
    };

    return (
      <a
        ref={ref}
        href={destination}
        target={target}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  },
);

AppLink.displayName = "AppLink";

export default AppLink;
