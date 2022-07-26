import React from 'react'
import "./Assets/Images/CSS/sponser.css"

export default function Sponser() {
  return (
    <div>
      <svg
        height="100"
        stroke="green"
        stroke-width="2"
        class="text-line"
        width="100%"
        className="gg heading1 tracking-in-contract-bck-bottom "
        >
        <text
          x="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          y="50%"
          data-text="LEGACY"
          className="heading"
        >
          SPONSORS
        </text>
      </svg>
    <div className='sponsors '>
            <div id="tile1"><img className='logos' src={require("./assets/images/Sponsor/agro.jpg")} style={{width: "8wv"}} alt="" /></div>
            <div id="tile2"><img className='logos' src={require("./assets/images/Sponsor/amigos.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile3"><img className='logos' src={require("./assets/images/Sponsor/barista.jpg")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile4"><img className='logos' src={require("./assets/images/Sponsor/redbull.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile5"><img className='logos' src={require("./assets/images/Sponsor/cb.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile6"><img className='logos' src={require("./assets/images/Sponsor/designcut.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile7"><img className='logos' src={require("./assets/images/Sponsor/flyer2.jpg")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile8"><img className='logos' src={require("./assets/images/Sponsor/Food_Board.jpg")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile9"><img className='logos' src={require("./assets/images/Sponsor/Hidden.png")} style={{width: "8vw"}} alt="" /></div>
            {/* <div id="tile10"><img className='logos' src={require("./assets/images/Sponsor/manali.jpg")} style={{width: "8vw"}} alt="" /></div> */}
            <div id="tile11"><img className='logos' src={require("./assets/images/Sponsor/Paytm.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile12"><img className='logos' src={require("./assets/images/Sponsor/paytm2.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile21"><img className='logos' src={require("./assets/images/Sponsor/Podio.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile13"><img className='logos' src={require("./assets/images/Sponsor/reappoint.jpg")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile14"><img className='logos' src={require("./assets/images/Sponsor/Redwolf.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile15"><img className='logos' src={require("./assets/images/Sponsor/reliance.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile16"><img className='logos' src={require("./assets/images/Sponsor/samsung.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile17"><img className='logos' src={require("./assets/images/Sponsor/street_hack.jpg")} style={{width: "8vw"}} alt="" /></div>
            {/* <div id="tile18"><img className='logos' src={require("./assets/images/Sponsor/text-logo-red.png")} style={{width: "8vw"}} alt="" /></div> */}
            <div id="tile19"><img className='logos' src={require("./assets/images/Sponsor/web.png")} style={{width: "8vw"}} alt="" /></div>
            <div id="tile20"><img className='logos' src={require("./assets/images/Sponsor/ad_act.jpg")} style={{width: "8vw"}} alt="" /></div>
    </div>
    </div>
  )
}
