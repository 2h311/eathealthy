import React from "react";
import { FaClock, FaHeart, FaArrowRight } from "react-icons/fa6";

import { recentPosts } from "../assets/data/data";

const RecentPosts = () => {};

const RecentPost = ({}) => {
  const {
    isARecentPost,
    title,
    description,
    likes,
    link,
    readingTime,
    postImage,
  } = recentPosts[0];

  console.log(title);

  return (
    <section className="recent-post">
      <div className="recent-post__container">
        <div className="recent-post__left">
          {isARecentPost ? (
            <span className="recent-post__status">Recent post</span>
          ) : null}

          <img className="recent-post__image" src={postImage} alt={title} />
        </div>
        <div className="recent-post__right">
          <div className="recent-post__right-inner">
            <h3 className="recent-post__heading-text">{title}</h3>
            <p className="recent-post__description">{description}</p>

            <div className="recent-post__info">
              <div className="recent-post__icon">
                <span className="recent-post__icon-svg recent-post__icon-svg--left">
                  <FaClock />
                </span>
                <span className="recent-post__icon-text">
                  {readingTime} read
                </span>
              </div>
              <div className="recent-post__icon">
                <span className="recent-post__icon-svg recent-post__icon-svg--right">
                  <FaHeart />
                </span>
                <span className="recent-post__icon-text">{likes} likes</span>
              </div>
            </div>

            <div className="recent-post__button">
              <span>Continue Reading</span>
              <span className="recent-post__icon-svg recent-post__arrow">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
