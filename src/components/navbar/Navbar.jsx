import React from "react";
import { Link } from "react-router-dom";

import FullLogo from "../logo/FullLogo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="navbar__container">
        <div className="navbar__part navbar__part--1">
          <FullLogo />
        </div>

        <div className="navbar__part navbar__part--2">
          <NavbarLinks />
        </div>

        <div className="navbar__part navbar__part--3">
          <div className="navbar__buttons">
            <Link className="navbar__button navbar__button--login" to="/login">
              Login
            </Link>
            <Link
              className="navbar__button navbar__button--register"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
