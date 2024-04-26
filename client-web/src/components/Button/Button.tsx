import React from "react";
import styles from "./button.module.scss";
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
    | "addUser";
  icon?: React.ReactNode;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
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
        ${variant === "addUser" ? styles.addUser : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${variant === "login" ? styles.login : ""}
        ${rounded ? styles.rounded : ""}
        ${color ? styles.customColor : ""}`}
    {...props}
    style={{ color: color }}
  >
    {icon && <span className={styles.icon}>{icon}</span>}
    {children}
  </button>
);

Button.propTypes = {
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
    "addUser",
    "login",
  ]),
  icon: PropTypes.node,
  color: PropTypes.string,
};

export default Button;
