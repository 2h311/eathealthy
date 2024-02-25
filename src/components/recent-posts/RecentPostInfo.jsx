import React from "react";

import { FaClock, FaHeart } from "react-icons/fa6";

const RecentPostInfo = ({ readingTime, likes }) => {
  return (
    <div className="recent-post__info">
      <div className="recent-post__icon">
        <span className="recent-post__icon-svg recent-post__icon-svg--left">
          <FaClock />
        </span>
        <span className="recent-post__icon-text">{readingTime} read</span>
      </div>
      <div className="recent-post__icon">
        <span className="recent-post__icon-svg recent-post__icon-svg--right">
          <FaHeart />
        </span>
        <span className="recent-post__icon-text">{likes} likes</span>
      </div>
    </div>
  );
};

export default RecentPostInfo;
