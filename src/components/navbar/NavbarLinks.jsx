import React, { Fragment } from "react";

import { navbarLinks } from "../../helpers/data";

const NavbarLinks = () => {
  return (
    <Fragment>
      <ul className="navbar__list">
        {navbarLinks.map((navbarLink, index) => (
          <li className="navbar__list-item" key={index}>
            {navbarLink.link}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default NavbarLinks;
