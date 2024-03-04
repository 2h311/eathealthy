import React from "react";

import Rating from "./Rating";
import { ratingTextContent } from "../../assets/data/data";

const Ratings = () => {
  return (
    <section className="ratings">
      <div className="ratings__inner">
        {ratingTextContent.map((fillerItem, index) => (
          <Rating key={index} {...fillerItem} />
        ))}
      </div>
    </section>
  );
};

export default Ratings;
