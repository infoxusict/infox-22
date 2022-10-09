import React from "react";
import "./Assets/Images/CSS/Home.css";
import MatrixRain from "./MatrixRain";
// import Cards from "./ScheduleCards";
import EventCardProfile from "./EventProfile";
import "./Assets/Images/CSS/profile.css";
import ProfileCard from "./ProfileCard";

const Profile = () => {
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
          <EventCardProfile />
        </div>
        <div className="profilePart">
          <ProfileCard />
        </div>
      </div>
    </>
  );
};
export default Profile;
