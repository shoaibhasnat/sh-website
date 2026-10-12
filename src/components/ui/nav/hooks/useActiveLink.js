export const useActiveLink = (location) => {
  return (href) => {
    const currentPath = location.pathname.replace(/\/$/, "");
    return href === "/" ? currentPath === "/" : currentPath.startsWith(href);
  };
};