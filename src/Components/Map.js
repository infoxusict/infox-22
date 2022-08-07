import React from "react";
import "./Assets/Images/CSS/Map.css";
const Map = () => {
  return (
    <div>
      <h1 className="Reach_us_title">Reach us</h1>
      <div>
        <a href="https://www.google.com/maps/place/Guru+Gobind+Singh+Indraprastha+University/@28.5949739,77.0171102,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1aafdb891567:0x10d270731c930a87!8m2!3d28.5949739!4d77.0192989">
          <img
            className="map_pic"
            src={require("./Assets/Images/reach us/google maps.png")}
            alt="google maps"
          />
        </a>
      </div>
      <div class="reach_us_card"></div>
    </div>
  );
};

export default Map;
