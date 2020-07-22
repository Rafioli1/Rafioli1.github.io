import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const Commerce = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Adventure</h1>
          <p>
          Confused as to what an Adventure game is? Below are some popular examples listed from todays gaming world. 
          Click what youd like to play and find a Gamer Today!
          </p>
        </Container>
      </Jumbotron>

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Adventure</strong>  Check out some amazing games!
      </div>

      <br />

      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to="/firstperson">
          <button type="button" class="btn btn-outline-secondary">
            First Person Shooter
          </button>
        </Link>
        <Link to="/thirdperson">
          <button type="button" class="btn btn-outline-secondary">
            Third Person Shooter
          </button>
        </Link>
        <Link to="/moba">
          <button type="button" class="btn btn-outline-secondary">
            MOBA
          </button>
        </Link>
        <Link to="/adventure">
          <button type="button" class="btn btn-outline-secondary">
            Adventure
          </button>
        </Link>
      </div>
      <br />
      <br />

      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://compass-ssl.xbox.com/assets/34/bb/34bb1efc-0142-4ef3-bb04-c15c8439937e.jpg?n=Minecraft_Sneaky-Slider-1084_Buzzy-Bees_1600x675.jpg"
          />
          <Card.Body>
            <Card.Title>MineCraft</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://thewitcher.com/img/witcher3/poster.7.jpg"
          />
          <Card.Body>
            <Card.Title>The Witcher 3</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/screenshot-gallery/the-legend-of-zelda-breath-of-the-wild-switch-screenshot01.jpg"
          />
          <Card.Body>
            <Card.Title>Legend of Zelda</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i1.wp.com/metro.co.uk/wp-content/uploads/2012/12/8252729323_5b982cb7be_o1.jpg?quality=90&strip=all&zoom=1&resize=644%2C452&ssl=1"
          />
          <Card.Body>
            <Card.Title>Last of Us</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg"
          />
          <Card.Body>
            <Card.Title>God of War</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://d2skuhm0vrry40.cloudfront.net/2015/articles/1/8/2/8/4/5/2/uncharted-4-review-1462863882364.jpg/EG11/thumbnail/750x422/format/jpg/quality/60"
          />
          <Card.Body>
            <Card.Title>Uncharted</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
      </CardColumns>

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

export default Commerce;
