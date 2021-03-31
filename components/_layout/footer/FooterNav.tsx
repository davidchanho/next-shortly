import React from "react";

interface Props {
  title: string;
  links: string[];
}

function FooterNav({ title, links }: Props) {
  return (
    <nav>
      <p>{title}</p>
      <ul>
        {links?.map((link, index) => (
          <li key={`footer-link-${index}`}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterNav;
