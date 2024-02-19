import React from "react";

import FullLogo from "../helpers/FullLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__up">
          <div className="">
            <FullLogo />
          </div>
          {/* <div></div>
            <div></div> */}
        </section>
        <section className="footer__down">
          &copy; eatinghealthy.com | All right reserved | {currentYear}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
