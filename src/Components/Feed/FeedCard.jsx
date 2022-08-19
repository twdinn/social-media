import React from "react";
import "./FeedCard.css";
import FeedProfile from "./FeedProfile";
import FeedPost from "./FeedPost";
// import FeedImage from "./FeedImage";
import FeedIcons from "./FeedIcons";

const FeedCard = ({ name, profile, post, image }) => {
  return (
    <div className="feed_card_container">
      <div className="feed_card">
        <FeedProfile name={name} profile={profile} />
        {image ? <img className="feed_img" src={image} alt="" /> : null}

        {/* {image ? <FeedImage image={image} /> : null} */}
        <FeedPost post={post} />
      </div>
      <FeedIcons />
    </div>
  );
};

export default FeedCard;
