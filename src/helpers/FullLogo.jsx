import React from "react";

import LogoSVG from "./Logo";

const FullLogo = ({ isFooter }) => {
  const classNameToShow = `${isFooter ? "logo logo--extra" : "logo"}`;

  return (
    <div className={classNameToShow}>
      <span className="logo__svg">
        <LogoSVG />
      </span>
      <span className="logo__text">EatHealthy</span>
    </div>
  );
};

export default FullLogo;
