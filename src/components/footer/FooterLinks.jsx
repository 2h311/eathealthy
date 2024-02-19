import React from "react";

import FooterLinkGroup from "./FooterLinkGroup";
import { footerlinks } from "../../helpers/data";

const FooterLinks = () => {
  return (
    <ul className="footer__links">
      <FooterLinkGroup links={footerlinks.slice(0, 3)} />
      <FooterLinkGroup links={footerlinks.slice(3)} />
    </ul>
  );
};

export default FooterLinks;
