import { useRef, useState, useEffect } from "react";

import "./Assets/Images/CSS/Carousel.css";
import Nat4 from "./Assets/Images/images/nat-4.jpg";
import Nat5 from "./Assets/Images/images/nat-5.jpg";
import Nat6 from "./Assets/Images/images/nat-6.jpg";
import Nat7 from "./Assets/Images/images/nat-7.jpg";
import Nat8 from "./Assets/Images/images/nat-8.jpg";
import Nat9 from "./Assets/Images/images/nat-9.jpg";
import Nat10 from "./Assets/Images/images/nat-10.jpg";
import Nat11 from "./Assets/Images/images/DSC_0469.JPG";
// const width1=0;
// const height1=0

// const CarouselItem = ({ slide, style }) => {
//   return (
//     <div className="carousel-item" style={{ style }}>
//       <img src={slide} alt="" />
//     </div>
//   );
// };

const Carousel = ({
  gridClass,
  interval = 5000,
  autoPlay = true,
  width,
  height,
  ySlide,
  xSlide,
  sliderData,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer();
      slideInterval.current = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < sliderData.length - 1 ? currentSlide + 1 : 0
        );
      }, interval);
    }
  };

  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };
  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={`carousel ${gridClass}`}
      style={{ width: `${width}vw`, height: `${height}vh` }}
    >
      <div
        className="carousel-inner"
        style={
          ySlide === "true"
            ? {
                transform: `translateY(${-currentSlide * height}vh)`,
                flexDirection: "column",
              }
            : xSlide === "reverse"
            ? {
                transform: `translateX(${currentSlide * width}vw )`,
                flexDirection: "row-reverse",
              }
            : { transform: `translateX(${-currentSlide * width}vw )` }
        }
      >
        {sliderData.map((slide, index) => (
          // <CarouselItem
          //   style={{ width: width, height: height }}
          //   slide={slide}
          //   key={index}
          // />
          <div className="carousel-item">
            <img
              src={require(`${slide}`)}
              style={{ width: `${width}vw`, height: `${height}vh` }}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
