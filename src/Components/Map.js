import React from "react";
import "./Assets/Images/CSS/Map.css";
const Map = () => {
  return (
    <div style={{marginTop: "10vh"}}>
      <h1 className="Reach_us_title">Reach us</h1>
      <div className="reach_us_stuff">
        <div className="mapdiv">
          <a rel="noreferrer" href="https://www.google.com/maps/place/Guru+Gobind+Singh+Indraprastha+University/@28.5949739,77.0171102,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1aafdb891567:0x10d270731c930a87!8m2!3d28.5949739!4d77.0192989" target="_blank">
            <img
              className="map_pic"
              src={require("./Assets/Images/reach us/google maps.png")}
              alt="google maps"
            />
          </a>
        </div>
        <div class="reach_us_card">
          <div class="align_card">
            <h1 className="card_reach_title">Contact info</h1>
            <hr id="contact_upper_rule" />
            <ul className="ulreach">
              <li className="lireach">
                <img
                  id="marker"
                  src={require("./Assets/Images/reach us/pin.png")}
                  alt="location marker"
                />
                <p className="preach">
                  GGSIPU, Golf Course Rd, Sector 16 C, Dwarka, Delhi, 110078
                </p>
              </li>
              <li className="lireach">
                <img
                  id="phone"
                  src={require("./Assets/Images/reach us/phone.png")}
                  alt="location marker"
                />
                <p className="preach">+91-8802008175</p>
              </li>
              <li className="lireach">
                <img
                  id="emailreach"
                  src={require("./Assets/Images/reach us/email.png")}
                  alt="location marker"
                />
                <a id="anchor" href="mailto:infox@ipu.ac.in">
                  infox@ipu.ac.in
                </a>
              </li>
            </ul>
            <hr id="contact_bottom_rule" />
            <div id="socials_contact">
              <a href="https://www.instagram.com/ggsipuindia/"><img id="insta" src={require("./Assets/Images/reach us/instagram.png")} alt=""/></a>
              <a href="https://www.linkedin.com/school/usict/"><img id="linkedin" src={require("./Assets/Images/reach us/linkedin.png")} alt=""/></a>
              <a href="http://ipu.ac.in/"><img id="web" src={require("./Assets/Images/reach us/web.png")} alt=""/></a>
              <a href="https://twitter.com/GGSIPUIndia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img id="twitter" src={require("./Assets/Images/reach us/twitter.png")} alt=""/></a>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="special_banner"></div>
      <div id="special_banner2"></div> */}
      <div class="reach_us_card_2">
          <div class="align_card">
            <h1 className="card_reach_title">Contact info</h1>
            <hr id="contact_upper_rule" />
            <ul className="ulreach">
              <li className="lireach">
                <img
                  id="marker"
                  src={require("./Assets/Images/reach us/pin.png")}
                  alt="location marker"
                />
                <p className="preach">
                  GGSIPU, Golf Course Rd, Sector 16 C, Dwarka, Delhi, 110078
                </p>
              </li>
              <li className="lireach">
                <img
                  id="phone"
                  src={require("./Assets/Images/reach us/phone.png")}
                  alt="location marker"
                />
                <p className="preach">+91-8802008175</p>
              </li>
              <li className="lireach">
                <img
                  id="emailreach"
                  src={require("./Assets/Images/reach us/email.png")}
                  alt="location marker"
                />
                <a id="anchor" href="mailto:nishant.ola22@gmail.com">
                infox@ipu.ac.in
                </a>
              </li>
            </ul>
            <hr id="contact_bottom_rule" />
            <div id="socials_contact">
              <a href="https://www.instagram.com/ggsipuindia/"><img id="insta" src={require("./Assets/Images/reach us/instagram.png")} alt=""/></a>
              <a href="https://www.linkedin.com/school/usict/"><img id="linkedin" src={require("./Assets/Images/reach us/linkedin.png")} alt=""/></a>
              <a href="http://ipu.ac.in/"><img id="web" src={require("./Assets/Images/reach us/web.png")}alt=""/></a>
              <a href="https://twitter.com/GGSIPUIndia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img id="twitter" src={require("./Assets/Images/reach us/twitter.png")} alt=""/></a>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Map;
