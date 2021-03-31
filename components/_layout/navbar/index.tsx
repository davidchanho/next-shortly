import Link from "next/link";
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
      <Link href="/">
        <a className={styles.brand}>
          <Logo />
        </a>
      </Link>

      <button className={styles.toggle}>
        <hr />
        <hr />
        <hr />
      </button>

      <section className={styles.collapse}>
        <ul className={styles.nav}>
          <li>
            <Link href="features">Features</Link>
          </li>
          <li>
            <Link href="pricing">Pricing</Link>
          </li>
          <li>
            <Link href="resources">Resources</Link>
          </li>
        </ul>

        <div className={styles.space} />

        <ul className={styles.userNav}>
          <li onClick={onLogin}>
            <Link href="login">Login</Link>
          </li>
          <li onClick={onSignout}>
            <Link href="signout">Signout</Link>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Navbar;
