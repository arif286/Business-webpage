import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Popup.css";
const Popup = () => {
  return (
    <div class="hero-popup-box">
      <div class="hero-crs">
        <a href="#">{<FontAwesomeIcon icon={faTimes} />}</a>
      </div>
      <div class="popup-contect">
        <p>Get insights from leading analysts</p>
        <div class="hero-popup-single-input">
          <input type="email" placeholder="email address" />
        </div>
        <div class="hero-popup-single-btn">
          <button type="submit">Subscribe [Free]</button>
        </div>
        <div class="hero-popup-pri">
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
