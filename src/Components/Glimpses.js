import './Assets/Images/CSS/glimpses.css'
import "./Assets/Images/CSS/glitch.css"
const Glimpses = () => {

    const count_iteration = () => {
        let counts = setInterval(updated);
        let upto = 0;
        function updated() {
          var count = document.getElementById("counter");
          count.innerHTML = (upto = upto + 12) + " +";
          if (upto >= 6000) {
            clearInterval(counts);
          }
        }
    }   

    function reduce_blur(e){
        document.getElementById(e.target.id).style.backdropFilter = "blur(3px)";
  
  document.getElementById(e.target.id).style.webkitBackdropFilter = "blur(3px)";
    }

    function increase_blur(e){
        document.getElementById(e.target.id).style.backdropFilter = "blur(7px)";
        document.getElementById(e.target.id).style.webkitBackdropFilter = "blur(7px)";
    }



    return (
        <div style={{ width: "100%" }} onMouseEnter={count_iteration}>
            <div className="animate" style={{ opacity: 1 }}>
                <h1 className='glimpses_h1'>Glimpses</h1>
                <div style={{ width: "100%" }} className="carousel" data-aos="fade-up">
                    {/* <div className="animate" style={{ opacity: 1, marginBottom: "2vh" }}>
                        <svg
                            height={100}
                            stroke="green"
                            strokeWidth={3}
                            width="100%"
                            // height="70%"
                            className=" gg heading1"
                        >
                            <text
                                x="50%"
                                textAnchor="middle"
                                y="100%"
                                data-text="GLIMPSES"
                                className="heading"
                            >
                                GLIMPSES
                            </text>
                        </svg>
                    </div> */}
                    {/* <div className="caroousell">
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
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </li>
                            <li className="carousel__item" data-pos={1}>
                                right 1
                            </li>
                            <li className="carousel__item" data-pos={2}>
                                right 2
                            </li>
                        </ul>
                    </div> */}

                    {/* <div className="carousel"> */}
                        <div className="carousel_card" id='1' onMouseLeave={increase_blur} onMouseEnter={reduce_blur} >Container 1</div>
                        <div className="carousel_card" id='2' onMouseLeave={increase_blur} onMouseEnter={reduce_blur} ><div id="counter">0+</div></div>
                        <div className="carousel_card" id='3' onMouseLeave={increase_blur} onMouseEnter={reduce_blur} >Container 3</div>
                        <div className="carousel_card" id='4' onMouseLeave={increase_blur} onMouseEnter={reduce_blur} >Container 4</div>
                    {/* </div> */}
                    {/* <div className="glimpses-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quas, facere voluptate labore, rem molestias commodi obcaecati eveniet deleniti qui dolorem, veniam dolor nisi? Velit quidem iure delectus esse!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quas, facere voluptate labore, rem molestias commodi obcaecati eveniet deleniti qui dolorem, veniam dolor nisi? Velit quidem iure delectus esse!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quas, facere voluptate labore, rem molestias commodi obcaecati eveniet deleniti qui dolorem, veniam dolor nisi? Velit quidem iure delectus esse!</p>
                    </div> */}
                </div>
                </div>
                </div>
                )
}

                export default Glimpses 