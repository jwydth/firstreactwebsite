import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive offer on your email</h1>
      <p>Subscribe to our newsletter and get updated</p>
      <div>
        <input type="email" placeholder="Your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
