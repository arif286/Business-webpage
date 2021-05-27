import React from 'react';

const FeaturedColumn = ({ card }) => {
    console.log(card);
  return (
    <>

      <div className="single-featured-box">
        <img className='w-100' src={card.image} alt="" />
        <div className="featured-box-content">
          <h3>{card.text}</h3>
          <a href="http">READ INSIGHT</a>
        </div>
      </div>
    </>
  );
};

export default FeaturedColumn;