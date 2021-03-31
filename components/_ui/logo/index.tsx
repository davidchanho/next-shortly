import Image from "next/image";
import React from "react";

interface Props {
  isFooter?: boolean;
}

function Logo({ isFooter = false }: Props) {
  return (
    <Image
      src={isFooter ? "/svg/footerlogo.svg" : "/svg/logo.svg"}
      alt="shortly logo"
      width={121}
      height={33}
    />
  );
}

export default Logo;
