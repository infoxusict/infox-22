import React from "react";
// import { useHistory } from "react-router-dom";
import "./Assets/Images/CSS/eventTemp.css";
import Loader from "./Loader";
// import MatrixRain from "../Components/MatrixRain.js";
// import photo from "./aa.png";
var eventId;
var eventobj = {};
const EventTemp = () => {
  return (
    <div className="et-background">
      {/* <MatrixRain/> */}
      <section
        className="container mx-auto flex flex-col-reverse md:flex-row hero-section  bg-local w-4/5 gap-4 md:gap-32"
        // style={{backgroundImage: `url(${photo})`}}
      >
        <div className="  mt-12 md:mt-32">
          {/* <img src={photo} className = "pheight" alt="" /> */}
          <h2 className="text-4xl  md:text-7xl subpixel-antialiased font-bold title justify-start">
            {`${eventobj.eventName}`}{" "}
          </h2>
          <p className="text-xs md:text-xl subpixel-antialiased md:pt-5 md:pb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            officiis!
          </p>
          <a href="https://google.com" className="register ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            REGISTER
          </a>
        </div>
        <div className=" justify-self-center self-center mt-20 md:mt-32">
          <img
            src={
              "https://www.wikihow.com/images/thumb/d/d1/Convert-Square-Meters-to-Square-Feet-and-Vice-Versa-Step-2-Version-5.jpg/v4-460px-Convert-Square-Meters-to-Square-Feet-and-Vice-Versa-Step-2-Version-5.jpg.webp"
            }
            className=" shadow-lg h-max img-poster"
            alt="infox"
          />
        </div>
      </section>
      {/* <section>
  <div className="md:container ">
<div className="field ">
<div className="mouse"></div>

</div>
</div>
  </section> */}
      <section className=" about-section ">
        <div className="container mx-auto flex gap-6 flex-col md:flex-row ">
          <div className="basis-2/6">
            <h4 className="subheading">About</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              cupiditate minimm eveniet illo? Quo odit, nihil consectetur beatae
              eaque ab voluptatem? Voluptas.
            </p>
          </div>
          <div className="basis-2/6">
            {" "}
            <h4 className="subheading">Structure</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              cupiditate mi eveniet illo? Quo odit, nihil consectetur beatae
              eaque ab voluptatem? Voluptas.
            </p>
          </div>
          <div className="basis-2/6">
            {" "}
            <h4 className="subheading">Timeline</h4>
            <p>
              Lorem, ips eveniet illo? Quo odit, nihil consectetur beatae eaque
              ab voluptatem? Voluptas.
            </p>
          </div>
        </div>
        <div className="container mx-auto flex gap-6 flex-col md:flex-row ">
          <div className="basis-2/6">
            <h4 className="subheading">Rules</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              cupiditate minieveniet illo? Quo odit, nihil consectetur beatae
              eaque ab voluptatem? Voluptas.
            </p>
          </div>
          <div className="basis-2/6">
            {" "}
            <h4 className="subheading">Prize</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              cupiditate llo? Quo odit, nihil consectetur beatae eaque ab
              voluptatem? Voluptas.
            </p>
          </div>
          <div className="basis-2/6">
            {" "}
            <h4 className="subheading">Contact Us</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              cupiditate minit, nihil consectetur beatae eaque ab voluptatem?
              Voluptas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default function EventTemplate() {
  const [isLoaded, setisLoaded] = React.useState(false);
  // const History=useHistory()
  // History.push('/loader')
  const getEventDetails = async () => {
    const res = await fetch(
      "https://infoxpression.herokuapp.com/event/get_event",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ eventId: eventId }),
        referrerPolicy: "origin-when-cross-origin",
      }
    );
    const finalEventDetails = await res.json();
    console.log(finalEventDetails);
    if (finalEventDetails.status) {
      console.log("Succes is true");
      setisLoaded(true);
      eventobj = finalEventDetails.event;
    }
  };
  React.useEffect(() => {
    const url = window.location.href;
    const urlArray = url.split("/");
    console.log(urlArray);
    eventId = urlArray[4];
    console.log(eventId);
    getEventDetails();
  }, []);
  return (
    <>
      {isLoaded ? (
        <EventTemp />
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
}
