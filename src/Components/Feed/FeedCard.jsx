import React from "react";
import "./FeedCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const FeedCard = ({ name, profile, post }) => {
  return (
    <div className="feed_card">
      <div className="feed_card_container">
        <div className="feed_card_name">
          <h2>{name}</h2>
          <img className="feed_card_profile" src={profile} alt="" />
        </div>
        <div className="feed_card_posts">
          <p>{post}</p>
        </div>
      </div>

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
    </div>
  );
};

export default FeedCard;
