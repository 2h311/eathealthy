import React, { useEffect, useState } from "react";

import RecentPost from "./RecentPost";

import { getRandomNumber } from "../../helpers/helperfunctions";
import { recentPosts } from "../../assets/data/data";

const RecentPosts = () => {
  const allRecentPost = [...recentPosts];
  const [currentPost, setCurrentPost] = useState(allRecentPost[0]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentPost(allRecentPost[getRandomNumber()]);
    }, 6000);

    return () => clearInterval(intervalID);
  });

  return <RecentPost {...currentPost} />;
};

export default RecentPosts;
