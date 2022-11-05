import React, { useEffect, useState } from 'react'
import { GiPaddleSteamer } from 'react-icons/gi';
import "./Assets/Images/CSS/sch-event.css"
import MatrixRain from './MatrixRain'

function Event() {

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
    <div className='sch-event-parent'>
    <MatrixRain/>
    <h1
                  className="fn_title theme HeadH3Res pb-9"
                  data-wait={1000}
                  data-speed={8}
                  style={{width: "100vw"}}
                >
                  Events
                </h1>
    {events && events.map( (event)=>
        (
    <div className='sch-event-card'>
        <div className="sch-event-pic">
            <img src={event.eventPic} className="sch-event-img" alt="" />
        </div>
        <div className="sch-event-info">
            <h2 className="sch-event-name">{event.eventName}</h2>
            <div className='sch-date-venue'>
                <h3 className="sch-event-date">{event.date}, E block</h3>
                {/* <h3 className='sch-event-venue'>E-Block </h3> */}
            </div>
            <h3 className="sch-event-desc line-clamp-1">
                {event.description[0].split("", 150)}...
            </h3>
            <button>
            <a href={"http://localhost:3000/event/"+event.eventId} className="register team-btn sch-event-team-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Visit Event
                    </a>
            </button>
        </div>
    </div>
    )
    )}
    </div>
  )
}

export default Event