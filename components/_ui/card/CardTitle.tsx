import React, { PropsWithChildren } from "react";

function CardTitle({ children }: PropsWithChildren<{}>) {
  return <h2>{children}</h2>;
}

export default CardTitle;
