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

const Frenchhome = () => (
  <div>
    <br />
    <Link to="/french">
      <button type="button" class="btn btn-outline-secondary">
        Go to the English page
      </button>
    </Link>
    <br />
    <br />
    <Jumbotron>
      <h1>
Bienvenue dans Gamer Finder!</h1>
      <p>
        
        Avez-vous déjà voulu jouer à votre jeu préféré avec d'autres personnes mais
        ne pouvait tout simplement pas trouver la bonne coupe? Eh bien, le chercheur de joueurs fait ça
        processus aussi simple que possible. À travers des centaines de profils de différents
        les joueurs listés trouveront la bonne personne avec qui jouer sera aussi simple que
        gâteau! Passons maintenant aux jeux!
      </p>
      <br />
      <p style={{ color: "#e9ecef" }}>
        <Link to="/gamers">
          <Button variant="secondary">
Trouvez un joueur pour vous</Button>
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
          <h3>
Trouvez un joueur pour vous sur notre page Gamers</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://evounlimited.files.wordpress.com/2012/02/gamers.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>V
Trouvez n'importe quel niveau de joueur, lancez votre recherche dès aujourd'hui et créez un lien qui ne pourra jamais être rompu!</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
    <br />
    <footer>
      <table style={{ width: "100%" }}>
        <tr>
          <th>Explorez</th>
        </tr>
        <tr>
          <Link to="/">
            <td>Page d'acceuil</td>
          </Link>
        </tr>
        <tr>
          <Link to="/adventure">
            <td>
Jeux</td>
          </Link>
        </tr>
        <tr>
          <Link to="/gamers">
            <td>Joueurs/Joueuses</td>
          </Link>
      
        </tr>
        <tr>
          <Link to="/about">
            <td>À propos</td>
          </Link>
        </tr>
        <tr>
          <Link to="/ratings">
            <td>
Notes</td>
          </Link>
        </tr>
      </table>

      <br />

      <p>Auteur: Rafi Biouss</p>
    </footer>
  </div>
);

export default Frenchhome;
