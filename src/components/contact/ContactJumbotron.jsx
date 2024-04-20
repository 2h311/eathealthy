import React from "react";
import {
  ContactLeftSVG,
  ContactRightSVG,
} from "../../assets/svgs/contact-us-svgs";

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

export default ContactJumbotron;
