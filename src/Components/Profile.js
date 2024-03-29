import React, { useState } from "react";
// import MatrixRain from "./MatrixRain";
// import Cards from "./ScheduleCards";
import EventCardProfile from "./EventProfile";
import ProfileCard from "./ProfileCard";
import jwt_decode from "jwt-decode";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../redux/slices/loadingSlice";

var userDetails = {};
export var tempuserObject = {
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
  { question: "College", placeholder: "Eg: USICT" },
  { question: "GraduationYear", placeholder: "Eg: 2025" },
  { question: "Contact", placeholder: "Eg: 99XXXXXX00" },
];

const Profile = () => {
  const [profileDATA, setprofileDATA] = React.useState({});
  const [isModalShown, setIsModalShown] = useState(false);
  const [isAuthKey, setAuthKey] = useState(false);
  const dispatch = useDispatch();

  //function to check whether user is signed up already
  const ifSignIn = async () => {
    var x = localStorage.getItem("authkey");
    if (x != null && x !== undefined) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}user/getDetails`, {
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
        college: "",
        contact: null,
        gradYear: null,
      };

      await ifSignIn();
      //setting to show modal
      setTimeout(() => {
        document.getElementById("hideMe").style.display = "none";
        setIsModalShown(true);
      }, 1600);

      // request to post data to db
      const resCheck = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}user/auth/google/chk`,
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
        fetch(`${process.env.REACT_APP_BACKEND_URL}user/getDetails`, {
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
      dispatch(startLoading());
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
      dispatch(stopLoading());
    };
    func();
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
                      year={profileDATA.gradYear}
                      college={profileDATA.college}
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
