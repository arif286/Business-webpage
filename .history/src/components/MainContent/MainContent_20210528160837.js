import React from 'react';
import HeroImage from '../../Images/hero-img.png';
import './MainContent.css';
import Popup from './Popup/Popup';


const MainContent = () => {
    return (
      <section className='hero-posi'>
        <div class="hero-area">
          <div class="container-fluid px-5">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="hero-wrap">
                  <div class="hero-image nnvb">
                    <img src={HeroImage} alt="" />
                  </div>
                  <div class="hero-content">
                    <h3>Engage the world’s</h3>
                    <h3 class="bbfd">leading analysts</h3>
                    <p>
                      We’re an open platform for world’s leading analysts <br />
                      & business leaders shaping the future
                    </p>
                    <div class="hero-btn">
                      <a href="#">INSIGHTS</a>
                      <a href="#">ADVISORY</a>
                      <a href="#">RESEARCH & MORE</a>
                    </div>
                    <div class="hero-btm-btn">
                      <a href="#">View services</a>
                      <a class="reserc" href="#">
                        Our research
                      </a>
                    </div>
                  </div>
                  {/* <div class="hero-image">
                  <img src={HeroImage} alt="" />
                </div> */}
                </div>
              </div>
            </div>
          </div>
            </div>
            <Popup/>
      </section>
    );
};

export default MainContent;