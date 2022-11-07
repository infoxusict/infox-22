import React from "react";
import { Link } from "react-router-dom";
import "./Assets/Images/CSS/EventProfile.css";

const EventCardProfile = (props) => {
  console.log(props.events);
  return (
    <main className="page-content">
      {props.events.length != 0 ? (
        props.events.map((event) => {
          return (
            <div
              className="card"
              style={{
                backgroundImage: `url(${event.eventId.eventPic})`,
                backgroundSize: "cover",
              }}
            >
              <div className="content">
                <h2 className="title">{event.eventId.eventName}</h2>
                {event.teamName}
                {event.teamId}
                <p className="copy">
                  {event.members.map((item) => {
                    return item;
                  })}
                </p>
                <Link className="btn" to={`/event/${event.eventId}`}>
                  More Info
                </Link>
              </div>
            </div>
            // {event.eventPic}
          );
        })
      ) : (
        <div>
          <img alt="gg" src={require("./Assets/Images/blue.png")}></img>
        </div>
      )}

      {/* <div className="card">
        <div className="content">
          <h2 className="title">UHack</h2>
          <p className="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button className="btn">More Info</button>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2 className="title">Clash Of Companies</h2>
          <p className="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button className="btn">More Info</button>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2 className="title">Capture the FLAG</h2>
          <p className="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button className="btn">More Info</button>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2 className="title">Clash Of Companies</h2>
          <p className="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button className="btn">More Info</button>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <h2 className="title">Clash Of Companies</h2>
          <p className="copy">
            Samrat <br />
            Shivesh
            <br /> Tejasva
          </p>
          <button className="btn">More Info</button>
        </div>
      </div> */}
    </main>
  );
};

export default EventCardProfile;
