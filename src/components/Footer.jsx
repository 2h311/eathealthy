import React from "react";

import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import FullLogo from "../helpers/FullLogo";

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
              <span className="footer__social">
                <FaFacebook />
              </span>
              <span className="footer__social">
                <FaTwitterSquare />
              </span>
              <span className="footer__social">
                <FaInstagramSquare />
              </span>
            </div>
          </div>
          <div className="footer__div footer__div--2">
            <h3>The Company</h3>
            <ul className="footer__links">
              <span></span>
              <span></span>
              <li className="footer__links-list">Home</li>
              <li className="footer__links-list">Contact us</li>
              <li className="footer__links-list">About us</li> <br />
              <li className="footer__links-list">Blog</li>
              <li className="footer__links-list">Forum</li>
              <li className="footer__links-list">Products</li>
            </ul>
          </div>
          <div className="footer__div footer__div--3"></div>
        </section>
        <section className="footer__down">
          &copy; eatinghealthy.com &#124; All rights reserved &#124;{" "}
          {currentYear}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
