import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'

import Timer from '../Component/Timer'

const EventFeatures = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="align-items-center justify-content-center mt-5">
                    <Col sm={12} className="text-center">
                        <h1 className="text-h1">Event Features</h1>
                    </Col>
                </Row>
                <Row className="justify-content-start">
                    <Col sm={10} md={9} lg={8}>
                        <p className="text-p-eventInfo text-uppercase eventInfo-mr">Conference begins in</p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Timer />
                </Row>

                <Row className="align-items-center justify-content-center mt-3">
                    <Col sm={10} md={9} lg={8}>
                        <p className="text-p-eventInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates in iusto hic temporibus, dolorum eius quisquam libero rerum voluptate, rem ab neque quasi officia dolorem quis provident. Atque, tempora id.</p>
                    </Col>
                </Row >
                <Row className="align-items-center justify-content-center mt-3">
                    <Col sm={10} md={9} lg={8}>
                        <p className="text-p-eventInfo">Praesentium, harum, omnis. Pariatur id illo, veritatis possimus itaque molestiae modi reprehenderit magnam necessitatibus animi sapiente, rem est impedit debitis quidem illum, dignissimos velit aspernatur perferendis fuga. Quisquam voluptatem, eveniet.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                <Button size="lg" href="#" variant="primary" className="px-4 py-3">
                    Get Your Ticket
                </Button>
                </Row>
            </Container>
        </React.Fragment >
    );
};

export default EventFeatures;
