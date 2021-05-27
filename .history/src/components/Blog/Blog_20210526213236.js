import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="px-5">
      <h1>What's new</h1>
      <Row>
        <Col lg={4}>
          <div className="blog-wrap">
            <div className="blog-img">
              <img src="" alt="" />
              <a href="h">AUTOMATION</a>
            </div>
            <div className="event-content-wrap new-wrap">
              <div className="event-content-top-fx">
                <p>
                  24 November, 2020
                  <span>2 Mins</span>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
