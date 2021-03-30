import React, { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

function Button({ children, ...rest }: PropsWithChildren<{}>) {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  );
}

export default Button;
