import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'

import Timer from '../Component/Timer'

const About = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="align-items-center justify-content-center mt-5">
                    <Col sm={12} className="text-center">
                        <h1 className="text-h1">ABOUT US</h1>
                    </Col>
                </Row>


                <Row className="align-items-center justify-content-center mt-3">
                    <Col sm={10} md={9} lg={8}>
                        <p className="text-p-about">Ladies and Gentlemen. Welcome to yet another exciting and thrilling edition of BattleX. Fasten your seat belts because BattleX'18 is going to provide you the rollercoaster ride of your life. Things are going to be more intense and much more is going to be at stake given the tremendous winnings at hand. So what are you waiting for? Time to channel that passion into productivity and may the odds be forever in your favour.</p>
                    </Col>
                </Row >


            </Container>
        </React.Fragment >
    );
};

export default About;
