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

  const [tabType, settabType] = useState("all");

  return (
    <>
      {/* <MatrixRain /> */}
      <div className=" mt-20 md:mt-24">
        <div class="sn_glitch_forNHeading atmosphere uh-heading  hel">
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

        <div className="text-white hel flex flex-row uh-bg mx-auto container max-w-[90%] md:max-w-[50%] da-toggle text-xs md:text-xl  mt-12 md:mb-8">
          <button onClick={() => settabType("all")}>All</button>
          <button onClick={() => settabType("Coding")}>Coding</button>
          <button onClick={() => settabType("Electronics")}>Electronics</button>
          <button onClick={() => settabType("Non Tech")}>Non Tech</button>
        </div>

        <div className="grid md:grid-cols-2 grid-col-1">
          {events &&
            events.map(
              (event) =>
                (event.category === tabType || tabType === "all") && (
                  <div className="sch-event-card">
                    <div className="sch-event-pic">
                      <img
                        src={event.eventPic}
                        className="sch-event-img"
                        alt=""
                      />
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
                        <h3 className="sch-event-date ">
                          {event.date}, {event.venue}, {event.category}
                        </h3>
                        {/* <h3 className='sch-event-venue'>E-Block </h3> */}
                      </div>
                      <h3 className="sch-event-desc">{event.about}</h3>
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
                )
            )}
        </div>
      </div>
    </>
  );
}

export default Event;
