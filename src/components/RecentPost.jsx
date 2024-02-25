import React from "react";

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

  console.log(title, postImage);

  // const PostImage = ()
  
  return (
    <section className="recent-post">
      <div className="recent-post__container">
        <div className="">
          <img src={postImage} alt={title} />
        </div>
        <div className="">
          <h3>Health Benefit of Vitamin A</h3>
          <p>
            Vitamin A is an essential nutrient that supports healthy skin and
            maintains the immune system. It’s also known as retinol and can be
            found in foods like...
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
