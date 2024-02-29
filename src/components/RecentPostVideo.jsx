import React from "react";

import RecentPostInfo from "./recent-posts/RecentPostInfo";

const RecentPostVideo = () => {
  const title = "How to make strawberry",
    description =
      "Have you ever wanted to learn how to make strawberry milk? I’m going to talk about how to make strawberry milk with three simple steps.",
      likes = 25,
      readingTime = "15 mins"
  return (
    <section className="recent-post-video">
      <div className="recent-post-video__inner">
        <div className="recent-post-video__left">
          {/* place a video in here */}
        </div>
        <div className="recent-post-video__right">
          {/* place some text in here */}
          <h3 className="recent-post__heading-text">{title}</h3>
          <p className="recent-post__description">{description}</p>
          <RecentPostInfo likes={likes} readingTime={readingTime} />
        </div>
      </div>
    </section>
  );
};

export default RecentPostVideo;
