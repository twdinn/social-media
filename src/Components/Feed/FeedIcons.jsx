import React, { useState } from "react";
import "./FeedIcons.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const FeedIcons = () => {
  const [love, setLove] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handleLove = () => {
    // 👇️ toggle
    setLove((current) => !current);
  };
  const handleLike = () => {
    // 👇️ toggle
    setLike((current) => !current);
  };
  const handleDislike = () => {
    // 👇️ toggle
    setDislike((current) => !current);
  };
  return (
    <div className="feed_card_icons">
      <p>
        <FavoriteIcon
          style={{
            color: love ? "red" : "",
            backgroudColor: love ? "white" : "",
          }}
          onClick={handleLove}
        />
      </p>
      <p>
        <ThumbUpIcon
          style={{
            color: like ? "blue" : "",
            backgroudColor: like ? "white" : "",
          }}
          onClick={handleLike}
        />
      </p>
      <p>
        <ThumbDownIcon
          style={{
            color: dislike ? "red" : "",
            backgroudColor: dislike ? "white" : "",
          }}
          onClick={handleDislike}
        />
      </p>
    </div>
  );
};

export default FeedIcons;
