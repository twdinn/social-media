import React, { useState } from "react";
import "./Login.css";
import enterPic from "./enter-pic.jpg";
import { Link } from "react-router-dom";
// import Feed from "../Feed/Feed";

const Login = () => {
  const [name, setName] = useState("");
  // const name = props.name;
  // const setName = props.setName;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="login">
      <div className="login_left">
        <h1>Sensa Humour</h1>
        <form className="login_form">
          <input
            className="login_name"
            type="text"
            placeholder="Name or Username"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="login_password"
            type="password"
            placeholder="password"
            required
            // onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/feed">
            <button
              className="login_submit_btn"
              // type="submit"
              // onClick={handleSubmit}
            >
              Login
            </button>
          </Link>
        </form>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
      <div className="login_right">
        <img className="login_pic" src={enterPic} alt="" />
      </div>
      {/* <Feed name={name} /> */}
    </div>
  );
};

export default Login;
