import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Featured = () => {
    return (
        <div className='px-5'>
            <h1>Featured insights</h1>
            <Row>
                <Col md={12} lg={4}></Col>
                <Col md={12} lg={8}></Col>
            </Row>
        </div>
    );
};

export default Featured;