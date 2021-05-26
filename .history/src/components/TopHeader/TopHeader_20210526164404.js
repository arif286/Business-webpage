import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const TopHeader = () => {
    const Facebook = <FontAwesomeIcon icon={faFacebook} />;
    const Twitter = <FontAwesomeIcon icon={faTwitter} />;
    const Instagram = <FontAwesomeIcon icon={faInstagram} />;
    const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />;
    return (
        <div>
            <Row>
                <Col>
                    <ul className='d-flex list-unstyled social-list'>
                        <li><a href='#h'>{ Facebook}</a></li>
                        <li><a href='#h'>{ Instagram}</a></li>
                        <li><a href='#h'>{ Twitter}</a></li>
                        <li><a href='#h'>{ LinkedIn}</a></li>
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
    );
};

export default TopHeader;