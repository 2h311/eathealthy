import React from "react";

const Gist = () => {
  return (
    <section className="gist">
      <div className="gist__container">
        <div className="gist__part gist__part--1">
          <span className="gist__heading">A little gist about what we do</span>
        </div>
        <div className="gist__part gist__part--2">
          <span className="gist__small gist__small">
            As a center, we provide individuals with the opportunity to consult
            with a professional nutritionist who can advise them on diets that
            are beneficial to their health. We also sell books, some of which
            may contain information on health and nutrition. Our primary goal is
            to give individuals with a variety of tools and means via which they
            may obtain sufficient nutrients from their meals, therefore
            encouraging them to live a healthy lifestyle.
          </span>
          <span className="gist__small gist__small--2">Care to read more?</span>
        </div>
      </div>
    </section>
  );
};

export default Gist;
