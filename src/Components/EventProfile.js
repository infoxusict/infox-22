import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Assets/Images/CSS/EventProfile.css";


const EventCardProfile = () => {

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

    console.log(json);
  }

  useEffect(() => {
    getAllEvents();
  }, [])

  return (
    //   <div className="programs" id='programs'>
    //       <div id="#Ccard" className="Ccard">
    //   <div className="EventHeading">Event Name</div>
    //   <div className="Eventtime"> 12 Nov 2022</div>
    //   <div className="layer">
    //     <div className="teams">
    //       <div className="teamname">
    //         <h3>player1 (leader)</h3>

    //         <h3>player2</h3>

    //         <h3>player3</h3>

    //         <h3>player4</h3>
    //       </div>
    //       <button className="button-49">more Info</button>
    //     </div>
    //   </div>
    // </div>
    // <div id="#Ccard" className="Ccard">
    //   <div className="EventHeading">Event Name</div>
    //   <div className="Eventtime"> 12 Nov 2022</div>
    //   <div className="layer">
    //     <div className="teams">
    //       <div className="teamname">
    //         <h3>player1 (leader)</h3>

    //         <h3>player2</h3>

    //         <h3>player3</h3>

    //         <h3>player4</h3>
    //       </div>
    //       <button className="button-49">more Info</button>
    //     </div>
    //   </div>
    // </div>
    // <div id="#Ccard" className="Ccard">
    //   <div className="EventHeading">Event Name</div>
    //   <div className="Eventtime"> 12 Nov 2022</div>
    //   <div className="layer">
    //     <div className="teams">
    //       <div className="teamname">
    //         <h3>player1 (leader)</h3>

    //         <h3>player2</h3>

    //         <h3>player3</h3>

    //         <h3>player4</h3>
    //       </div>
    //       <button className="button-49">more Info</button>
    //     </div>
    //   </div>
    // </div>

    //   </div>
    <main class="page-content">
      {
        events.map((event) => {
          // console.log(`/event/${event.eventId}`);
          return (
            <div class="card">
              <div class="content">
                <h2 class="title">{event.eventName}</h2>
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
