import React, { useRef, useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";

// import Linkedin from "../assets/icons8-linkedin-2.json";
export default function Team({
  ringColor,
  circleColor,
  name,
  team = "Web Team",
  position = "Web Developer",
  Quote = "We are a team of dedicated and passionate people .",
  linkedin = "",
  github = "",
  gmail = "",
  youtube = "",
  photo,
}) {
  var x = 0;
  var f2 = 1;
  var b1 = -500;
  var b2 = 0;
  const circleRef = useRef();
  const cardRef = useRef();
  const [circle, setCircle] = useState([{ transform: `rotate(${x}deg)` }]);
  // eslint-disable-next-line
  const [frontPos, setFrontPos] = useState(0);
  const [backPos, setBackPos] = useState(-500);
  const [frontOp, setFrontOp] = useState(1);
  const [backOp, setBackOp] = useState(0);

  const triggerAnimation = () => {
    x = 180;
    setCircle([{ transform: `rotate(${x}deg)` }]);
    if (x === 180) {
      f2 = 0;

      setFrontOp(f2);
      b1 = 0;
      b2 = 1;
      setBackPos(b1);
      setBackOp(b2);
    }
  };

  const endAnimation = () => {
    x = 0;
    setCircle([{ transform: `rotate(${x}deg)` }]);
    f2 = 1;
    setFrontOp(f2);

    b1 = -500;
    b2 = 0;
    setBackPos(b1);
    setBackOp(b2);
  };

  var styles1 = {
    transform: `translateX(${frontPos}px)`,
    opacity: `${frontOp}`,
  };
  var styles2 = {
    transform: `translateX(${backPos}px)`,
    opacity: `${backOp}`,
  };

  useEffect(() => {
    cardRef.current.addEventListener("mouseover", triggerAnimation);
    cardRef.current.addEventListener("mouseleave", endAnimation);
    // eslint-disable-next-line
  }, []);

  return (
    <div ref={cardRef} className="team__container">
      <div className="team__card team__front" style={styles1}>
        <div
          className="team__photo"
          style={{
            border: `2px ${ringColor} solid`,
            // backgroundImage: `url(${photo})`,
          }}
        >
          {photo && <img src={require(`${photo}`)} alt=" " />}
          <svg
            style={circle[0]}
            ref={circleRef}
            className="team__photo-1"
            preserveAspectRatio="xMidYMid meet"
            data-bbox="1 1 160 160"
            viewBox="0 0 162 162"
            height="162"
            width="162"
            xmlns="http://www.w3.org/2000/svg"
            data-type="ugc"
            role="img"
            aria-labelledby="svgcid-534po1gxdk6w"
          >
            <g fillRule="evenodd">
              <path
                stroke-width="2"
                stroke={`${circleColor}`}
                fill={`${circleColor}`}
                d="M139 20a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"
              />
            </g>
          </svg>
        </div>

        <div className="team__name">
          <h4>
            <span className="team__name-name">{name}</span>
          </h4>
          <div className="team__back-team">
            <span>{team}</span>
          </div>
        </div>
      </div>
      <div className="team__card team__back" style={styles2}>
        <div
          className="team__back-top"
          style={{ borderBottom: `0.1px ${circleColor} solid` }}
        >
          <div className="top-head">
            <span>Comments</span>
          </div>
        </div>

        <div className="team__back-details">
          <div
            className="team__back-photo"
            style={{
              border: `2px ${ringColor} solid`,
              backgroundImage: `url(${photo})`,
            }}
          >
            {photo && <img src={require(`${photo}`)} alt=" " />}
          </div>
          <div className="team__back-name">
            <span>{name}</span>
          </div>
        </div>
        <div className="team__back-work">
          <span>{position}</span>
          <div className="team__back-quote">
            <span>{Quote}</span>
          </div>
        </div>
        <div className="team__back-buttons">
          <div className="team__back-linkedin">
            <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="32px"
                height="32px"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                />
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                />
              </svg>
            </a>
          </div>
          {github && (
            <div className="team__back-github">
              <a href={`${github}`} target="_blank" rel="noopener noreferrer">
                <svg
                  height="32px"
                  fill="#fff"
                  viewBox="0 0 1792 1792"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
                </svg>
              </a>
            </div>
          )}
          {gmail && (
            <div className="team__back-gmail">
              <a
                href={`mailto:${gmail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48 48"
                  width="32px"
                  height="32px"
                >
                  <g id="surface5775332">
                    <path
                      fill="rgb(29.803923%,68.627453%,31.37255%)"
                      d="M 45 16.199219 L 40 18.949219 L 35 23.699219 L 35 40 L 42 40 C 43.65625 40 45 38.65625 45 37 Z M 45 16.199219 "
                    />
                    <path
                      fill="rgb(11.764706%,53.333336%,89.803922%)"
                      d="M 3 16.199219 L 6.613281 17.910156 L 13 23.699219 L 13 40 L 6 40 C 4.34375 40 3 38.65625 3 37 Z M 3 16.199219 "
                    />
                    <path
                      fill="rgb(89.803922%,22.352941%,20.784314%)"
                      d="M 35 11.199219 L 24 19.449219 L 13 11.199219 L 12 17 L 13 23.699219 L 24 31.949219 L 35 23.699219 L 36 17 Z M 35 11.199219 "
                    />
                    <path
                      fill="rgb(77.64706%,15.686275%,15.686275%)"
                      d="M 3 12.296875 L 3 16.199219 L 13 23.699219 L 13 11.199219 L 9.875 8.859375 C 9.132812 8.300781 8.226562 8 7.296875 8 C 4.925781 8 3 9.925781 3 12.296875 Z M 3 12.296875 "
                    />
                    <path
                      fill="rgb(98.431373%,75.294119%,17.647059%)"
                      d="M 45 12.296875 L 45 16.199219 L 35 23.699219 L 35 11.199219 L 38.125 8.859375 C 38.867188 8.300781 39.773438 8 40.703125 8 C 43.074219 8 45 9.925781 45 12.296875 Z M 45 12.296875 "
                    />
                  </g>
                </svg>
              </a>
            </div>
          )}

          {youtube && (
            <div className="team__back-gmail">
              <a href={`${youtube}`} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="5.368 13.434 53.9 37.855"
                >
                  <path
                    fill="#FFF"
                    d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"
                  />
                  <path
                    fill="#E8E0E0"
                    d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"
                  />
                  <path
                    fill="#CD201F"
                    d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
