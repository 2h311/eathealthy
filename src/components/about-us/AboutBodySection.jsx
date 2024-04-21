import React from "react";

import ContactBodyJumbotron from "../contact/ContactJumbotron";
import Teams from "./Teams";
import AboutVision from "./AboutVision";
import AboutWelcome from "./AboutWelcome";

const AboutBodySection = () => {
  return (
    <section className="about">
      <ContactBodyJumbotron>
        <h1 className="gloock-regular about-jumbotron__text">
          <span>Providing the best modern</span>
          <span>diets for human health</span>
        </h1>
      </ContactBodyJumbotron>
      <AboutWelcome />
      <AboutVision />
      <Teams />
    </section>
  );
};

export default AboutBodySection;
