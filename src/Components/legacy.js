import React from "react";
import Slider from "./Carousel";
import About from "./aboutus";
import "./Assets/Images/CSS/legacy.css";
export default function Legacy() {

  
  function load_balls(){

  const colors = ["#3CC157", "#b43232"];

    if (window.innerWidth < 721) {
      document.getElementById("main_con").classList.remove("main_con")
    }

const numBalls = 50;
const balls = [];
// var offset_height = document.getElementById("programs").offsetHeight

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

  }

  return (
    <>
      <div className="legacy" onLoad={load_balls}>
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
                // ySlide="true"
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
