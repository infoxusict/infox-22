import React, { useEffect, useState } from "react";
import { GiPaddleSteamer } from "react-icons/gi";
import "./Assets/Images/CSS/sch-event.css";
import MatrixRain from "./MatrixRain";

function Event() {
  const [events, setEvents] = useState([]);

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
    setEvents(json);

    console.log(json);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
      <MatrixRain />
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
        <div className="grid md:grid-cols-2 grid-col-1">
          {events &&
            events.map((event) => (
              <div className="sch-event-card">
                <div className="sch-event-pic">
                  <img src={event.eventPic} className="sch-event-img" alt="" />
                  <button className="mt-12 mb-4 hidden md:block">
                    <a
                      href={"http://localhost:3000/event/" + event.eventId}
                      className="register teams-btn text-xs "
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      More info
                    </a>
                  </button>
                </div>

                <div className="sch-event-info">
                  <h2 className="sch-event-name mt-6 text-2xl  atmosphere break-normal">
                    {event.eventName}
                  </h2>
                  <div className="sch-date-venue">
                    <h3 className="sch-event-date">
                      {event.date}, {event.venue}
                    </h3>
                    {/* <h3 className='sch-event-venue'>E-Block </h3> */}
                  </div>
                  <h3 className="sch-event-desc line-clamp-1">
                    {event.about.split("", 90)}...
                  </h3>
                </div>
                <button className="mt-12 mb-4  md:hidden justify-start flex">
                  <a
                    href={"http://localhost:3000/event/" + event.eventId}
                    className="register teams-btn text-xs "
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    More info
                  </a>
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Event;
