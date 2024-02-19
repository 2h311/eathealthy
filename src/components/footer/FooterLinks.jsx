import React from "react";

import FooterLinkGroup from "./FooterLinkGroup";

const FooterLinks = () => {
  return (
    <ul className="footer__links">
      <FooterLinkGroup
        links={[
          { href: "", text: "home" },
          { href: "", text: "contact us" },
          { href: "", text: "about us" },
        ]}
      />
      <FooterLinkGroup
        links={[
          { href: "", text: "blog" },
          { href: "", text: "forum" },
          { href: "", text: "products" },
        ]}
      />
    </ul>
  );
};

export default FooterLinks;
