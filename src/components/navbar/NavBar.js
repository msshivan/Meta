import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import navLogo from "../../assets/navLogo.png";
import "./navbar.scss";

function NavBar() {
  const navList = [
    {
      id: 1,
      name: "Find Gigs",
    },
    {
      id: 2,
      name: "Hire Talent",
    },
    {
      id: 3,
      name: "Why Us?",
    },
    {
      id: 4,
      name: "About Us",
    },
    {
      id: 5,
      name: "Contact Us",
    },
  ];
  // Nav_onboard
  const Nav_onboard = () => {
    window.location.replace("/page1");
  };
  return (
    <div>
      <Navbar className="nav-height shadow" collapseOnSelect expand="lg">
        {/* <Container> */}
        <Navbar.Brand className="navImage">
          <Link to="/">
            <img src={navLogo} alt="supergigs-nav-logo" className="navlogo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {navList.map((item) => {
              return <Nav.Link eventKey={item.id}>{item.name}</Nav.Link>;
            })}
            <Nav.Link onClick={Nav_onboard} className="signup red-gradient">
              Sign Up
            </Nav.Link>
            <Nav.Link>
              <Link to="/signin">
                <Button className="button signin" variant="primary">
                  Sign In
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default NavBar;
