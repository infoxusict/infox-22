import React, { useRef, useEffect, useState } from "react";
import "./Assets/Images/CSS/teampage.css";
import "./Assets/Images/CSS/glitch.css";
// import Heading from "../heading svg/heading";
import Team from "./team";
import MatrixRain from "./MatrixRain";
export default function TeamPage() {
  // const numBalls = 50;
  // const balls = [];
  // const colors = ["#3CC157"];
  // function load_balls() {
  //   const numBalls = 50;
  //   const balls = [];

  //   for (let i = 0; i < numBalls; i++) {
  //     let ball = document.createElement("div");
  //     ball.classList.add("ball");
  //     ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  //     ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  //     ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  //     ball.style.transform = `scale(${Math.random()})`;
  //     ball.style.width = `${Math.random()}em`;
  //     ball.style.height = ball.style.width;

  //     balls.push(ball);
  //     document.body.append(ball);
  //   }

  //   // Keyframes
  //   balls.forEach((el, i, ra) => {
  //     let to = {
  //       x: Math.random() * (i % 2 === 0 ? -11 : 11),
  //       y: Math.random() * 12,
  //     };

  //     let anim = el.animate(
  //       [
  //         { transform: "translate(0, 0)" },
  //         { transform: `translate(${to.x}rem, ${to.y}rem)` },
  //       ],
  //       {
  //         duration: (Math.random() + 1) * 2000, // random duration
  //         direction: "alternate",
  //         fill: "both",
  //         iterations: Infinity,
  //         easing: "ease-in-out",
  //       }
  //     );
  //   });
  // }

  return (
    <div className="teampage">
      <MatrixRain/>
      <div className=""></div>
      <div className="teampage__heading glitch" data-text="OUR TEAM">
        <h1>OUR TEAM</h1>
      </div>
      <div className="teampage__headingdown"></div>
      <div className="teampage__container">
        <Team
          ringColor="#95F7FF  "
          circleColor="#01C3FC "
          name="Himesh Nayak"
          team="Web Team"
          position="Web Developer"
          Quote="We are a team of dedicated and passionate people ."
          linkedin="https://www.linkedin.com/in/shubham-kumar-b9a8b817b/"
          github="https://www.github.com/ansh1693"
          gmail="https://www.gmail.com/shubham-kumar-b9a8b817b/"
          photo="./Assets/Images/teams/himesh.jpg"
        />
        <Team ringColor="#55a245" circleColor="#00a245" name="Rudransh Ratan" />
        <Team
          ringColor="#aadef2 "
          circleColor="#00def2"
          name="Kashish Jain"
          team="Web Team"
          position="Web Developer"
          Quote="We are a team of dedicated and passionate people ."
          linkedin="https://www.linkedin.com/in/shubham-kumar-b9a8b817b/"
          github="https://www.github.com/ansh1693"
          gmail="https://www.gmail.com/shubham-kumar-b9a8b817b/"
          photo="./Assets/Images/teams/kashish.jpg"
        />
        <Team ringColor="#ffcc00" circleColor="#c29d08" name=" Vivek Bhatia" />
        <Team ringColor="#FF9980" circleColor="#009980" name="Harsh Goyal" />
        <Team ringColor="#80aa80" circleColor="#80cc80" name="Prince" />
        <Team
          ringColor="#7dfa77"
          circleColor="#7dfa00"
          name="Himanshu Paliwal"
        />
        <Team ringColor="#663380" circleColor="#333380" name="Anuj Talwar" />
        <Team
          ringColor="#FFAE76 "
          circleColor="#FF6800 "
          commentColor="#FF6800 "
          name="Ansh Goyal"
          team="Web Team"
          position="Web Developer"
          Quote="We are a team of dedicated and passionate people ."
          linkedin="https://www.linkedin.com/in/shubham-kumar-b9a8b817b/"
          github="https://www.github.com/ansh1693"
          gmail="https://www.gmail.com/shubham-kumar-b9a8b817b/"
          photo="./Assets/Images/teams/ansh.jpg"
        />
        <Team
          ringColor="#ffcb88"
          circleColor="#ffcb00"
          name="Ayush Baliyan"
          team="Web Team"
          position="Web Developer"
          Quote="We are a team of dedicated and passionate people ."
          linkedin="https://www.linkedin.com/in/shubham-kumar-b9a8b817b/"
          github="https://www.github.com/ansh1693"
          gmail="https://www.gmail.com/shubham-kumar-b9a8b817b/"
          photo="./Assets/Images/teams/ayush.jpeg"
        />
        <Team
          ringColor="#b488ff"
          circleColor="#b400ff"
          name="Divyansh"
          team="Web Team"
          position="Web Developer"
          Quote="We are a team of dedicated and passionate people ."
          linkedin="https://www.linkedin.com/in/shubham-kumar-b9a8b817b/"
          github="https://www.github.com/ansh1693"
          gmail="https://www.gmail.com/shubham-kumar-b9a8b817b/"
          photo="./Assets/Images/teams/Divyansh.jpg"
        />
        <Team ringColor="#808099" circleColor="#8080ff" name="Toyeesh Sinha" />
        <Team
          ringColor="#aa0000"
          circleColor="#ff0000"
          name="Dhruv Aeron"
          team="Web Lead"
        />
        <Team
          ringColor="#cc3300"
          circleColor="#ff3000"
          name="Shivesh Nandan"
          team="Web Lead"
        />
        <Team
          ringColor="#fff"
          circleColor="#aaa"
          name="Kartik"
          team="Web Lead"
        />
        {/* <Team ringColor="#fff" circleColor="#000" name="Nishant" /> */}
        <Team
          ringColor="#aaa"
          circleColor="#777"
          name="Dhruv Gupta"
          team="Web Lead"
        />
        <Team
          ringColor="#431366"
          circleColor="#431311"
          name="Nishant"
          team="Web Lead"
        />
      </div>
    </div>
  );
}