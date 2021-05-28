import React from 'react';
import HeroImage from '../../Images/hero-img.png';
import './MainContent.css';
import Popup from './Popup/Popup';


const MainContent = () => {
    return (
      <section className="hero-posi">
        <div className="hero-area">
          <div className="container-fluid px-5">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="hero-wrap">
                  <div className="hero-image nnvb">
                    <img src={HeroImage} alt="" />
                  </div>
                  <div className="hero-content">
                    <h3>Engage the world’s</h3>
                    <h3 className="bbfd">leading analysts</h3>
                    <p>
                      We’re an open platform for world’s leading analysts <br />
                      & business leaders shaping the future
                    </p>
                    <div className="hero-btn">
                      <a href="#">INSIGHTS</a>
                      <a href="#">ADVISORY</a>
                      <a href="#">RESEARCH & MORE</a>
                    </div>
                    <div className="hero-btm-btn">
                      <a href="#">View services</a>
                      <a className="reserc" href="#">
                        Our research
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Popup />
      </section>
    );
};

export default MainContent;