import React from 'react'
import "./Assets/Images/CSS/teammodal.css"
import MatrixRain from './MatrixRain'

function TeamModal() {
    function leave(){
        var element = document.getElementById("team-modal");
        element.style.display = "none";
        console.log("hehehehehe");
    }
  return (
    <div id='join-parent'>
        <MatrixRain/>
    <div id='team-modal' className='glass'>
        <button className="cross" onClick={leave} style={{color: "white "}}>cross</button>
        <div id="create-modal">
            <h2 className='h2 atmosphere'>Create Team</h2>
            <form action="" id='create-form'>
            <input type="text" id='team-name' />
            <button type="submit" id='create-btn'>
            <a href="https://google.com" className="register team-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Create
                    </a>
            </button>
            </form>
        </div>
        {/* <hr /> */}
        <h2 className='h2 glitch' id='or' >OR</h2>
        <div id="join-modal">
            <h2 className='h2 atmosphere'>Join Team</h2>
            <form action="" id='join-form'>
                <input type="text" id='team-code'/>
                {/* <a href="https://google.com" className="register ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            REGISTER
          </a> */}
                <button type="submit" >
                    <a href="https://google.com" className="register team-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Join Team
                    </a>
          </button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default TeamModal