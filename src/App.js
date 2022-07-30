import React from "react";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import TeamPage from "./Components/teampage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Keeanu from './Components/Keeanu'
import EventCard from "./Components/EventCard";
import EventTemplate from "./Components/EventTemplate";
import Schedule from "./Components/Schedule";
import Legacy from "./Components/legacy";
// import Sponser from './Components/Sponser'

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Keeanu /> */}
      <Switch>
        <Route exact path="/">
          <div className="Home">
            <Home />
          </div>
        </Route>
        <Route exact path="/event">
          <Schedule />
        </Route>
        <Route exact path="/event/name">
          <EventTemplate />
        </Route>
        <Route exact path="/team">
          <TeamPage />
        </Route>
        <Route exact path="/legacy">
          <Legacy />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
