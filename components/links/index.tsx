import React from "react";
import LinkList from "./LinkList";
import styles from "./Links.module.scss";

function Links() {
  return (
    <section className={styles.list}>
      <LinkList />
    </section>
  );
}

export default Links;
