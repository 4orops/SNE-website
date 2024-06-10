import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="container">
    <div className="newsletter">
      <h1>Get Exclusives On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
    </div>
  );
};

export default NewsLetter;