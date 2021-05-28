import React from "react";
import { Col, Row } from "react-bootstrap";
import sideBanner from "../../Images/f1.png";
import featuredImage from "../../Images/f3.png";
import FeaturedColumn from "./FeaturedColumn";

const FeaturedData = [
  {
    image: featuredImage,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
  },
  {
    image: featuredImage,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
  },
  {
    image: featuredImage,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
  },
  {
    image: featuredImage,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
  },

];
const Featured = () => {
  return (
    <div className="Container">
      <h1 className="text-center mt-md-3 mb-4">Featured insights</h1>
      <Row className="align-items-center">
        <Col sm={12} lg={4}>
          {FeaturedData.map((item) => (
            <FeaturedColumn card={item} />
          ))}
        </Col>
        <Col sm={12} lg={8}>
          <img className="w-100" src={sideBanner} alt="" />
          <div className="feature-btm-box">
            <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h5>
            <a href="http">READ INSIGHT</a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Featured;
