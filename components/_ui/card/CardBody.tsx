import React, { PropsWithChildren } from "react";

function CardBody({ children }: PropsWithChildren<{}>) {
  return <p>{children}</p>;
}

export default CardBody;
