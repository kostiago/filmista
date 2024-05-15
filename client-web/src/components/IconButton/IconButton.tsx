import React from "react";
import styles from "./iconButton.module.scss";
import PropTypes from "prop-types";

interface ButtonProps {
  className?: string;
  rounded: boolean;
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "login"
    | "addUser"
    | "close"
    | "icon"; // New variant for icon-only button
  icon?: React.ReactNode;
  color?: string;
}

const IconButton: React.FC<ButtonProps> = ({
  className,
  rounded,
  children,
  variant,
  icon,
  color,
  ...props
}) => (
  <button
    className={`${styles.btn} ${className} 
            ${variant === "primary" ? styles.primary : ""}
            ${variant === "secondary" ? styles.secondary : ""}
            ${variant === "success" ? styles.success : ""}
            ${variant === "danger" ? styles.danger : ""}
            ${variant === "warning" ? styles.warning : ""}
            ${variant === "info" ? styles.info : ""}
            ${variant === "light" ? styles.light : ""}
            ${variant === "dark" ? styles.dark : ""}
            ${variant === "close" ? styles.close : ""}
            ${variant === "login" ? styles.login : ""}
            ${variant === "addUser" ? styles.addUser : ""}
            ${
              variant === "icon" ? styles.icon : ""
            } // Styling for icon-only variant
            ${rounded ? styles.rounded : ""}
            ${color ? styles.customColor : ""}`}
    {...props}
    style={{ color: color }}
  >
    {variant === "icon" && icon ? (
      <span className={styles.icon}>{icon}</span> // Only render icon if variant is "icon" and icon is provided
    ) : (
      children
    )}
  </button>
);

IconButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  rounded: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "login",
    "addUser",
    "icon",
  ]),
  icon: PropTypes.node,
  color: PropTypes.string,
};

export default IconButton;
