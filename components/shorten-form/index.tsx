import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { shortenUrl } from "../../app/urlSlice";
import Button from "../_ui/button";
import styles from "./ShortenForm.module.scss";

const schema = yup.object().shape({
  url: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Please add a link"
    )
    .required("Please add a link"),
});

function ShortenForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    const url = data.url;

    if (url) {
      dispatch(shortenUrl(url));
      reset();
      setSuccess(true);
    }
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          name="url"
          ref={register}
        />
        <Button type="submit">Shorten it!</Button>
      </form>
      <small className={styles.error}>{errors.url?.message}</small>
      <small className={styles.success}>{success && "successfully sent"}</small>
    </section>
  );
}

export default ShortenForm;
