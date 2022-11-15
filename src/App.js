import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Keeanu from "./Components/Keeanu";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import ScheduleGrid from "./Components/ScheduleGrid";
// import EventCard from "./Components/EventCard";
// import EventTemplate from "./Components/EventTemplate";
// import Schedule from "./Components/Schedule";
// import Modal from "./Components/Modal";
// import Modal1 from "./Components/Modal1";
// import TeamModal from "./Components/TeamModal";
import ScrollToTop from "./Components/scrollToTop";

import ReactGA from "react-ga";
import { Toaster } from "react-hot-toast";
const trackingId = "G-9D3DN4PEW0";

const Home = React.lazy(() => import("./Components/Home"));
const Uhack = React.lazy(() => import("./Components/Uhack"));
const TeamPage = React.lazy(() => import("./Components/teampage"));
const Legacy = React.lazy(() => import("./Components/legacy"));
const Profile = React.lazy(() => import("./Components/Profile"));
const EvenTemp = React.lazy(() => import("./Components/evenTemp"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Map = React.lazy(() => import("./Components/Map"));
const Event = React.lazy(() => import("./Components/Event"));
const NotFound = React.lazy(() => import("./Components/NotFound"));

// import Navbar_3 from "./Components/Navbar_3";
// import Sponser from './Components/Sponser'
// import ScheduleGrid from "./Components/ScheduleGrid";

// google analytics
ReactGA.initialize(trackingId);

const App = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Toaster />
			<Loader />
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
					<Route path="/event/:eventId" component={EvenTemp} />
					<Route exact path="/team">
						<TeamPage />
					</Route>
					<Route exact path="/legacy">
						<Legacy />
					</Route>
					<Route exact path="/Profile">
						<Profile />
					</Route>
					<Route exact path="/events">
						<Event />
					</Route>
					<Route exact path="/schedule">
            <ScheduleGrid />
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
					<Route path="*" component={NotFound} />
				</Switch>
				<Keeanu />
				<Footer />
			</Router>
		</Suspense>
	);
};

export default App;
