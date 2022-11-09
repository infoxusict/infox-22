import React, { useEffect, useState } from "react";
// import { GiPaddleSteamer } from "react-icons/gi";

import "./Assets/Images/CSS/sch-event.css";
import MatrixRain from "./MatrixRain";

function Event() {
  const [events, setEvents] = useState([]);
  const parseDate = (event) => {
    const dd = event.date.slice(0, 2),
      mm = event.date.slice(3, 5),
      yyyy = event.date.slice(6, 10);
    console.log(mm + "/" + dd + "/" + yyyy + " " + event.time);
    return Date.parse(mm + "/" + dd + "/" + yyyy + " " + event.time);
  };
  const getAllEvents = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}event/get_all_event`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: "<h1>Newprogrammakinginprogress</h1>" }),
      }
    );

    const json = await response.json();
    setEvents(json.sort((a, b) => parseDate(a) - parseDate(b)));
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
                      href={"/event/" + event.eventId}
                      className="register teams-btn text-xs q12" 
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
                  <h3 className="sch-event-desc">
                    {event.about.split("", 100)}...
                  </h3>
                </div>
                <button className="mt-12 mb-4  md:hidden justify-start flex">
                  <a
                    href={"/event/" + event.eventId}
                    className="register teams-btn text-xs"
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
