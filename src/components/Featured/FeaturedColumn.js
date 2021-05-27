import React from 'react';
import './Featured.css';

const FeaturedColumn = ({ card }) => {
    console.log(card);
  return (
    <>
      <div className="single-featured-box">
        <img src={card.image} alt="" />
        <div className="featured-content">
          <h5>{card.text}</h5>
          <a href="http">READ INSIGHT</a>
        </div>
      </div>
    </>
  );
};

export default FeaturedColumn;