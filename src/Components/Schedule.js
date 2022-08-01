import React from 'react'
// import "./Schedule.css"
import ScheduleCards from './ScheduleCards'
import "./Assets/Images/CSS/timeline.css"
import MatrixRain from './MatrixRain';

export default function Schedule() {
  // const colors = ["#3CC157", "#b43232"];

  // const [color, setColor] = React.useState("rgba(180, 50, 50, 0.5)")

  

  // function handle_state(e){
  //   console.log(e.target.id)
  //   setColor(e.target.id)

  //   var day_arr = document.getElementsByClassName("day")

  //   for (let index = 0; index < day_arr.length; index++) {
  //       day_arr[index].style.boxShadow = "0px 5px 10px 0px black"     
  //   }

  //   document.getElementById(e.target.id).style.boxShadow = "0px 5px 10px 0px "+e.target.id
  //   colors.push(e.target.id)
  //   console.log(colors)

  //   load_balls();
  // }
  

  // function Change_cards(color){
  //   var prog_arr = document.getElementsByClassName("event")
  //   var card_arr = document.getElementsByClassName("program")
  //   var button_arr = document.getElementsByClassName("more_info")
    

  //   for (let index = 0; index < prog_arr.length; index++) {
  //     prog_arr[index].style.backgroundColor = color;
  //     button_arr[index].style.backgroundColor = color;
  //     card_arr[index].style.boxShadow = "0px 5px 10px 0px "+color;
      
  //   }
  // }

//   function load_balls(){
//     if (window.innerWidth < 721) {
//       document.getElementById("main_con").classList.remove("main_con")
//     }

// const numBalls = 50;
// const balls = [];
// var offset_height = document.getElementById("programs").offsetHeight

// for (let i = 0; i < numBalls; i++) {
//   let ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//   ball.style.top = `${Math.floor(Math.random() * offset_height)}px`;
//   ball.style.transform = `scale(${Math.random()})`;
//   ball.style.width = `${Math.random()}em`;
//   ball.style.height = ball.style.width;
  
//   balls.push(ball);
//   document.body.append(ball);
// }

// Keyframes
// balls.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };

//   let anim = el.animate(
//     [
//       { transform: "translate(0, 0)" },
//       { transform: `translate(${to.x}rem, ${to.y}rem)` }
//     ],
//     {
//       duration: (Math.random() + 1) * 2000, // random duration
//       direction: "alternate",
//       fill: "both",
//       iterations: Infinity,
//       easing: "ease-in-out"
//     }
//   );
// });

  // }

  setTimeout(timeline, 500);

  function timeline(){
    console.log("hey")
    var items = document.querySelectorAll(".timeline li");
    console.log(items)

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
  };

  return (
    <section className='timeline'>
    {/* <div className="teampage_background"></div> */}
    {/* <div className='main_con' id='main_con' style={{paddingTop: "6vh", overflowY: "hidden"}}>
        <div className="days" onLoad={load_balls}>
            <button id='#b43232' className="day" onClick={handle_state} style={{boxShadow:'0px 5px 10px 0px #b43232'}}><img id='#b43232' src={require("./Assets/Images/red.png")} alt=""  className='rings' />
            <div className="info" id='#b43232'>
            <h2 id='#b43232'>Day 1</h2>
            <h3 id='#b43232'>15 Events</h3>
            </div>
            </button>
            <div id='#3232b4' className="day" onClick={handle_state}><img id='#3232b4' src={require("./Assets/Images/blue.png")} alt=""  className='rings' />
            <div id='#3232b4' className="info">
            <h2 id='#3232b4'>Day 2</h2>
            <h3 id='#3232b4'>15 Events</h3>
            </div>
            </div>
            <button id='#32b432' className="day" onClick={handle_state} ><img id='#32b432' src={require("./Assets/Images/green.png")} alt=""  className='rings' />
            <div className="info" id='#32b432'>
            <h2 id='#32b432'>Day 3</h2>
            <h3 id='#32b432'>15 Events</h3>
            </div>
            </button>
        </div>
        <ScheduleCards color={color} /> */}
        {/* <div className="programs">
            <div className="program"><h3 className='event' >Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
            

            <div className="program"><h3 className='event' >Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
            <div className="program"><h3 className='event' >Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
            <div className="program"><h3 className='event' >Event</h3>
            <h2 className='event_title data'>Data and Time</h2>
            <h2 className='event_title data'>Description</h2>
            <div className="more_info">More Info</div>
            </div>
        </div> */}
    {/* </div> */}
    <MatrixRain />
    <ul>
        <li className='in-view'>
          <div className='boxx'>
            <time>1687</time>
            <div className="discovery">
              {/* <h1 className='heading-h1'>Discovery</h1>
              <p>
                Laws of motion
              </p> */}
              <div>
              <img className='poster' src={require("./Assets/Images/posters/uhack.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                {/* <div> */}
                {/* <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1> */}
                {/* </div> */}
            </div>
            {/* <div className="scientist">
              <h1 className='heading-h1'>Scientist</h1>
              <span>Newton</span>
            </div> */}
          </div>
        </li>
        <li className='in-view'>
          <div>
            <time>1785</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/BUGDEBUG.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li className='in-view'>
          <div>
            <time>1827</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/CODESTER.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li className='in-view'>
          <div>
            <time>1831</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/codexpress.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li>
          <div>
            <time>1867</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/UCODE.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li>
          <div>
            <time>1895</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/uhack.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li>
          <div>
            <time>1897</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/uhack.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li>
          <div>
            <time>1898</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/BUGDEBUG.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li>
          <div>
            <time>1900</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/Code-venture.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li>
          <div>
            <time>1905</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/CODESTER.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li>
          <div>
            <time>1905</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/codexpress.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
        <li>
          <div>
            <time>1942</time>
            <div className="discovery">
            <div>
              <img className='poster' src={require("./Assets/Images/posters/BUGDEBUG.webp")} alt="" />
                <h1 className='heading-h1'>Uhack</h1>
                <h1 className='heading-h1'>Time: 9:00 - 11:00 AM</h1>
                </div>
                </div>
          </div>
        </li>
      </ul>
    </section>
  )
}
