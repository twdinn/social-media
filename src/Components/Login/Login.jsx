import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login_form">
        <form className="login_form_inputs" action="">
          <input type="text" placeholder="Name or Username" />
          <input type="password" placeholder="password" />
          <input type="submit" value="Login" />
        </form>

        <button className="sign_up">Sign up</button>
      </div>
      <h1>Social Media App</h1>
    </div>
  );
};

export default Login;
