import React from "react";

import { LeftSVG, RightSVG } from "../../assets/svgs/sendmessagesvg";

const SendAMessageNow = () => {
  return (
    <section className="send">
      <span className="send-left-svg">
        <LeftSVG />
      </span>
      <span className="send-right-svg">
        <RightSVG />
      </span>
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
    </section>
  );
};

export default SendAMessageNow;
