import React from "react";
import { Row } from "react-bootstrap";
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
       { <FeaturedColumn card={FeaturedData} />}
      </Row>
    </div>
  );
};

export default Featured;
