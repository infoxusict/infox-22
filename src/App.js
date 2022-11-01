import React, { useEffect, useState } from "react";
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
import Profile from "./Components/Profile"
import Loader from "./Components/Loader";
import Modal from "./Components/Modal";
import Modal1 from "./Components/Modal1";
import TeamModal from "./Components/TeamModal";
// import Navbar_3 from "./Components/Navbar_3";
// import Sponser from './Components/Sponser'
import EvenTemp from "./Components/evenTemp";

const App = () => {

  // let events = [];
  const [events,setEvents] = useState([]);

  const getAllEvents = async () => {
    const response = await fetch('https://infoxpression.herokuapp.com/event/get_all_event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: "<h1>Newprogrammakinginprogress</h1>" })
    });

    const json = await response.json();
    setEvents(json);

    console.log(json);
  }

  useEffect(() => {
    getAllEvents();
  }, [])


  return (
    <>
      <Router>
        {/* <Navbar_3/> */}
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
          <Route exact path="/event/name">
            <EventTemplate />
          </Route>

          {/* Mapping Events */}

          {
            events.map((event) => {
              // console.log(`/event/${event.eventId}`);
              return <Route exact path={`/event/${event.eventId}`}>
                <EvenTemp data={event}/>
              </Route>
            })
          }

          <Route exact path="/team">
            <TeamPage />
          </Route>
          <Route exact path="/legacy">
            <Legacy />
          </Route>

          <Route exact path="/Profile">
            <Profile />
          </Route>

          <Route exact path="/event">
            <EventTemplate />
          </Route>

          {/* <Route exact path="/modal">
          <Modal data={modalObject}
              // buttonName="Complete Registration"
              // tempuserObject={tempuserObject}
              // userDetails={userDetails}
              // profileDATA={profileDATA}
              // setprofileDATA={setprofileDATA}
              // setAuthKey={setAuthKey}
              />
          </Route> */}

          <Route path="/modal">
            <TeamModal/>
          </Route>

          <Route exact path="/loader">
            <Loader />
          </Route>

        </Switch>
        <Keeanu />
        <Footer />
      </Router>
    </>
  );
};

export default App;
