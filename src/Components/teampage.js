// import React, { useRef, useEffect, useState } from "react";
import "./Assets/Images/CSS/teampage.css";
// import Heading from "../heading svg/heading";
import "./Assets/Images/CSS/glitch.css";
import "./Assets/Images/CSS/Contact.css";
import Team from "./team";
import MatrixRain from "./MatrixRain";
// import Contact from "./Contact";

export default function TeamPage() {
  return (
    <div className="teampage md:mb-24 mb-8">
      <MatrixRain />
      <div className=""></div>

      <div class="sn_glitch_forNHeading atmosphere sn_teamheading mt-6">
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

      <div className="teampage__headingdown"></div>
      <div className="teampage__container">
        <Team
          ringColor="#161616"
          circleColor="#c2bfb9"
          name="Rudransh Ratan"
          team="Core Team"
          position="President"
          Quote="Impossible is a word only in the dictionary of fools."
          linkedin="https://www.linkedin.com/in/rudransh-ratan-415985a0/"
          github="https://github.com/RUDRANSHRATAN"
          gmail="rudranshratan@gmail.com"
          photo="./Assets/Images/teams/rudransh2.png"
        />
        <Team
          ringColor="#412c26"
          circleColor="#413c26 "
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
          ringColor="#444c57 "
          circleColor="#114c57"
          name="Kashish Jain"
          team="Web Team"
          position="Full stack Developer"
          Quote="Things aren’t always #000000 and #FFFFFF"
          linkedin="https://links.kjdev.tech/linkedin"
          github="https://links.kjdev.tech/github"
          gmail="jainabhishek7204@gmail.com"
          photo="./Assets/Images/teams/kashish.jpg"
        />
        <Team
          ringColor="#4f2f4f"
          circleColor="#c9a9fc"
          // commentColor="#e5c7 "
          name="Ansh Goyal"
          team="Web Team"
          position="Full-Stack Developer"
          Quote="Talk is cheap. Show me the code."
          linkedin="https://www.linkedin.com/in/ansh-goyal-891492146/"
          github="https://www.github.com/ansh1693"
          gmail="anshgoel44@gmail.com"
          photo="./Assets/Images/teams/ansh.jpg"
        />
        <Team
          ringColor="#d2c6c2"
          circleColor="#d2c688"
          name="Ayush Baliyan"
          team="Web Team"
          position="Full-Stack Developer"
          Quote="The strong don't win. The winners are the strong ones."
          linkedin="https://www.linkedin.com/in/ayush-baliyan-4a2242146"
          github="https://www.github.com/ayush-baliyan-19"
          gmail="ayushbaliyan05@gmail.com"
          photo="./Assets/Images/teams/ayush.jpeg"
        />
        <Team
          ringColor="#267b96"
          circleColor="#a6caeb"
          name="Brihaspati Sigdel"
          team="Web Team"
          position="SEO Head"
          Quote="Action, not just talk "
          linkedin="https://www.linkedin.com/in/brihaspati-sigdel-52a285233/"
          github="https://github.com/bidursigdel"
          gmail="sigdbidur@gmail.com"
          photo="./Assets/Images/teams/bidur.jpeg"
        />
        <Team
          ringColor="#286088"
          circleColor="#2860ff"
          name="Dhruv Aeron"
          team="Web Team"
          position="Full-Stack Developer"
          Quote="I intend to live life not just exist.🤣"
          linkedin="www.linkedin.com/in/aerondhruv"
          github="https://github.com/Aeron2"
          gmail="dhruv.aeron3@gmail.com"
          photo="./Assets/Images/teams/dhruvAeron.jpeg"
        />
        <Team
          ringColor="#ca7e77"
          circleColor="#ca7e55"
          name="Dhruv Gupta"
          team="Web Team"
          position="Full-Stack Developer"
          Quote="Where the focus goes, Energy flows 🌞"
          linkedin="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
          github="https://www.github.com/MR-DHRUV"
          gmail="dhruvgupta742@gmail.com"
          photo="./Assets/Images/teams/dhruvGupta.jpg"
        />
        <Team
          ringColor="#9c7e91"
          circleColor="#9c7e51"
          name="Divyansh"
          team="Web Team"
          position="Full-Stack Developer"
          Quote="Curiosity is the essence of our existence."
          linkedin="https://www.linkedin.com/in/divyansh-787533211/"
          github="https://github.com/Divyansh3021"
          gmail="Divyansh3021@gmail.com"
          photo="./Assets/Images/teams/Divyansh.jpg"
        />
        <Team
          ringColor="#253e42"
          circleColor="#b82724"
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
          ringColor="#262519"
          circleColor="#c1ff01"
          name="Nishant"
          team="Web Team"
          position="Full-Stack Developer"
          Quote="You eliminate competition by being yourself"
          linkedin="https://www.linkedin.com/in/nishant-ola-490712228/"
          github="https://github.com/ola-nishant"
          gmail="nishant.ola22@gmail.com"
          photo="./Assets/Images/teams/nishant.jpg"
        />

        <Team
          ringColor="#caeafa"
          circleColor="#caeafa"
          name="Shivesh Nandan"
          team="Web Team"
          position="Full-Stack Developer"
          Quote="giving up isn't an option!"
          linkedin="https://www.linkedin.com/in/shivesh-nandan-39a1b219a/"
          github="https://github.com/ShiveshNandan"
          gmail="kshivesh929@gmail.com"
          photo="./Assets/Images/teams/shivesh.png"
        />
        {/* <Team ringColor="#fff" circleColor="#000" name="Nishant" /> */}

        <Team
          ringColor="#efc020"
          circleColor="#1e1e1e"
          name="Suraj Mishra"
          team="Web Team"
          // position=" Developer"
          Quote="My life will be the best illustration of all my work."
          linkedin="https://www.linkedin.com/in/nishant-ola-490712228/"
          github="https://github.com/ola-nishant"
          gmail="nishant.ola22@gmail.com"
          photo="./Assets/Images/teams/suraj.jpg.png"
        />
      </div>
      {/* <Contact /> */}
    </div>
  );
}
