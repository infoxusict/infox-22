import React from 'react'
import './Assets/Images/CSS/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="mainNav">
        <div className="nav-con"><h4>About</h4></div>
        <div className="nav-con"><h4>Event</h4></div>
        <div className="nav-con"><img src={require('./Assets/Images/aswd.png')} alt=""  style={{height:"50%", width:"50%"}} /></div>
        <div className="nav-con"><h4>Schedule</h4></div>
        <div className="nav-con"><h4>Reach us</h4></div>
      </div>
    </div>
  )
}

export default Navbar