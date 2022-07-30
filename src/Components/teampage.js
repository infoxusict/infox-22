import React, { useRef, useEffect, useState } from "react";
import "./Assets/Images/CSS/teampage.css";
// import Heading from "../heading svg/heading";
import Team from "./team";
export default function TeamPage() {
  const numBalls = 50;
  const balls = [];
  const colors = ["#3CC157"];
  function load_balls() {
    const numBalls = 50;
    const balls = [];

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
        y: Math.random() * 12,
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }

  return (
    <div className="teampage" onLoad={load_balls}>
      <div className=""></div>
      <div className="teampage__heading">
        <div className="teampage__heading-svg">
          <svg
            height="120"
            // stroke="rgb(0, 255, 60)"
            stroke-width="3"
            className="text-line"
            width="100%"
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
              TEAM
            </text>
          </svg>
        </div>
      </div>
      <div className="teampage__headingdown"></div>
      <div className="teampage__container">
        <Team
          ringColor="#95F7FF  "
          circleColor="#01C3FC "
          commentColor="#01C3FC "
        />
        <Team
          ringColor="#FFAE76 "
          circleColor="#FF6800 "
          commentColor="#FF6800 "
        />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
        <Team ringColor="#fff" circleColor="#000" commentColor="#123456" />
      </div>
    </div>
  );
}
