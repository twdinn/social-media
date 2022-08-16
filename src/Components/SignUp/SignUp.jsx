// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({
  setUserName,
  setConfirmUserName,
  // setSignUpEmail,
  // setConfirmEmail,
  setSignUpPassword,
  setConfirmPassword,
  isSignedUp,
}) => {
  return (
    <div className="sign_up">
      <h1>Sensa Humour</h1>
      <h2>Sign Up</h2>
      <form className="sign_up_form">
        <input
          type="text"
          placeholder="Name or Username"
          required
          onChange={(e) => setUserName(e.target.value)}
          name="username"
        />
        <input
          type="text"
          placeholder="Confirm Name or Username"
          required
          onChange={(e) => setConfirmUserName(e.target.value)}
          name="confirmUsername"
        />
        {/* <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setSignUpEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="Confirm Email"
          required
          onChange={(e) => setConfirmEmail(e.target.value)}
        /> */}
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setSignUpPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Link to="/feed">
          <button className="sign_up_btn" type="submit" disabled={!isSignedUp}>
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
