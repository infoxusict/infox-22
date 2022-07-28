import React, { useEffect } from 'react'
import "./Assets/Images/CSS/sponser.css"
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Sponser() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section>

      <div className='mt-5 pt-5' data-aos="fade-up">
        <svg
          height="100"
          stroke="green"
          strokeWidth="2"
          width="100%"
          className="text-line gg heading1 tracking-in-contract-bck-bottom mt-5 pt-5"
        >
          <text
            x="50%"
            textAnchor="middle"
            y="50%"
            data-text="LEGACY"
            className="heading"
          >
            SPONSORS
          </text>
        </svg>
        <div className='sponsors '>
          <div id="tile1"><img className='logos' src={require("./Assets/Images/Sponsor/ad_act.jpg")} style={{ width: "8wv" }} alt="" /></div>
          <div id="tile2"><img className='logos' src={require("./Assets/Images/Sponsor/amigos.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile3"><img className='logos' src={require("./Assets/Images/Sponsor/barista.jpg")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile4"><img className='logos' src={require("./Assets/Images/Sponsor/redbull.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile5"><img className='logos' src={require("./Assets/Images/Sponsor/cb.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile6"><img className='logos' src={require("./Assets/Images/Sponsor/designcut.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile7"><img className='logos' src={require("./Assets/Images/Sponsor/flyer2.jpg")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile8"><img className='logos' src={require("./Assets/Images/Sponsor/Food_Board.jpg")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile9"><img className='logos' src={require("./Assets/Images/Sponsor/Hidden.png")} style={{ width: "8vw" }} alt="" /></div>
          {/* <div id="tile10"><img className='logos' src={require("./assets/images/Sponsor/manali.jpg")} style={{width: "8vw"}} alt="" /></div> */}
          <div id="tile11"><img className='logos' src={require("./Assets/Images/Sponsor/Paytm.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile12"><img className='logos' src={require("./Assets/Images/Sponsor/paytm2.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile21"><img className='logos' src={require("./Assets/Images/Sponsor/Podio.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile13"><img className='logos' src={require("./Assets/Images/Sponsor/reappoint.jpg")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile14"><img className='logos' src={require("./Assets/Images/Sponsor/Redwolf.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile15"><img className='logos' src={require("./Assets/Images/Sponsor/reliance.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile16"><img className='logos' src={require("./Assets/Images/Sponsor/samsung.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile17"><img className='logos' src={require("./Assets/Images/Sponsor/street_hack.jpg")} style={{ width: "8vw" }} alt="" /></div>
          {/* <div id="tile18"><img className='logos' src={requireA"./assIts/images/Sponsor/text-logo-red.png")} style={{width: "8vw"}} alt="" /></div> */}
          <div id="tile19"><img className='logos' src={require("./Assets/Images/Sponsor/web.png")} style={{ width: "8vw" }} alt="" /></div>
          <div id="tile20"><img className='logos' src={require("./Assets/Images/Sponsor/ad_act.jpg")} style={{ width: "8vw" }} alt="" /></div>
        </div>
      </div>
    </section>
  )
}
