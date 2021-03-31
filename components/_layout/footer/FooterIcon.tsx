import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

function FooterIcon({ src, alt }: Props) {
  return (
    <li>
      <Image src={src} alt={alt} width={30} height={30} />
    </li>
  );
}

export default FooterIcon;
