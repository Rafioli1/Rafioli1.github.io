import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Commerce = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Ratings</h1>
        <p>
          Us at Gamer Finder want to offer the best quality of gamers. Let us
          know if you had fun or if the gamers were trolls. We want to keep a
          positive enviroment and your ratings help us do that.
        </p>
        <br />
      </Jumbotron>

      <Jumbotron>
        <form>
          <label>
            Gamertag:
            <input type="text" name="firstname" />
          </label>
          <br />
          <br />
          <label>
            Username:
            <input type="text" name="lastname" />
          </label>
          <br />
          <br />
          <label for="email">Email:</label>
          <input type="email" id="email" size="30" required />
          <br />
          <br />
          Gamer:
          <select>
            <option value="Nade Shot">Nade Shot</option>
            <option value="Rafi Biouss">Rafi Biouss</option>
            <option value="Killer123">Killer123</option>
            <option value="GainGame">GainGame</option>
            <option value="Elija18">Elija18</option>
            <option value="Alyssa">Alyssa</option>
            <option value="John Cena">John Cena</option>
            <option value="XXXRifleXXX">XXXRifleXXX</option>
            <option value="lilRicky">lilRicky</option>
            <option value="Gabe">Gabe</option>
            <option value="JohnTron">JohnTron</option>
            <option value="Kevin">Kevin</option>
            <option value="Nacho Libre">Nacho Libre</option>
            <option value="Canadian Moose">Canadian Moose</option>
            <option value="John Mulaney">John Mulaney</option>
            <option value="BabySitter4">BabySitter4</option>
            <option value="Right Lane Larry">Right Lane Larry</option>
            <option value="Amigo">Amigo</option>
            <option value="Hulk">Hulk</option>
            <option value="Japan#1">Japan#1</option>
            <option value="HatGuy14">HatGuy14</option>
            <option value="Joshy">Joshy</option>
            <option value="Jordan23">Jordan23</option>
            <option value="Bulls">Bulls</option>
            <option value="Robbers">Robbers</option>
            <option value="Math Guy">Math Guy</option>
          </select>
          <br />
          <br />
          What rating would you give your gaming partner (out of 5):
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <br />
          Comments about your Gamer:
          <br />
          <textarea />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </Jumbotron>

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

export default Commerce;
