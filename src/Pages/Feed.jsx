import React from "react";
import FeedCard from "../Components/FeedCard";

// import Profile2 from "./profile2.jpg";
// import Profile3 from "./profile3.jpg";
// import Profile4 from "./profile4.jpg";
// import Profile5 from "./profile5.jpg";
// import Profile6 from "./profile6.jpg";
// import Profile7 from "./profile7.jpg";
// import DogGlasses from "./dog-glasses.jpg";
// import Monkey from "./monkey.jpg";
// import Horse from "./horse.jpg";

// Displays all info on Feed Page
// Takes in Post from User
const Feed = ({ post, image }) => {
  // Users Object with Name, Profile Picture, an Optional Image and a Post
  const users = [
    {
      id: 1,
      name: "Chad",
      profile: "./media/profile1.jpg",
      image: null,
      post: "What does a storm cloud wear under his raincoat? Thunderwear.",
    },
    {
      id: 2,
      name: "Rex",
      profile: "./media/profile6.jpg",
      image: "./media/dog-glasses.jpg",
      post: "Why are dogs terrible dancers? Because they have two left feet.",
    },
    {
      id: 3,
      name: "Sarah",
      profile: "./media/profile3.jpg",
      image: "./media/monkey.jpg",
      post: " What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
    },
    {
      id: 4,
      name: "Steve",
      profile: "./media/profile4.jpg",
      image: "./media/horse.jpg",
      post: "Where do most horses live? In neighhh-borhoods!",
    },
    {
      id: 5,
      name: "Wanda",
      profile: "./media/profile5.jpg",
      image: null,
      post: "Why can't you ever trust atoms? Because they make up everything.",
    },
    {
      id: 6,
      name: "Abby",
      profile: "./media/profile2.jpg",
      image: null,
      post: "How does the ocean say hi? It waves!",
    },
  ];
  // If There is a Post by the User, create User Object and Push it (Unshift) to the front of the Object Array
  if (post) {
    users.unshift({
      id: users.length + 1,
      name: "Tyler",
      profile: "./media/profile7.jpg",
      image: image,
      post: post,
    });
  }

  // Map Through Users Array
  return (
    <div className="feed">
      {users.map((user) => (
        // FeedCard is Used to Display all info inside a Card
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
