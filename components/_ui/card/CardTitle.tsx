import React, { PropsWithChildren } from "react";

function CardTitle({ children }: PropsWithChildren<{}>) {
  return <h3>{children}</h3>;
}

export default CardTitle;
