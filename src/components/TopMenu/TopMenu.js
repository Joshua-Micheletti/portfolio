import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import BouncyClick from '../BouncyClick/BouncyClick'
import './TopMenu.css';

class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick() {
        console.log("TopMenu click!");
    }

    render() {
        return(
            <Navbar expand="lg" className="Navbar">
                
                <BouncyClick
                    content=""
                    className="NavbarTitle"
                    onClick={() => {this.handleClick()}}
                    tap="0.99"
                    hover="2"
                >
                    <Navbar.Brand href='#home' className='NavbarTitle'>Tamara Romero Costales</Navbar.Brand>
                </BouncyClick>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <BouncyClick>
                            <Nav.Link href="#home" className="NavbarElement">Home</Nav.Link>
                        </BouncyClick>
                        
                        <BouncyClick>
                            <Nav.Link href="#link" className="NavbarElement">Link</Nav.Link>
                        </BouncyClick>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopMenu;