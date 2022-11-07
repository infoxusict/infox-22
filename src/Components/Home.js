// import React, { useState, useEffect } from "react";
// import Video from './Assets/Videos/startv.mp4'
import "./Assets/Images/CSS/Home.css";
import MatrixRain from "./MatrixRain";
import SponserNew from './SponsersNew';
import Glimpses from "./Glimpses";
import "aos/dist/aos.css";
import Banner from "./Banner";

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
                <p style={{ textAlign: "center" }} className="md:translate-y-16 md:text-xl">
                  18th - 20th NOVEMBER 2022 <br />
                  TECHFEST USICT | GGSIPU <br />
                  CELEBRATING THE SENSE OF BELONGING
                </p>
              </div>
            </div>
          </div>
          <SponserNew />
          <Glimpses />
        </div>
      </div>
    </section>
  );
};

export default Home;
