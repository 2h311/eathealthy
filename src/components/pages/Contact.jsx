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
