import React, { useEffect, useState } from "react";
import "./Assets/Images/CSS/HomeEvents.css";
import SliderDots from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventCard = ({ event, idx }) => (
	<div className={"homeEvent__card " + "id-" + (idx % 2)}>
		<img src={event.eventPic} alt="poster" className="homeEvent__card__img" />
		<div className="homeEvent__card__content">
			<h2 className="name text-center atmosphere">{event.eventName}</h2>
			<p className="date text-sm text-wheat font-semibold uppercase text-center">
				{event.category}
			</p>
			<p className="date text-sm text-gray-500">
				{event.date}, {event.venue}
			</p>
			<p>{event.tagline}</p>
			<button className="mt-2 justify-start flex">
				<a href={"/event/" + event.eventId} className="register teams-btn text-xs">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					More info
				</a>
			</button>
		</div>
	</div>
);

const HomeEvents = () => {
	const [events, setEvents] = useState([]);

	const sliderSettings = {
		dots: false,
		arrows: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		// appendDots: (dots) => {
		// 	return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
		// },
	};

	const parseDate = (event) => {
		const dd = event.date.slice(0, 2),
			mm = event.date.slice(3, 5),
			yyyy = event.date.slice(6, 10);
		// console.log(mm + "/" + dd + "/" + yyyy + " " + event.time);
		return Date.parse(mm + "/" + dd + "/" + yyyy + " " + event.time);
	};
	const getAllEvents = async () => {
		const response = await fetch(
			"https://infoxpression.herokuapp.com/event/get_all_event",

			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ key: "<h1>Newprogrammakinginprogress</h1>" }),
			}
		);

		const json = await response.json();
		// setEvents(json.sort((a, b) => parseDate(a) - parseDate(b)));
      console.log(json)
		let selectedEve = [];
		selectedEve.push(json[0]);
		selectedEve.push(json[7]);
		selectedEve.push(json[16]);
		selectedEve.push(json[21]);
		setEvents(selectedEve);
		// console.log(selectedevents);
		// console.log(json);
	};

	useEffect(() => {
		getAllEvents();
	}, []);

	return (
		<div className=" flex flex-wrap justify-evenly mt-20 md:mt-24">
			<div class="sn_glitch_forNHeading atmosphere uh-heading  ">
				<div class="sn_line_forNHeading">Events</div>
				<div class="sn_line_forNHeading">Events</div>
				<div class="sn_line_forNHeading">Events</div>
				<div class="sn_line_forNHeading">Events</div>
				<div class="sn_line_forNHeading">Events</div>
				<div class="sn_line_forNHeading">Events</div>
				<div class="sn_line_forNHeading">Events</div>
				<div class="sn_line_forNHeading">Events</div>
				<div class="sn_line_forNHeading">Events</div>
			</div>
			<div className="homeEvents">
				<div className="homeEvents__bg">
					{events.map((event, idx) => (
						<EventCard key={event._id} idx={idx} event={event} />
					))}
				</div>
				<div className="homeEvents__md">
					<SliderDots {...sliderSettings}>
						<div className="homeEvents__half__md">
							{events.slice(0, 2).map((event, idx) => (
								<EventCard key={event._id} idx={idx} event={event} />
							))}
						</div>
						<div className="homeEvents__half__md">
							{events.slice(2, 4).map((event, idx) => (
								<EventCard key={event._id} idx={idx} event={event} />
							))}
						</div>
					</SliderDots>
				</div>
				<div className="homeEvents__sm">
					<SliderDots {...sliderSettings}>
						{events.map((event, idx) => (
							<div className="homeEvents__half__sm">
								<EventCard key={event._id} idx={idx} event={event} />
							</div>
						))}
					</SliderDots>
				</div>
        <button className="mx-auto -mt-10 justify-start flex">
				<a href="/events" className="register teams-btn text-xs">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					All Events
				</a>
			</button>
			</div>
		</div>
	);
};
export default HomeEvents;
