import React, { useEffect } from 'react'
import './Assets/Images/CSS/glimpses.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Glimpses = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div style={{width:"100%"}} data-aos="fade-up">
            <div className="animate" style={{ opacity: 1 }}>
                <svg
                    height={100}
                    stroke="BLUE"
                    strokeWidth={1}
                    width="100%"
                    className="text-line gg heading1"
                >
                    <text
                        x="50%"
                        textAnchor="middle"
                        y="50%"
                        data-text="GLIMPSES"
                        className="heading"
                    >
                        GLIMPSES
                    </text>
                </svg>
            </div>
            <div className="carousel">
                <ul className="carousel__list">
                    <li className="carousel__item" data-pos={-2}>
                        left 2
                    </li>
                    <li className="carousel__item" data-pos={-1}>
                        left 1
                    </li>
                    <li className="carousel__item" data-pos={0}>
                        <div id="counter"></div>
                        <div id="parasn">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus
                            nisi a architecto expedita.
                        </div>
                    </li>
                    <li className="carousel__item" data-pos={1}>
                        right 1
                    </li>
                    <li className="carousel__item" data-pos={2}>
                        right 2
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Glimpses