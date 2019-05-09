import React, { Component } from 'react';
import Hero from './EventInfo';
import {
    Container,
    Navbar,
    Nav,
    Button,
    NavDropdown
} from 'react-bootstrap';
import Styled from 'styled-components'

import logo from '../assets/img/logo/logo.svg'

const Styles = Styled.div`
    .navbar{
        background-color: transparent;
    }

    .nav-link  {
        margin-right: 10px;
        color: #efefef !important;

        &:hover {
            color: #000 !important;
            background-color: #efefef;
            border: 1px solid #efefef;
            border-radius: 10px;
            transition: 0.5s;
        }
    }
`

class Navigationbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Styles>
                    <Navbar expand="md" fixed="top" sticky="top" className="p-4">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top m-0"
                                    alt="Eventia Logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="Hero">Home</Nav.Link>
                                    <Nav.Link href="#about">About</Nav.Link>
                                    <NavDropdown
                                        title="Competition"
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item className="navItem" href="#action/3.1">Module 1</NavDropdown.Item>
                                        <NavDropdown.Item className="navItem" href="#action/3.2">Module 2</NavDropdown.Item>
                                        <NavDropdown.Item className="navItem" href="#action/3.3">Module 3</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#team">Team</Nav.Link>
                                    <Button href="#" variant="outline-light">Register Now</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Styles>
            </React.Fragment>
        );
    }
}

export default Navigationbar;
