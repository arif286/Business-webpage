import React from "react";
import SliderImage from "../../Images/meer-shap.png";

const Testimonial = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div class="carousel-item active">
            <div className="meet-bg">
              <img src={SliderImage} alt="" />
            </div>
            <div className="test-btn">
              <a href="http">Testimonial</a>
            </div>
            <div className="row">
              <div className="meet-img">
                <img src="" alt="" />
              </div>
              <div className="meet-content">
                <h4>Meet Edward, CEO of HappyFoods</h4>
                <p>
                  “Working with the syndicate involves carefully analysing
                  rapidly changing trends & creating the future”
                </p>
                <a href="http">CONNECT WITH AN ANALYST</a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="meet-bg">
              <img src={SliderImage} alt="" />
            </div>
            <div className="test-btn">
              <a href="http">Testimonial</a>
            </div>
            <div className="row">
              <div className="meet-img">
                <img src="" alt="" />
              </div>
              <div className="meet-content">
                <h4>Meet Edward, CEO of HappyFoods</h4>
                <p>
                  “Working with the syndicate involves carefully analysing
                  rapidly changing trends & creating the future”
                </p>
                <a href="http">CONNECT WITH AN ANALYST</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
