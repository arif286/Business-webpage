import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ul>
                        <li><a href='#h'>a</a></li>
                        <li><a href='#h'>a</a></li>
                        <li><a href='#h'>a</a></li>
                        <li><a href='#h'>a</a></li>
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