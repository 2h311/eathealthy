import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { OopsiesImage } from "../../assets/images/ImagesInit";

const PageNotFoundBody = () => {
  return (
    <div className="notfound__inner">
      <div className="notfound__divider">
        <img
          className="notfound__image"
          src={OopsiesImage}
          alt="sorry we cant find the page you are looking for"
        />
        <h1 className="notfound__heading">oops!</h1>
        <p className="notfound__text">
          Sorry, we cant find the page <br /> or resource you are looking for
        </p>
        <Link className="notfound__link" to={"/"}>
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

const PageNotFound = () => {
  return (
    <section className="notfound">
      <Navbar />
      <PageNotFoundBody />
      <Footer />
    </section>
  );
};

export default PageNotFound;
