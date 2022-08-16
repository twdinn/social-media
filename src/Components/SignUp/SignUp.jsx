// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({
  setUserName,
  setConfirmUserName,
  setEmail,
  setConfirmEmail,
  setPassword,
  setConfirmPassword,
  SignUp,
}) => {
  // const [details, setDetails] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   SignUp(details);
  // };
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
        />
        <input
          type="text"
          placeholder="Confirm Name or Username"
          required
          onChange={(e) => setConfirmUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="Confirm Email"
          placeholder="email"
          required
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Link to="/feed">
          <button className="sign_up_btn">Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
