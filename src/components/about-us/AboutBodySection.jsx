import React from "react";
import ContactBodyJumbotron from "../contact/ContactJumbotron";
import AboutSectionDoctors from "../../assets/images/about-us-doctors.jpg";

const AboutBodySection = () => {
  return (
    <section className="about">
      <ContactBodyJumbotron>
        <h1 className="gloock-regular about-jumbotron__text">
          <span>Providing the best modern</span>
          <span>diets for human health</span>
        </h1>
      </ContactBodyJumbotron>

      <div className="about__welcome">
        <div className="about__welcome-inner">
          <div className="about__welcome-up">
            <h2 className="about__welcome-h2">Welcome! Share our vision</h2>
          </div>
          <div className="about__welcome-down">
            <img
              className="about__welcome-image"
              src={AboutSectionDoctors}
              alt="3 doctors standing akimbo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBodySection;
