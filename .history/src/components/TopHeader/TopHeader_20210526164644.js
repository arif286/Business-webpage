import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './TopHeader.css';

const TopHeader = () => {
    const Facebook = <FontAwesomeIcon icon={faFacebook} />;
    const Twitter = <FontAwesomeIcon icon={faTwitter} />;
    const Instagram = <FontAwesomeIcon icon={faInstagram} />;
    const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />;
    return (
      <div className="header-top">
        <div className='container-fluid'>
          <Row>
            <Col>
              <ul className="d-flex list-unstyled social-list">
                <li>
                  <a href="#h">{Facebook}</a>
                </li>
                <li>
                  <a href="#h">{Instagram}</a>
                </li>
                <li>
                  <a href="#h">{Twitter}</a>
                </li>
                <li>
                  <a href="#h">{LinkedIn}</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h3>The Analyst syndicate</h3>
            </Col>
            <Col>
              <button>Let's Talk</button>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default TopHeader;