import React, { useState } from "react";
import "./Assets/Images/CSS/Home.css";
import MatrixRain from "./MatrixRain";
// import Cards from "./ScheduleCards";
// import EventCardProfile from "./EventProfile";
import "./Assets/Images/CSS/profile.css";
// import ProfileCard from "./ProfileCard";
import jwt_decode from "jwt-decode";

const Profile = () => {
  const [userCredentials, setUserCredentials] = React.useState({
    name: "",
    email: "",
    image: "",
    googleId: "",
  });
  const handleCallbackResponse = async (response) => {
    console.log("JWT ID TOKEN: ", response.credential);
    var userObject = await jwt_decode(response.credential);
    // console.log(userObject);
    // console.log(userObject.email);
    // console.log(userObject.name);
    // console.log(userObject.picture);
    // console.log(userObject.sub);
    const tempuserObject = {
      name: userObject.name,
      email: userObject.email,
      pic: userObject.picture,
      googleId: userObject.sub,
      key: "<h1>thisisinfoxpression</h1>",
      college: "usict",
      contact: 958222222222,
      gradYear: 2024,
    };

    console.log(tempuserObject);
    setUserCredentials({
      ...tempuserObject,
      name: userObject.name,
      email: userObject.email,
      image: userObject.pic,
      googleId: userObject.sub,
    });
    console.log(userCredentials);
    if (userObject.email_verified) {
      const res = await fetch(
        "https://infoxpression.herokuapp.com/user/auth/google",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(tempuserObject),
          referrerPolicy: "origin-when-cross-origin",
        }
      );
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
              margin: "0vw 9vw 2vw 26vw",
            }}
          >
            Get Started
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
