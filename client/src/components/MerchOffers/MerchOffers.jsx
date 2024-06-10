import React from "react";
import "./MerchOffers.css";
import exclusive_image from "../Assets/exclusive_image.jpg";
const MerchOffers = () => {
  return (
    <div className="container">
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Merchandise For You</h1>
        <p>Only On Best Seller Products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
    </div>
  );
};

export default MerchOffers;