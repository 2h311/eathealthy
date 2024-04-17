import React from "react";
import { LeftSVG, RightSVG } from "../../assets/svgs/sendmessagesvg";

const LeftRrightSVG = ({ children }) => {
  return (
    <section className="send">
      <span className="send-left-svg">
        <LeftSVG />
      </span>
      <span className="send-right-svg">
        <RightSVG />
      </span>
      {children}
    </section>
  );
};

export default LeftRrightSVG;
