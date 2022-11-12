import Aos from "aos";
import { useEffect } from "react";

export default function Sponser() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section>
      <div className="sponsers mb-32 " data-aos="fade-up">
        {/* <h1 className="glitch previous_sponsors" data-text="Previous Sponsors">
          Previous Sponsors
        </h1> */}
        <div className="sn_glitch_forNHeading atmosphere sn_exSpon">
            <div className="sn_line_forNHeading">past sponsors</div>
            <div className="sn_line_forNHeading">past sponsors</div>
            <div className="sn_line_forNHeading">past sponsors</div>
            <div className="sn_line_forNHeading">past sponsors</div>
            <div className="sn_line_forNHeading">past sponsors</div>
            <div className="sn_line_forNHeading">past sponsors</div>
            <div className="sn_line_forNHeading">past sponsors</div>
            <div className="sn_line_forNHeading">past sponsors</div>
            <div className="sn_line_forNHeading">past sponsors</div>
          </div>
        <div className="sponsers-whole">
          <div className="left">
            <p>
              We would like to express our sincere gratitude and appreciation to
              our previous sponsors.
            </p>
          </div>
          <div className="right">
            <div className="box">
              <img src={require("./Assets/Images/Sponsor/amigos.png")} alt="" />
            </div>
            <div className="box">
              <img src={require("./Assets/Images/Sponsor/Agro.png")} alt="" />
            </div>
            <div className="box">
              <img
                src={require("./Assets/Images/Sponsor/barista2.png")}
                alt=""
              />
            </div>
            <div className="box">
              <img
                src={require("./Assets/Images/Sponsor/reappoint2.png")}
                alt=""
              />
            </div>
            <div className="box">
              <img src={require("./Assets/Images/Sponsor/cb.png")} alt="" />
            </div>
            <div className="box">
              <img
                src={require("./Assets/Images/Sponsor/designcut.png")}
                alt=""
              />
            </div>
            <div className="box">
              <img src={require("./Assets/Images/Sponsor/Hidden.png")} alt="" />
            </div>
            <div className="box">
              <img src={require("./Assets/Images/Sponsor/Paytm.png")} alt="" />
            </div>
            <div className="box">
              <img src={require("./Assets/Images/Sponsor/Podio.png")} alt="" />
            </div>
            <div className="box">
              <img
                src={require("./Assets/Images/Sponsor/redbull.png")}
                alt=""
              />
            </div>
            <div className="box">
              <img
                src={require("./Assets/Images/Sponsor/Redwolf.png")}
                alt=""
              />
            </div>
            <div className="box">
              <img
                src={require("./Assets/Images/Sponsor/reliance.png")}
                alt=""
              />
            </div>
            <div className="box">
              <img
                src={require("./Assets/Images/Sponsor/samsung2.png")}
                alt=""
              />
            </div>
            <div className="box">
              <img src={require("./Assets/Images/Sponsor/web.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
