import React from "react";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import TeamPage from "./Components/teampage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Keeanu from "./Components/Keeanu";
// import EventCard from "./Components/EventCard";
import EventTemplate from "./Components/EventTemplate";
import Schedule from "./Components/Schedule";
import Legacy from "./Components/legacy";
import Uhack from "./Components/Uhack";
import ScrollToTop from "./Components/scrollToTop";

import Contact from "./Components/Contact";
import Map from "./Components/Map";
import EvenTemp from "./Components/evenTemp";

// import Navbar_3 from "./Components/Navbar_3";
// import Sponser from './Components/Sponser'

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar_3/> */}
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div className="Home">
              <Home page="home" />
            </div>
          </Route>
          <Route exact path="/event">
            <Schedule />
          </Route>
          {/* <Route exact path="/event/name">
            <EventTemplate />
          </Route> */}
          <Route exact path="/team">
            <TeamPage />
          </Route>
          <Route exact path="/legacy">
            <Legacy />
          </Route>
          <Route exact path="/uhack">
            <Uhack />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/reach">
            <Map />
          </Route>
          <Route exact path="/event/name">
            <EvenTemp />
          </Route>
        </Switch>
        <Keeanu />
        <Footer />
      </Router>
    </>
  );
};

export default App;
