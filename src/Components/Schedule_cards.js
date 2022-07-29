import React from 'react'

export default function Schedule_cards(props) {

    // const [color, setColor] = useState("")
    const {color} = props;



  return (
        <div className="programs">
            <div className="program"><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info" style={{backgroundColor:color}}>More Info</div>
            </div>
            

            <div className="program"><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
            <div className="program"><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
            <div className="program"><h3 className='event' style={{backgroundColor:color}}>Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
        </div>
  )
}
