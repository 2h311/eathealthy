import React from "react";

import BookImage1 from "../../assets/images/book-1.png";
import BookImage2 from "../../assets/images/book-2.png";
import BookImage3 from "../../assets/images/book-3.png";

const GetMyLatestEbook = () => {
  return (
    <section className="latest-ebook-section">
      <div className="latest-ebook-section__inner">
        <h3 className="latest-ebook-section__heading">
          Get our latest E-books
        </h3>
        <p className="latest-ebook-section__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quo odit
          dolores soluta ad deserunt quos nostrum magni eius, veritatis, facilis
          atque reiciendis autem fugit ratione libero fuga, inventore rerum.
        </p>
        <div className="latest-ebook-section__books">
          <img className="latest-ebook-section__book" src={BookImage1} />
          <img className="latest-ebook-section__book" src={BookImage2} />
          <img className="latest-ebook-section__book" src={BookImage3} />
        </div>
      </div>
    </section>
  );
};

export default GetMyLatestEbook;
