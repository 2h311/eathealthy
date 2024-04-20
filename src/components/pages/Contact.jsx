import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ContactBody, ContactJumbotron } from "../contact/ContactInit";

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
