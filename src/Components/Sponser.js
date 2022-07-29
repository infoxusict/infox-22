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

      <div className='mt-5 pt-5 sponsers ' data-aos="fade-up">
          <h1>Sponsers</h1>
        <div className="sponsers-whole">
        <div className="left">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur hic ullam inventore iusto porro voluptas architecto ipsam ducimus placeat molestiae.</p>
        <button className='btn'>Register</button>
        </div>
        <div className="right">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        </div>
      </div>
    </section>
  )
}
