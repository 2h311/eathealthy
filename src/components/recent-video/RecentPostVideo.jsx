import React from "react";

import { FaPlay } from "react-icons/fa6";
import RecentPostInfo from "../recent-posts/RecentPostInfo";
import Video from "../../assets/videos/pexels-solodsha-8604873.mp4";

const RecentPostVideo = () => {
  const title = "How to make strawberry",
    description =
      "Have you ever wanted to learn how to make strawberry milk? I’m going to talk about how to make strawberry milk with three simple steps.",
    likes = 25,
    readingTime = "15 mins";
  return (
    <section className="recent-post-video">
      <div className="recent-post-video__inner">
        <div className="recent-post-video__left">
          <span className="recent-post__status">Video</span>
          <div className="recent-post__video">
            <div className="recent-post__play">
              <FaPlay />
            </div>
            <video src={Video}></video>
          </div>
        </div>
        <div className="recent-post-video__right">
          {/* place some text in here */}
          <h3 className="recent-post__heading-text">{title}</h3>
          <p className="recent-post__description recent-post-video__description">
            {description}
          </p>
          <RecentPostInfo likes={likes} readingTime={readingTime} />
        </div>
      </div>
    </section>
  );
};

export default RecentPostVideo;
