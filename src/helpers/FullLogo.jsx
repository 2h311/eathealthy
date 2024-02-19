import React from "react";
import LogoSVG from "./Logo";

const FullLogo = () => {
  return (
    <div className="logo">
      <span className="logo__svg">
        <LogoSVG />
      </span>
      <span className="logo__text">EatHealthy.com</span>
    </div>
  );
};

export default FullLogo;
