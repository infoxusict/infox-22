import React from 'react'
import './Assets/Images/CSS/Keeanu.css'
import { useState, useEffect } from 'react'


const Keeanu = () => {

    const [scrolled,setScrolled] =useState(0)

    const [h,setH]=useState("")
    
    useEffect(()=>{
  
      window.addEventListener("scroll",()=>{
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled1 = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled1 + "%";
        setScrolled(scrolled1)
        setH(scrolled1)
        console.log(scrolled1)
      }
        )
      // return window.removeEventListener("scroll",setH(window.scrollY))
    },[])

    return (
        <>
        <h1 className='keanu-h1'>{h}</h1>
        <div id="myBar" style={{zIndex: "100"}}>
      {
        Math.ceil(scrolled)%5===0 ? 
        <div id="keanu"><img src={require("./Assets/Images/images/man.png")} alt="" /></div>
        :
        <div id="keanu"><img src={require("./Assets/Images/images/man2.png")} alt="" /></div>
      }
      </div>
        <div className="booth"><img className='booth-img' src={require("./Assets/Images/images/booth.png")} alt="" /></div>
        </>
    )
}

export default Keeanu