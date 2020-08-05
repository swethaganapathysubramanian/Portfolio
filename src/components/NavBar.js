import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../images/logo_transparent_white.png'

const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="main-nav" fixed='top' >
            <Navbar.Brand href="#home"> <img className="logo" src={ Logo } alt="Logo" width="50px" height = "50px"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {/* <Nav.Link href="#About" className="link">About</Nav.Link> */}
                    <Nav.Link href="#Projects" className="link">Projects</Nav.Link>
                    <Nav.Link href="#Contact" className="link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar