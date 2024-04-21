import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ContactBody, ContactJumbotron } from "../contact/ContactInit";

const Contact = () => {
  return (
    <section className="contact">
      <Navbar />
      <ContactJumbotron>
        <p className="gloock-regular contact-jumbotron__text">
          We care wherever you need it
        </p>
      </ContactJumbotron>
      <ContactBody />
      <Footer />
    </section>
  );
};

export default Contact;
