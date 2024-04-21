import React from "react";
import ContactBodyJumbotron from "../contact/ContactJumbotron";

const AboutBodySection = () => {
  return (
    <section className="about">
      <ContactBodyJumbotron>
        <p className="gloock-regular about-jumbotron__text">
          <span>Providing the best modern</span>
          <span>diets for human health</span>
        </p>
      </ContactBodyJumbotron>

      <div></div>
    </section>
  );
};

export default AboutBodySection;
