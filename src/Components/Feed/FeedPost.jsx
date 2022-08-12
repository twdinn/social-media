import React from "react";
import "./FeedPost.css";

const FeedPost = ({ post }) => {
  return (
    <div className="feed_card_post">
      <p>{post}</p>
    </div>
  );
};

export default FeedPost;
