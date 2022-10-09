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
        <h3>keanu reeves singh rathore</h3>
      </div>

      <div className="profileQuote">
        <h5>
          " I can only show you the door, you're the one that has to walk
          through it "
        </h5>
      </div>
    </div>
  );
}
