import React from "react";
import "./FeedProfile.css";

const FeedProfile = ({ name, profile }) => {
  return (
    <div className="feed_card_name">
      <h2>{name}</h2>
      <img className="feed_card_profile" src={profile} alt="" />
    </div>
  );
};

export default FeedProfile;
