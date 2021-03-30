import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenUrl, urlsSelector } from "../../app/urlSlice";
import styles from "./ShortenForm.module.scss";

function ShortenForm() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const { urls } = useSelector(urlsSelector);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(shortenUrl(url));
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
      <ul>
        {urls.map((url) => (
          <li key={url.id}>{url.new}</li>
        ))}
      </ul>
    </section>
  );
}

export default ShortenForm;
