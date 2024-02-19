import React, { Fragment } from "react";

import FooterLinks from "./FooterLinks";
import FooterSocialHandles from "./FooterSocialHandles";

import FullLogo from "../../helpers/FullLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__up">
          <div className="footer__div footer__div--1">
            <FullLogo />
            <div className="footer__primary-goal">
              Our primary goal is to give individuals with a variety of tools
              and means via which they may obtain sufficient nutrients from
              their meals, therefore encouraging them to live a healthy
              lifestyle.
            </div>
            <div className="footer__socials">
              <FooterSocialHandles />
            </div>
          </div>
          <div className="footer__div footer__div--2">
            <h3>The Company</h3>
            <FooterLinks />
          </div>
          <div className="footer__div footer__div--3">
            <h3>Newsletter</h3>
            <small className="footer__small">
              Get real time updates from us
            </small>
            <div className="footer__newsletter">
              <input
                className="footer__newsletter-email"
                type="text"
                placeholder="Please Enter Your Valid Email address"
                name=""
                id=""
              />
              <input
                className="footer__newsletter-subscribe"
                type="button"
                value="Subscribe"
              />
            </div>
          </div>
        </section>
        <section className="footer__down">
          &copy; eathealthy.com &#124; All rights reserved &#124; {currentYear}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
