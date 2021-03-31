import React from "react";
import { IUrl } from "../../app/urlSlice";
import Button from "../_ui/button";
import styles from "./Links.module.scss";

function LinkItem(url: IUrl) {
  return (
    <li className={styles.linkItem}>
      <p>{url.old}</p>
      <section>
        <p>{url.new}</p>
        <Button>copy</Button>
      </section>
    </li>
  );
}

export default LinkItem;
