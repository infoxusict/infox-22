import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Assets/Images/CSS/EventProfile.css";


const EventCardProfile = (props) => {

  const [events, setEvents] = useState([]);



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

    // console.log(json);
  }

  const getEventById = async (id) => {

    const response = await fetch('https://infoxpression.herokuapp.com/event/get_event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: "<h1>Newprogrammakinginprogress</h1>", eventId: id })
    });

    const json = await response.json();
    return json;
  }

  useEffect(() => {
    console.log(props.events)
    getAllEvents();
  }, [])

  return (

    <main class="page-content">
      {
        props.events.map(async(event) => {
          // console.log(`/event/${event.eventId}`);
          const dataTomap = await getEventById(event.eventId);
          console.log(dataTomap)

          return (
            <div class="card" style={{ backgroundImage: `url(${dataTomap.eventPic})` }}>

              <div class="content">

                <h2 class="title">{dataTomap.eventName}</h2>
                <p class="copy">
                  Samrat <br />
                  Shivesh
                  <br /> Tejasva
                </p>
                <Link class="btn" to={`/event/${event.eventId}`} >More Info</Link>
              </div>
            </div>
            // {event.eventPic}
          )
        })
      }

      {/* <div class="card">
        <div class="content">
          <h2 class="title">UHack</h2>
          <p class="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button class="btn">More Info</button>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h2 class="title">Clash Of Companies</h2>
          <p class="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button class="btn">More Info</button>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h2 class="title">Capture the FLAG</h2>
          <p class="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button class="btn">More Info</button>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h2 class="title">Clash Of Companies</h2>
          <p class="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button class="btn">More Info</button>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h2 class="title">Clash Of Companies</h2>
          <p class="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button class="btn">More Info</button>
        </div>
      </div> */}
    </main>
  );
};

export default EventCardProfile;
