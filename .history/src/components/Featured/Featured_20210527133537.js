import React from 'react';
import { Col, Row } from 'react-bootstrap';
import sideBanner from '../../Images/f1.png';
import featuredImage from '../../Images/f3.png';
const Featured = () => {
    return (
        <div className='px-5'>
            <h1>Featured insights</h1>
            <Row>
                <Col md={12} lg={4}>
                    <div className='single-featured-box'>
                        <img src={featuredImage} alt='' />
                        <div className='featured-box-content'>
                            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h3>
                            <a href="http">READ INSIGHT</a>
                        </div>
                    </div>
                </Col>
                <Col md={12} lg={8}>
                    <img src={sideBanner} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Featured;