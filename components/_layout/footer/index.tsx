import Image from "next/image";
import React from "react";
import Logo from "../../_ui/logo";
import styles from "./Footer.module.scss";

const navItems = [
  {
    id: "n-1",
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    id: "n-2",
    title: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    id: "n-3",
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

function Footer() {
  return (
    <footer className={styles.container}>
      <Logo />
      <div className={styles.nav}>
        {navItems.map(({ id, title, links }) => (
          <nav key={id}>
            <p>{title}</p>
            <ul>
              {links.map((link, index) => (
                <li key={`footer-link-${index}`}>{link}</li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div>
        <ul className={styles.icons}>
          <li>
            <Image
              src="/svg/icon-facebook.svg"
              alt="go to facebook"
              width={30}
              height={30}
            />
          </li>
          <li>
            <Image
              src="/svg/icon-twitter.svg"
              alt="go to twitter"
              width={30}
              height={30}
            />
          </li>
          <li>
            <Image
              src="/svg/icon-pinterest.svg"
              alt="go to pinterest"
              width={30}
              height={30}
            />
          </li>
          <li>
            <Image
              src="/svg/icon-instagram.svg"
              alt="go to instagram"
              width={30}
              height={30}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
