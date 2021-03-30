import React from "react";
import Logo from "../../_ui/logo";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <a href="/" className={styles.brand}>
        <Logo />
      </a>

      <button className={styles.toggle}>
        <hr />
        <hr />
        <hr />
      </button>

      <ul className={styles.nav}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <div className={styles.space} />

      <ul className={styles.userNav}>
        <li>Login</li>
        <li>Signin</li>
      </ul>
    </header>
  );
}

export default Navbar;
