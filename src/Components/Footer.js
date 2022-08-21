import React from "react";
import { Link } from "react-router-dom";
import "./Assets/Images/CSS/Footer.css";

// import MatrixRain from "./MatrixRain";

const Footer = () => {
  return (
    <>
      <div className="footer-20192">
        {/* <div className="site-section"> */}
        <div className="container">
          <div className="grid md:grid-cols-5 footer-grid ">
            <div className=" logo da-color-green">
              <a href="#" className="footer-logo theme text-xl atmosphere ">
                InfoXpression
              </a>
              {/* <a href="#" className="footer-logo theme text-xl atmosphere">
                Xpression
              </a> */}
              <p className="copyright text-base">
                <p>&copy; 2022</p>
              </p>
              <img
                src={require("./Assets/Images/aswd.png")}
                width="108px"
                alt="Infox'22 logo"
                srcset=""
              />
            </div>
            <div className="">
              <h3 className="customer atmosphere text-lg da-color-green mb-5 mt-12 md:mt-0">
                Schedule
              </h3>
              <ul className="list-unstyled links ">
                <li className="customerList text-lg div-text-lg">
                  <a className="customerListA" href="#/event">
                    Dates
                  </a>
                </li>
                <li className="customerList text-lg div-text-lg">
                  <a className="customerListA " href="#/team">
                    Venue
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="company text-lg atmosphere da-color-green mb-5 mt-12 md:mt-0">
                Teams
              </h3>
              <ul className="list-unstyled links text-lg div-text-lg">
                <li className="companyFoot text-lg div-text-lg">
                  <a className="footAcompany" href="#/team">
                    About us
                  </a>
                </li>
                {/* <li className = "companyFoot"><a className="footAcompany" href="#">Careers</a></li> */}
                <li className="companyFoot text-lg div-text-lg">
                  <a className="footAcompany" href="#/team">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="furtherInfo atmosphere text-lg mb-5 da-color-green mt-12 md:mt-0">
                Pages
              </h3>
              <ul className="list-unstyled links">
                <li className="furtherInformation text-lg div-text-lg" style={{marginBottom: "0px"}}>
                  <a
                    className="furtherInformationA"
                    href="https://forms.gle/bZgie3xMhq9CiwBU6"
                    target="_blank"
                  >
                    Campus Ambassador
                  </a>
                </li>
                <li className="furtherInformation mb-2 ">
                  <a className="furtherInformationA " href="#/legacy">
                    Legacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="followUs atmosphere mb-5 text-lg da-color-green mt-12 md:mt-0 div-text-lg">
                Follow us
              </h3>
              <ul className="list-unstyled social">
                <li className="socialList mb-2">
                  <a
                    className="listSocialA"
                    href="https://www.instagram.com/infoxpression.usict/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                      // style=" fill:#000000;"
                    >
                      <path
                        fill="#fff"
                        d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="socialList">
                  <a
                    className="listSocialA "
                    href="https://twitter.com/infoxpression_"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 48 48"
                      // style=" fill:#000000;"
                    >
                      <path
                        fill="#fff"
                        d="M44.719,10.305C44.424,10,43.97,9.913,43.583,10.091l-0.164,0.075c-0.139,0.064-0.278,0.128-0.418,0.191	c0.407-0.649,0.73-1.343,0.953-2.061c0.124-0.396-0.011-0.829-0.339-1.085c-0.328-0.256-0.78-0.283-1.135-0.066	c-1.141,0.693-2.237,1.192-3.37,1.54C37.4,7.026,35.071,6,32.5,6c-5.247,0-9.5,4.253-9.5,9.5c0,0.005,0,0.203,0,0.5l-0.999-0.08	c-9.723-1.15-12.491-7.69-12.606-7.972c-0.186-0.47-0.596-0.813-1.091-0.916C7.81,6.927,7.297,7.082,6.939,7.439	C6.741,7.638,5,9.48,5,13c0,2.508,1.118,4.542,2.565,6.124c-0.674-0.411-1.067-0.744-1.077-0.753	c-0.461-0.402-1.121-0.486-1.669-0.208c-0.546,0.279-0.868,0.862-0.813,1.473c0.019,0.211,0.445,4.213,5.068,7.235l-0.843,0.153	c-0.511,0.093-0.938,0.444-1.128,0.928C6.914,28.437,6.988,28.984,7.3,29.4c0.105,0.141,2.058,2.68,6.299,4.14	C11.334,34.295,8.222,35,4.5,35c-0.588,0-1.123,0.344-1.366,0.88c-0.244,0.536-0.151,1.165,0.237,1.607	C3.532,37.672,7.435,42,17.5,42C34.213,42,42,26.485,42,16v-0.5c0-0.148-0.016-0.293-0.022-0.439	c2.092-2.022,2.879-3.539,2.917-3.614C45.084,11.067,45.014,10.609,44.719,10.305z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="socialList">
                  <a
                    className="listSocialA"
                    href="https://www.facebook.com/infoxpression/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 48 48"
                      // style=" fill:#000000;"
                    >
                      <path
                        fill="#fff"
                        d="M24,4C12.972,4,4,12.972,4,24c0,10.006,7.394,18.295,17,19.75V29h-4c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1h4v-3.632	C21,15.617,23.427,13,27.834,13c1.786,0,3.195,0.124,3.254,0.129C31.604,13.175,32,13.607,32,14.125V17.5c0,0.553-0.448,1-1,1h-2	c-1.103,0-2,0.897-2,2V24h4c0.287,0,0.56,0.123,0.75,0.338c0.19,0.216,0.278,0.502,0.243,0.786l-0.375,3	C31.555,28.624,31.129,29,30.625,29H27v14.75c9.606-1.455,17-9.744,17-19.75C44,12.972,35.028,4,24,4z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="socialList mb-1">
                  <a
                    className="listSocialA"
                    href="https://www.linkedin.com/company/infoxpression-usict/about/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      // style=" fill:#000000;"
                    >
                      {" "}
                      <path
                        fill="#fff"
                        d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"
                      ></path>
                    </svg>
                  </a>
                </li>
                {/* <li className="socialList">
                  <a className="listSocialA" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      // style=" fill:#000000;"
                    >
                      {" "}
                      <path
                        fill="#fff"
                        d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                      ></path>
                    </svg>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Footer;
