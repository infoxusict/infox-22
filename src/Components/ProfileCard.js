import React from "react";

export default function ProfileCard(props) {

  return (
    <div className="profileCard">
      <img
        className="profilelogo"
        src="https://infoxpression.tech/static/media/aswd.a0dd4d343e8754fcfb94.png"
        alt=""
      />
      <div className="profilebox"></div>
      <div className="profilepic" style={{}}>
        <div class="headshot headshot-2"></div>
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
