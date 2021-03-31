import React from "react";
import GetStartedButton from "../get-started-button/";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.container}>
      <header>
        <h1>More than just shorter links</h1>
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
