import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

import BalanceYourDietImage from "../../assets/images/balance-your-diet.jpg";

const SignUp = () => {
  return (
    <section className="signup">
      <Navbar />
      <div className="signup__inner">
        <div className="signup__left">
          <h2 className="signup__heading">Create account</h2>
          <div className="signup__div">
            <span className="signup__input-text">Name</span>
            <input
              type="text"
              className="signup__input-widget signup__input-widget--name"
              placeholder="Peter Justin Griffin"
              name=""
              id=""
            />
          </div>

          <div className="signup__div">
            <span className="signup__input-text">Email</span>
            <input
              type="email"
              className="signup__input-widget signup__input-widget--email"
              placeholder="peterjustingriffin@gmail.com"
              name=""
              id=""
            />
          </div>

          <div className="signup__div">
            <span className="signup__input-text">Password</span>
            <input
              type="password"
              className="signup__input-widget signup__input-widget--password"
              placeholder="********"
              name=""
              id=""
            />
          </div>

          <div className="signup__div">
            <span className="signup__input-text">Confirm Password</span>
            <input
              type="password"
              className="signup__input-widget signup__input-widget--password"
              placeholder="********"
              name=""
              id=""
            />
          </div>

          <div className="signup__div signup__div--radio">
            <label htmlFor="user" className="signup__input-text">
              <input type="radio" name="user" id="user" /> I am a User
            </label>
            <label htmlFor="nutrionist" className="signup__input-text">
              <input type="radio" name="user" id="nutrionist" /> I am a
              Nutrionist
            </label>
          </div>

          <div className="signup__div">
            <button className="signup__button">Sign Up</button>

            <div className="login__links">
              <span className="">
                Already have an account?{" "}
                <Link className="login__link" to="/login">
                  Log in here
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="signup__right">
          <img className="signup__image" src={BalanceYourDietImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
