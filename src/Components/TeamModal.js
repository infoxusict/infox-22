import React from 'react'
import { Link } from 'react-router-dom'
import "./Assets/Images/CSS/teammodal.css"
import MatrixRain from './MatrixRain'
import {Toaster, toast} from "react-hot-toast"

// function TeamModal() {
//     const [teamName, setteamName] = React.useState(false)
    
    
    const checkValid = ()=>{
//         if(teamName.length == 0){
//             toast.error("Team Name Not Entered !!!!");
//         }
//     } 
    return 
        (
        
        <div id='join-parent'>
            <MatrixRain />

            <div id='team-modal' className='glass'>
                <div id="create-modal">
                    <h2 className='h2 atmosphere'>Create Team</h2>
                    <form action="" id='create-form'>
                        <input type="text" id='team-name'  />
                        <button type="submit" id='create-btn'onClick={checkValid}>
                            <Link href="https://google.com" className="register team-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Create
                            </Link>
                        </button>
                    </form>
                </div>
                {/* <hr /> */}
                <h2 className='h2 glitch' id='or' >OR</h2>
                <div id="join-modal">
                    <h2 className='h2 atmosphere'>Join Team</h2>
                    <form action="" id='join-form'>
                        <input type="text" id='team-code' />
                        <button type="submit" >
                            <Link href="https://google.com" className="register team-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Join Team
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TeamModal