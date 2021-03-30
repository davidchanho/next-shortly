import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

function Card({ children }: PropsWithChildren<{}>) {
  return <li className={styles.container}>{children}</li>;
}

export default Card;
