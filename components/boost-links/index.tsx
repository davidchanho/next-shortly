import React from "react";
import GetStartedButton from "../get-started-button/";
import styles from "./BoostLinks.module.scss";

function BoostLinks() {
  return (
    <section className={styles.container}>
      <h2>Boost your links today</h2>
      <GetStartedButton />
    </section>
  );
}

export default BoostLinks;
