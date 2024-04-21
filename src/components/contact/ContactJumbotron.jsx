import React from "react";
import {
  ContactLeftSVG,
  ContactRightSVG,
} from "../../assets/svgs/contact-us-svgs";

const ContactJumbotron = ({ children }) => {
  return (
    <section className="contact-jumbotron">
      <span className="contact-jumbotron__left">
        <ContactLeftSVG />
      </span>
      <span className="contact-jumbotron__right">
        <ContactRightSVG />
      </span>
      {children}
    </section>
  );
};

export default ContactJumbotron;
