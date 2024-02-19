import React from "react";

import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const FooterSocialHandles = () => {
  return (
    <>
      <span className="footer__social">
        <FaFacebook />
      </span>
      <span className="footer__social">
        <FaTwitterSquare />
      </span>
      <span className="footer__social">
        <FaInstagramSquare />
      </span>
    </>
  );
};

export default FooterSocialHandles;
