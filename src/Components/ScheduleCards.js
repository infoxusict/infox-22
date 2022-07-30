import React from 'react'

export default function ScheduleCards(props) {

    // const [color, setColor] = useState("")
    const {color} = props;

  return (
        <div className="programs" id='programs'>
            <div className="program" style={{ boxShadow: "0px 5px 10px 0px "+color}}><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info" style={{backgroundColor:color}}>More Info</div>
            </div>
            

            <div className="program" style={{ boxShadow: "0px 5px 10px 0px "+color}}><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info" style={{backgroundColor:color}}>More Info</div>
            </div>
            <div className="program" style={{ boxShadow: "0px 5px 10px 0px "+color}}><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info" style={{backgroundColor:color}}>More Info</div>
            </div>
            <div className="program" style={{ boxShadow: "0px 5px 10px 0px "+color}}><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info" style={{backgroundColor:color}}>More Info</div>
            </div>
            <div className="program" style={{ boxShadow: "0px 5px 10px 0px "+color}}><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info" style={{backgroundColor:color}}>More Info</div>
            </div>
            <div className="program" style={{ boxShadow: "0px 5px 10px 0px "+color}}><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info" style={{backgroundColor:color}}>More Info</div>
            </div>
        </div>
  )
}
