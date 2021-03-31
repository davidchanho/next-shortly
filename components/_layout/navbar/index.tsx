import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../../app/userSlice";
import Logo from "../../_ui/logo";
import styles from "./Navbar.module.scss";

function Navbar() {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(login());
  };

  const onSignout = () => {
    dispatch(logout());
  };

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

      <section className={styles.collapse}>
        <ul className={styles.nav}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>

        <div className={styles.space} />

        <ul className={styles.userNav}>
          <li onClick={onLogin}>Login</li>
          <li onClick={onSignout}>Signin</li>
        </ul>
      </section>
    </header>
  );
}

export default Navbar;
