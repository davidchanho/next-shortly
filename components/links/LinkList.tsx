import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { urlsSelector } from "../../app/urlSlice";
import ListItem from "./LinkItem";
import styles from "./Links.module.scss";

function LinkList() {
  const { urls, loading } = useSelector(urlsSelector);

  if (loading) {
    return <Skeleton style={{ fontSize: 360 }} count={1} />;
  }

  return (
    <ul className={styles.linkList}>
      {urls.map((url) => (
        <ListItem key={url._id} {...url} />
      ))}
    </ul>
  );
}

export default LinkList;
