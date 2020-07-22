import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

const Commerce = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>First Person Shooters</h1>
          <p>
            Confused as to what a First Person Shooter game is? Below are some
            popular examples listed from todays gaming world.
            Click what youd like to play and find a Gamer Today!
          </p>
        </Container>
      </Jumbotron>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>First Person Shooter</strong> Check out some amazing games.
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
            src="https://cdn.vox-cdn.com/thumbor/YGsdPDRr7Vp1pSQIf2xr46v74c0=/0x0:1920x1080/1200x800/filters:focal(304x337:610x643)/cdn.vox-cdn.com/uploads/chorus_image/image/66471916/AGB_WZ_LAUNCH_001.0.jpg"
          />
          <Card.Body>
            <Card.Title>Warzone</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/battlefield-1-keyart-5452x3859.jpg.adapt.crop1x1.767p.jpg"
          />
          <Card.Body>
            <Card.Title>Battle Field</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.vox-cdn.com/thumbor/4lcShxCTWmtzM3lf5Yq5v2IUNdg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19858273/LogoVersion_Beta_Key_Art_VALORANT.jpg"
          />
          <Card.Body>
            <Card.Title>Valorant</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://store-images.s-microsoft.com/image/apps.16740.13958823218105189.5a0e6185-5389-4d7e-8836-9555f629f20e.df6a39be-5261-4c35-9a7c-9a12bbaca17a?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF"
          />
          <Card.Body>
            <Card.Title>Call Of Duty</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>


   

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.player.one/sites/player.one/files/styles/lg/public/2020/01/19/1.head.png"
          />
          <Card.Body>
            <Card.Title>Left For Dead</Card.Title>
            <Button variant="dark">Select</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/cc/6e/c1/cc6ec196ab74239fa56baef404816865.jpg"
          />
          <Card.Body>
            <Card.Title>Zombies</Card.Title>
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
