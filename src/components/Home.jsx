import React from "react";

import Hero from "./hero/Hero";
import Gist from "./gist/Gist";
import Footer from "./footer/Footer";
import RecentPosts from "./recent-posts/RecentPosts";
import SendAMessageNow from "./send-a-message-now/SendAMessageNow";
import RecentPostVideo from "./recent-video/RecentPostVideo";
import GetMyLatestEbook from "./latest-ebook/GetMyLatestEbook";

const Home = () => {
  return (
    <>
      {/* <Hero />
      <Gist />
      <RecentPosts />
      <SendAMessageNow />
      <RecentPostVideo /> */}
      <GetMyLatestEbook />

      {/* <Footer /> */}
    </>
  );
};

export default Home;
