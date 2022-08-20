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
    //  Toggle Love Icon
    setLove((current) => !current);
  };
  const handleLike = () => {
    //  Toggle Like Icon
    setLike((current) => !current);
  };
  const handleDislike = () => {
    // Toggle Dislike Icon
    setDislike((current) => !current);
  };
  return (
    <div className="feed_card_icons">
      <p>
        {/* If Icon Color is White When Clicked Change to Red. If Red change to White */}
        <FavoriteIcon
          style={{
            color: love ? "red" : "",
            backgroudColor: love ? "white" : "",
          }}
          onClick={handleLove}
        />
      </p>
      <p>
        {/* If Icon Color is White When Clicked Change to Blue. If Blue change to White */}
        <ThumbUpIcon
          style={{
            color: like ? "blue" : "",
            backgroudColor: like ? "white" : "",
          }}
          onClick={handleLike}
        />
      </p>
      <p>
        {/* If Icon Color is White When Clicked Change to Red, If Red change to White */}
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
