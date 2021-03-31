import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image src="/svg/logo.svg" alt="shortly logo" width={30} height={30} />
  );
}

export default Logo;
