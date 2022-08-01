import React from 'react'

export default function Navigation() {
  return (
    <div className='navbar'>
        <div className="nav-links">Legacy</div>
        <div className="nav-links">Event</div>
        <div className="logo"><img src={require("./Assets/Images/aswd.png")} alt="" width={"6vw"} /></div>
        <div className="nav-links">Schedule</div>
        <div className="nav-links">Reach Us</div>
    </div>
  )
}
