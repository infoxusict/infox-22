import React, { useState } from "react";
import "./Assets/Images/CSS/Home.css";
import MatrixRain from "./MatrixRain";
// import Cards from "./ScheduleCards";
import EventCardProfile from "./EventProfile";
import "./Assets/Images/CSS/profile.css";
import ProfileCard from "./ProfileCard";
import jwt_decode from "jwt-decode";
import Modal from "./Modal";

var userDetails = {};
export var tempuserObject = {
  name: "",
  email: "",
  image: "",
  googleId: "",
  key: "<h1>Newprogrammakinginprogress</h1>",
  College: "",
  Contact: null,
  GraduationYear: null,
};

const modalObject = [
  { question: "College", placeholder: "College" },
  { question: "GraduationYear", placeholder: "Graduation Year" },
  { question: "Contact", placeholder: "Contact" },
];

const Profile = () => {
  const [profileDATA, setprofileDATA] = React.useState({});
  const [isModalShown, setIsModalShown] = useState(false);
  const [isAuthKey, setAuthKey] = useState(false);

  //function to check whether user is signed up already
  const ifSignIn = async () => {
    var x = localStorage.getItem("authkey");
    if (x != null && x !== undefined) {
      fetch("https://infoxpression.herokuapp.com/user/getDetails", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authToken: localStorage.getItem("authkey"),
        },
        referrerPolicy: "origin-when-cross-origin",
      })
        .then((res) => res.json())
        .then((res) => setprofileDATA(res));
      setAuthKey(true);
      return true;
    }
    return false;
  };

  const handleCallbackResponse = async (response) => {
    // getting the jwt token and setting userObject as it response
    // console.log("JWT ID TOKEN: ", response.credential);
    var userObject = await jwt_decode(response.credential);

    // check is google btn click then doing some stuff
    if (userObject.email_verified) {
      // setting the res data to temuserObject
      tempuserObject = {
        name: userObject.name,
        email: userObject.email,
        image: userObject.picture,
        googleId: userObject.sub,
        key: "<h1>Newprogrammakinginprogress</h1>",
        College: "",
        Contact: null,
        GraduationYear: null,
      };

      await ifSignIn();
      //setting to show modal
      setTimeout(() => {
        document.getElementById("hideMe").style.display = "none";
        setIsModalShown(true);
      }, 1600);

      // request to post data to db
      const resCheck = await fetch(
        "https://infoxpression.herokuapp.com/user/auth/google/chk",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(tempuserObject),
          referrerPolicy: "origin-when-cross-origin",
        }
      );
      var checkres = await resCheck.json();
      // console.log(checkres);
      // if reponse of posting data is success, then setting the auth key to local storage
      if (checkres.success && checkres.authKey !== undefined) {
        localStorage.setItem("authkey", checkres.authKey);

        // as we get the auth key we can fetch the data from db
        fetch("https://infoxpression.herokuapp.com/user/getDetails", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authToken: localStorage.getItem("authkey"),
          },
          referrerPolicy: "origin-when-cross-origin",
        })
          .then((res) => res.json())
          .then((res) => setprofileDATA(res));
        setAuthKey(true);
      }
    }
  };
  React.useEffect(() => {
    /* global google */
    const func = async () => {
      await google.accounts.id.initialize({
        client_id:
          "272494210674-pij8m84sh3852areuj5cn6jpukais005.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      await google.accounts.id.renderButton(
        document.getElementById("googlebtn"),
        {
          theme: "outline",
          size: "large",
        }
      );

      await ifSignIn();
    };

    func();
    // console.log(profileDATA);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* <MatrixRain /> */}
      <div className="sn_glitch_forNHeading atmosphere sn_teamheading profileTitle">
        <div className="sn_line_forNHeading">PROFILE</div>
        <div className="sn_line_forNHeading">PROFILE</div>
        <div className="sn_line_forNHeading">PROFILE</div>
        <div className="sn_line_forNHeading">PROFILE</div>
        <div className="sn_line_forNHeading">PROFILE</div>
        <div className="sn_line_forNHeading">PROFILE</div>
        <div className="sn_line_forNHeading">PROFILE</div>
        <div className="sn_line_forNHeading">PROFILE</div>
        <div className="sn_line_forNHeading">PROFILE</div>
      </div>
      <div className="ParticipantProfile">
        <div className="eventsParticipated">
          <div
            className="ProfileHeading"
            style={{
              fontFamily: "atmospheric",
              color: "#6CDE01",
            }}
          >
            {!isAuthKey ? (
              "Get Started"
            ) : (
              <h1 className="reggg">Registered Events</h1>
            )}
          </div>
          <div className="registeer">
            {isModalShown && !isAuthKey ? (
              <Modal
                data={modalObject}
                buttonName="Complete Registration"
                tempuserObject={tempuserObject}
                userDetails={userDetails}
                profileDATA={profileDATA}
                setprofileDATA={setprofileDATA}
                setAuthKey={setAuthKey}
              />
            ) : (
              <></>
            )}
            {isAuthKey && profileDATA?.events ? (
              <>
                <div className="bigbbb">
                  <EventCardProfile events={profileDATA.events} />
                  <div className="profilePart">
                    <ProfileCard
                      name={profileDATA.name}
                      image={profileDATA.image}
                      Graduation
                      Year={profileDATA.GraduationYear}
                      College={profileDATA.College}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="ggbtn" id="hideMe">
                <div id="googlebtn"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
