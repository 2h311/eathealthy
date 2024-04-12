import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../assets/data/data";

const NavbarLinks = () => {
  return (
    <Fragment>
      <ul className="navbar__list">
        {navbarLinks.map((navbarLink, index) => (
          <li className="navbar__list-item" key={index}>
            <Link className="navbar__list-href" to={navbarLink.href}>
              {navbarLink.text}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default NavbarLinks;
