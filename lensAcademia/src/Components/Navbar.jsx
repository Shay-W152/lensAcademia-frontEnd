// src/components/Navbar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faUser, faTags, faRectangleList } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">LensAcademia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/researchpapers">
              <FontAwesomeIcon icon={faNewspaper} /> Research Papers
            </Nav.Link>
            <Nav.Link href="/authors">
              <FontAwesomeIcon icon={faUser} /> Authors
            </Nav.Link>
            <Nav.Link href="/keywords">
              <FontAwesomeIcon icon={faTags} /> Keywords
            </Nav.Link>
            <Nav.Link href="/tgs">
               
              <FontAwesomeIcon icon={faRectangleList} /> Topic Groups
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
