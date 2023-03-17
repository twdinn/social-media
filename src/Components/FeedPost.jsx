import React from "react";

// Displays the Post(Joke)
const FeedPost = ({ post }) => {
  return (
    <div className="feed_card_post">
      <p>{post}</p>
    </div>
  );
};

export default FeedPost;
