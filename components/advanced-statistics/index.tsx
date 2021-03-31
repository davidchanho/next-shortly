import React from "react";
import styles from "./AdvancedStatistics.module.scss";
import Header from "./Header";
import List from "./List";

function AdvancedStatistics() {
  return (
    <section className={styles.container}>
      <Header />
      <List />
    </section>
  );
}

export default AdvancedStatistics;
