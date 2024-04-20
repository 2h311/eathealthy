import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import LeftRrightSVG from "../dry/LeftRrightSVG";

const ContactBody = () => {
  return (
    <div className="contact__inner">
      <h1>Contact Us Today!</h1>
      <p>
        We believe in technology and our team to take care of your health
        problems. We guarantee you will get the best service that you have never
        experienced before.
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="contact">
      <Navbar />
      <LeftRrightSVG>
        <p className="gloock-regular contact__jumbotron-text">
          We care wherever you need it
        </p>
      </LeftRrightSVG>
      <ContactBody />
      <Footer />
    </section>
  );
};

export default Contact;
