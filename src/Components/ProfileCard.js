import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import { useHistory } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

export default function ProfileCard(props) {
  const [isAuthKey, setisAuthKey] = useState(false);
console.log(props)
  const history = useHistory();
  const ifSignIn = async () => {
    var x = localStorage.getItem("authkey");
    if (x != null && x !== undefined) {
      setisAuthKey(true);
    }
    setisAuthKey(false);
  };

  const logoutUser = () => {
    localStorage.removeItem("authkey");
    // console.log("btnclick");
    setisAuthKey(false);
    history.push("/");
  };

  useEffect(() => {
    ifSignIn();
  }, []);

  return (
    <div className="relative">
      <div className="profileCard">
        {!isAuthKey && (
          <button id="logoutbtn" className="absolute" onClickCapture={logoutUser}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
              />
              <path
                fill-rule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
          </button>
        )}
        <img
          className="profilelogo"
          src="/static/media/aswd.a0dd4d343e8754fcfb94.png"
          alt=""
        />
        <div className="profilebox" />
        <div className="profilepic" style={{}}>
          <img className="headshot headshot-2" src={props.image} alt=""></img>
        </div>
        <div className="profileData">
          <h3>{props.name} </h3>
        </div>

      <div className="profileData2">
        <h6 className="shadows">{props.college}</h6>
        <h5>{props.year}</h5>
        <div className="discod-btn-da">
          <a
            rel="noreferrer"
            href="https://discord.gg/Y6w42tmwWe"
            target="_blank"
          >
            <FaDiscord size={33} />
          </a>
        </div>
        {/* <h4 className="college_title">College</h4> */}
        <div className="profileData2">
          <h6 className="shadows">{props.college}</h6>
          <h5>{props.year}</h5>
          {/* <h4 className="college_title">College</h4> */}
        </div>
      </div>
      </div>
      <d></d>
  );
}
