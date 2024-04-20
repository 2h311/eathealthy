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
        <div className="contact-form">
          {/* your name input */}
          <div className="">
            <label htmlFor="">
              Your Name<sup>&#10033;</sup>
            </label>
            <input type="text" name="" id="" />
          </div>

          {/* your email input */}
          <div className="">
            <label htmlFor="">
              Your Email<sup>&#10033;</sup>
            </label>
            <input type="email" name="" id="" />
          </div>

          {/* your subject */}
          <div className="">
            <label htmlFor="">Subject</label>
            <input type="text" name="" id="" />
          </div>

          <div className="">
            <label htmlFor="">
              Inquiry Type<sup>&#10033;</sup>
            </label>
            <input type="text" name="" id="" />
          </div>

          <div className="">
            <label htmlFor="">Your Message&#46;&#46;&#46;</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <div className="">
            <input type="button" value="Submit" />
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
