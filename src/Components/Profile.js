import React, { useState } from "react";
import "./Assets/Images/CSS/Home.css";
import MatrixRain from "./MatrixRain";
// import Cards from "./ScheduleCards";
import EventCardProfile from "./EventProfile";
import "./Assets/Images/CSS/profile.css";
import ProfileCard from "./ProfileCard";
import jwt_decode from "jwt-decode";
import { useState } from "react";

const Profile = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: null,
    profile: null,
    pic: null,
    googleId: null,
  });
  const handleCallbackResponse = (response) => {
    console.log("JWT ID TOKEN: ", response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    console.log(userObject.email);
    console.log(userObject.name);
    console.log(userObject.picture);
    console.log(userObject.sub);
    if (userObject.email_verified) {
      // redirect
    }
  };
  React.useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "272494210674-pij8m84sh3852areuj5cn6jpukais005.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("googlebtn"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <>
      <MatrixRain />
      <div class="sn_glitch_forNHeading atmosphere sn_teamheading profileTitle">
        <div class="sn_line_forNHeading">PROFILE</div>
        <div class="sn_line_forNHeading">PROFILE</div>
        <div class="sn_line_forNHeading">PROFILE</div>
        <div class="sn_line_forNHeading">PROFILE</div>
        <div class="sn_line_forNHeading">PROFILE</div>
        <div class="sn_line_forNHeading">PROFILE</div>
        <div class="sn_line_forNHeading">PROFILE</div>
        <div class="sn_line_forNHeading">PROFILE</div>
        <div class="sn_line_forNHeading">PROFILE</div>
      </div>
      <div className="ParticipantProfile">
        <div className="eventsParticipated">
          <div
            className="ProfileHeading"
            style={{
              fontFamily: "atmospheric",
              color: "#6CDE01",
              paddingBottom: "1vw",
            }}
          >
            Registered Events
          </div>
          {/* <EventCardProfile /> */}
          <div id="googlebtn"></div>
        </div>
        {/* <div className="profilePart">
          <ProfileCard />
        </div> */}
      </div>
    </>
  );
};
export default Profile;
