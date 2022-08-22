import React from "react";
import Slider from "./Carousel";
import About from "./aboutus";
import "./Assets/Images/CSS/legacy.css";
import "./Assets/Images/CSS/glitch.css";
import Sponser from "./Sponser";
import MatrixRain from "./MatrixRain";
// import Sponser from "./Sponser";

const sliderData1 = [
  "./Assets/Images/legacy/S1-01.JPG",
  "./Assets/Images/legacy/S1-02.JPG",
  "./Assets/Images/legacy/S1-03.JPG",
  "./Assets/Images/legacy/S1-04.JPG",
  "./Assets/Images/legacy/S1-05.JPG",
  "./Assets/Images/legacy/S1-06.JPG",
];
const sliderData2 = [
  "./Assets/Images/legacy/S2-01.jpg",
  "./Assets/Images/legacy/S2-02.jpg",
  "./Assets/Images/legacy/S2-03.jpg",
  "./Assets/Images/legacy/S2-04.jpg",
  "./Assets/Images/legacy/S2-05.JPG",
  "./Assets/Images/legacy/S2-06.JPG",
];

const sliderData3 = [
  "./Assets/Images/legacy/S3-01.jpg",
  "./Assets/Images/legacy/S3-02.jpg",
  "./Assets/Images/legacy/S3-03.jpg",
  "./Assets/Images/legacy/S3-04.jpg",
  "./Assets/Images/legacy/S3-05.JPG",
  "./Assets/Images/legacy/S3-06.JPG",
];

export default function Legacy() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  // eslint-disable-next-line
  const useViewport = () => {
    React.useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);

        setHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // Return both the height and width
    return { width, height };
  };

  const MyComponent = () => {
    // const { height } = useHeight();
    const breakpoint = 650;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
  };

  const DesktopComponent = () => {
    return (
      <div className="legacy__hero">
        <div className="legacy__hero-left">
          {/* <div className="left__background">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </div> */}
          <div className="hero__left-name">
            <span>InfoXpression</span>
          </div>
          {/* <div className="hero__left-head">
            <span className="glitch" data-text="LEGACY">
              LEGACY
            </span>
          </div> */}
          <div class="sn_glitch_forNHeading atmosphere">
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
          </div>
          <div className="hero__left-desc">
            <span>
              InfoXpression2022 edition is set to continue its legacy as one of
              the biggest tech-fest of GGSIPU (USICT).This year, InfoX aims to
              be bigger, bolder, and better.
            </span>
          </div>
        </div>
        <div className="legacy__hero-right">
          <div className="legacy__hero-sliders">
            <div className="slider-4">
              {/* <span className="num" data-val="16">
                16
              </span> */}
              <img src={require("./Assets/Images/legacy/hash.png")} alt="" />
            </div>
            <Slider
              sliderData={sliderData1}
              gridClass="slider-3"
              width="20"
              height="22.5"
              xSlide="reverse"
            />
            <Slider
              sliderData={sliderData2}
              gridClass="slider-2"
              width="30"
              height="45"
              ySlide="true"
            />
            <Slider
              sliderData={sliderData3}
              gridClass="slider-1"
              width="50"
              height="45"
            />
          </div>
        </div>
      </div>
    );
  };

  const MobileComponent = () => {
    return (
      <div className="legacy__hero">
        <div className="legacy__hero-left">
          <div className="hero__left-name">
            <span>InfoXpression</span>
          </div>
          {/* <div className="hero__left-head">
            <span className="glitch" data-text="LEGACY">
              LEGACY
            </span>
          </div> */}
          <div class="sn_glitch_forNHeading atmosphere phone_lagecy">
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
            <div class="sn_line_forNHeading">LEGACY</div>
          </div>
          {/* <div className="hero__left-desc">
            <span>
              ggggsum is placeholder text commonly used in the graphic, print,
              and publishing industries for previewing layouts and visual
              mockups.
            </span>
          </div> */}
        </div>
        <div className="legacy__hero-right">
          <div className="legacy__hero-sliders">
            <div className="slider-4">
              {/* <span className="num" data-val="16">
                16
              </span> */}
              <img src={require("./Assets/Images/legacy/hash.png")} alt="" />
            </div>
            <Slider
              sliderData={sliderData1}
              gridClass="slider-3"
              width="40"
              height="25"
              xSlide="reverse"
            />
            <Slider
              sliderData={sliderData2}
              gridClass="slider-2"
              width="60"
              height="50"
              // ySlide="true"
            />
            <Slider
              sliderData={sliderData3}
              gridClass="slider-1"
              width="100"
              height="50"
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <MatrixRain />
      <div className="legacy">
        <div className="navbar1"></div>
        <MyComponent />
        <div className="legacy__space"></div>
        <About />
        <Sponser />
      </div>
    </>
  );
}
