import React from "react";

const FooterLinkGroup = ({ links }) => {
  return (
    <span className="footer__links-span">
      {links.map((linkObject, index) => {
        const { href, text } = linkObject;
        return (
          <li key={index} className="footer__links-list">
            {text}
          </li>
        );
      })}
    </span>
  );
};

export default FooterLinkGroup;
