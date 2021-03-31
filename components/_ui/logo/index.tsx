import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image src="/svg/logo.svg" alt="shortly logo" width={120} height={60} />
  );
}

export default Logo;
