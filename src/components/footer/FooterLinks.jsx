import React from "react";

import FooterLinkGroup from "./FooterLinkGroup";
import { navbarLinks as footerLinks } from "../../assets/data/data";

const FooterLinks = () => {
  return (
    <ul className="footer__links">
      <FooterLinkGroup links={footerLinks.slice(0, 3)} />
      <FooterLinkGroup links={footerLinks.slice(3)} />
    </ul>
  );
};

export default FooterLinks;
