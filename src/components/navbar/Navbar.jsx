import React from "react";

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
            <input
              type="button"
              className="navbar__button navbar__button--login"
              value="Login"
            />
            <input
              type="button"
              className="navbar__button navbar__button--register"
              value="Register"
            />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
