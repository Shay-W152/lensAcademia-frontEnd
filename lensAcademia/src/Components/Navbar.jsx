import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faNewspaper, faUser, faTags, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import '/Users/shay/Desktop/capStone/lensAcademia-frontEnd/lensAcademia/src/App.css'

const CustomNavbar = () => {
  const navbarStyle = {
    backgroundColor: '#A6A0A0',  
    color: '#fff', 
    fontWeight: 'bold',  
  };

  const navLinkStyle = {
    color: '#fff', 
    marginRight: '10px',  
  };

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Container>
        <Navbar.Brand href="/">LensAcademia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/researchpapers" style={navLinkStyle}>
              <FontAwesomeIcon icon={faNewspaper} /> Research Papers
            </Nav.Link>
            <Nav.Link href="/authors" style={navLinkStyle}>
              <FontAwesomeIcon icon={faUser} /> Authors
            </Nav.Link>
            <Nav.Link href="/keywords" style={navLinkStyle}>
              <FontAwesomeIcon icon={faTags} /> Keywords
            </Nav.Link>
            <Nav.Link href="/tgs" style={navLinkStyle}>
              <FontAwesomeIcon icon={faRectangleList} /> Topic Groups
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
