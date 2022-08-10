import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign_up">
      <h1>Sensa Humour</h1>
      <h2>Sign Up</h2>
      <form className="sign_up_form" action="">
        <input type="text" placeholder="Name or Username" required />
        <input type="text" placeholder="Confirm Name or Username" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <input className="sign_up_btn" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
