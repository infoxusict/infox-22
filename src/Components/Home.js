// import React, { useState, useEffect } from "react";
// import Video from './Assets/Videos/startv.mp4'
import "./Assets/Images/CSS/Home.css";
import MatrixRain from "./MatrixRain";
import SponserNew from './SponsersNew'
import Glimpses from "./Glimpses";
// import Svgg from "./Svgg.js";
import "aos/dist/aos.css";
import Banner from "./Banner";
// import Aos from "aos";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import Keeanu from "./Keeanu";
// import Footer from "./Footer";

const Home = (props) => {
 
  return (
    
    <section id="Home">
      <Banner/>
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
            <div className="home-textCon">

              <div class="sn_glitch atmosphere">
                <div class="sn_line" style={{ fontFamily: "kurinji" }}>
                  INFOXPRESSION
                </div>
                <div class="sn_line" style={{ fontFamily: "kurinji" }}>
                  INFOXPRESSION
                </div>
                <div class="sn_line" style={{ fontFamily: "kurinji" }}>
                  INFOXPRESSION
                </div>
                <div class="sn_line" style={{ fontFamily: "kurinji" }}>
                  INFOXPRESSION
                </div>
                <div class="sn_line" style={{ fontFamily: "kurinji" }}>
                  INFOXPRESSION
                </div>
                <div class="sn_line" style={{ fontFamily: "kurinji" }}>
                  INFOXPRESSION
                </div>
                <div class="sn_line" style={{ fontFamily: "kurinji" }}>
                  INFOXPRESSION
                </div>
                <div class="sn_line" style={{ fontFamily: "kurinji" }}>
                  INFOXPRESSION
                </div>
                <div class="sn_line" style={{ fontFamily: "kurinji" }}>
                  INFOXPRESSION
                </div>
              </div>
            
            <div className="home-svg-con svgg">
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "x-large",
                }}
              >
                OCTOBER 2022
              </h3>
              <p style={{ textAlign: "center" }}>
                TECHFEST USICT | GGSIPU <br />
                CELEBRATING THE SENSE OF BELONGING
              </p>
            </div>
            </div>
          </div>

          {/* </ParallaxLayer> */}
          {/* <ParallaxLayer offset={1.01} speed={0.9} > */}
          <SponserNew />
          {/* </ParallaxLayer> */}
          {/* <ParallaxLayer offset={2.02} speed={0.3}> */}
          <Glimpses />
          {/* <Keeanu /> */}
          {/* </ParallaxLayer> */}
        </div>
      </div>
      {/* </Parallax> */}
      {/* {reveal &&
                <div id="videoCont">
                    <video className='video' autoPlay='autoPlay' muted>
                        <source src={require('./Assets/Videos/Produce_11.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                        <source src={Video} type="video/ogg" />Your browser does not support the video tag.
                    </video>
                </div>
            } */}
      {/* <Sponser/> */}
    </section>
    // </div>
  );
};

export default Home;
