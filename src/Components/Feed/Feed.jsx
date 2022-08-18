import React from "react";
// import Post from "../Posts/Post";
import "./Feed.css";
import FeedCard from "./FeedCard";
import profile1 from "./profile1.jpg";
import profile2 from "./profile2.jpg";
import profile3 from "./profile3.jpg";
import profile4 from "./profile4.jpg";
import profile5 from "./profile5.jpg";
import profile6 from "./profile6.jpg";
import profile7 from "./profile7.jpg";
import dogGlasses from "./dog-glasses.jpg";

const Feed = ({ post, image }) => {
  const users = [
    {
      id: 1,
      name: "Tyler",
      profile: profile1,
      image: null,
      post: "What does a storm cloud wear under his raincoat? Thunderwear.",
    },
    {
      id: 2,
      name: "William",
      profile: profile6,
      image: dogGlasses,
      post: "Why are dogs terrible dancers? Because they have two left feet.",
    },
    {
      id: 3,
      name: "William",
      image: dogGlasses,
      profile: profile3,
      post: " What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
    },
    {
      id: 4,
      name: "Tyler",
      profile: profile4,
      image: dogGlasses,
      post: "Where do most horses live? In neighhh-borhoods!",
    },
    {
      id: 5,
      name: "Dinn",
      profile: profile5,
      image: dogGlasses,
      post: "Why can't you ever trust atoms? Because they make up everything.",
    },
    {
      id: 6,
      name: "Dinn",
      profile: profile2,
      image: dogGlasses,
      post: "How does the ocean say hi? It waves!",
    },
  ];

  if (post) {
    users.unshift({
      id: users.length + 1,
      name: "Tyler",
      profile: profile7,
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
