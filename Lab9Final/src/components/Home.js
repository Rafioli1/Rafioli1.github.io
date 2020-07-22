import React, { useState } from "react";

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
import { Link } from "react-router-dom";
import { SketchPicker } from "react-color";
import Alert from "react-bootstrap/Alert";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const home = () => (
  <div>
    <br />
    <Link to="/french">
      <button type="button" class="btn btn-outline-secondary">
        Aller à la page française
      </button>
    </Link>
    <br />
    <br />
    <Jumbotron>
      <h1>Welcome to Gamer Finder!</h1>
      <p>
        Have you ever wanted to play your favorite game with other people but
        just couldn't find the right person? Well gamer finder makes that
        process easy as possible. Through hundreds of profiles of different
        gamers listed finding the right person to play with will be as easy as
        cake! Now lets get out there and get into the games!
      </p>
      <br />
      <p style={{ color: "#e9ecef" }}>
        <Link to="/gamers">
          <Button variant="secondary">Find a Gamer For You</Button>
        </Link>
      </p>
    </Jumbotron>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.windowsreport.com/wp-content/uploads/2020/04/Gamer-930x620.jpg"
          alt="1"
        />
        <Carousel.Caption>
          <h3>Find A Gamer For You on Our Gamers Page</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://evounlimited.files.wordpress.com/2012/02/gamers.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
            Find any level of gamer, start your search today and create a bond
            that can never be broken!
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
    <br />
    <footer>
      <table style={{ width: "100%" }}>
        <tr>
          <th>Explore</th>
        </tr>
        <tr>
          <Link to="/">
            <td>Home</td>
          </Link>
        </tr>
        <tr>
          <Link to="/adventure">
            <td>Games</td>
          </Link>
        </tr>
        <tr>
          <Link to="/gamers">
            <td>Gamers</td>
          </Link>
        </tr>
        <tr>
          <Link to="/about">
            <td>About</td>
          </Link>
        </tr>
        <tr>
          <Link to="/ratings">
            <td>Ratings</td>
          </Link>
        </tr>
      </table>

      <br />

      <p>Author: Rafi Biouss</p>
    </footer>
  </div>
);

export default home;
