import React from "react";
import "./FeedIcons.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const FeedIcons = () => {
  return (
    <div className="feed_card_icons">
      <p>
        <FavoriteIcon />
      </p>
      <p>
        <ThumbUpIcon />
      </p>
      <p>
        <ThumbDownIcon />
      </p>
    </div>
  );
};

export default FeedIcons;
