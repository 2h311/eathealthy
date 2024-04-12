import React from "react";
import { Link } from "react-router-dom";

const FooterLinkGroup = ({ links }) => {
  return (
    <span className="footer__links-span">
      {links.map((linkObject, index) => {
        const { href, text } = linkObject;
        return (
          <li key={index} className="footer__links-list">
            <Link className="footer__links-href" to={href}>
              {text}
            </Link>
          </li>
        );
      })}
    </span>
  );
};

export default FooterLinkGroup;
