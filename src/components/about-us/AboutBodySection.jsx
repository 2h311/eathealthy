import React from "react";
import ContactBodyJumbotron from "../contact/ContactJumbotron";
import AboutSectionDoctorsImage from "../../assets/images/about-us-doctors.jpg";
import MotherDaughterImage from "../../assets/images/pexels-cottonbro-3992137.jpg";

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
            <h2 className="about__welcome-h2">
              <span className="about__welcome-you">YOU</span>{" "}
              <span>welcome to share in our vision</span>
            </h2>
          </div>
          <div className="about__welcome-down">
            <img
              className="about__welcome-image"
              src={AboutSectionDoctorsImage}
              alt="3 doctors standing akimbo"
            />
          </div>
        </div>
      </div>

      <div className="about__vision">
        <div className="about__vision-inner">
          <div className="about__vision-left">
            <img
              className="about__vision-image"
              src={MotherDaughterImage}
              alt="a mother and her daughter laughing"
            />
          </div>
          <div className="about__vision-right">
            <h2 className="about__vision-h2">Our Vision</h2>
            <p className="about__vision-text">
              As a center, we provide individuals with the opportunity to
              consult with a professional nutrionist who can advise them on
              diets that are beneficial to their health. We also sell books,
              some of which may contain information on health and nutrition. Our
              primary goal is to give individuals with a variety of tools and
              means via which they may obtain sufficient nutrients from their
              meals, therefore encouraging them to live a healthy lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div className="team">
        <div className="team__inner">
          <div className="team__up">
            <h2 className="team__h2">Meet the Team</h2>
          </div>
          <div className="team__down">
            <div className="team-member">
              <img src="" alt="Peter Justin" />
              <p>Peter Justin</p>
              <small>CEO</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBodySection;
