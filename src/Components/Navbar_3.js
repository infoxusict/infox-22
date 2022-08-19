import React from 'react'
import "./Assets/Images/CSS/Navbar.css"

export default function Navbar_3() {
  return (
    <div className='navbar'>
        <div className="nav-logo"><img src={require("./Assets/Images/aswd.png")} alt=""  width={"64px"}/></div>
        <div className="links">
            <div className="link"><a href="/team">Team</a></div>
            <div className="link"><a href="/event">Schedule</a></div>
            <div className="link"><a href="/legacy">Legacy</a></div>
            <div className="link"><a href="/reach">Reach Us</a></div>
        </div>
    </div>
  )
}
