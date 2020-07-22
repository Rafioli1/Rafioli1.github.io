import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>About Gamer Finder</h1>
          <p>Find the right person to spend your days with. Stay happy healthy and on top of your game!</p>
        </Container>
      </Jumbotron>

      <br />
      <br />

      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://image.shutterstock.com/image-photo/group-friends-standing-by-car-260nw-275521547.jpg"
          />
          <Card.Body>
            <Card.Title>Our founders</Card.Title>
            <Card.Text>
              Rafi Biouss a computer engineer who always loved gaming realized
              one day how much more fun hed have with the right people. He
              couldnt find anyone to play with so he decided to do something
              about it and created Gamer Finder.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/b/close-up-photo-handsome-enjoy-mug-hot-beverage-him-his-guy-relaxing-big-chair-coder-php-css-development-outsource-processing-154080174.jpg"
          />
          <Card.Body>
            <Card.Title>Gamer Finder Today</Card.Title>
            <Card.Text>
              Gamer Finder has grown into a huge enterprise and connected
              hundreds of gamers across all platforms. People love the easy to
              use website and we are commited to make it easier to use everyday.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/b/man-making-snow-angel-pile-computer-code-eps-vector-illustration-happy-coder-102712508.jpg"
          />
          <Card.Body>
            <Card.Title>Thank you to our Users</Card.Title>
            <Card.Text>
              Huge growth has happened over the last year and we want to thank
              you the customers for always being there for us and helping us
              grow.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br />
      <br />

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
};

export default about;
