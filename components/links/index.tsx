import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { urlsSelector } from "../../app/urlSlice";
import styles from "./Links.module.scss";

function Links() {
  const { urls, loading } = useSelector(urlsSelector);

  const renderLinks = () => {
    if (loading) {
      return <Skeleton style={{ fontSize: 360 }} count={1} />;
    }

    return (
      <ul>
        {urls.map((url) => (
          <li key={`shorten-${url._id}`}>
            <p>{url.old}</p>
            <section>
              <p>{url.new}</p>
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
