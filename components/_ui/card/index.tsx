import React, { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

function Card({ children }: PropsWithChildren<{}>) {
  return <li className={styles.container}>{children}</li>;
}

export default Card;
