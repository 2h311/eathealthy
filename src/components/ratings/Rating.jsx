import React from "react";

const Rating = ({ number, text, htmlCharChode }) => {
  return (
    <div className="ratings__container">
      <span className="ratings__number">
        {number}
        {String.fromCharCode(htmlCharChode)}
      </span>
      <span className="ratings__text">{text}</span>
    </div>
  );
};

export default Rating;
