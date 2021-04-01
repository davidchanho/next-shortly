import React from "react";
import Card from "../_ui/card";
import CardBody from "../_ui/card/CardBody";
import CardTitle from "../_ui/card/CardTitle";

function Item({ icon, title, body }) {
  return (
    <Card>
      <img src={icon} alt="shortly logo" width={30} height={30} />
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
    </Card>
  );
}

export default Item;
