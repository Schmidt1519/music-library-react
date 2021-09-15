import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';


function NavBar() {
    return(
     <div className="NavBar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Music Library</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;