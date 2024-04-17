import React from "react";

import LeftRrightSVG from "../dry/LeftRrightSVG";

const SendAMessageNow = () => {
  return (
    <LeftRrightSVG>
      <div className="send__inner">
        <div className="send__div send__div--1">
          <p className="send__heading">
            We care for your health, our team of professionals are available to
            assist you with your meal plan.{" "}
          </p>
        </div>
        <div className="send__div">
          <span className="send__link">Send a message now</span>
        </div>
      </div>
    </LeftRrightSVG>
  );
};

export default SendAMessageNow;
