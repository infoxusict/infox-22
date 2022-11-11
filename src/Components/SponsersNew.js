import Aos from "aos"
import Schedule from './Schedule'
import { useEffect } from "react"

export default function Sponser() {

  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <section>

      <div className='sponsers' data-aos="fade-up">
      <div className="sn_glitch_forNHeading atmosphere snsponsors">
            <div className="sn_line_forNHeading">SPONSORS</div>
            <div className="sn_line_forNHeading">SPONSORS</div>
            <div className="sn_line_forNHeading">SPONSORS</div>
            <div className="sn_line_forNHeading">SPONSORS</div>
            <div className="sn_line_forNHeading">SPONSORS</div>
            <div className="sn_line_forNHeading">SPONSORS</div>
            <div className="sn_line_forNHeading">SPONSORS</div>
            <div className="sn_line_forNHeading">SPONSORS</div>
            <div className="sn_line_forNHeading">SPONSORS</div>
          </div>
        <div className="sponsers-whole">
        <Schedule />
        </div>
      </div>
    </section>
  )
}
