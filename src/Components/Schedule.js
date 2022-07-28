import React from 'react'
import "./Schedule.css"

export default function Schedule() {
  return (
    <>
    <div className="teampage_background"></div>
    <div>
        <div className="days">
            <div className="day"><img alt=""  className='rings' />
            <h2>Day 1</h2>
            <h3>15 Events</h3>
            </div>
            <div className="day"><img alt=""  className='rings' />
            <h2>Day 2</h2>
            <h3>15 Events</h3>
            </div>
            <div className="day"><img alt=""  className='rings' />
            <h2>Day 3</h2>
            <h3>15 Events</h3>
            </div>
        </div>
        <div className="programs">
            <div className="program"><div className="band"></div><h3 className='timing'>9:00 - 12:00 AM</h3>
            <h2 className='event_title'>UHack</h2></div>
            <div className="program"><div className="band"></div><h3 className='timing'>9:00 - 12:00 AM</h3></div>
            <div className="program"><div className="band"></div><h3 className='timing'>9:00 - 12:00 AM</h3></div>
            <div className="program"><div className="band"></div><h3 className='timing'>9:00 - 12:00 AM</h3></div>
        </div>
    </div>
    </>
  )
}
