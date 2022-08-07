import React from "react";
import "./Assets/Images/CSS/eventTemp.css";
// import MatrixRain from "../Components/MatrixRain.js";
// import photo from "./aa.png";
export default function EventTemplate() {
  return (
    <>
      <div className="et-background">
        {/* <MatrixRain/> */}
        <section
          className="container mx-auto flex flex-col-reverse md:flex-row hero-section  bg-local w-4/5 gap-4 md:gap-32"
          // style={{backgroundImage: `url(${photo})`}}
        >
          <div className="  mt-12 md:mt-32">
            {/* <img src={photo} className = "pheight" alt="" /> */}
            <h2 className="text-4xl  md:text-7xl subpixel-antialiased font-bold title justify-start">
              Event Name{" "}
            </h2>
            <p className="text-xs md:text-xl subpixel-antialiased md:pt-5 md:pb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
              officiis!
            </p>
            <a href="https://google.com" class="register ">
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
      <div class="md:container ">
	<div class="field ">
		<div class="mouse"></div>
		
	</div>
</div>
      </section> */}
        <section className=" about-section ">
          <div className="container mx-auto flex gap-6 flex-col md:flex-row ">
            <div className="basis-2/6">
              <h4 className="subheading">About</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minimm eveniet illo? Quo odit, nihil
                consectetur beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="basis-2/6">
              {" "}
              <h4 className="subheading">Structure</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate mi eveniet illo? Quo odit, nihil consectetur
                beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="basis-2/6">
              {" "}
              <h4 className="subheading">Timeline</h4>
              <p>
                Lorem, ips eveniet illo? Quo odit, nihil consectetur beatae
                eaque ab voluptatem? Voluptas.
              </p>
            </div>
          </div>
          <div className="container mx-auto flex gap-6 flex-col md:flex-row ">
            <div className="basis-2/6">
              <h4 className="subheading">Rules</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minieveniet illo? Quo odit, nihil
                consectetur beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="basis-2/6">
              {" "}
              <h4 className="subheading">Prize</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate llo? Quo odit, nihil consectetur beatae
                eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="basis-2/6">
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
