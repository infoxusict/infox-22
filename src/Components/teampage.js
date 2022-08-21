// import React, { useRef, useEffect, useState } from "react";
import "./Assets/Images/CSS/teampage.css";
// import Heading from "../heading svg/heading";
import "./Assets/Images/CSS/glitch.css";
import "./Assets/Images/CSS/Contact.css";
import Team from "./team";
import MatrixRain from "./MatrixRain";
// import Contact from "./Contact";
import Map from "./Map";

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
      <MatrixRain />
      <div className=""></div>
      {/* <div className="teampage__heading glitch" data-text="OUR TEAM"> */}
        {/* <h1>OUR TEAM</h1> */}
        <div class="sn_glitch_forNHeading atmosphere sn_teamheading">
            <div class="sn_line_forNHeading">OUR TEAM</div>
            <div class="sn_line_forNHeading">OUR TEAM</div>
            <div class="sn_line_forNHeading">OUR TEAM</div>
            <div class="sn_line_forNHeading">OUR TEAM</div>
            <div class="sn_line_forNHeading">OUR TEAM</div>
            <div class="sn_line_forNHeading">OUR TEAM</div>
            <div class="sn_line_forNHeading">OUR TEAM</div>
            <div class="sn_line_forNHeading">OUR TEAM</div>
            <div class="sn_line_forNHeading">OUR TEAM</div>
          </div>
      {/* </div> */}
      <div className="teampage__headingdown"></div>
      <div className="teampage__container">
        <Team
          ringColor="#55a245"
          circleColor="#00a245"
          name="Rudransh Ratan"
          team="Core Team"
          position="President"
          Quote=""
          linkedin="https://www.linkedin.com/in/rudransh-ratan-415985a0/"
          github="https://github.com/RUDRANSHRATAN"
          gmail="rudranshratan@gmail.com"
          photo="./Assets/Images/teams/rudransh.jpg"
        />
        <Team
          ringColor="#95F7FF  "
          circleColor="#01C3FC "
          name="Himesh Nayak"
          team="Core Team"
          position="Technical Lead"
          Quote="Destination is not the purpose of life... The journey is..."
          linkedin="https://linkedin.com/in/himeshnayak015"
          github="https://github.com/HimeshNayak"
          gmail="himeshnayak015@gmail.com"
          photo="./Assets/Images/teams/himesh.jpeg"
        />
        <Team
          ringColor="#aadef2 "
          circleColor="#00def2"
          name="Kashish Jain"
          team="Web Team"
          position="Full stack Developer"
          Quote="Full Stack Software Developer"
          linkedin="https://links.kjdev.tech/linkedin"
          github="https://links.kjdev.tech/github"
          gmail="jainabhishek7204@gmail.com"
          photo="./Assets/Images/teams/kashish.jpg"
        />
        <Team
          ringColor="#FFAE76 "
          circleColor="#FF6800 "
          commentColor="#FF6800 "
          name="Ansh Goyal"
          team="Web Team"
          position="Front-end Developer"
          Quote="Talk is cheap. Show me the code."
          linkedin="https://www.linkedin.com/in/ansh-goyal-891492146/"
          github="https://www.github.com/ansh1693"
          gmail="anshgoel44@gmail.com"
          photo="./Assets/Images/teams/ansh.jpg"
        />
        <Team
          ringColor="#ffcb88"
          circleColor="#ffcb00"
          name="Ayush Baliyan"
          team="Web Team"
          position="Front-end Developer"
          Quote="The strong don't win. The winners are the strong ones."
          linkedin="https://www.linkedin.com/in/ayush-baliyan-4a2242146"
          github="https://www.github.com/ayush-baliyan-19"
          gmail="ayushbaliyan05@gmail.com"
          photo="./Assets/Images/teams/ayush.jpeg"
        />
        <Team
          ringColor="#aa0000"
          circleColor="#ff0000"
          name="Dhruv Aeron"
          team="Web Team"
          position="Front-end Developer"
          Quote="I intend to live life not just exist.🤣"
          linkedin="www.linkedin.com/in/aerondhruv"
          github="https://github.com/Aeron2"
          gmail="dhruv.aeron3@gmail.com"
          photo="./Assets/Images/teams/dhruvAeron.jpeg"
        />
         <Team
          ringColor="#aaa"
          circleColor="#777"
          name="Dhruv Gupta"
          team="Web Team"
          position="Front-end Developer"
          Quote="Where the focus goes, Energy flows 🌞"
          linkedin="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
          github="https://www.github.com/MR-DHRUV"
          gmail="dhruvgupta742@gmail.com"
          photo="./Assets/Images/teams/dhruvGupta.jpg"
        />
        <Team
          ringColor="#b488ff"
          circleColor="#b400ff"
          name="Divyansh"
          team="Web Team"
          position="Front-end Developer"
          Quote="Curiosity is the essence of our existence."
          linkedin="https://www.linkedin.com/in/divyansh-787533211/"
          github="https://github.com/Divyansh3021"
          gmail="Divyansh3021@gmail.com"
          photo="./Assets/Images/teams/Divyansh.jpg"
        />
          <Team
            ringColor="#fff"
            circleColor="#aaa"
            name="Kartik Singh"
            team="Web Team"
            position="Security Tester"
            Quote="Don't Hate the Hacker hate the code "
            linkedin="https://www.linkedin.com/in/kartik-singh-68bb8b179/"
            github="https://www.github.com/kartikkc"
            gmail="kartikkc95@gmail.com"
            photo="./Assets/Images/teams/kartik.jpeg"
          />
        <Team
          ringColor="#431366"
          circleColor="#431311"
          name="Nishant"
          team="Web Team"
          position="Front-end Developer"
          Quote="You eliminate competition by being yourself"
          linkedin="https://www.linkedin.com/in/nishant-ola-490712228/"
          github="https://github.com/ola-nishant"
          gmail="nishant.ola22@gmail.com"
          photo="./Assets/Images/teams/nishant.jpg"
        />
        
        
        <Team
          ringColor="#cc3300"
          circleColor="#ff3000"
          name="Shivesh Nandan"
          team="Web Team"
          position="Front-end Developer"
          Quote="giving up isn't an option!"
          linkedin="https://www.linkedin.com/in/shivesh-nandan-39a1b219a/"
          github="https://github.com/ShiveshNandan"
          gmail="kshivesh929@gmail.com"
          photo="./Assets/Images/teams/shivesh.png"
        />
        {/* <Team ringColor="#fff" circleColor="#000" name="Nishant" /> */}
       

        <Team
          ringColor="#431366"
          circleColor="#431311"
          name="Suraj Mishra"
          team="Web Team"
          // position=" Developer"
          Quote="You eliminate competition by being yourself"
          linkedin="https://www.linkedin.com/in/nishant-ola-490712228/"
          github="https://github.com/ola-nishant"
          gmail="nishant.ola22@gmail.com"
          photo="./Assets/Images/teams/suraj.jpg.png"
        />
        <Team
          ringColor="#808099"
          circleColor="#8080ff"
          name="Toyeesh Sinha"
          team="Web Team"
          position="Full Stack Developer"
          // Quote=""
          linkedin="https://www.linkedin.com/in/toyeesh-sinha"
          github="https://www.github.com/sinha-toyeesh"
          gmail="toyeshsainik@gmail.com"
          photo="./Assets/Images/teams/toyeesh.jpg"
        />
      </div>
      {/* <Contact /> */}
      <Map />
    </div>
  );
}
