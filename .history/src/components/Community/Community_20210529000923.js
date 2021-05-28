import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Community.css';
const Community = () => {
    return (
      <div className='container'>
        <h2 className="engage-title">Engage with our community</h2>
        <Row>
          <Col md={12} lg={4} className="pb-4">
            <div className="engage-text engage-1">
              <p>Connect & Network with our community of thought leaders</p>
            </div>
          </Col>
          <Col md={12} lg={4} className="pb-4">
            <div className="engage-text engage-2">
              <p>Connect & Network with our community of thought leaders</p>
            </div>
          </Col>
          <Col md={12} lg={4} className="pb-4">
            <div className="engage-text engage-2">
              <p>Connect & Network with our community of thought leaders</p>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default Community;