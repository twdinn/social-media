import React from "react";
import { Link } from "react-router-dom";
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

        <Link to="/feed">
          <button className="sign_up_btn" type="submit">
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
