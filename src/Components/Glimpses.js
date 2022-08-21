import "./Assets/Images/CSS/glimpses.css";
import "./Assets/Images/CSS/glitch.css";
const Glimpses = () => {
  let count =0;
  const count_iteration = () => {
    if(count===0)
    {
      count++;
    let valueDisplays = document.querySelectorAll(".num");

    // let interval = 5000;

    // console.log(valueDisplays);

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));

      // console.log(endValue);
      let speed=24;
      // let duration = Math.floor(interval / endValue);

      let counter = setInterval(function () {
        let interval = Math.ceil(endValue/speed);
        startValue += interval;
        valueDisplay.textContent = `${startValue}+`;

        if (startValue >= endValue) {
          clearInterval(counter);
        }
      });
    });
  }

  };

  // function reduce_blur(e) {
  //     document.getElementById(e.target.id).style.backdropFilter = "blur(3px)";

  //     document.getElementById(e.target.id).style.webkitBackdropFilter = "blur(3px)";
  // }

  // function increase_blur(e) {
  //     document.getElementById(e.target.id).style.backdropFilter = "blur(7px)";
  //     document.getElementById(e.target.id).style.webkitBackdropFilter = "blur(7px)";
  // }

  return (
    <div style={{ width: "100%", marginTop: "25vh" }} onMouseEnter={count_iteration}>
      <div className="animate" style={{ opacity: 1 }}>
        {/* <h1 className="glimpses_h1 glitch" data-text="Glimpses">
          Glimpses
        </h1> */}
        <div class="sn_glitch_forNHeading atmosphere sn_glimpses">
            <div class="sn_line_forNHeading">GLIMPSES</div>
            <div class="sn_line_forNHeading">GLIMPSES</div>
            <div class="sn_line_forNHeading">GLIMPSES</div>
            <div class="sn_line_forNHeading">GLIMPSES</div>
            <div class="sn_line_forNHeading">GLIMPSES</div>
            <div class="sn_line_forNHeading">GLIMPSES</div>
            <div class="sn_line_forNHeading">GLIMPSES</div>
            <div class="sn_line_forNHeading">GLIMPSES</div>
            <div class="sn_line_forNHeading">GLIMPSES</div>
          </div>
        {/* <h3 style={{margin: "auto"}}>Asuccessful legacy of 17 years, InfoXpression 2022 marks the 18th iteration of USICT’s flagship tech-fest. Back with a dose of euphoria, excitement and inspiration.</h3> */}
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
          <div className="wrapper">
            <div className="container1">
              <span className="glimpses_text">With A Foot fall of </span>
              <span className="num" data-val="9000">
                000+
              </span>
              <span className="glimpses_text">
                Our last Year's Event Was A Success
              </span>
            </div>
          </div>
          <div className="wrapper">
            <div className="container1">
            <span className="glimpses_text">Participation from</span>
              <span className="num" data-val="250">
                000+
              </span>
              <span className="glimpses_text">
                Colleges across North India
              </span>
            </div>
          </div>
          <div className="wrapper">
            <div className="container1">
              <span className="num" data-val="24">
                000+
              </span>
              <span className="glimpses_text">diverse events that will ensure fun and learning with no halts</span>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="glimpses-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quas, facere voluptate labore, rem molestias commodi obcaecati eveniet deleniti qui dolorem, veniam dolor nisi? Velit quidem iure delectus esse!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quas, facere voluptate labore, rem molestias commodi obcaecati eveniet deleniti qui dolorem, veniam dolor nisi? Velit quidem iure delectus esse!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quas, facere voluptate labore, rem molestias commodi obcaecati eveniet deleniti qui dolorem, veniam dolor nisi? Velit quidem iure delectus esse!</p>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Glimpses;
