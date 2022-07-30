import './Assets/Images/CSS/glimpses.css'
const Glimpses = () => {
    return (
        <div style={{ width: "100%" }}>
            <div className="animate" style={{ opacity: 1 }}>
                <h1>Glimpses</h1>
                <div style={{ width: "100%" }} data-aos="fade-up">
                    <div className="animate" style={{ opacity: 1, marginBottom: "2vh" }}>
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
                    </div>
                    <div className="caroousell">
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
                    </div>
                    <div className="glimpses-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quas, facere voluptate labore, rem molestias commodi obcaecati eveniet deleniti qui dolorem, veniam dolor nisi? Velit quidem iure delectus esse!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quas, facere voluptate labore, rem molestias commodi obcaecati eveniet deleniti qui dolorem, veniam dolor nisi? Velit quidem iure delectus esse!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quas, facere voluptate labore, rem molestias commodi obcaecati eveniet deleniti qui dolorem, veniam dolor nisi? Velit quidem iure delectus esse!</p>
                    </div>
                </div>
                </div>
                </div>
                )
}

                export default Glimpses