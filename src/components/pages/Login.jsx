import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import BalanceYourDietImage from "../../assets/images/balance-your-diet.jpg";

const Login = () => {
  return (
    <section className="login">
      <Navbar />
      <div className="login__inner">
        <div className="login__container">
          <div className="login__left">
            <h2 className="login__heading">Login account</h2>

            <div className="login__div login__div--1">
              <span className="login__input-text">Email</span>
              <input
                type="email"
                className="login__input-widget login__input-widget--email"
                placeholder="josh@gmail.com"
                name=""
                id=""
              />
            </div>

            <div className="login__div login__div--2">
              <span className="login__input-text">Password</span>
              <input
                type="password"
                className="login__input-widget login__input-widget--password"
                placeholder="*******"
                name=""
                id=""
              />
            </div>

            <div className="login__div login__div--3">
              <div>
                <Link className="login__button" to="/login">
                  Login
                </Link>
              </div>
              <div className="login__links">
                <span className="">
                  Don't have an account?{" "}
                  <Link className="login__link" to="/sign-up">
                    Sign Up
                  </Link>
                </span>
                <span>
                  <Link className="login__link" to="/forget">
                    Forget password?
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="login__right">
            <img className="login__image" src={BalanceYourDietImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
