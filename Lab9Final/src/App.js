import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gamers from "./components/Gamers";
import Adventure from "./components/Adventure";
import Error from "./components/Error";
import Menu from "./components/Menu";
import About from "./components/About";
import Ratings from "./components/Ratings";
import French from "./components/FrenchHome";
import FirstPerson from "./components/FirstPerson";
import ThirdPerson from "./components/ThirdPerson";
import MOBA from "./components/MOBA";

import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/gamers" component={Gamers} />
            <Route path="/adventure" component={Adventure} />
            <Route path="/about" component={About} />
            <Route path="/ratings" component={Ratings} />
            <Route path="/french" component={French} />
            <Route path="/firstperson" component={FirstPerson} />
            <Route path="/thirdperson" component={ThirdPerson} />
            <Route path="/moba" component={MOBA} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
