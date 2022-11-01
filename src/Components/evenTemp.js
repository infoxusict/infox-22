import React from "react";
import MatrixRain from "./MatrixRain";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./Assets/Images/CSS/eventTemp.css";


const EvenTemp = () => {
  return (
    <>
      <MatrixRain />
      <div className=" container mx-auto text-white md:pt-24">
        <section className="  flex flex-col-reverse  md:flex-row md:gap-32  uh-bg md:pl-8">
          <div className="basis-1/2 mt-8 md:mt-16 ">
            {/* <div className="atmosphere text-7xl">Uhack</div> */}
            <div class="sn_glitch_forNHeading atmosphere uh-heading hidden md:block">
              <div class="sn_line_forNHeading">Event</div>
              <div class="sn_line_forNHeading">Event</div>
              <div class="sn_line_forNHeading">Event</div>
              <div class="sn_line_forNHeading">Event</div>
              <div class="sn_line_forNHeading">Event</div>
              <div class="sn_line_forNHeading">Event</div>
              <div class="sn_line_forNHeading">Event</div>
              <div class="sn_line_forNHeading">Event</div>
              <div class="sn_line_forNHeading">Event</div>
            </div>
            <div className="md:mt-4  text-l mx-8 md:mx-0  text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              cupiditate minimm eveniet illo? Quo odit, nihil consectetur beatae
              eaque ab voluptatem? Voluptas.
              {/*So come up, work on your dreams
                for 24-hours non-stop and make it happen. Make your imaginations
                take out solutions that nobody has ever thought and get involved
                in the heat with some of the best coders of the country. */}
            </div>
            <div className="flex md:mt-16 mt-8 gap-8 txt-shdw text-xl justify-center md:justify-start">
              <div className="flex gap-2 hel">
                <svg
                  // style="color: #000"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-calendar-date"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                    fill="white"
                  ></path>{" "}
                </svg>
                <p> Date</p>
              </div>
              <div className="flex gap-2 hel">
                <svg
                  // style="color: white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                    fill="white"
                  ></path>{" "}
                </svg>
                <p className="">Time</p>
              </div>
              <div className="flex gap-2 hel">
                <TiLocation size={33} className="" />
                <p className="">Location</p>
              </div>
            </div>
            <div className=" devfolio-button flex justify-center md:justify-start ">
              <Link to="/" className="register ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
              </Link>
            </div>
          </div>
          <div className="basis-1/2 flex justify-center mt-16 md:mt-0 flex-col hel">
            <div>
              <div class="sn_glitch_forNHeading atmosphere uh-heading md:hidden block">
                <div class="sn_line_forNHeading">Event</div>
                <div class="sn_line_forNHeading">Event</div>
                <div class="sn_line_forNHeading">Event</div>
                <div class="sn_line_forNHeading">Event</div>
                <div class="sn_line_forNHeading">Event</div>
                <div class="sn_line_forNHeading">Event</div>
                <div class="sn_line_forNHeading">Event</div>
                <div class="sn_line_forNHeading">Event</div>
                <div class="sn_line_forNHeading">Event</div>
              </div>
            </div>
            <div className="flex justify-center md:justify-center ">
              <img
                src={require("./Assets/Images/images/uhack/1USICT-HACK-2022.png")}
                alt="infox"
                className="uh-img  p-4 uh-bg w-4/5 "
              />
            </div>
          </div>
        </section>
        <div className="flex hel text-4xl md:text-6xl atmosphere title-txt-shdw mt-24 md:mt-32">
          Information
        </div>
        <div className="  uh-bg mt-8 p-4 mb-16 md:mb-32 pb-16">
          <div className="container mx-auto flex gap-6 flex-col md:flex-row ">
            <div className="basis-2/6">
              <h4 className="subheading txt-shdw">About</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minimm eveniet illo? Quo odit, nihil
                consectetur beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="basis-2/6">
              {" "}
              <h4 className="subheading txt-shdw txt-shdw">Structure</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate mi eveniet illo? Quo odit, nihil consectetur
                beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="basis-2/6">
              {" "}
              <h4 className="subheading txt-shdw">Timeline</h4>
              <p>
                Lorem, ips eveniet illo? Quo odit, nihil consectetur beatae
                eaque ab voluptatem? Voluptas.
              </p>
            </div>
          </div>
          <div className="container mx-auto flex gap-6 flex-col md:flex-row ">
            <div className="basis-2/6">
              <h4 className="subheading txt-shdw">Rules</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minieveniet illo? Quo odit, nihil
                consectetur beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="basis-2/6">
              {" "}
              <h4 className="subheading txt-shdw">Prize</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate llo? Quo odit, nihil consectetur beatae
                eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="basis-2/6">
              {" "}
              <h4 className="subheading txt-shdw">Contact Us</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minit, nihil consectetur beatae eaque ab
                voluptatem? Voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EvenTemp;
