import React from "react";

const PostCard = () => {
  return (
    <div className="post_card">
      <div className="post_card_container">
        <div className="post_card_name">
          <h2>{name}</h2>
          <img className="post_card_profile" src={profile} alt="" />
        </div>
        <div className="post_card_posts">
          <p>{post}</p>
        </div>
      </div>

      <div className="post_card_icons">
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

export default PostCard;
