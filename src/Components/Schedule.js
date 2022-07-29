import React from 'react'
import "./Schedule.css"
import Schedule_Cards from './Schedule_cards'


export default function Schedule() {
  const [color, setColor] = React.useState("")

  function handle_state(e){
    console.log(e.target.id)
    setColor(e.target.id)
  }
  

  function Change_cards(color){
    var prog_arr = document.getElementsByClassName("event")
    var card_arr = document.getElementsByClassName("program")
    var button_arr = document.getElementsByClassName("more_info")
    

    for (let index = 0; index < prog_arr.length; index++) {
      prog_arr[index].style.backgroundColor = color;
      button_arr[index].style.backgroundColor = color;
      card_arr[index].style.boxShadow = "0px 5px 10px 0px "+color;
      
    }
  }

  return (
    <>
    {/* <div className="teampage_background"></div> */}
    <div>
        <div className="days">
            <button id='red' className="day" onClick={handle_state}  style={{boxShadow: "0px 5px 10px 0px rgba(180, 50, 50, 0.5)"}}><img src={require("./Assets/Images/red.png")} alt=""  className='rings' />
            <div className="info">
            <h2>Day 1</h2>
            <h3>15 Events</h3>
            </div>
            </button>
            <button id='blue' className="day" onClick={handle_state} style={{boxShadow: "0px 5px 10px 0px rgba(50, 50, 180, 0.5)"}}><img src={require("./Assets/Images/blue.png")} alt=""  className='rings' />
            <div className="info">
            <h2>Day 2</h2>
            <h3>15 Events</h3>
            </div>
            </button>
            <button id='green' className="day" onClick={handle_state}  style={{boxShadow: "0px 5px 10px 0px rgba(50, 180, 50, 0.5)"}}><img src={require("./Assets/Images/green.png")} alt=""  className='rings' />
            <div className="info">
            <h2>Day 3</h2>
            <h3>15 Events</h3>
            </div>
            </button>
        </div>
        <Schedule_Cards color={color} />
        {/* <div className="programs">
            <div className="program"><h3 className='event' >Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
            

            <div className="program"><h3 className='event' >Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
            <div className="program"><h3 className='event' >Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
            <div className="program"><h3 className='event' >Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
        </div> */}
    </div>
    </>
  )
}
