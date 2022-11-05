import "./Assets/Images/CSS/glimpses.css";
import React from "react";
import { InView } from "react-intersection-observer";
import "./Assets/Images/CSS/glitch.css";
const Glimpses = () => {
  // const ref = React.useRef();
  let count = 0;
  const count_iteration = () => {
    if (count === 0) {
      count++;
      let valueDisplays = document.querySelectorAll(".num");
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let speed = 24;
        let counter = setInterval(function () {
          let interval = Math.ceil(endValue / speed);
          startValue += interval;
          valueDisplay.textContent = `${startValue}+`;

          if (startValue >= endValue) {
            clearInterval(counter);
          }
        });
      });
    }
  };

  return (
    <div style={{ width: "100%", marginTop: "25vh" }}>
      <div className="animate" style={{ opacity: 1 }}>
        <div className="sn_glitch_forNHeading atmosphere sn_glimpses" data-aos="fade-up">
          <div className="sn_line_forNHeading">GLIMPSES</div>
          <div className="sn_line_forNHeading">GLIMPSES</div>
          <div className="sn_line_forNHeading">GLIMPSES</div>
          <div className="sn_line_forNHeading">GLIMPSES</div>
          <div className="sn_line_forNHeading">GLIMPSES</div>
          <div className="sn_line_forNHeading">GLIMPSES</div>
          <div className="sn_line_forNHeading">GLIMPSES</div>
          <div className="sn_line_forNHeading">GLIMPSES</div>
          <div className="sn_line_forNHeading">GLIMPSES</div>
        </div>
        <div style={{ width: "100%" }} className="carousel" data-aos="fade-up">
          <div className="wrapper">
            <div className="container1">
              <span className="glimpses_text">With A Foot fall of </span>
              <span className="num" data-val="9000">
                000+
              </span>
              <span className="glimpses_text">
                Our last Year's Event Was A Success
              </span>
            </div>
          </div>
          <InView
            as="div"
            className="wrapper"
            onChange={(inView, entry) => {
              if (inView) {
                count_iteration();
              }
              console.log("inView :", inView);
            }}
          >
            <div className="container1">
              <span className="glimpses_text">Participation from</span>
              <span className="num" data-val="250">
                000+
              </span>
              <span className="glimpses_text">Colleges across North India</span>
            </div>
          </InView>
          <div className="wrapper">
            <div className="container1"><span className="glimpses_text">Conducted</span>
              <span className="num" data-val="24">
                000+
              </span>
              <span className="glimpses_text">
                diverse events full of fun & learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glimpses;
