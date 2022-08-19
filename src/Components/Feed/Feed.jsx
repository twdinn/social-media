import React from "react";
// import Post from "../Posts/Post";
import "./Feed.css";
import FeedCard from "./FeedCard";
import Profile1 from "./profile1.jpg";
import Profile2 from "./profile2.jpg";
import Profile3 from "./profile3.jpg";
import Profile4 from "./profile4.jpg";
import Profile5 from "./profile5.jpg";
import Profile6 from "./profile6.jpg";
import Profile7 from "./profile7.jpg";
import DogGlasses from "./dog-glasses.jpg";
import Monkey from "./monkey.jpg";
import Horse from "./horse.jpg";

const Feed = ({ post, image }) => {
  const users = [
    {
      id: 1,
      name: "Chad",
      profile: Profile1,
      image: null,
      post: "What does a storm cloud wear under his raincoat? Thunderwear.",
    },
    {
      id: 2,
      name: "Rex",
      profile: Profile6,
      image: DogGlasses,
      post: "Why are dogs terrible dancers? Because they have two left feet.",
    },
    {
      id: 3,
      name: "Sarah",
      image: Monkey,
      profile: Profile3,
      post: " What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
    },
    {
      id: 4,
      name: "Steve",
      profile: Profile4,
      image: Horse,
      post: "Where do most horses live? In neighhh-borhoods!",
    },
    {
      id: 5,
      name: "Wanda",
      profile: Profile5,
      image: null,
      post: "Why can't you ever trust atoms? Because they make up everything.",
    },
    {
      id: 6,
      name: "Abby",
      profile: Profile2,
      image: null,
      post: "How does the ocean say hi? It waves!",
    },
  ];

  if (post) {
    users.unshift({
      id: users.length + 1,
      name: "Tyler",
      profile: Profile7,
      image: image,
      post: post,
    });
  }

  return (
    <div className="feed">
      {users.map((user) => (
        <FeedCard
          key={user.id}
          name={user.name}
          profile={user.profile}
          image={user.image}
          post={user.post}
        />
      ))}
    </div>
  );
};

export default Feed;
