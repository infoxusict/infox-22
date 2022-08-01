import "./Assets/Images/CSS/sponser.css"
import "./Assets/Images/CSS/glitch.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Sponser() {

  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <section>

      <div className='sponsers' data-aos="fade-up">
          <h1 className="glitch" data-text="Sponsers">Sponsers</h1>
        <div className="sponsers-whole">
        <div className="left">
        <p>We Are Honoured To Have You As Sponsers! With Your Support We Can Reach New Heights</p>
        </div>
        <div className="right">
          <div className="box"><img src={require("./Assets/Images/Sponsor/amigos.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/Agro.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/barista2.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/reappoint2.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/cb.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/designcut.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/Hidden.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/Paytm.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/Podio.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/redbull.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/Redwolf.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/reliance.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/samsung2.png")} alt="" /></div>
          <div className="box"><img src={require("./Assets/Images/Sponsor/web.png")} alt="" /></div>
        </div>
        </div>
      </div>
    </section>
  )
}
