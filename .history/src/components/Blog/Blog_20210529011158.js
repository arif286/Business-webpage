import React from "react";
import { Col, Row } from "react-bootstrap";
import blogImage from '../../Images/event-1.png';
import "./Blog.css";

const blogData = [
  {
    title: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    id: 1,
  },
  {
    title: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    id: 2,
  },
  {
    title: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    id: 3,
  },
];

const Blog = () => {
  return (
    <div className="container event-area">
      <h1 style={{ fontWeight: 900 }} className="text-center mt-5 mb-5">
        What's new
      </h1>
      <Row>
        {blogData.map(item =>
          <Col key={item.id} lg={4}>
            <div className="blog-wrap">
              <div className="blog-img">
                <img className="w-100 h-100" src={blogImage} alt="" />
                <a className="ig-btn" href="h">
                  AUTOMATION
                </a>
              </div>
              <div className="event-content-wrap new-wrap">
                <div className="event-content-top-fx">
                  <div className="single-top">
                    <p>
                      24 November, 2020
                      <span>2 Mins</span>
                    </p>
                  </div>
                  <div className="new-box-wrap">
                    <h4>
                      {item.title}
                    </h4>
                    <p>
                      {item.text}
                    </p>
                    <a href="http">Read insight</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Blog;
