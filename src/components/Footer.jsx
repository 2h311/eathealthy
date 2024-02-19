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
              <span className="footer__links-span">
                <li className="footer__links-list">Home</li>
                <li className="footer__links-list">Contact us</li>
                <li className="footer__links-list">About us</li> <br />
              </span>
              <span className="footer__links-span">
                <li className="footer__links-list">Blog</li>
                <li className="footer__links-list">Forum</li>
                <li className="footer__links-list">Products</li>
              </span>
            </ul>
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
