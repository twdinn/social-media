import React from "react";
import "./FeedImage.css";

const FeedImage = (image) => {
  return (
    <div className="feed_card_image">
      <img src={image} alt="" />
    </div>
  );
};

export default FeedImage;
