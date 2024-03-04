import React, { useEffect, useState } from "react";

import RecentPost from "./RecentPost";
import { recentPosts } from "../../assets/data/data";
import { getRandomNumber } from "../../helpers/helperfunctions";

const RecentPosts = () => {
  const allRecentPost = [...recentPosts];
  const [currentPost, setCurrentPost] = useState(allRecentPost[0]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentPost(allRecentPost[getRandomNumber()]);
    }, 6200);

    return () => clearInterval(intervalID);
  });

  return <RecentPost {...currentPost} />;
};

export default RecentPosts;
