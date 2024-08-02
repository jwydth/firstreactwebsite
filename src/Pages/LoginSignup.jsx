import React from "react";
import "./CSS/Loginsignup.css";

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsingup-container">
        <h1>Sign Up</h1>
        <div className="loginsignnup-field">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsingup-login">
          Already have an account <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
