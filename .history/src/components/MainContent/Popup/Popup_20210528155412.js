import React from 'react';
import './Popup.css';

const Popup = () => {
    return (
        <div class="hero-popup-box">
        <div class="hero-crs">
            <a href="#"><i class="fal fa-times"></i></a>
        </div>
        <div class="popup-contect">
            <p>Get insights from leading analysts</p>
            <div class="hero-popup-single-input">
                <input type="email" placeholder="email address">
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