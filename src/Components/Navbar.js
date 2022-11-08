import React from "react";
import { Link } from "react-router-dom";
import "./Assets/Images/CSS/Navbar.css";
const Navbar = () => {
  let countt = 0;
  const handleNavIndex = () => {
    if (countt === 0) {
      document.getElementById("navigation__nav").style.zIndex = 20;
      document.getElementById("navigation__background").style.zIndex = 20;
      countt = 1;
    } else if (countt === 1) {
      document.getElementById("navigation__nav").style.zIndex = -1;
      document.getElementById("navigation__background").style.zIndex = -1;
      countt = 0;
    }
  };
  const handleNavToggle = () => {
    if (countt === 1) {
      document.getElementById("navi-toggle").click();
    }
  };
  return (
    // <div className='navbar' id='navbar' style={{display : "flex", justifyContent: "center", width: "100%"}}>
    //   <div className="nav-svg" style={{display: "flex", justifyContent: "center", width: "100%" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.76 27.94" width="40%">
    //     <defs>
    //     </defs>
    //     <g className="a">
    //       <path className="b" d="M21.12,106.08s4.48.64,9.36,8.16c0,0,10.74,19.68,22.08,19.68H186.24s8.83,2.19,20.16-14.16c0,0,6.56-11.2,12.48-13.68Z" transform="translate(-21.12 -106.08)"/>
    //     </g>
    //   </svg>
    //   </div>
    //   <div className="mainNav">
    //     <Link to="/legacy"><div className="nav-con"><h4>Legacy</h4></div></Link>
    //     <Link to="/event"><div className="nav-con"><h4>Schedule</h4></div></Link>
    //     <Link to="/"><div className="nav-con" style={{display: "flex", justifyContent: "center"}}><img src={require('./Assets/Images/aswd.png')} alt=""  style={{width:"100%"}} /></div></Link>
    //     <Link to="/team"><div className="nav-con"><h4>Team</h4></div></Link>
    //     <Link to="/event/name"><div className="nav-con"><h4>Event</h4></div></Link>
    //   </div>
    // </div>
    <div className="navigation">
      <div>
        <ul>
          <li>
            <Link to="/" onClick={handleNavToggle}>
              <img
                src={require("./Assets/Images/aswd.png")}
                alt="infox logo"
                className="top-9 left-5 md:top-11 md:left-10 w-14 md:w-20 fixed z-50"
              />
            </Link>
          </li>
        </ul>
      </div>
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        onClick={handleNavIndex}
      ></input>

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background" id="navigation__background">
        &nbsp;
      </div>

      <nav className="navigation__nav" id="navigation__nav">
        <ul className="navigation__list">
          {/* <li className="navigation__item">
            <a href="/#/team" className="navigation__link">
              About Us
            </a>
          </li>
          <li className="navigation__item">
            <a href="/#/event" className="navigation__link">
             Events
            </a>
          </li>
          <li className="navigation__item">
            <a href="/#/legacy" className="navigation__link">
             Legacy
            </a>
          </li>
          <li className="navigation__item">
            <a href="/#/contact" className="navigation__link">
             Contact Us
            </a>
          </li>
          <li className="navigation__item">
            <a href="/#/event" className="navigation__link">
            Register
          </a> */}
          {/* </li> */}
          <li className="navigation__item" onClick={handleNavToggle}>
            <Link to="/profile" className="navigation__link">
              <span>Profile</span>
            </Link>
          </li>
          <li className="navigation__item" onClick={handleNavToggle}>
            <Link to="/legacy" className="navigation__link">
              <span>Legacy</span>
            </Link>
          </li>
          <li className="navigation__item" onClick={handleNavToggle}>
            <Link to="/events" className="navigation__link">
              <span>Events</span>
            </Link>
          </li>
          {/* <li className="navigation__item" onClick={handleNavToggle}>
            <Link to="/event" className="navigation__link">
              <span>Schedule</span>
            </Link>
          </li> */}
          <li className="navigation__item" onClick={handleNavToggle}>
            <Link to="/uhack" className="navigation__link">
              <span>UHACK</span>
            </Link>
          </li>
          <li className="navigation__item" onClick={handleNavToggle}>
            <Link to="/team" className="navigation__link">
              <span>Team</span>
            </Link>
          </li>
          <li className="navigation__item" onClick={handleNavToggle}>
            <Link to="/contact" className="navigation__link">
              <span>Contact us</span>
            </Link>
          </li>
          {/* <li className="navigation__item" onClick={handleNavToggle}>
            <a href="#/reach" className="navigation__link">
              <span>Reach Us</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
