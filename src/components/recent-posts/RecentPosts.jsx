import React, { useEffect, useState } from "react";

import RecentPost from "./RecentPost";
import { recentPosts } from "../../assets/data/data";

const RecentPosts = () => {
  const allRecentPost = [...recentPosts];
  const [currentPost, setCurrentPost] = useState(allRecentPost[0]);

  useEffect(() => {
    // set timeout to update the recent post every 2000 milliseconds (2 seconds)
    const timeoutID = setTimeout(() => {});
  });

  return <RecentPost {...currentPost} />;
};

export default RecentPosts;
