import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AboutBodySection from "../about-us/AboutBodySection";
import useDocumentTitle from "../dry/useDocumentTitle";

const About = () => {
  useDocumentTitle("EatHealthy — Learn About Us");
  return (
    <div>
      <Navbar />
      <AboutBodySection />
      <Footer />
    </div>
  );
};

export default About;
