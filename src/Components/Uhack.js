import React, { useState } from "react";
import "./Assets/Images/CSS/uhack.css";
import MatrixRain from "./MatrixRain";
import FAQ from "./uhack-faq";

const Uhack = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  const [faqs, setFaqs] = useState([
    {
      question: "What is UHack 5.0?",
      answer:
        "It is a hackathon where you get to collaborate with people to create a project in the given time.It'll operate in hybrid mode. In other words, participants may be invited to the hackathon in either of the ways (offline/online).",
      open: true,
    },
    {
      question: "Is there a cost for registration?",
      answer: "No, it costs nothing to register.",
      open: false,
    },
    {
      question: "What is the theme of the Hackathon?",
      answer:
        "There will be few options of programming challenges provided, which are AI/ML, Web3, Open innovation. Healthcare, Edtech,  Utility or IOT.",
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
        "On the basis of their concise summaries of their project concepts, the registered participants will be narrowed down.",
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
        "The hackathon will start at 12 AM on November 28 and end at 12 AM on November 29.",
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

  return (
    <>
      <MatrixRain />
      <div className="container md:mx-auto">
        <div className="md:pt-24  text-white">
          <section className=" flex md:flex  gap-32  ">
            <div className="basis-1/2 mt-16">
              {/* <div className="atmosphere text-7xl">Uhack</div> */}
              <div class="sn_glitch_forNHeading atmosphere">
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
              <div className="mt-4 text-l">
                UHack is here again folks!! One of the best hackathons of
                Delhi-NCR region is here again, waiting for you to participate.
                Its bigger, better and more fun than ever and surely, prizes
                that can make you go berserk. So come up, work on your dreams
                for 24-hours non-stop and make it happen. Make your imaginations
                take out solutions that nobody has ever thought and get involved
                in the heat with some of the best coders of the country.
              </div>
              <div className="flex mt-16 gap-8 txt-shdw text-xl">
                <div className="flex gap-2">
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
                  <p> 28th November 2022</p>
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
                  <p className="">12 Noon</p>
                </div>
              </div>
              <div className="mt-19 ml-20 devfolio-button">
                <div 
                  class="apply-button" 
                  data-hackathon-slug="YOUR-HACKATHON-SLUG" 
                  data-button-theme="dark-inverted"
                ></div>
              </div>
            </div>
            <div className="basis-1/2 flex justify-center">
              <img
                src={require("./Assets/Images/images/uhack/uhack.8544fd4e.webp")}
                alt="infox"
                className="uh-img h-4/5"
              />
            </div>
          </section>
          <section className="  ">
            <div className="flex hel text-6xl atmosphere title-txt-shdw">
              Sponsors
            </div>
            <div className="flex  gap-12 mt-14 hel ">
              <a
                href="https://devfolio.co"
                target="_blank"
                rel="noreferrer"
                className="basis-1/5 spon-logo-width"
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
                className="basis-1/5 spon-logo-width"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Filecoin-logo.png")}
                  alt="Filecoin-logo"
                />
              </a>
              <a
                href="https://polygon.technology/"
                target="_blank"
                rel="noreferrer"
                className="basis-1/5 spon-logo-width"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Polygon-logo.png")}
                  alt="Polygon-log "
                />
              </a>
              <a
                href="https://replit.com"
                target="_blank"
                rel="noreferrer"
                className="basis-1/5 spon-logo-width"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Replit-logo.png")}
                  alt="Replit-logo"
                />
              </a>
              <a
                href="https://solana.com"
                target="_blank"
                rel="noreferrer"
                className="basis-1/5 spon-logo-width"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Solana-logo.png")}
                  alt="Solana-logo"
                />
              </a>
            </div>
          </section>
          <section className="">
            <div className="atmosphere hel text-5xl mt-32 title-txt-shdw">
              Tracks &amp; prizes
            </div>
            <div className="flex text-3xl gap-24 mt-16">
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
            </div>
          </section>
          <section className="">
            <div className="atmosphere hel text-5xl mt-32 title-txt-shdw ">
              Sponsor Tracks &amp; prizes
            </div>
            <div className="flex text-3xl gap-24 mt-16">
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
            </div>
          </section>
          <section className="">
            <div className="atmosphere hel text-5xl mt-32 title-txt-shdw">
              Prize Winnners
            </div>
            <div className="hel txt-shdw h-56 text-3xl">To Be Announced...</div>
          </section>
          <section className="uhf">
            <div className="atmosphere hel text-5xl mt-32 title-txt-shdw">
              FAQs
            </div>
            <div className="">
              <div className="faqs text-black ">
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
