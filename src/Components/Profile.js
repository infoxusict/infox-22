import React from "react";
import "./Assets/Images/CSS/Home.css";
import MatrixRain from "./MatrixRain";
import Cards from "./ScheduleCards";
import "./Assets/Images/CSS/profile.css";


const Profile = () => {
    return(
    <>
    <MatrixRain />
    <div class="sn_glitch_forNHeading atmosphere sn_teamheading">
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
          <Cards/>   
        </div>
        <div className="profilePart">
            
        </div>
    </div>
    </>
    )
}
export default Profile;