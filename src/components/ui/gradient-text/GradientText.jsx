

import styles from "./gradient-text.module.css";

const GradientText = ({
  children,
  variant = "default",
  className = "",
  as: Component = "span",
  ...props
}) => {
  return (
    <Component
      className={`${styles.gradientText} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GradientText;
