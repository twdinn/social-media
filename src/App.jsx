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
  //Dummy Login Data
  const users = {
    name: "Tyler",
    email: "test@test.com",
    password: "test123",
  };

  // // Login Name and Password State
  // const [loginName, setLoginName] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  // Check if Login Name and Password are = to the Dummy Name and Password
  const isValid =
    name === users.name && email === users.email && password === users.password;

  return (
    <Router>
      <Routes>
        <Route
          path="/feed"
          element={
            <>
              <Nav setPost={setPost} name={name} />
              <Feed post={post} />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
            // setUserName={setUserName}
            // setConfirmUserName={setConfirmUserName}
            // setEmail={setEmail}
            // setConfirmEmail={setConfirmEmail}
            // setPassword={setPassword}
            // setConfirmPassword={setConfirmPassword}
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
              isValid={isValid}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
