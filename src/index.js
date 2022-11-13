import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// css imports
import './index.css';
import "./Components/Assets/Images/CSS/aboutus.css";
import "./Components/Assets/Images/CSS/Banner.css";
import "./Components/Assets/Images/CSS/Carousel.css";
import "./Components/Assets/Images/CSS/Contact.css"
import "./Components/Assets/Images/CSS/sch-event.css";
import "./Components/Assets/Images/CSS/EventCard.css";
import "./Components/Assets/Images/CSS/eventTemp.css";
import "./Components/Assets/Images/CSS/uhack.css";
import "./Components/Assets/Images/CSS/teammodal.css";
import "./Components/Assets/Images/CSS/EventProfile.css";
import "./Components/Assets/Images/CSS/eventTemp.css";
import "./Components/Assets/Images/CSS/Footer.css";
import "./Components/Assets/Images/CSS/glimpses.css";
import "./Components/Assets/Images/CSS/glitch.css";
import "./Components/Assets/Images/CSS/Home.css";
import "./Components/Assets/Images/CSS/HomeEvents.css";
import "./Components/Assets/Images/CSS/Keeanu.css";
import "./Components/Assets/Images/CSS/legacy.css";
import "./Components/Assets/Images/CSS/glitch.css";
import "./Components/Assets/Images/CSS/Map.css";
import "./Components/Assets/Images/CSS/MAtrixRain.css";
import "./Components/Assets/Images/CSS/Navbar.css"
import "./Components/Assets/Images/CSS/modal.css";
import "./Components/Assets/Images/CSS/Navbar.css";
import "./Components/Assets/Images/CSS/Home.css";
import "./Components/Assets/Images/CSS/profile.css";
import "./Components/Assets/Images/CSS/sch-grid.css"
import "./Components/Assets/Images/CSS/sponser.css";
import "./Components/Assets/Images/CSS/glitch.css";
import "./Components/Assets/Images/CSS/sponser.css"
import "./Components/Assets/Images/CSS/glitch.css"
import "./Components/Assets/Images/CSS/Home.css"
import "./Components/Assets/Images/CSS/glitch.css"
import "./Components/Assets/Images/CSS/team.css";
import "./Components/Assets/Images/CSS/teammodal.css"
import "./Components/Assets/Images/CSS/teammodal.css";
import "./Components/Assets/Images/CSS/teampage.css";
import "./Components/Assets/Images/CSS/glitch.css";
import "./Components/Assets/Images/CSS/Contact.css";
import "./Components/Assets/Images/CSS/uhack.css";
import "./Components/Assets/Images/CSS/Schedule.css"
import "./Components/Assets/Images/CSS/sch-event.css";

import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


serviceWorkerRegistration.register();
