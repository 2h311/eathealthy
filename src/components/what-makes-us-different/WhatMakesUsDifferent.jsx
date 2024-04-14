import React from "react";

import { LeftSVG, RightSVG } from "../../assets/svgs/sendmessagesvg";

const WhatMakesUsDifferent = () => {
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
          <h3 className="send__heading">
            Heres what makes us different from conventional food blogs
          </h3>
        </div>
        <div className="send__div send__div--2">
          <p className="send__text">
            We believe in diet and our team to take care of your health
            problems. We guarantee you will get the best service that you have
            never experienced before
          </p>
          {/* <span className="send__link">Send a message now</span> */}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
