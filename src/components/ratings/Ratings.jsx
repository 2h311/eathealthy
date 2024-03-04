import React from "react";
import Rating from "./Rating";

const Ratings = () => {
  const fillerText = [
    { number: "300", text: "clients", htmlCharChode: "43" },
    { number: "90", text: "service guarantee", htmlCharChode: "37" },
    { number: "10", text: "dieticians", htmlCharChode: "43" },
  ];
  return (
    <section className="ratings">
      <div className="ratings__inner">
        {fillerText.map((fillerItem, index) => (
          <Rating key={index} {...fillerItem} />
        ))}
      </div>
    </section>
  );
};

export default Ratings;
