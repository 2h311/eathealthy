import React from "react";

import { AboutSectionDoctorsImage } from "../../assets/images/ImagesInit";

const AboutWelcome = () => {
  return (
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
  );
};

export default AboutWelcome;
