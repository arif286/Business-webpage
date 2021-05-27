import React from 'react';
import './Featured.css';

const FeaturedColumn = ({ card }) => {
    console.log(card);
  return (
    <>
      <div className="single-featured-box">
        <img src={card.image} alt="" />
        <div className="featured-box-content">
          <h3>{card.text}</h3>
          <a href="http">READ INSIGHT</a>
        </div>
      </div>
    </>
  );
};

export default FeaturedColumn;