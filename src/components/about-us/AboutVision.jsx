import React from "react";
import MotherDaughterImage from "../../assets/images/pexels-cottonbro-3992137.jpg";

const AboutVision = () => {
  return (
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
            As a center, we provide individuals with the opportunity to consult
            with a professional nutrionist who can advise them on diets that are
            beneficial to their health. We also sell books, some of which may
            contain information on health and nutrition. Our primary goal is to
            give individuals with a variety of tools and means via which they
            may obtain sufficient nutrients from their meals, therefore
            encouraging them to live a healthy lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
