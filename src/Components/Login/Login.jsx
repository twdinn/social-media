import React from "react";
import "./Login.css";
import enterPic from "./enter-pic.jpg";
import { Link } from "react-router-dom";
// import SignUp from "../SignUp/SignUp";

const Login = () => {
  return (
    <div className="login">
      <div className="login_left">
        <form className="login_form" action="/feed">
          <input type="text" placeholder="Name or Username" />
          <input type="password" placeholder="password" />
          <input className="login" type="submit" value="Login" />
        </form>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
      <div className="login_right">
        <img className="login_pic" src={enterPic} alt="" />
      </div>
    </div>
  );
};

export default Login;
