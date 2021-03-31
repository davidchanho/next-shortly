import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { shortenUrl } from "../../app/urlSlice";
import isURL from "../../helpers/isURL";
import styles from "./ShortenForm.module.scss";

function ShortenForm() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isURL(url)) {
      dispatch(shortenUrl(url));
    }
  };

  return (
    <section className={styles.container}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={url}
          onChange={onChange}
          placeholder="Shorten a link here..."
        />
        <button type="submit">Shorten it!</button>
      </form>
    </section>
  );
}

export default ShortenForm;
