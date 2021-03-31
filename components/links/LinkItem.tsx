import React, { useState } from "react";
import { IUrl } from "../../app/urlSlice";
import Button from "../_ui/button";
import styles from "./Links.module.scss";

function LinkItem(url: IUrl) {
  const [isCopied, setCopied] = useState(false);

  const onCopied = () => {
    setCopied(!isCopied);
  };

  return (
    <li className={styles.linkItem}>
      <p>{url.old}</p>
      <section>
        <p>{url.new}</p>
        <Button className={isCopied ? "" : "copied"} onClick={onCopied}>
          {isCopied ? "copied" : "copy"}
        </Button>
      </section>
    </li>
  );
}

export default LinkItem;
