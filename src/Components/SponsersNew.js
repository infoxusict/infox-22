import "./Assets/Images/CSS/sponser.css"
import "./Assets/Images/CSS/glitch.css"
import Aos from "aos"
import Schedule from './Schedule'
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Sponser() {

  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <section>

      <div className='sponsers' data-aos="fade-up">
          <h1 className="glitch" data-text="Sponsors">Sponsors</h1>
        <div className="sponsers-whole">
        <Schedule />
        </div>
      </div>
    </section>
  )
}
