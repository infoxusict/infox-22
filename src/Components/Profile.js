import React, { useState, useEffect } from "react";
import "./Assets/Images/CSS/Home.css";
import MatrixRain from "./MatrixRain";
// import Cards from "./ScheduleCards";
import EventCardProfile from "./EventProfile";
import "./Assets/Images/CSS/profile.css";
import ProfileCard from "./ProfileCard";
import jwt_decode from "jwt-decode";
import Modal from "./Modal";

var userDetails = {};
var tempuserObject = {
  name: "",
  email: "",
  image: "",
  googleId: "",
  key: "<h1>Newprogrammakinginprogress</h1>",
  college: "",
  contact: null,
  gradYear: null,
};

const modalObject = [
  { question: "college", placeholder: "college" },
  { question: "gradYear", placeholder: "gradYear" },
  { question: "contact", placeholder: "contact" },
];

const Profile = () => {
  const [userCredentials, setUserCredentials] = React.useState({
    name: "",
    email: "",
    image: "",
    googleId: "",
  });
  const [profileDATA, setprofileDATA] = React.useState({
    name: "",
    email: "",
    image: "",
    googleId: "",
    key: "",
    college: "",
    contact: null,
    gradYear: null,
  });
  const [isShown, setIsShown] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isAthkey, setAthkey] = useState(false);

  useEffect(() => {
    const ifSignIn = () => {
      var x = localStorage.getItem("authkey");
      setAthkey(true);
    };

    ifSignIn();
  }, []);

  const handleCallbackResponse = async (response) => {
    console.log("JWT ID TOKEN: ", response.credential);
    var userObject = await jwt_decode(response.credential);
    // console.log(userObject);
    // console.log(userObject.email);
    // console.log(userObject.name);
    // console.log(userObject.picture);
    // console.log(userObject.sub);

    tempuserObject = {
      name: userObject.name,
      email: userObject.email,
      image: userObject.picture,
      googleId: userObject.sub,
      key: "<h1>Newprogrammakinginprogress</h1>",
      college: "usict",
      contact: 958222222222,
      gradYear: 2024,
    };

    // console.log(userCredentials);
    if (userObject.email_verified) {
      setTimeout(() => {
        setIsModalShown(true);
        // console.log(tempuserObject);
        setUserCredentials((userCredentials) => ({
          ...userCredentials,
          name: userObject.name,
          email: userObject.email,
          image: userObject.picture,
          googleId: userObject.sub,
        }));
        console.log(userCredentials);
      }, 500);

      // const res = await fetch(
      //   "https://infoxpression.herokuapp.com/user/auth/google",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //     body: JSON.stringify(tempuserObject),
      //     referrerPolicy: "origin-when-cross-origin",
      //   }
      // );
      // var finalres = await res.json();
      // console.log(finalres.authKey);
      // window.localStorage.setItem("authkey", finalres.authKey);
    }
    setTimeout(async () => {
      // const getDetailsRes = await fetch(
      //   "https://infoxpression.herokuapp.com/user/getDetails",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-type": "application/json",
      //       authToken: finalres.authKey,
      //     },
      //     referrerPolicy: "origin-when-cross-origin",
      //   }
      // );
      // console.log(finaldetailsres);
      // var finaldetailsres = await getDetailsRes.json();
      // userDetails = finaldetailsres;
      // console.log(finaldetailsres);
      // setIsShown(true);
    }, 1000);
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
          {isModalShown ? (
            <Modal
              data={modalObject}
              buttonName="Complete Registration"
              tempuserObject={tempuserObject}
            />
          ) : (
            <></>
          )}
          {isAthkey ? (
            <>
              <EventCardProfile />
              <div className="profilePart">
                <ProfileCard
                  name={userDetails.name}
                  image={userDetails.image}
                  gradYear={userDetails.gradYear}
                  college={userDetails.college}
                />
              </div>
            </>
          ) : (
            <div id="googlebtn"></div>
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
