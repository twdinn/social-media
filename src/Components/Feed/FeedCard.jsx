import React from "react";
import "./FeedCard.css";
import FeedProfile from "./FeedProfile";
import FeedPost from "./FeedPost";

import FeedIcons from "./FeedIcons";

// FeedCard is Used to Display each Object inside a Card on the Feed Page
const FeedCard = ({ name, profile, post, image }) => {
  return (
    <div className="feed_card_container">
      <div className="feed_card">
        {/*Displays Name and Profile Picture */}
        <FeedProfile name={name} profile={profile} />

        {image ? <img className="feed_img" src={image} alt="" /> : null}

        {/* Displays the Post (Joke) */}
        <FeedPost post={post} />
      </div>

      {/* Displays the Icons on bottom of Card (Love, Like, DisLike) */}
      <FeedIcons />
    </div>
  );
};

export default FeedCard;
