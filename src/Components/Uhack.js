import React, { useState } from "react";
import "./Assets/Images/CSS/uhack.css";
import MatrixRain from "./MatrixRain";
import FAQ from "./uhack-faq";

const Uhack = () => {
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
      <div className="uh-bg">
        <div className="md:pt-32 text-white">
          <section className="container flex md:flex mx-auto gap-32  ">
            <div className="basis-1/2 mt-16">
              <div className="atmosphere text-7xl">Uhack</div>
              <div className="mt-4 text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minimm eveniet illo?
              </div>
              <div className="mt-56">
                <a href="/" className="register ">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  change me
                </a>
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
          <section className="container mx-auto ">
            <div className="flex hel text-6xl atmosphere">Sponsors</div>
            <div className="flex mx-auto gap-12 mt-14 hel ">
              <a
                href="https://devfolio.co"
                target="_blank"
                rel="noreferrer"
                className="basis-1/5 "
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
                className="basis-1/5"
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
                className="basis-1/5"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Polygon-logo.png")}
                  alt="Polygon-logo"
                />
              </a>
              <a
                href="https://replit.com"
                target="_blank"
                rel="noreferrer"
                className="basis-1/5"
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
                className="basis-1/5"
              >
                <img
                  src={require("./Assets/Images/images/uhack/Solana-logo.png")}
                  alt="Solana-logo"
                />
              </a>
            </div>
          </section>
          <section className="container mx-auto ">
            <div className="atmosphere hel text-5xl mt-32">
              Tracks &amp; prizes
            </div>
            <div className="flex text-3xl gap-24 mt-16">
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
            </div>
          </section>
          <section className="container mx-auto ">
            <div className="atmosphere hel text-5xl mt-32">
              Sponsor Tracks &amp; prizes
            </div>
            <div className="flex text-3xl gap-24 mt-16">
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
              <div className="h-96 hel basis-1/3 uh-glass">cards</div>
            </div>
          </section>
          <section className="container mx-auto ">
            <div className="atmosphere hel text-5xl mt-32">Prize Winnners</div>
          </section>
          <section className="container mx-auto uhf">
            <div className="atmosphere hel text-5xl mt-32">FAQs</div>
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
