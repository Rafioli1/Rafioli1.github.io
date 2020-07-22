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
          <h1>Gamers!</h1>
          <p>
            The gamers listen below are a variety of gamers from diferent game
            types as well as different skill levels. Find the one that best
            suits your style of gaming and most importantly have fun!
          </p>
        </Container>
      </Jumbotron>

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
            src="https://cdn.mos.cms.futurecdn.net/Xk5zMtiUWpXWg45HLKHfbW-650-80.jpg.webp"
          />
          <Card.Body>
            <Card.Title>Nade Shot</Card.Title>
            <Card.Text>
              Gamer Type: First Person Shooter
              <br />
              Skill Level out of 5: 5 <br />
              Estimated play time: 5 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i2.wp.com/psych2go.net/wp-content/uploads/2017/09/provideogames.jpg?fit=640%2C427&ssl=1"
          />
          <Card.Body>
            <Card.Title>Rafi Biouss</Card.Title>
            <Card.Text>
              Gamer Type: First Person Shooter
              <br />
              Skill Level out of 5: 4 <br />
              Estimated play time: 3 hours/day
              <br />
              Language: English & Armenian
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://s.yimg.com/ny/api/res/1.2/c_PmOyJ9qAFngY4sfwj9iA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTk2MA--/https://s.yimg.com/cd/resizer/2.0/original/6pPMGZo5FH257LKVySCsasFuCPs"
          />
          <Card.Body>
            <Card.Title>Killer123</Card.Title>
            <Card.Text>
              Gamer Type: Third Person Shooter
              <br />
              Skill Level out of 5: 2 <br />
              Estimated play time: 2 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://image1.masterfile.com/getImage/NjExMy0wNzk5MTk1N2VuLjAwMDAwMDAw=AFvcBM/6113-07991957en_Masterfile.jpg"
          />
          <Card.Body>
            <Card.Title>GainGame</Card.Title>
            <Card.Text>
              Gamer Type: MOBA
              <br />
              Skill Level out of 5: 3 <br />
              Estimated play time: 7 hours/day
              <br />
              Language: English & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.technobuffalo.com/sites/technobuffalo.com/files/styles/larger/public/wp/2014/09/willferrell-gamer.jpg"
          />
          <Card.Body>
            <Card.Title>Elija18</Card.Title>
            <Card.Text>
              Gamer Type: First Person Shooter
              <br />
              Skill Level out of 5: 1 <br />
              Estimated play time: 0.5 hours/day
              <br />
              Language: Spanish
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.filamentgames.com/wp-content/uploads/2019/09/istockphoto-935696070-612x612.jpg"
          />
          <Card.Body>
            <Card.Title>Alyssa</Card.Title>
            <Card.Text>
              Gamer Type: Adventure
              <br />
              Skill Level out of 5: 5 <br />
              Estimated play time: 10 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/z/asian-man-playing-video-games-game-110811957.jpg"
          />
          <Card.Body>
            <Card.Title>John Cena</Card.Title>
            <Card.Text>
              Gamer Type: Third Person Shooter
              <br />
              Skill Level out of 5: 2 <br />
              Estimated play time: 1 hour/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.cbc.ca/1.4037996.1490288736!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/steve-saylor.jpg"
          />
          <Card.Body>
            <Card.Title>XXXRifleXXX</Card.Title>
            <Card.Text>
              Gamer Type: First Person Shooter
              <br />
              Skill Level out of 5: 2 <br />
              Estimated play time: 3 hours/day
              <br />
              Language: French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.thestar.com/z8a4a0Qq3Wo_iIr1b01LelQW4iQ=/1200x913/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/life/parent/2011/11/16/is_your_teen_hooked_on_video_games_brain_research_shows_why/video_gamingteen.jpeg"
          />
          <Card.Body>
            <Card.Title>lilRicky</Card.Title>
            <Card.Text>
              Gamer Type: MOBA
              <br />
              Skill Level out of 5: 1 <br />
              Estimated play time: 6 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://scx2.b-cdn.net/gfx/news/2019/addictedtovi.jpg"
          />
          <Card.Body>
            <Card.Title>Gabe</Card.Title>
            <Card.Text>
              Gamer Type: Third Person Shooter
              <br />
              Skill Level out of 5: 2 <br />
              Estimated play time: 2 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://qph.fs.quoracdn.net/main-qimg-f52d4447d69581c305c35ede2f3c9eed.webp"
          />
          <Card.Body>
            <Card.Title>JohnTron</Card.Title>
            <Card.Text>
              Gamer Type: MOBA
              <br />
              Skill Level out of 5: 5 <br />
              Estimated play time: 2 hours/day
              <br />
              Language: English & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://pursuit.ca/wp-content/uploads/2014/06/man-playing-video-game.jpg"
          />
          <Card.Body>
            <Card.Title>Kevin</Card.Title>
            <Card.Text>
              Gamer Type: Adventure
              <br />
              Skill Level out of 5: 4 <br />
              Estimated play time: 2 hours/day
              <br />
              Language: French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/z/happy-boy-joystick-playing-video-game-home-leisure-children-technology-people-concept-smiling-68745099.jpg"
          />
          <Card.Body>
            <Card.Title>Nacho Libre</Card.Title>
            <Card.Text>
              Gamer Type: Adventure
              <br />
              Skill Level out of 5: 1 <br />
              Estimated play time: 12 hours/day
              <br />
              Language: Spanish
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.wisegeek.com/man-in-teal-shirt-with-controller.jpg"
          />
          <Card.Body>
            <Card.Title>Canadian Moose</Card.Title>
            <Card.Text>
              Gamer Type: MOBA
              <br />
              Skill Level out of 5: 1 <br />
              Estimated play time: 1 hour/day
              <br />
              Language: English & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://image1.masterfile.com/getImage/NjkzLTAzMzEyOTM0ZW4uMDAwMDAwMDA=AFoNKF/693-03312934en_Masterfile.jpg"
          />
          <Card.Body>
            <Card.Title>John Mulaney</Card.Title>
            <Card.Text>
              Gamer Type: First Person Shooter
              <br />
              Skill Level out of 5: 2 <br />
              Estimated play time: 6 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://blog.placeit.net/wp-content/uploads/2019/09/pullover-hoodie-mockup-of-a-joyful-gamer-man-playing-video-games-on-a-couch.jpg"
          />
          <Card.Body>
            <Card.Title>BabySitter4</Card.Title>
            <Card.Text>
              Gamer Type: Third Person Shooter
              <br />
              Skill Level out of 5: 3 <br />
              Estimated play time: 3 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://image.shutterstock.com/image-photo/cheeful-involved-girl-playing-video-260nw-535142587.jpg"
          />
          <Card.Body>
            <Card.Title>Right Lane Larry</Card.Title>
            <Card.Text>
              Gamer Type: Adventure
              <br />
              Skill Level out of 5: 4 <br />
              Estimated play time: 4 hours/day
              <br />
              Language: French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://image.freepik.com/free-photo/shot-beautiful-pro-gamer-girl-playing-first-person-shooter-online-video-game-her-personal-computer-neon-room-esport-cyber-games-internet_116317-586.jpg"
          />
          <Card.Body>
            <Card.Title>Amigo</Card.Title>
            <Card.Text>
              Gamer Type: First Person Shooter
              <br />
              Skill Level out of 5: 2 <br />
              Estimated play time: 7 hours/day
              <br />
              Language: Spanish
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.quickanddirtytips.com/sites/default/files/styles/insert_medium/public/images/7313/shutterstock_96928031.jpg?itok=_7tQTwNn"
          />
          <Card.Body>
            <Card.Title>Hulk</Card.Title>
            <Card.Text>
              Gamer Type: First Person Shooter
              <br />
              Skill Level out of 5: 3 <br />
              Estimated play time: 15 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.dotheknowledge.com/images/video-games2.jpg"
          />
          <Card.Body>
            <Card.Title>Japan#1</Card.Title>
            <Card.Text>
              Gamer Type: MOBA
              <br />
              Skill Level out of 5: 5 <br />
              Estimated play time: 8 hours/day
              <br />
              Language: Japanese
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.theconversation.com/files/62740/original/rnk7vh2b-1414162076.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          />
          <Card.Body>
            <Card.Title>HatGuy14</Card.Title>
            <Card.Text>
              Gamer Type: Adventure
              <br />
              Skill Level out of 5: 4 <br />
              Estimated play time: 2 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media.gettyimages.com/photos/senior-black-man-playing-video-games-picture-id935698644?s=170667a"
          />
          <Card.Body>
            <Card.Title>Joshy</Card.Title>
            <Card.Text>
              Gamer Type: third Person Shooter
              <br />
              Skill Level out of 5: 5 <br />
              Estimated play time: 5 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img2.pngio.com/playing-games-png-free-playing-gamespng-transparent-images-playing-video-games-png-300_278.png"
          />
          <Card.Body>
            <Card.Title>Jordan23</Card.Title>
            <Card.Text>
              Gamer Type: MOBA
              <br />
              Skill Level out of 5: 4 <br />
              Estimated play time: 12 hours/day
              <br />
              Language: English & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://previews.123rf.com/images/dolgachov/dolgachov1710/dolgachov171001498/88065303-technology-gaming-and-people-concept-boy-in-headphones-playing-video-game-on-laptop-computer-at-home.jpg"
          />
          <Card.Body>
            <Card.Title>Bulls</Card.Title>
            <Card.Text>
              Gamer Type: Adventure
              <br />
              Skill Level out of 5: 3 <br />
              Estimated play time: 2 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.imgur.com/jiXk2YQ_d.webp?maxwidth=728&fidelity=grand"
          />
          <Card.Body>
            <Card.Title>Robbers</Card.Title>
            <Card.Text>
              Gamer Type: First Person Shooter
              <br />
              Skill Level out of 5: 5 <br />
              Estimated play time: 5 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://icdn2.digitaltrends.com/image/digitaltrends/5063130_ml.jpg"
          />
          <Card.Body>
            <Card.Title>Math Guy</Card.Title>
            <Card.Text>
              Gamer Type: Third Person Shooter
              <br />
              Skill Level out of 5: 4 <br />
              Estimated play time: 6 hours/day
              <br />
              Language: English & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1527140768000/photosp/b05a29d6-5a95-41e0-b84d-5bc535c6d8af/stock-photo-teenager-technology-entertainment-person-glasses-headset-goggles-device-teen-b05a29d6-5a95-41e0-b84d-5bc535c6d8af.jpg"
          />
          <Card.Body>
            <Card.Title>printerpointer</Card.Title>
            <Card.Text>
              Gamer Type: Moba
              <br />
              Skill Level out of 5: 3 <br />
              Estimated play time: 9 hours/day
              <br />
              Language: English
              <br />
            </Card.Text>
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
