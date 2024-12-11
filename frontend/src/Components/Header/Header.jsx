import React, { Component } from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {
    state = {  } 
    render() { 
        return (
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="/assets/img/Logo_Idee1.jpeg"
                                width="15%"
                                height="15%"
                                className="d-inline-block align-top logo-image"
                                alt="React Bootstrap logo"
                              />
                            </Navbar.Brand>
                    </Container>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#note">Notiz</Nav.Link>
                                <Nav.Link href="#memory">Erinnerung</Nav.Link>
                                <Nav.Link href="#calendar">Kalender</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Something
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
          );;
    }
}
 
export default Header;