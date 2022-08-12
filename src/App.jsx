import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Feed from "./Components/Feed/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav/Nav";

function App() {
  const [name, setName] = useState("");
  const [joke, setJoke] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/feed"
          element={
            <>
              <Nav setJoke={setJoke} name={name} />
              <Feed joke={joke} />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login setName={setName} />} />
      </Routes>
    </Router>
  );
}

export default App;
