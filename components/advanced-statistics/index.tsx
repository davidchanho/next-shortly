import React from "react";
import Card from "../_ui/card";
import CardBody from "../_ui/card/CardBody";
import CardTitle from "../_ui/card/CardTitle";
import styles from "./AdvancedStatistics.module.scss";

const items = [
  {
    id: "i-1",
    title: "Brand Recognition",
    body:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: "i-2",
    title: "Detailed Records",
    body:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: "i-3",
    title: "Fully Customizable",
    body:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

function AdvancedStatistics() {
  return (
    <section className={styles.container}>
      <header>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>

      <ul>
        {items.map(({ id, title, body }) => (
          <Card key={id}>
            <CardTitle>{title}</CardTitle>
            <CardBody>{body}</CardBody>
          </Card>
        ))}
      </ul>
    </section>
  );
}

export default AdvancedStatistics;
