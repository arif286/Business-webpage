import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './MainHeader.css';
const MainHeader = () => {
    const Bars = <FontAwesomeIcon icon={faBars} />;
    return (
      <div className="container-fluid main-header">
        <Navbar className="px-5" expand="md">
          <Navbar.Brand href="#home">{Bars}</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav className="mr-auto">
              <Nav.Link className="nav-link-list" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link-list" href="#link">
                Insights
              </Nav.Link>
              <Nav.Link className="nav-link-list" href="#link">
                Services
              </Nav.Link>
              <Nav.Link className="nav-link-list" href="#link">
                Community
              </Nav.Link>
              <Nav.Link className="nav-link-list" href="#link">
                Events
              </Nav.Link>
              <Nav.Link className="nav-link-list" href="#link">
                About US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default MainHeader;