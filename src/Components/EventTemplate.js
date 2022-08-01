import React from "react";
import "./Assets/Images/CSS/eventTemp.css";
// import photo from "./aa.png";
export default function EventTemplate() {
  return (
    <>
      <div className="event-background">
        <section
          className="xl:container xl:mx-auto grid grid-cols-2 hero-section  bg-local w-4/5 margin main1"
          // style={{backgroundImage: `url(${photo})`}}
        >
          <div className=" ml-10 mt-32">
            {/* <img src={photo} className = "pheight" alt="" /> */}
            <h2 className="text-7xl subpixel-antialiased font-bold title">
              Event Name{" "}
            </h2>
            <p className="text-xl subpixel-antialiased pt-5 pb-10">
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
          <div className=" justify-self-center self-center img-main">
            <img
              src={
                "https://www.wikihow.com/images/thumb/d/d1/Convert-Square-Meters-to-Square-Feet-and-Vice-Versa-Step-2-Version-5.jpg/v4-460px-Convert-Square-Meters-to-Square-Feet-and-Vice-Versa-Step-2-Version-5.jpg.webp"
              }
              className="outline-offset-3 shadow-lg img-poster"
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
        <section className="mb-24">
          <div className="xl:container xl:mx-auto grid grid-cols-3 gap-6 main2">
            <div>
              <h4 className="subheading">About</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minimm eveniet illo? Quo odit, nihil
                consectetur beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div>
              {" "}
              <h4 className="subheading">Structure</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate mi eveniet illo? Quo odit, nihil consectetur
                beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div>
              {" "}
              <h4 className="subheading">Timeline</h4>
              <p>
                Lorem, ips eveniet illo? Quo odit, nihil consectetur beatae
                eaque ab voluptatem? Voluptas.
              </p>
            </div>
          </div>
          <div className="xl:container xl:mx-auto grid grid-cols-3 gap-6 main3">
            <div>
              <h4 className="subheading">Rules</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minieveniet illo? Quo odit, nihil
                consectetur beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div>
              {" "}
              <h4 className="subheading">Prize</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate llo? Quo odit, nihil consectetur beatae
                eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div>
              {" "}
              <h4 className="subheading">Contact Us</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minit, nihil consectetur beatae eaque ab
                voluptatem? Voluptas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
