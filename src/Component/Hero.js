import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <React.Fragment>
            <Row className="align-items-center justify-content-center hero-mt">
                <Col md={12} className="text-center">
                    <h1 className="mb-4 text-white hero-text-h1">The Challenges of Business Innovation</h1>
                    <p className="mb-5 text-white hero-text-p">April 17-21, 2019 • Vancouver</p>
                    <p>
                        <Button size="sm" href="#" variant="primary" className="px-4 py-3">
                            Get Your Ticket
                        </Button>
                        <span className="hero-text-span mx-5 text-light">OR</span>
                        <a href="#learn" className="hero-text-span mx-2 text-light btn btn-outline-primary btn-lg">
                            Learn More
                        </a>
                    </p>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Hero;