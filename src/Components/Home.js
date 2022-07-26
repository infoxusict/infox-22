import React, { useEffect, useState } from 'react'
import Video from './Assets/Videos/startv.mp4'
import './Assets/Images/CSS/Home.css'
import MatrixRain from './MatrixRain'




const Home = () => {

    const [reveal, setReveal] = useState(false)
    const [screen, setScreen] = useState({ width: 0, height: 0 })

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        setReveal(true)
        setScreen({ width: window.innerWidth, height: window.innerHeight })
        document.getElementById('HideOnload').style.display = 'none'

        sleep(8500).then(() => {
            document.getElementById('HideOnload').style.display = 'flex';
            // document.getElementById('myAnimate').style.fill = 'black';
            setReveal(false);
        })

    }, [])

    const loader = () => {
        setReveal(true)
    }



    return (
        <section id='Home'>
            {/* <button onClick={loader} className='btn bg-white'>play</button> */}
            <div className="animationFrame"> {!reveal && <MatrixRain />} </div>
            {reveal &&
                <div id="videoCont">
                    <video className='video' autoPlay='autoPlay' muted>
                        <source src={require('./Assets/Videos/Produce_11.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                        <source src={Video} type="video/ogg" />Your browser does not support the video tag.
                    </video>
                </div>
            }
            {/* <Sponser/> */}
            {/* <Sponser/> */}
        </section>  
    )
}

export default Home