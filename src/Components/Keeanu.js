import React from 'react'
import './Assets/Images/CSS/Keeanu.css'
import { useState, useEffect } from 'react'


const Keeanu = () => {

    const [scrolled,setScrolled] =useState(0)

    // const [h,setH]=useState("")
    
    useEffect(()=>{
  
      window.addEventListener("scroll",()=>{
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled1 = ((winScroll+(winScroll/10)) / height) * 100;
        var scrolled2 = (winScroll / height) * 100;
        console.log("Scrolled2 is" + scrolled2)
        if(Math.ceil(scrolled2)===1)
        {
          // console.log("Scrolled2 is currently 1")
          document.getElementById("keanuimg").style.animation="keanumation 4s forwards";
          setInterval(() => {
              document.getElementById("keanuimg").style.opacity="100%"
            }, 4000);
          }
            document.getElementById("myBar").style.width = scrolled1 + "%";
        setScrolled(scrolled1)
        // setH(scrolled1)
        // console.log(scrolled1)
      }
        )
      // return window.removeEventListener("scroll",setH(window.scrollY))
    },[])

    return (
        <div className="keanudiv">
        {/* <h1 className='keanu-h1'>{h}</h1> */}
        <div id="myBar" style={{zIndex: "100"}}>
      {
        Math.ceil(scrolled)%2===0 ? 
        <div id="keanu"><img src={require("./Assets/Images/images/matrix-manlight1.png")} alt="" id="keanuimg"/></div>
        :
        <div id="keanu"><img src={require("./Assets/Images/images/matrix-manlight-2.png")} alt="" id="keanuimg"/></div>
      }
      </div>
        <div className="booth"><img className='booth-img' src={require("./Assets/Images/images/phonebooth.png")}  alt="" /></div>
        </div>
    )
}

export default Keeanu