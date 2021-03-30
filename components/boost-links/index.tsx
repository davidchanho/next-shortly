import React from "react";
import GetStartedButton from "../get-started-button";
import styles from "./BoostLinks.module.scss";

function BoostLinks() {
  return (
    <section className={styles.container}>
      <h1>Boost your links today</h1>
      <GetStartedButton />
    </section>
  );
}

export default BoostLinks;
