import "./Assets/Images/CSS/aboutus.css";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const [width1, setWidth1] = React.useState(window.innerWidth);
  const [height1, setHeight1] = React.useState(window.innerHeight);
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth1(window.innerWidth);

      setHeight1(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const useViewport = () => {
    // Return both the height and width
    return { width1, height1 };
  };

  const MyComponent1 = () => {
    const { width1} = useViewport();
    // const { height } = useHeight();
    const breakpoint1 = 1000;

    return width1 < breakpoint1 ? <MobileComponent1 /> : <DesktopComponent1 />;
  };
  const DesktopComponent1 = () => {
    return (
      <div>
        <div className="legacy__about" data-aos="fade-up">
        {/* <div className="legacy__about"> */}
          <div className="about__left">
            <div id="about-stats">
              <div class="about-students">
                <div id="about-students" class="circle-ripple">
                  <span class="about-stat-num">9000+</span>
                  <span class="about-stat-title">students</span>
                </div>
                <div id="about-students-ripple-1" class="circle-ripple"></div>
                <div id="about-students-ripple-2" class="circle-ripple"></div>
                <div id="about-students-ripple-3" class="circle-ripple"></div>
                <div id="about-students-ripple-4" class="circle-ripple"></div>
                <div id="about-students-ripple-5" class="circle-ripple"></div>
              </div>

              <div class="about-colleges">
                <div id="about-colleges" class="circle-ripple">
                  <span class="about-stat-num">250+</span>
                  <span class="about-stat-title">colleges</span>
                </div>
                <div id="about-colleges-ripple-1" class="circle-ripple"></div>
                <div id="about-colleges-ripple-2" class="circle-ripple"></div>
                <div id="about-colleges-ripple-3" class="circle-ripple"></div>
                <div id="about-colleges-ripple-4" class="circle-ripple"></div>
                <div id="about-colleges-ripple-5" class="circle-ripple"></div>
              </div>
              <div className="about-events">
                <div id="about-events" class="circle-ripple">
                  <span class="about-stat-num">24+</span>
                  <span class="about-stat-title">events</span>
                </div>
                <div id="about-events-ripple-1" class="circle-ripple"></div>
                <div id="about-events-ripple-2" class="circle-ripple"></div>
                <div id="about-events-ripple-3" class="circle-ripple"></div>
                <div id="about-events-ripple-4" class="circle-ripple"></div>
                <div id="about-events-ripple-5" class="circle-ripple"></div>
              </div>
            </div>
          </div>
          <div className="about__right">
            <div id="about-content">
              {/* <h1 className="glitch" data-text="ABOUT">
                ABOUT
              </h1> */}
              <div class="sn_glitch_forNHeading atmosphere">
            <div class="sn_line_forNHeading">ABOUT</div>
            <div class="sn_line_forNHeading">ABOUT</div>
            <div class="sn_line_forNHeading">ABOUT</div>
            <div class="sn_line_forNHeading">ABOUT</div>
            <div class="sn_line_forNHeading">ABOUT</div>
            <div class="sn_line_forNHeading">ABOUT</div>
            <div class="sn_line_forNHeading">ABOUT</div>
            <div class="sn_line_forNHeading">ABOUT</div>
            <div class="sn_line_forNHeading">ABOUT</div>
          </div>
              <div class="content-wrap">
                <div class="content-line-wrap">
                  <div class="before-content-line"></div>
                </div>
                <div class="content-text">
                InfoXpression is the annual tech carnival of the University School of Information and Communication Technology to test one’s technical acumen over three days of intense, engaging, andfun events.Attracting active participation of students from over 250 colleges across North India, InfoXpression is acelebrationwhichfocuses on the promotion of Technology and Innovation, allowing participants to showcase their technical expertise and learn many new things in the process. Itaims toinvolvea plethora of competitions, workshops and guest lectures by eminent personalities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const MobileComponent1 = () => {
    return (
      // <div className="aboutm" data-aos="fade-up">
        <div className="aboutm" >
        <div className="aboutm-stats">
          <div className="aboutm-students">
            <span class="aboutm-number">6000+</span>
            <span class="aboutm-number-head">students</span>
          </div>
          <div className="aboutm-colleges">
            <span class="aboutm-number">120+</span>
            <span class="aboutm-number-head">colleges</span>
          </div>
          <div className="aboutm-events">
            <span class="aboutm-number">25+</span>
            <span class="aboutm-number-head">events</span>
          </div>
        </div>
        <div className="aboutm-content">
          <div className="aboutm-content-head">
            <span className="glitch" data-text="ABOUT">
              ABOUT
            </span>
          </div>
          <div class="mcontent-wrap">
            <div class="mcontent-line-wrap">
              <div class="mbefore-content-line"></div>
            </div>
            <div class="mcontent-text">
            InfoXpression is the annual tech carnival of the University School of Information and Communication Technology to test one’s technical acumen over three days of intense, engaging, andfun events.Attracting active participation of students from over 250 colleges across North India, InfoXpression is acelebrationwhichfocuses on the promotion of Technology and Innovation, allowing participants to showcase their technical expertise and learn many new things in the process. Itaims toinvolvea plethora of competitions, workshops and guest lectures by eminent personalities.
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <MyComponent1 />;
}
