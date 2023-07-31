import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faUser, faTags, faRectangleList, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import '/Users/shay/Desktop/capStone/lensAcademia-frontEnd/lensAcademia/src/App.css';

const CustomNavbar = () => {
  const navbarStyle = {
    backgroundColor: '#A6A0A0',
  };

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Container>
        <Navbar.Brand href="/">LensAcademia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             
            <Nav.Link href="/researchpapers" className="navbar-links">
              <FontAwesomeIcon icon={faNewspaper} /> Research Papers
            </Nav.Link>
            <Nav.Link href="/authors" className="navbar-links">
              <FontAwesomeIcon icon={faUser} /> Authors
            </Nav.Link>
            <Nav.Link href="/keywords" className="navbar-links">
              <FontAwesomeIcon icon={faTags} /> Keywords
            </Nav.Link>
            <Nav.Link href="/tgs" className="navbar-links">
              <FontAwesomeIcon icon={faRectangleList} /> Topic Groups
            </Nav.Link>
            <Nav.Link href="/postresearchpaper" className="navbar-links">
              <FontAwesomeIcon icon={faPlusSquare} /> Add Research Paper 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
