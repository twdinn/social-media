//Sensa Humor Joke App (Social Media)
//By: Tyler Dinn
//Date: Aug 19 2022

//name: "Tyler",
//email: "test@test.com",
//password: "test123",

import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Feed from "./Pages/Feed";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Components/Nav";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  // Use state to get info from Login Form and Compare it to Dummy Login Data
  // Also Display Name on Feed
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Use state to get Data from Sign Up Form
  // Use to Display Name on Feed
  const [userName, setUserName] = useState("");
  const [confirmUserName, setConfirmUserName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Use state to get the Users Post to the Feed
  const [post, setPost] = useState("");

  //Dummy Login Data
  const users = {
    name: "Tyler",
    email: "test@test.com",
    password: "test123",
  };

  // Check if Login Name and Password are = to the Dummy Name and Password (Used to enable Login Button on Login Page)
  const isLoginData =
    name === users.name && email === users.email && password === users.password;

  // Check if both username, both email and both password fields are equal (Used to enable Sign Up Button on Sign Up Page)
  const isSignedUp =
    userName !== "" &&
    confirmUserName !== "" &&
    signUpPassword !== "" &&
    confirmPassword !== "" &&
    signUpEmail !== "" &&
    confirmEmail !== "" &&
    userName === confirmUserName &&
    signUpPassword === confirmPassword &&
    signUpEmail === confirmEmail;

  return (
    <Router>
      <Routes>
        <Route
          //Route to the Feed Page
          // Has a Nav and Feed Component
          // Nav is used to pull back the Post data so that it can be used in the Feed Component.
          //And to also Display the name or username. Depending on if the user Logs in or Signs up
          path="/feed"
          element={
            <>
              <Nav
                setPost={setPost}
                post={post}
                name={name}
                userName={userName}
              />
              <Feed post={post} />
            </>
          }
        />
        <Route
          // Route to the Sign Up Page
          // Pulls back all the Input Data
          // is checked Using (isSignedUp)
          // and passes the UserName to the Nav to be Displayed
          path="/signup"
          element={
            <SignUp
              setUserName={setUserName}
              setConfirmUserName={setConfirmUserName}
              setSignUpEmail={setSignUpEmail}
              setConfirmEmail={setConfirmEmail}
              setSignUpPassword={setSignUpPassword}
              setConfirmPassword={setConfirmPassword}
              isSignedUp={isSignedUp}
            />
          }
        />

        <Route
          // Route to Login Page
          // Pulls back all Input Data
          // is checked using (isLoginData)
          // and passes name to Nav to be Displayed
          path="/"
          element={
            <Login
              setName={setName}
              setPassword={setPassword}
              setEmail={setEmail}
              isLoginData={isLoginData}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Nav
                setPost={setPost}
                post={post}
                name={name}
                userName={userName}
              />

              <ProfilePage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
