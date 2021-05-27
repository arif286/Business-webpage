import React from "react";
import { Col, Row } from "react-bootstrap";
import blogImage from '../../Images/event-1.png';
import "./Blog.css";

const Blog = () => {
  return (
    <div className="px-5">
      <h1>What's new</h1>
      <Row>
        <Col lg={4}>
          <div className="blog-wrap">
            <div className="blog-img">
              <img src={blogImage} alt="" />
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
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </p>
                  <a href="#" className="ig-btn">
                    Read insight
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="blog-wrap">
            <div className="blog-img">
              <img src={blogImage} alt="" />
              <a href="h" className="ig-btn">
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
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </p>
                  <a href="#">Read insight</a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="blog-wrap">
            <div className="blog-img">
              <img src={blogImage} alt="" />
              <a href="h" className="ig-btn">
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
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </p>
                  <a href="#">Read insight</a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
