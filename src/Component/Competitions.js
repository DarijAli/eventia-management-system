import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import c1 from '../assets/img/c1.png';
import c2 from '../assets/img/c2.png';
import c3 from '../assets/img/c3.png';
import c4 from '../assets/img/c4.png';
import c5 from '../assets/img/c5.png';
import styled from 'styled-components';


const Styles=styled.div`

.row{
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
}

.Row1{
  padding:60px;
}

.imge{
  vertical-align: middle;
  max-width: 100%;
  margin: 0px;


}

.zoom {
    padding: 50px;
    transition: transform .1s;
    width: auto;
    height: auto;
    margin: 0px;
    box-sizing: border-box;
}



@media (min-width: 768px)
.col-md-4 {

    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}

.try{
  margin-bottom:20px;
  &:hover{

    transition: 0.5s;
    transform: scale(1.1);

  }
}


`;

const Competitions = () => {
    return (
        <React.Fragment>
            <Container>
            <Row className="align-items-center justify-content-center mt-5">
                <Col sm={12} className="text-center">
                    <h1 className="text-h1" style={{marginBottom:25,textTransform:'uppercase'}}>Competitions</h1>
                </Col>
            </Row>
            <Styles>
                <Row className="Row1">

                    <Col className="try" md={4} sm={6} zoom>
                        <img src={c1} className="imge" alt="img11" />
                        <center>
                            <h4  style={{color: 'black',marginTop:0,marginBottom:20}}> Counter Strike 1.6 </h4>
                        </center>
                    </Col>

                    <Col className="try" md={4} sm={6} >
                        <img src={c2} className="imge" alt="img11" />
                        <center>
                            <h4 style={{color: 'black',marginTop:0}}> Counter Strike 1.6 </h4>
                        </center>
                    </Col>

                    <Col className="try" md={4} sm={6} >
                        <img src={c3} className="imge" alt="img11" />
                        <center>
                            <h4 style={{color: 'black',marginTop:0}}> Counter Strike 1.6 </h4>
                        </center>
                    </Col>

                    <Col className="try" md={4} sm={6} >
                        <img src={c4} className="imge" alt="img11" />
                        <center>
                            <h4 style={{color: 'black',marginTop:0}}> Counter Strike 1.6 </h4>
                        </center>
                    </Col>

                    <Col className="try" md={4} sm={6} >
                        <img src={c5} className="imge" alt="img11" />
                        <center>
                            <h4 style={{color: 'black',marginTop:0}}> Counter Strike 1.6 </h4>
                        </center>
                    </Col>

               </Row>
              </Styles>
            </Container>
        </React.Fragment >
    );
};

export default Competitions;
