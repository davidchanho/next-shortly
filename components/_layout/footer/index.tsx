import React from "react";
import Logo from "../../_ui/logo";
import { icons, links } from "./Footer.data";
import styles from "./Footer.module.scss";
import FooterIcon from "./FooterIcon";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <Logo isFooter={true} />
      </div>
      <div className={styles.nav}>
        {links.map((link) => (
          <FooterNav key={link.id} {...link} />
        ))}
      </div>
      <div>
        <ul className={styles.icons}>
          {icons.map((icon) => (
            <FooterIcon key={`footer-icon-${icon.id}`} {...icon} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
