import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Feed from "./Components/Feed/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";

function App() {
  // const users = {
  //   name: "test",
  //   password: "test123",
  // };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState({ name: "", password: "" });
  // const [error, setError] = useState("");

  console.log(name);
  console.log(password);
  const [post, setPost] = useState("");

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
          element={<Login setName={setName} setPassword={setPassword} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
