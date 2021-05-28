import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './TopHeader.css';

const TopHeader = () => {
    const Facebook = <FontAwesomeIcon icon={faFacebook} />;
    const Twitter = <FontAwesomeIcon icon={faTwitter} />;
    const Instagram = <FontAwesomeIcon icon={faInstagram} />;
  const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />;
  const Bars = <FontAwesomeIcon icon={faBars} />;
    return (
      <div className="header-top">
        <div className="container-fluid">
          <Row>
            <Col lg={12}>
              <div className="d-flex align-items-center justify-content-between">
                <div class="pop-button">
                  <a
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    href="#g"
                  >
                    {Bars}
                  </a>
                </div>
                <div className="header-top-icon">
                  <a href="#h">{Facebook}</a>
                  <a href="#h">{Instagram}</a>
                  <a href="#h">{Twitter}</a>
                  <a href="#h">{LinkedIn}</a>
                </div>
                <div class="off-bar">
                  <a href="#">{Bars}</a>
                </div>
                <div className="header-top-text">
                  <p>The Analyst syndicate</p>
                </div>
                <div className="header-top-btn">
                  <a href="#l">Let's Talk</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default TopHeader;