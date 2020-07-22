import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Gamer Finder!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Game Type" id="basic-nav-dropdown">
              <NavDropdown.Item href="/firstperson">
                First Person Shooter
              </NavDropdown.Item>
              <NavDropdown.Item href="/thirdperson">
                Third Person Shooter
              </NavDropdown.Item>
              <NavDropdown.Item href="/moba">MOBA</NavDropdown.Item>
              <NavDropdown.Item href="/adventure">Adventure</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/gamers">Gamers</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/ratings">Ratings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
