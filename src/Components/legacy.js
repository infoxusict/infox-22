import React from "react";
import Slider from "./Carousel";
import About from "./aboutus";
import "./Assets/Images/CSS/legacy.css";
export default function Legacy() {
  return (
    <>
      <div className="legacy">
        <div className="navbar"></div>
        <div className="legacy__hero">
          <div className="legacy__hero-left">
            {/* <div className="left__background">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </div> */}
            <div className="hero__left-name">
              <span>InfoXpression</span>
            </div>
            <div className="hero__left-head">
              <div className="hero__heading-svg">
                <svg
                  height="120"
                  stroke="rgb(0, 255, 60)"
                  stroke-width="3"
                  className="text-line"
                  width="80%"
                >
                  <text
                    x="50%"
                    // fill="black"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    y="50%"
                    data-text="LEGACY"
                    className="heading"
                  >
                    LEGACY
                  </text>
                </svg>
              </div>
            </div>
            <div className="hero__left-desc">
              <span>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </span>
            </div>
          </div>
          <div className="legacy__hero-right">
            <div className="legacy__hero-sliders">
              <div className="slider-4"></div>
              <Slider
                gridClass="slider-3"
                width="20"
                height="22.5"
                xSlide="reverse"
              />
              <Slider
                gridClass="slider-2"
                width="30"
                height="45"
                ySlide="true"
              />
              <Slider gridClass="slider-1" width="50" height="45" />
            </div>
          </div>
        </div>
        {/* <Slider width="60vw" height="50vh" ySlide="false" /> */}
        <About />
      </div>
    </>
  );
}
