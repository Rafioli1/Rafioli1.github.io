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
          <h1>Third Person Shooters</h1>
          <p>
          Confused as to what a Third Person Shooter game is? Below are some popular examples listed from todays gaming world.
        Click what youd like to play and find a Gamer Today!
          </p>
        </Container>
      </Jumbotron>

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Third Person Shooters</strong> Check out some amazing games!
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
            src="https://static-assets-prod.epicgames.com/fortnite/static/webpack/8f9484f10eb14f85a189fb6117a57026.jpg"
          />
          <Card.Body>
            <Card.Title>Fortnite</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.mos.cms.futurecdn.net/Cu7Nf4Hd59ErDmK6a7ZvXX-1200-80.jpg"
          />
          <Card.Body>
            <Card.Title>Splinter Cell</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2020/04/29/5d88688d/2020acranking.jpg"
          />
          <Card.Body>
            <Card.Title>Assasains Creed</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn1.dotesports.com/wp-content/uploads/2019/08/20215925/2019-08-09-image-19.jpg"
          />
          <Card.Body>
            <Card.Title>PUB G</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media.playstation.com/is/image/SCEA/warframe-screenshot-06-ps4-us-05dec2018?$MediaCarousel_Original$"
          />
          <Card.Body>
            <Card.Title>WarFrame</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.images.express.co.uk/img/dynamic/143/590x/GTA-6-1211120.jpg?r=1575112303195"
          />
          <Card.Body>
            <Card.Title>Grand Theft Auto</Card.Title>
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
