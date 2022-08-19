import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Feed from "./Components/Feed/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const [value, setValue] = useState("");

  const [userName, setUserName] = useState("");
  const [confirmUserName, setConfirmUserName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Dummy Login Data
  const users = {
    name: "Tyler",
    email: "test@test.com",
    password: "test123",
  };

  // Check if Login Name and Password are = to the Dummy Name and Password (Used to enable Login Button on Login Page)
  const isLoginData =
    name === users.name && email === users.email && password === users.password;

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
          path="/feed"
          element={
            <>
              <Nav
                setValue={setValue}
                value={value}
                setPost={setPost}
                post={post}
                setImage={setImage}
                image={image}
                name={name}
                userName={userName}
              />
              <Feed post={post} image={image} />
            </>
          }
        />
        <Route
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
      </Routes>
    </Router>
  );
}

export default App;
