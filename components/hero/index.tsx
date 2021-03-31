import React from "react";
import GetStartedButton from "../get-started-button/";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.container}>
      <header>
        <h2>More than just shorter links</h2>
        <p >
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <GetStartedButton />
      </header>
    </section>
  );
}

export default Hero;
