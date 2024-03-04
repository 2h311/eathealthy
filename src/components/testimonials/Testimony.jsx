import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

const Testimony = ({ text, name }) => {
  return (
    <div className="testimony">
      <span className="testimony__quote">
        <BiSolidQuoteLeft />
      </span>
      <p className="testimony__text">{text}</p>
      <small className="testimony__name">&mdash;&nbsp;{name}</small>
    </div>
  );
};

export default Testimony;
