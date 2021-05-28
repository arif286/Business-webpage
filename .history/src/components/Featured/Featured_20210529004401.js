import React from "react";
import { Col, Row } from "react-bootstrap";
import sideBanner from "../../Images/f1.png";
import featuredImage from "../../Images/f3.png";
import FeaturedColumn from "./FeaturedColumn";

const FeaturedData = [
  {
    image: featuredImage,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    id: 1
  },
  {
    image: featuredImage,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    id: 2
  },
  {
    image: featuredImage,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    id: 3
  },
  {
    image: featuredImage,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    id: 4
  },

];
const Featured = () => {
  return (
    <div className="container">
      <h1 style={{fontWeight:900}} className="text-center mt-md-3 mb-4">Featured insights</h1>
      <Row className="align-items-center">
        <Col sm={12} lg={4}>
          {FeaturedData.map((item) => (
            <FeaturedColumn key={item.id} card={item} />
          ))}
        </Col>
        <Col sm={12} lg={8}>
          <img className="w-100" src={sideBanner} alt="" />
          <div className="feature-btm-box mb-5">
            <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h5>
            <a href="http">READ INSIGHT</a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Featured;
