import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TopHeader = () => {
    const Facebook = <FontAwesomeIcon icon={faFacebook} />;
    const Twitter = <FontAwesomeIcon icon={faTwitter} />;
    const Instagram = <FontAwesomeIcon icon={faInstagram} />;
    const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />;
    return (
        <Container>
            <Row>
                <Col>
                    <ul className='list-unstyled'>
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
        </Container>
    );
};

export default TopHeader;