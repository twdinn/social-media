import React from "react";
import "./FeedPage.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const FeedPage = ({ name, profile, post }) => {
  return (
    <div className="feed_page">
      <div className="feed_page_card">
        <div className="feed_page_name">
          <h2>{name}</h2>
          <img className="profile" src={profile} alt="" />
        </div>
        <div className="feed_page_posts">
          <p>{post}</p>
        </div>
      </div>

      <div className="feed_page_icons">
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

export default FeedPage;
