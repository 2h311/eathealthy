import React from "react";

import Navbar from "./navbar/Navbar";

const Hero = () => {
  return (
    <section className="home">
      <Navbar />
      <div className="home__container">
        <div className="home__text">
          <h1 className="home__header gloock-regular ">
            We balance <br /> your diet
          </h1>
          <span className="home__small">
            Increase your knowledge by reading new things and we will share
            whatever we know for you, as long as you enjoy it
          </span>
          <button className="home__button">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
