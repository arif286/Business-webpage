import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Community = () => {
    return (
      <div>
        <h2 className="text-center">Engage with our community</h2>
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