import React, { useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

import "./Assets/Images/CSS/uhack.css";
import MatrixRain from "./MatrixRain";
import FAQ from "./uhack-faq";
import { FaRobot } from "react-icons/fa";

import { IoLogoBuffer } from "react-icons/io";
import { GiHealthNormal } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
// import { WiDayThunderstorm } from "react-icons/wi"
import { SiMusicbrainz } from "react-icons/si";

import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";

const Uhack = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [faqs, setFaqs] = useState([
    {
      question: "What is UHack 5.0?",
      answer:
        "UHack is a hackathon where you get to collaborate with people to create a project in the given time.It'll operate in offline mode. In other words, participants are required to come to campus for their participation.",
      open: true,
    },
    {
      question: "Is there a cost for registration?",
      answer: "Nada, it costs nothing to register.",
      open: false,
    },
    {
      question: "What is the theme of the Hackathon?",
      answer:
        "There will be few options of programming challenges provided, which are AI/ML, Web3, Open innovation. Healthcare, Edtech,  Utility etc",

      open: false,
    },
    {
      question:
        "What kind of programming languages can be used in the Hackathon?",
      answer: "Any programming language is acceptable",
      open: false,
    },
    {
      question:
        "Do we have to compete as a team? How many people make up a team?",
      answer:
        "Yes.  You will form your team composed of 2 to 4 members. You are encouraged to form the team before the event. However, registration is individual. If you don't have a team, we will assist you to form the team during the event.",
      open: false,
    },
    {
      question:
        "What parameters were used to choose the teams for shortlisting?",
      answer:
        "On the basis of their github profile and resumes, the registered participants will be narrowed down.",
      open: false,
    },
    {
      question:
        "What do I need to prepare before the Hackathon event? What do I need to bring for this event?",
      answer:
        "Bring your own laptop that is pre-installed with the software development tools you'll need, as well as any other devices you'll need to accomplish your project.",
      open: false,
    },
    {
      question: "Are we required to stay at the venue?",
      answer:
        "Yes you may stay at Hall for 24 hours so you can complete your project.",
      open: false,
    },
    {
      question: "What time is the hackathon's beginning and ending?",
      answer:
        "The hackathon will start at 2pm on November 18 and end at 2 pm on November 19.",

      open: false,
    },
    {
      question: "Who can participate?",
      answer:
        "You must be enrolled in a university, college, or higher secondary school.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };


  // React.useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // });

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
    const { width1 } = useViewport();
    // const { height } = useHeight();
    const breakpoint1 = 1000;

    return width1 < breakpoint1 ? <MobileComponent1 /> : <DesktopComponent1 />;
  };

  const DesktopComponent1 = () => {
    return (
      <div>
        <div className="flex hel text-4xl md:text-7xl atmosphere title-txt-shdw">
          ABOUT
        </div>
        <div className="legacy__about uh-bg " >

          <div className="about__left">
            <div id="about-stats">
              <div class="about-students">
                <div id="about-students" class="circle-ripple">
                  <span class="about-stat-num">5800+</span>
                  <span class="about-stat-title">Registrations</span>
                </div>
                <div id="about-students-ripple-1" class="circle-ripple"></div>
                <div id="about-students-ripple-2" class="circle-ripple"></div>
                <div id="about-students-ripple-3" class="circle-ripple"></div>
                <div id="about-students-ripple-4" class="circle-ripple"></div>
                <div id="about-students-ripple-5" class="circle-ripple"></div>
              </div>

              <div class="about-colleges">
                <div id="about-colleges" class="circle-ripple">
                  <span class="about-stat-num">25+</span>
                  <span class="about-stat-title">Teams</span>
                </div>
                <div id="about-colleges-ripple-1" class="circle-ripple"></div>
                <div id="about-colleges-ripple-2" class="circle-ripple"></div>
                <div id="about-colleges-ripple-3" class="circle-ripple"></div>
                <div id="about-colleges-ripple-4" class="circle-ripple"></div>
                <div id="about-colleges-ripple-5" class="circle-ripple"></div>
              </div>
              <div className="about-events">
                <div id="about-events" class="circle-ripple">
                  <span class="about-stat-num">24</span>
                  <span class="about-stat-title">Hour</span>
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
              <div class="content-wrap mt-32">
                <div class="content-line-wrap">
                  <div class="before-content-line"></div>
                </div>
                <div class="content-text text-justify">
                  UHack, a hackathon where programmers and other interested
                  individuals collaborate to enhance or create new software. It
                  provide an opportunity for contributors to strengthen soft
                  skills like leadership, mentoring and communication. They
                  offer risk-free situations where teamwork is encouraged,
                  building interpersonal communication skills. This year UHack
                  is back with seven tracks for you to hack into. There will be
                  a prize for the top project on each track. Students will
                  design technology projects from the very beginning and build
                  upon what they have learned. Push the limits of your mind to
                  make something amazing!
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
      <div className="aboutm">
        <div className="aboutm-stats">
          <div className="aboutm-students">
            <span class="aboutm-number">5800+</span>
            <span class="aboutm-number-head">students</span>
          </div>
          <div className="aboutm-colleges">
            <span class="aboutm-number">25+</span>
            <span class="aboutm-number-head">Teams</span>
          </div>
          <div className="aboutm-events">
            <span class="aboutm-number">24</span>
            <span class="aboutm-number-head">Hour</span>
          </div>
        </div>
        <div className="aboutm-content">
          <div className="flex hel text-4xl md:text-6xl atmosphere title-txt-shdw">
            ABOUT
          </div>
          <div class="mcontent-wrap ">
            <div class="mcontent-line-wrap">
              <div class="mbefore-content-line"></div>
            </div>
            <div class="mcontent-text text-justify">
              UHack, a hackathon where programmers and other interested
              individuals collaborate to enhance or create new software. It
              provide an opportunity for contributors to strengthen soft skills
              like leadership, mentoring and communication. They offer risk-free
              situations where teamwork is encouraged, building interpersonal
              communication skills. This year UHack is back with seven tracks
              for you to hack into. There will be a prize for the top project on
              each track. Students will design technology projects from the very
              beginning and build upon what they have learned. Push the limits
              of your mind to make something amazing!
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <MatrixRain />
      <div className="container mx-auto">
        <div className="md:pt-24  text-white">
          <section className=" flex flex-col-reverse  md:flex-row md:gap-32 pb-16 uh-bg md:pl-8">
            <div className="basis-1/2 mt-8 md:mt-16 md:pl-8">
              {/* <div className="atmosphere text-7xl">Uhack</div> */}
              <div class="sn_glitch_forNHeading atmosphere uh-heading hidden md:block">
                <div class="sn_line_forNHeading">Uhack</div>
                <div class="sn_line_forNHeading">Uhack</div>
                <div class="sn_line_forNHeading">Uhack</div>
                <div class="sn_line_forNHeading">Uhack</div>
                <div class="sn_line_forNHeading">Uhack</div>
                <div class="sn_line_forNHeading">Uhack</div>
                <div class="sn_line_forNHeading">Uhack</div>
                <div class="sn_line_forNHeading">Uhack</div>
                <div class="sn_line_forNHeading">Uhack</div>
              </div>
              <div className="md:mt-4  text-l mx-8 md:mx-0  text-justify">
                UHack is here again folks!! One of the best hackathons of
                Delhi-NCR region is here again, waiting for you to participate.
                Its bigger, better and more fun than ever and surely, prizes
                that can make you go berserk.
                {/*So come up, work on your dreams
                for 24-hours non-stop and make it happen. Make your imaginations
                take out solutions that nobody has ever thought and get involved
                in the heat with some of the best coders of the country. */}
              </div>
              <div className="flex md:mt-16 mt-8 gap-8 txt-shdw text-xl justify-center md:justify-start">
                <div className="flex gap-2 ">
                  <svg
                    // style="color: #000"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-calendar-date"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"
                      fill="white"
                    ></path>{" "}
                    <path
                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                  <p> 18th-19th Nov'22</p>
                </div>
                <div className="flex gap-2">
                  <svg
                    // style="color: white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                      fill="white"
                    ></path>{" "}
                    <path
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                  <p className="">2 PM</p>
                </div>
              </div>
              <div className=" mt-12 md:mt-48 flex justify-center md:justify-start">
                <div
                  class="apply-button"
                  data-hackathon-slug="uhack5"
                  data-button-theme="dark-inverted"
                ></div>
              </div>
            </div>
            <div className="basis-1/2 flex justify-center mt-16 md:mt-0 flex-col hel">
              <div>
                <div class="sn_glitch_forNHeading atmosphere uh-heading md:hidden block">
                  <div class="sn_line_forNHeading">Uhack</div>
                  <div class="sn_line_forNHeading">Uhack</div>
                  <div class="sn_line_forNHeading">Uhack</div>
                  <div class="sn_line_forNHeading">Uhack</div>
                  <div class="sn_line_forNHeading">Uhack</div>
                  <div class="sn_line_forNHeading">Uhack</div>
                  <div class="sn_line_forNHeading">Uhack</div>
                  <div class="sn_line_forNHeading">Uhack</div>
                  <div class="sn_line_forNHeading">Uhack</div>
                </div>
              </div>
              <div className="flex justify-center md:justify-end ">
                <img
                  src={require("./Assets/Images/images/uhack/uhack-poster.png")}
                  alt="infox"
                  className="uh-img  p-4 uh-bg w-4/5 "
                />
              </div>
            </div>
          </section>
          <section>
            <section className="md:mt-32 mt-16">
              <MyComponent1 />
            </section>
          </section>
          <section className=" mt-24 ">
            <div className="flex hel text-4xl md:text-6xl atmosphere title-txt-shdw">
              Sponsors
            </div>
            
            
            <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center items-center mx-3 gap-x-6 gap-y-12 md:gap-y-20 md:gap-x-12 mt-6 md:mt-14 uh-bg py-16 md:px-16">
              <a
                href="https://polygon.technology/"
                target="_blank"
                rel="noreferrer"
                className="basis-2/5 md:basis-1/5 spon-logo-width"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Polygon-logo.png")}
                  alt="Polygon-log "
                />
              </a>

              <a
                href="https://devfolio.co"
                target="_blank"
                rel="noreferrer"
                className="basis-2/5 md:basis-1/5 spon-logo-width"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Devfolio-logo.png")}
                  alt="Devfolio-logo"
                />
              </a>
              <a
                href="https://filecoin.io"
                target="_blank"
                rel="noreferrer"
                className="basis-2/5 md:basis-1/5 spon-logo-width"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Filecoin-logo.png")}
                  alt="Filecoin-logo"
                />
              </a>

              <a
                href="https://replit.com"
                target="_blank"
                rel="noreferrer"
                className="md:basis-1/5 spon-logo-width basis-2/5"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Replit-logo.png")}
                  alt="Replit-logo"
                />
              </a>
              <a
                href="https://www.digitalocean.com/"
                target="_blank"
                rel="noreferrer"
                className="md:basis-1/5 spon-logo-width basis-2/5"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Do-logo.png")}
                  alt="Do-logo"
                />
              </a>
              <a
                href="https://gen.xyz/"
                target="_blank"
                rel="noreferrer"
                className="md:basis-1/5 wolfram-logo basis-2/5"
              >
                <img
                  src={require("./Assets/Images/images/uhack/xyz-logo.png")}
                  alt="xyz-logo"
                />
              </a>
              <a
                href="https://solana.com"
                target="_blank"
                rel="noreferrer"
                className="md:basis-1/5 spon-logo-width basis-2/5"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Solana-logo.png")}
                  alt="Solana-logo"
                />
                
              </a>

              <a
                href="https://wolfram.com"
                target="_blank"
                rel="noreferrer"
                className="md:basis-1/5 spon-logo-width basis-2/5"
              >
                <img
                  src={require("./Assets/Images/images/uhack/wolfram-alpha-logo.png")}
                  alt="Wolfram-logo"
                />
              </a>
              <a
                href="https://www.echo3d.co/"
                target="_blank"
                rel="noreferrer"
                className="md:basis-1/5 spon-logo-width basis-2/5"
              >
                <img
                  src={require("./Assets/Images/images/uhack/echo-logo.png")}
                  alt="echo-logo"
                />
              </a>
              <a
                href="https://www.taskade.com/"
                target="_blank"
                rel="noreferrer"
                className=" spon-logo-width taska"
              >
                <img
                  src={require("./Assets/Images/images/uhack/taskade-logo.png")}
                  alt="taskade-logo"
                />
              </a>
            </div>
          </section>
          <section className="container mx-auto ">
            <div className="flex hel text-4xl md:text-6xl atmosphere title-txt-shdw mt-24 md:mt-32">
              Categories
            </div>
            <div className="uh-bg py-12 mt-12 mx-4 md:px-4">
              <div className="flex text-3xl flex-wrap-reverse gap-16 md:gap-24 md:flex-nowrap hel">
                <div className="h-42 hel md:basis-1/3 flex flex-col  ">
                  {" "}
                  <FaRobot size={55} style={{ fill: "" }} />
                  <div>AI / ML</div>
                  <div className="text-sm text-center mt-2 ">
                    The capacity of a machine to replicate intelligent human
                    behaviour is referred to as machine learning in the field of
                    artificial intelligence.
                  </div>
                </div>
                <div className="h-42 hel md:basis-1/3 flex flex-col ">
                  <IoLogoBuffer size={55} style={{ fill: "" }} />
                  <div>Web3</div>
                  <div className="text-sm text-center mt-2">
                    Concept for a new version of the World Wide Web that
                    incorporates decentralisation, blockchain technologies, and
                    token-based economics.
                  </div>
                </div>
                <div className="h-42 hel md:basis-1/3 flex flex-col hel">
                  <SiMusicbrainz size={55} style={{ fill: "" }} />
                  <div>Open Innovation</div>
                  <div className="text-sm text-center mt-2">
                    Integrates internal and external concepts to create
                    architectures and systems whose specifications are
                    established by a business model.
                  </div>
                </div>
              </div>
              <div className="flex text-3xl gap-16 md:gap-24 mt-16 flex-wrap md:flex-nowrap hel">
                <div className="h-42 hel md:basis-1/3 flex flex-col ">
                  <GiHealthNormal size={55} style={{ fill: "" }} />
                  <div>Healthcare</div>
                  <div className="text-sm text-center mt-2">
                    IT tools or software designed to increase hospital
                    productivity, provide new insights into medicines and
                    treatments, or improve overall healthcare quality.
                  </div>
                </div>
                <div className="h-42 hel md:basis-1/3 flex flex-col ">
                  <MdOutlineCastForEducation size={55} style={{ fill: "" }} />
                  <div>Edtech</div>
                  <div className="text-sm text-center mt-2">
                    Using technology to enhance education's effect, delivery,
                    and user experience.
                  </div>
                </div>
                <div className="h-42 hel md:basis-1/3 flex flex-col ">
                  <RiMoneyDollarCircleFill size={55} style={{ fill: "" }} />
                  <div>Fintech</div>
                  <div className="text-sm text-center mt-2">
                    Facilitates the quick and affordable transfer of money and
                    the settlement of overseas invoices.
                  </div>
                </div>
                <div className="h-42 hel md:basis-1/3 flex flex-col ">
                  <VscTools size={55} style={{ fill: "" }} />
                  <div>Utility</div>
                  <div className="text-sm text-center mt-2">
                    Entails figuring out ways to incorporate a product into a
                    customer's lifestyle by highlighting how it can meet the
                    needs of the customer by solving a problem.
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="">
            <div className="atmosphere hel text-5xl mt-32 title-txt-shdw ">
              Sponsor Tracks &amp; prizes
            </div>
            <div className="flex text-3xl gap-24 mt-16">
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
            </div>
          </section> */}
          {/* <section className="">
            <div className="atmosphere hel text-5xl mt-32 title-txt-shdw">
              Prize Winnners
            </div>
            <div className="hel txt-shdw h-56 text-3xl">To Be Announced...</div>
          </section> */}
          <section className="uhf">
            <div className="flex hel text-4xl md:text-6xl atmosphere title-txt-shdw mt-24 md:mt-32">
              FAQs
            </div>
            <div className="hel ">
              <div className="faqs text-black w-full md:w-10/12">
                {faqs.map((faq, index) => (
                  <FAQ
                    faq={faq}
                    index={index}
                    key={index}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Uhack;
