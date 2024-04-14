import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ContactBody = () => {
  return <div className="contact__inner">contact</div>;
};

const Contact = () => {
  return (
    <section className="contact">
      <Navbar />
      <ContactBody />
      <Footer />
    </section>
  );
};

export default Contact;
