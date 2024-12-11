import React, { Component } from 'react';
import './footer.css';
import Nav from 'react-bootstrap/Nav';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="#home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
        );
    }
}   
 
export default Footer;