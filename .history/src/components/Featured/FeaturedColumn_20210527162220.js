import React from 'react';
import { Col } from 'react-bootstrap';
import sideBanner from "../../Images/f1.png";
const FeaturedColumn = ({ card }) => {
    console.log(card);
  return (
    <>
      <Col md={12} lg={4}>
        <div className="single-featured-box">
          <img src={card.image} alt="" />
          <div className="featured-box-content">
                      <h3>{ card.text}</h3>
            <a href="http">READ INSIGHT</a>
          </div>
        </div>
      </Col>
      <Col md={12} lg={8}>
        <img src={sideBanner} alt="" />
      </Col>
    </>
  );
};

export default FeaturedColumn;