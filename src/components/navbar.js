import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"; // ⬅️ for custom styles

function Navigationbar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div expand="lg" className={`sticky-top navbar-wrapper ${isTop ? "expanded" : "shrinked"}`}>
      <Navbar expand="lg" >
        <Container >
          <Navbar.Brand as={Link} to="/home">
            <img
              src="https://aizynq.com/assets/img/logo.jpeg"
              alt="logo"
              className={`navbar-logo ${isTop ? "logo-large" : "logo-small"}`}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="mx-3 navbar-text fw-bold" as={Link} to="/home">Home</Nav.Link>

              <NavDropdown
                  title="Products"
                  id="tablets-dropdown"
                  className="mx-3 fw-bold hover-dropdown dropdown-title-custom dropdown-hover"
                >
                  <NavDropdown.Item className="navbar-text" as={Link} to="/m1">Milbook F10</NavDropdown.Item>
                  <NavDropdown.Item className="navbar-text" as={Link} to="/azr_nova">AZR Nova</NavDropdown.Item>
                  <NavDropdown.Item className="navbar-text" as={Link} to="/milbook-f40">Milbook F40</NavDropdown.Item>
                  <NavDropdown.Item className="navbar-text" as={Link} to="/milbook-a81">Milbook A81</NavDropdown.Item>
                  <NavDropdown.Item className="navbar-text" as={Link} to="/milbook-a16">Milbook A16</NavDropdown.Item>
                </NavDropdown>

              <NavDropdown title="Services" id="notebooks-dropdown" className="mmx-3 fw-bold hover-dropdown dropdown-title-custom dropdown-hover">
                <NavDropdown.Item className="navbar-text" as={Link} to="/milbook-f10">Milbook F10</NavDropdown.Item>
                <NavDropdown.Item className="navbar-text" as={Link} to="/milbook-f20">Milbook F20</NavDropdown.Item>
                <NavDropdown.Item className="navbar-text" as={Link} to="/milbook-f40">Milbook F40</NavDropdown.Item>
                <NavDropdown.Item className="navbar-text" as={Link} to="/milbook-a81">Milbook A81</NavDropdown.Item>
                <NavDropdown.Item className="navbar-text" as={Link} to="/milbook-a16">Milbook A16</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="mx-1 navbar-text fw-bold" as={Link} to="/gallery">Where to Buy</Nav.Link>
              <Nav.Link className="mx-1 navbar-text fw-bold" as={Link} to="/jobs">Video</Nav.Link>
              <Nav.Link className="mx-1 navbar-text fw-bold" as={Link} to="/about">About</Nav.Link>
              <Nav.Link className="mx-1 navbar-text fw-bold" as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
