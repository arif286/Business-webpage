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
    <div className="px-5">
      <h1>Featured insights</h1>
      <Row>
        <Col md={12} lg={4}>
          {FeaturedData.map((item) => (
            <FeaturedColumn card={item} />
          ))}
        </Col>
        <Col md={12} lg={8}>
          <img src={sideBanner} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Featured;
