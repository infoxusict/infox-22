import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import { useHistory } from "react-router-dom";

export default function ProfileCard(props) {
  const [isAuthKey, setisAuthKey] = useState(false);

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
    console.log("btnclick");
    setisAuthKey(false);
    history.push("/");
  };

  useEffect(() => {
    ifSignIn();
  }, []);

  return (
    <div className="profileCard">
      <img
        className="profilelogo"
        src="https://infoxpression.tech/static/media/aswd.a0dd4d343e8754fcfb94.png"
        alt=""
      />

      <div className="profilebox">
        <div>
          {!isAuthKey ? (
            <button id="logoutbtn" onClickCapture={logoutUser}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
                className="logoutimg"
              />
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="profilepic" style={{}}>
        <img className="headshot headshot-2" src={props.image}></img>
      </div>
      <div className="profileData">
        <h3>{props.name} </h3>
      </div>

      <div className="profileData2">
        <h6 className="shadows">{props.college}</h6>
        <h5>{props.gradYear}</h5>
        {/* <h4 className="college_title">College</h4> */}
      </div>
    </div>
  );
}
