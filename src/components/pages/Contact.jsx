import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ContactBody, ContactJumbotron } from "../contact/ContactInit";
import useDocumentTitle from "../dry/useDocumentTitle";

const Contact = () => {
  useDocumentTitle("EatHealthy — Contact us Page");
  return (
    <section className="contact">
      <Navbar />
      <ContactJumbotron>
        <h1 className="gloock-regular contact-jumbotron__text">
          We care wherever you need it
        </h1>
      </ContactJumbotron>
      <ContactBody />
      <Footer />
    </section>
  );
};

export default Contact;
