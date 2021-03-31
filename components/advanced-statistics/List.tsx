import React from "react";
import styles from "./AdvancedStatistics.module.scss";
import Item from "./Item";

const items = [
  {
    id: "i-1",
    title: "Brand Recognition",
    body:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    icon: "/svg/icon-brand-recognition.svg",
  },
  {
    id: "i-2",
    title: "Detailed Records",
    body:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: "/svg/icon-detailed-records.svg",
  },
  {
    id: "i-3",
    title: "Fully Customizable",
    body:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: "/svg/icon-fully-customizable.svg",
  },
];

function List() {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default List;
