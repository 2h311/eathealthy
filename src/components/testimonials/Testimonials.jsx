import React from "react";

import Testimony from "./Testimony";
import { testimonialData } from "../../assets/data/data";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__container testimonials__container--1">
          <h1 className="testimonials__header">Testimonials</h1>
          <small className="testimonials__text">
            Dont take our words for it, see what people say about us
          </small>
        </div>
        <div className="testimonials__container testimonials__container--2">
          {testimonialData.map((testimonyData, index) => (
            <Testimony key={index} {...testimonyData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
