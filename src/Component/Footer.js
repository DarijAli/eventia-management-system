import React,{ Component } from 'react';
import styled from 'styled-components';
import { Container,Row,Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import logo from '../assets/img/fb.jpg';
import logo1 from '../assets/img/logo/logo2.svg';

const Styles=styled.div`

footer{
  padding: 50px 0 100px;
  background-color: #0b031b;
  display: block;
}

img{
  vertical-align:middle;
  max-width:100%;
}

.row{
    display: flex;
    flex-wrap: wrap;
    margin-right: 15px;
    margin-left: 15px;
}

@media (min-width: 992px)
.footerin {
    max-width: 960px;
}

.footerin {
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
}

@media (min-width: 768px)
.col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
}

.Headbox{
position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
}

.head{
  position: relative;
 margin-top: 50px;
}

div{
  display: block;
}

.bottom{
  margin-bottom:30px;
}

center {
    display: block;
    text-align: center;
}

.Social{
  list-style-type: none;
    list-style-position: initial;
    list-style-image: initial;
    padding: 0;
    margin: 0;
}

.lists{
  display: inline-block;
margin: 5px;
}
}

`;

class Footer extends Component{
  render(){
    return(
      <Styles>
      <footer className="offooter">

          <Container  className="footerin">
            <Row className="row">
                <Col md={3} className="Headbox">
                  <div className="head">
                    <div className="bottom">
                      <div className="logobox">
                        <img src={logo1} />
                      </div>
                    </div>
                    <center>
                      <ul className="Social">
                        <li className="lists"> <SocialIcon url="http://twitter.com" /></li>
                        <li className="lists"> <SocialIcon url="http://facebook.com" /></li>
                        <li className="lists"> <SocialIcon url="https://github.com" /></li>
                      </ul>

                    </center>
                  </div>

                </Col>
              </Row>
          </Container>

        </footer>
      </Styles>
    );
  }
}


export default Footer;
