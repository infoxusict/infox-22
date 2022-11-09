// import React, { useState, useEffect } from "react";
// import Video from './Assets/Videos/startv.mp4'
import "./Assets/Images/CSS/Home.css";
import MatrixRain from "./MatrixRain";
import SponserNew from "./SponsersNew";
import Glimpses from "./Glimpses";
import "aos/dist/aos.css";
import Banner from "./Banner";
import EventOnHome from "./eventOnHome";

const Home = (props) => {
  return (
    <section id="Home">
      <Banner />
      <MatrixRain />
      <div className="animationFrame" id="svgggg">
        <div className="whole-hero">
          <div className="svggg">
            <div className="homeLogo">
              <video
                className="video"
                autoPlay="autoPlay"
                muted
                loop
                style={{ position: "relative", zIndex: "-1" }}
              >
                <source
                  src={require("./Assets/Videos/Produce.mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
                <source
                  src={require("./Assets/Videos/Produce.mp4")}
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="home-textCon ">
              <div className="sn_glitch atmosphere">
                <div
                  className="sn_line md:text-6xl lg:text-9xl"
                  style={{ fontFamily: "kurinji" }}
                >
                  INFOXPRESSION
                </div>
                <div
                  className="sn_line md:text-6xl lg:text-9xl"
                  style={{ fontFamily: "kurinji" }}
                >
                  INFOXPRESSION
                </div>
                <div
                  className="sn_line md:text-6xl lg:text-9xl"
                  style={{ fontFamily: "kurinji" }}
                >
                  INFOXPRESSION
                </div>
                <div
                  className="sn_line md:text-6xl lg:text-9xl"
                  style={{ fontFamily: "kurinji" }}
                >
                  INFOXPRESSION
                </div>
                <div
                  className="sn_line md:text-6xl lg:text-9xl"
                  style={{ fontFamily: "kurinji" }}
                >
                  INFOXPRESSION
                </div>
                <div
                  className="sn_line md:text-6xl lg:text-9xl"
                  style={{ fontFamily: "kurinji" }}
                >
                  INFOXPRESSION
                </div>
                <div
                  className="sn_line md:text-6xl lg:text-9xl"
                  style={{ fontFamily: "kurinji" }}
                >
                  INFOXPRESSION
                </div>
                <div
                  className="sn_line md:text-6xl lg:text-9xl"
                  style={{ fontFamily: "kurinji" }}
                >
                  INFOXPRESSION
                </div>
                <div
                  className="sn_line md:text-6xl lg:text-9xl"
                  style={{ fontFamily: "kurinji" }}
                >
                  INFOXPRESSION
                </div>
              </div>
              <div className="home-svg-con svgg">
                {/* <h3
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "x-large",
                }}
              >
                OCTOBER 2022
              </h3> */}
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    textShadow: "0px 0px 5px black",
                    fontFamily: "Bahnschrift",
                    width: "70vw",
                    textJustify: "inter-word",
                  }}
                  className="md:translate-y-16 md:text-xl"
                >
                  <p className="front-date" style={{ fontSize: "x-large" }}>
                    {" "}
                    18th - 20th NOVEMBER
                  </p>
                  <p style={{ transform: "scale(1.03,1.1)" }}>
                    TECHFEST USICT | GGSIPU
                  </p>
                  <p style={{ fontSize: "small" }}>
                    CELEBRATING THE SENSE OF BELONGING
                  </p>
                </p>
              </div>
            </div>
          </div>
          <EventOnHome />
          <div className="md:pt-28 pt-12"></div>
          <SponserNew />

          <Glimpses />
        </div>
      </div>
    </section>
  );
};

export default Home;
