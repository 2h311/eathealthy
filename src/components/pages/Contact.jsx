import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import {
  ContactLeftSVG,
  ContactRightSVG,
} from "../../assets/svgs/contact-us-svgs";

const ContactBody = () => {
  return (
    <section className="contact__main">
      <div className="contact__inner">
        <h1 className="contact__heading">Contact Us Today!</h1>
        <p className="contact__sub-heading">
          We believe in technology and our team to take care of your health
          problems. <br /> We guarantee you will get the best service that you
          have never experienced before.
        </p>
        <div className="form">
          <div className="form__inner">
            {/* your name input */}
            <div className="form__container form__container--50">
              <label className="form__label" htmlFor="your-name">
                Your Name<sup>&#10033;</sup>
              </label>
              <input
                type="text"
                className="form__input"
                name=""
                id="your-name"
              />
            </div>

            {/* your email input */}
            <div className="form__container form__container--50">
              <label className="form__label" htmlFor="your-email">
                Your Email<sup>&#10033;</sup>
              </label>
              <input
                type="email"
                className="form__input"
                name=""
                id="your-email"
              />
            </div>
          </div>

          <div className="form__inner">
            {/* your subject */}
            <div className="form__container form__container--50">
              <label className="form__label" htmlFor="">
                Subject
              </label>
              <input
                type="text"
                className="form__input"
                name=""
                id="your-subject"
              />
            </div>

            <div className="form__container form__container--50">
              <label className="form__label" htmlFor="">
                Inquiry Type<sup>&#10033;</sup>
              </label>
              <input
                type="text"
                className="form__input"
                name=""
                id="your-email"
              />
            </div>
          </div>

          <div className="form__container">
            <label className="form__label" htmlFor="">
              Your Message&#46;&#46;&#46;
            </label>
            <textarea
              name=""
              className="form__textarea"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="">
            <input type="button" className="form__submit" value="Submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactJumbotron = () => {
  return (
    <section className="contact-jumbotron">
      <span className="contact-jumbotron__left">
        <ContactLeftSVG />
      </span>
      <span className="contact-jumbotron__right">
        <ContactRightSVG />
      </span>
      <p className="gloock-regular contact-jumbotron__text">
        We care wherever you need it
      </p>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="contact">
      <Navbar />
      <ContactJumbotron />
      <ContactBody />
      <Footer />
    </section>
  );
};

export default Contact;
