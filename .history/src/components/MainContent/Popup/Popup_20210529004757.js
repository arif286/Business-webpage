import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Popup.css";
const Popup = () => {
  return (
    <div className="hero-popup-box">
      <div className="hero-crs">
        <a href="#">{<FontAwesomeIcon icon={faTimes} />}</a>
      </div>
      <div className="popup-contect">
        <p>Get insights from leading analysts</p>
        <div className="hero-popup-single-input">
          <input type="email" placeholder="email address" />
        </div>
        <div className="hero-popup-single-btn">
          <button type="submit">Subscribe [Free]</button>
        </div>
        <div className="hero-popup-pri">
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
