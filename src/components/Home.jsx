import React from "react";

import Hero from "./Hero";
import Gist from "./Gist";
import Footer from "./footer/Footer";
import RecentPosts from "./recent-posts/RecentPosts";

const Home = () => {
  return (
    <>
      <Hero />
      <Gist />
      <RecentPosts />
      <Footer />
    </>
  );
};

export default Home;
