import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Feed from "./Components/Feed/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

function App() {
  // const [name, setName] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
