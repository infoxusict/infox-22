import React from "react";

export default function ProfileCard() {
  return (
    <div className="profileCard">
      <img
        className="profilelogo"
        src="https://infoxpression.tech/static/media/aswd.a0dd4d343e8754fcfb94.png"
      />
      <div className="profilebox"></div>
      <div className="profilepic">
        <div class="headshot headshot-2"></div>
      </div>
      <div className="profileData">
        <h3>keanu reeves </h3>
      </div>

      <div className="profileData2">
        <h6 className="shadows">
          University School of Information and Communication technology{" "}
        </h6>
        <h5>Btech 2025</h5>
        {/* <h4 className="college_title">College</h4> */}
      </div>
    </div>
  );
}
