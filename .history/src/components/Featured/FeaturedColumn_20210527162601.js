import React from 'react';
import { Col } from 'react-bootstrap';

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

    </>
  );
};

export default FeaturedColumn;