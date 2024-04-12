import React from "react";
import Navbar from "../navbar/Navbar";

import BalanceYourDietImage from "../../assets/images/balance-your-diet.jpg";

const SignUp = () => {
  return (
    <section className="signup">
      <Navbar />
      <div className="signup__inner">
        <div className="signup__left">signup</div>
        <div className="signup__right">
          <img className="signup__image" src={BalanceYourDietImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
