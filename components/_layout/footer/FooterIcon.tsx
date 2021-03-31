import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  src: string;
  alt: string;
}

function FooterIcon({ href, src, alt }: Props) {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} width={30} height={30} />
    </Link>
  );
}

export default FooterIcon;
