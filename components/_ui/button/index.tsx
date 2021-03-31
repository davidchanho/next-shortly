import React, { HTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, className, ...rest }: Props) {
  return (
    <button className={`${styles.container} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
