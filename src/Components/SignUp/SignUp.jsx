import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign_up">
      <h1>Sign Up</h1>
      <form className="sign_up_form" action="">
        <input type="text" placeholder="Name or Username" />
        <input type="text" placeholder="Confirm Name or Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input className="sign_up_btn" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
