import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../images/logo_transparent_white.png'

const NavBar = ({ effect }) => {

    let projActive = ''
    let contactActive = ''
    console.log(effect)

    if( effect === 'Projects') {
        projActive = 'is-current-proj'
    } else if (effect === 'Contact'){
        contactActive = 'is-current-contact'
    } else {
        projActive = ''
        contactActive = ''
    }

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="main-nav" fixed='top' >
            <Navbar.Brand href="#home"> <img className="logo" src={ Logo } alt="Logo" width="50px" height = "50px"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {/* <Nav.Link href="#About" className="link">About</Nav.Link> */}
                    <Nav.Link href="#Projects" className="link"><strong className={projActive}>Projects</strong> </Nav.Link>
                    <Nav.Link href="#Contact" className="link"><strong className={contactActive}>Contact</strong></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar