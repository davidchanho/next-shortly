import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { urlsSelector } from "../../app/urlSlice";
import styles from "./Links.module.scss";

function Links() {
  const { urls, loading } = useSelector(urlsSelector);

  const renderLinks = () => {
    if (loading) {
      return <Skeleton style={{ fontSize: 20, lineHeight: 2, marginBottom: 5 }} count={5} />;
    }

    return (
      <ul>
        {urls.map((url) => (
          <li key={`shorten-${url._id}`}>
            <div>{url.old}</div>
            <section>
              <div>{url.new}</div>
              <button>copy</button>
            </section>
          </li>
        ))}
      </ul>
    );
  };

  return <section className={styles.list}>{renderLinks()}</section>;
}

export default Links;
