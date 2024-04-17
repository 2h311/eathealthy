import React, { Fragment } from "react";

import Hero from "../hero/Hero";
import Gist from "../gist/Gist";
import Footer from "../footer/Footer";
import RecentPosts from "../recent-posts/RecentPosts";
import SendAMessageNow from "../send-a-message-now/SendAMessageNow";
import RecentPostVideo from "../recent-video/RecentPostVideo";
import GetMyLatestEbook from "../latest-ebook/GetMyLatestEbook";
import WhatMakesUsDifferent from "../what-makes-us-different/WhatMakesUsDifferent";
import Ratings from "../ratings/Ratings";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Gist />
      <RecentPosts />
      <SendAMessageNow />
      <RecentPostVideo />
      <GetMyLatestEbook />
      <WhatMakesUsDifferent />
      <Ratings />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
