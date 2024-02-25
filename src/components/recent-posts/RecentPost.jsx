import React from "react";

import RecentPostInfo from "./RecentPostInfo";
import { FaArrowRight } from "react-icons/fa6";

const RecentPost = ({
  isARecentPost,
  title,
  description,
  likes,
  link,
  readingTime,
  postImage,
}) => {
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
            <RecentPostInfo likes={likes} readingTime={readingTime} />
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
