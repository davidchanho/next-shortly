import Link from "next/link";
import React from "react";

interface ILink {
  id: string;
  href: string;
  title: string;
}

interface Props {
  title: string;
  links: ILink[];
}

function FooterNav({ title, links }: Props) {
  return (
    <nav>
      <p>{title}</p>
      <ul>
        {links?.map(({ id, href, title }) => (
          <Link href={href} key={`footer-link-${id}`}>
            {title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default FooterNav;
