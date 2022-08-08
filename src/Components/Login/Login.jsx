import React from "react";
import "./Login.css";
import enterPic from "./enter-pic.jpg";

const Login = () => {
  return (
    <div className="login">
      <div className="login_left">
        <form className="login_form" action="">
          <input type="text" placeholder="Name or Username" />
          <input type="password" placeholder="password" />
          <input type="submit" value="Login" />
        </form>

        <button className="sign_up">Sign up</button>
      </div>
      <div className="login_right">
        {/* <h1>Social Media App</h1> */}
        <img className="login_pic" src={enterPic} alt="" />
      </div>
    </div>
  );
};

export default Login;
