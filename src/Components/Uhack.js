import React from "react";
import "./Assets/Images/CSS/uhack.css";
import MatrixRain from "./MatrixRain";
const Uhack = () => {
  return (
    <>
      <MatrixRain />
      <div className="md:mt-32 text-white ">
        <section className="container flex md:flex mx-auto gap-32  ">
          <div className="basis-1/2 mt-16">
            <div className="atmosphere text-7xl">Uhack</div>
            <div className="mt-4 text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              cupiditate minimm eveniet illo?
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
          <div className="flex hel text-6xl atmosphere">Sponsers</div>
          <div className="flex mx-auto gap-12 mt-14 hel">
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
        <section className="container mx-auto ">
          <div className="atmosphere hel text-5xl mt-32">FAQs</div>
        </section>
      </div>
    </>
  );
};

export default Uhack;
