import * as React from "react"
import "./Assets/Images/CSS/Home.css"
import "./Assets/Images/CSS/glitch.css"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 191.25 231.32"
      {...props}
      width="80%"
      height="100%"
      className="svgg main-svg"
      // data-text = "X"
    >
      <defs>
        <radialGradient
          id="a"
          cx={107.01}
          cy={193.24}
          r={68.73}
          gradientUnits="userSpaceOnUse"
          className="svg-elem-2"
        >
          <stop offset={0} stopColor="#0f0" />
          <stop offset={1} stopColor="green" />
        </radialGradient>
        <radialGradient
          id="b"
          cx={44.36}
          cy={136.83}
          r={51.01}
          xlinkHref="#a"
          className="svg-elem-3"

        />
        <radialGradient
          id="c"
          cx={99.92}
          cy={123.73}
          r={49.01}
          xlinkHref="#a"
        />
        <radialGradient id="d" cx={93.37} cy={54.56} r={68.54} xlinkHref="#a" className="svg-elem-3" />
        <radialGradient
          id="e"
          cx={158.05}
          cy={111.98}
          r={51.17}
          xlinkHref="#a"
        />
        <radialGradient
          id="f"
          cx={157.99}
          cy={111.98}
          r={51.95}
          xlinkHref="#a"
        />
        <radialGradient
          id="g"
          cx={99.91}
          cy={123.74}
          r={49.68}
          xlinkHref="#a"
        />
        <radialGradient
          id="h"
          cx={106.63}
          cy={193.24}
          r={69.47}
          xlinkHref="#a"
        />
        <radialGradient id="i" cx={93.8} cy={54.51} r={69.34} xlinkHref="#a" />
        <radialGradient
          id="j"
          cx={44.18}
          cy={136.77}
          r={51.81}
          xlinkHref="#a"
        />
      </defs>
      <path
        d="M34.58 225.78q-6.21 6.33-12.44 12.64l-.79.75.26-.76a1.41 1.41 0 01.19-.34c1.63-1.89 3.29-3.75 4.92-5.64 2.29-2.64 4.56-5.3 6.85-7.94 1.55-1.81 3.13-3.59 4.68-5.39 2.21-2.57 4.4-5.15 6.61-7.71 1.68-1.94 3.41-3.85 5.09-5.79 2.18-2.53 4.34-5.09 6.52-7.62 1.63-1.89 3.3-3.75 4.93-5.64 2.11-2.45 4.18-4.93 6.29-7.38s4.37-5 6.54-7.48 4.56-5.3 6.85-7.94c1.55-1.81 3.13-3.59 4.68-5.4q3.31-3.84 6.61-7.7c1.69-2 3.36-4 5.07-5.94.91-1.05 1.89-2.06 2.93-3.19 2.23 2.49 4.36 4.82 6.45 7.19 2.51 2.85 5 5.73 7.48 8.58 1.84 2.1 3.72 4.17 5.56 6.27 2.56 2.91 5.09 5.83 7.64 8.74 1.32 1.52 2.66 3 4 4.54 1 1.13 1.76 2.59 3.67 1.8a1.35 1.35 0 01.45 0h47.26a2 2 0 011.76.92c1.75 2.3 3.57 4.56 5.34 6.84.88 1.13 1.72 2.27 2.71 3.59a14 14 0 01-1.83.3c-7.15.09-14.3.18-21.45.23q-19.78.14-39.57.23h-.34a2.42 2.42 0 01-2.43-1c-.66-.8-1.39-1.55-2.08-2.33-2.44-2.81-4.86-5.63-7.31-8.43-1.9-2.15-3.83-4.27-5.73-6.42q-4-4.53-8-9.07c-1.29-1.48-2.54-3-3.84-4.49-1-1.18-2.15-2.33-3.23-3.51-.33.4-.55.7-.8 1q-3.39 3.53-6.79 7l-7 7.25-6.63 6.86-7.11 7.34-6.63 6.86-7.11 7.34q-3.31 3.44-6.64 6.86c-3.18 3.27-6.39 6.53-9.57 9.81-1.36 1.33-2.66 2.78-4.02 4.17z"
        transform="translate(-5.63 -8.39)"
        fill="url(#a)"
        // className="svg-elem-1"
      />
      <path
        d="M8.26 198.32a5.26 5.26 0 00-.89 0h-.62l.49-.9 58.82-71.75c-3.36-4.21-6.7-8.38-10-12.56s-6.54-8.35-9.83-12.51-6.68-8.33-10-12.52c-3-3.83-6.06-7.69-9.07-11.54a3.26 3.26 0 01-.36-.83 3.18 3.18 0 01.9-.3c4.38-.09 8.75-.19 13.13-.2a2.54 2.54 0 011.7.78c1.46 1.63 2.82 3.35 4.2 5q5.72 7.05 11.41 14.1 5.48 6.74 11 13.46 6.24 7.62 12.51 15.23a1 1 0 010 1.46c-.59.67-1.13 1.38-1.69 2.07l-6.57 8-6.7 8.19-6.57 8c-2.22 2.7-4.45 5.38-6.66 8.09s-4.34 5.36-6.53 8c-2.59 3.16-5.23 6.28-7.82 9.44-2.89 3.53-5.76 7.09-8.64 10.63-2.29 2.82-4.64 5.6-6.87 8.48a4.49 4.49 0 01-4.18 2.09c-3.73-.04-7.42.09-11.16.09z"
        transform="translate(-5.63 -8.39)"
        fill="url(#b)"
      />
      <path
        d="M66.17 74.6a2.32 2.32 0 012 1Q77.06 86.32 86 97l30 36.09 27.81 33.49 3.88 4.67c.35.42.68.85 1.17 1.47-.63.05-1 .1-1.34.09h-12.5a2.25 2.25 0 01-1.91-.92Q118 154 102.82 136.19q-18.45-21.81-36.88-43.66l-14-16.59c-.28-.33-.52-.69-.9-1.18.53 0 .85-.09 1.17-.09 4.64-.02 9.3-.01 13.96-.07z"
        transform="translate(-5.63 -8.39)"
        fill="url(#c)"

      />
      <path
        d="M166.31 21.26l12-12.26h.59c-.86 1-1.72 1.91-2.56 2.89-2.64 3.07-5.26 6.16-7.91 9.22-2.06 2.4-4.16 4.77-6.23 7.16-2.28 2.64-4.55 5.3-6.84 7.94-1.63 1.89-3.29 3.75-4.91 5.64-2.14 2.47-4.24 5-6.38 7.46-1.67 1.94-3.4 3.84-5.08 5.79-2.23 2.58-4.45 5.19-6.68 7.78-1.6 1.86-3.23 3.7-4.83 5.56-2.11 2.45-4.19 4.93-6.3 7.37s-4.32 4.93-6.47 7.4q-3.43 4-6.83 8c-1.64 1.92-3.25 3.87-4.91 5.78-.91 1.05-1.89 2.05-2.92 3.17-1.5-1.69-2.85-3.22-4.21-4.74-1.84-2.12-3.7-4.2-5.54-6.3-2.45-2.8-4.86-5.62-7.32-8.42-1.89-2.16-3.83-4.27-5.72-6.42q-4.41-5-8.77-10.12c-.83-1-1.65-1.81-3.08-1.17a1.49 1.49 0 01-.56 0Q41.29 63 17.7 63a2.09 2.09 0 01-1.85-1c-1.72-2.28-3.52-4.5-5.27-6.76-.89-1.08-1.76-2.24-2.76-3.57a18.08 18.08 0 012-.29q10.62-.14 21.23-.23 16.35-.13 32.71-.23c2.4 0 4.8.1 7.19 0a3.26 3.26 0 012.83 1.44c2.5 2.85 5 5.73 7.48 8.58 1.89 2.15 3.83 4.27 5.72 6.42q3.92 4.44 7.79 8.9c1.34 1.54 2.65 3.12 4 4.65 1.58 1.78 3.19 3.53 4.83 5.36.33-.42.51-.69.74-.93 2.33-2.42 4.68-4.84 7-7.26l6.72-6.94 7-7.18 6.79-7 6.87-7.1 6.87-7.1 7.83-8.06c1.95-2 3.89-4 5.84-6.06q3.48-3.72 7.05-7.38z"
        transform="translate(-5.63 -8.39)"
        fill="url(#d)"

      />
      <path
        d="M196.13 50.45l-1.26.54c-.13.14-.27.26-.39.4L187 60.5c-2.13 2.58-4.26 5.15-6.37 7.75-2.48 3-4.92 6.12-7.42 9.16s-5.22 6.28-7.82 9.44-5.24 6.44-7.88 9.66c-2.19 2.67-4.4 5.32-6.59 8-2.48 3-4.93 6.13-7.42 9.17s-5.14 6.23-7.73 9.37c3.37 4.23 6.71 8.39 10 12.57s6.54 8.35 9.84 12.51 6.68 8.34 10 12.52q4.56 5.76 9.08 11.55a4.78 4.78 0 01.4.74 3 3 0 01-1 .38c-4.38.1-8.75.2-13.13.21a2.52 2.52 0 01-1.7-.77c-2.14-2.48-4.18-5-6.25-7.56-3.23-4-6.45-8-9.69-11.92-2.46-3-5-6-7.42-9-2.79-3.42-5.53-6.88-8.32-10.31-2.48-3-5-6.07-7.48-9.13a1.26 1.26 0 01-.06-1.16c1.42-1.82 2.9-3.58 4.37-5.35l6.64-8.09c1.86-2.27 3.7-4.55 5.56-6.82s3.81-4.65 5.72-7 3.71-4.54 5.58-6.8l5.65-6.89c1.86-2.26 3.7-4.54 5.56-6.81s3.8-4.57 5.68-6.87l7.43-9.16c2.27-2.79 4.53-5.59 6.84-8.35.36-.43.9-1 1.37-1 4.76-.05 9.52 0 14.27 0h.12z"
        transform="translate(-5.63 -8.39)"
        fill="url(#e)"

      />
      <path
        d="M196.88 50.63l-2 1.49c-3.41 4.14-6.85 8.27-10.25 12.43-2.86 3.49-5.68 7-8.54 10.51-2.6 3.17-5.24 6.31-7.84 9.48-2.87 3.49-5.69 7-8.55 10.5-2.61 3.17-5.24 6.32-7.84 9.49q-3.67 4.45-7.31 8.92c-2.29 2.8-4.56 5.62-6.88 8.39-.69.83-.89 1.37-.08 2.36 3.66 4.48 7.19 9.07 10.78 13.6 4.14 5.23 8.32 10.45 12.47 15.69s8.37 10.6 12.55 15.9c.68.85 1.37 1.68 2.05 2.53a1.25 1.25 0 01-.73 2.12 2.6 2.6 0 01-.56 0c-4.34.08-8.68.12-13 .25a3 3 0 01-2.57-1.3L149 161.28l-8.7-10.68c-3.21-3.93-6.46-7.83-9.67-11.76s-6.3-7.76-9.45-11.64c-.55-.67-1.13-1.3-1.68-2a1.53 1.53 0 010-2.14q5.34-6.48 10.68-13c2.86-3.49 5.67-7 8.53-10.51s5.85-7.07 8.76-10.62 5.68-7 8.54-10.5c2.6-3.18 5.24-6.32 7.84-9.49s4.94-6.09 7.41-9.12 5.07-6.17 7.59-9.26a2.56 2.56 0 012.15-.86h12.61c.41 0 .81 0 1.22-.08h2zm-2.13-.09c-4.75 0-9.51-.07-14.27 0-.47 0-1 .57-1.37 1-2.31 2.76-4.57 5.56-6.84 8.35L164.84 69c-1.88 2.3-3.79 4.58-5.68 6.87s-3.7 4.55-5.56 6.81L148 89.6c-1.87 2.26-3.72 4.53-5.58 6.8s-3.82 4.64-5.72 7-3.7 4.55-5.56 6.82l-6.64 8.09c-1.47 1.77-3 3.53-4.37 5.35a1.26 1.26 0 00.06 1.16c2.47 3.06 5 6.08 7.48 9.13 2.79 3.43 5.53 6.89 8.32 10.31 2.46 3 5 6 7.42 9 3.24 4 6.46 7.95 9.69 11.92 2.07 2.53 4.11 5.08 6.25 7.56a2.52 2.52 0 001.7.77c4.38 0 8.75-.11 13.13-.21a3 3 0 001-.38 4.78 4.78 0 00-.4-.74q-4.53-5.77-9.08-11.55c-3.32-4.18-6.68-8.33-10-12.52s-6.54-8.35-9.84-12.51-6.65-8.34-10-12.57c2.59-3.14 5.18-6.24 7.73-9.37s4.94-6.12 7.42-9.17c2.19-2.67 4.4-5.32 6.59-8 2.64-3.22 5.24-6.45 7.88-9.66s5.24-6.28 7.82-9.44 4.94-6.12 7.42-9.16c2.11-2.6 4.24-5.17 6.37-7.75l7.5-9.11c.12-.14.26-.26.39-.4l1.26-.54-1.26.09z"
        transform="translate(-5.63 -8.39)"
        fill="url(#f)"

      />
      <path
        d="M55.9 73.9h10.52a2.37 2.37 0 012 1l13.52 16.21 22.11 26.65q12.28 14.79 24.56 29.59l20 24.15a5.44 5.44 0 01.53.73c.49.87.25 1.38-.75 1.37-4.76 0-9.51-.11-14.27-.24a2.32 2.32 0 01-1.35-.85q-6.63-7.72-13.2-15.5-8.91-10.5-17.79-21T84.09 115Q74 103.15 64 91.26q-6.57-7.77-13.1-15.57c-.28-.33-.57-1-.42-1.23a2 2 0 011.32-.53c1.35-.03 2.73-.03 4.1-.03zm10.27.7c-4.66.06-9.32.05-14 .07-.32 0-.64 0-1.17.09.38.49.62.85.9 1.18l14 16.59q18.44 21.84 36.88 43.66 15.11 17.87 30.24 35.71a2.25 2.25 0 001.91.92h12.5c.36 0 .71 0 1.34-.09-.49-.62-.82-1-1.17-1.47l-3.88-4.67L116 133.13 86 97q-8.94-10.7-17.84-21.44a2.32 2.32 0 00-1.99-.96z"
        transform="translate(-5.63 -8.39)"
        fill="url(#g)"

      />
      <path
        d="M22.31 236.37c2.68-3.11 5.43-6.17 8.11-9.28 3.08-3.56 6.11-7.16 9.18-10.73 2.61-3 5.27-6 7.88-9 3.07-3.56 6.11-7.15 9.18-10.72 2.15-2.49 4.34-4.94 6.49-7.43 2.63-3 5.24-6.12 7.87-9.18 2.12-2.46 4.28-4.89 6.4-7.35 2.66-3.08 5.3-6.17 8-9.25 1.61-1.87 3.24-3.72 4.85-5.59 2.22-2.57 4.42-5.15 6.65-7.72.75-.88 1.51-1.76 2.32-2.59s1.37-1 2.32 0c1.46 1.55 2.87 3.15 4.28 4.75s2.51 3 3.79 4.42q4.78 5.49 9.6 11c2.45 2.77 4.92 5.52 7.37 8.29 2.08 2.36 4.13 4.73 6.19 7.1.55.63 1.1 1.09 2 .68a2.82 2.82 0 011 0h46.92a2.87 2.87 0 012.52 1.32c2.44 3.21 4.95 6.37 7.42 9.55.89 1.14.72 1.68-.65 2.09a4.13 4.13 0 01-1.1.17q-19.56.12-39.13.23c-7.38.05-14.76.09-22.14.27a4.08 4.08 0 01-3.43-1.71c-2-2.37-4.13-4.71-6.2-7.08-2.45-2.81-4.9-5.64-7.36-8.44-1.82-2.08-3.67-4.14-5.49-6.22-2.54-2.89-5.06-5.79-7.59-8.69-.67-.76-1.36-1.49-2-2.26s-.87-.28-1.27.13q-3.94 4.08-7.91 8.14c-3.72 3.81-7.46 7.6-11.18 11.41-2.27 2.33-4.53 4.68-6.8 7L56.47 204l-6.64 6.87Q42.92 218 36 225.13c-2.27 2.34-4.54 4.67-6.8 7-2 2.08-4 4.17-5.94 6.25l-1.15 1.31h-2l.44-.72h-.06c.58-.86 1.13-1.79 1.82-2.6zm-.17 2l12.44-12.64c1.36-1.39 2.66-2.84 4-4.23 3.18-3.28 6.39-6.54 9.57-9.81q3.33-3.42 6.64-6.86l7.11-7.34 6.63-6.86 7.11-7.34 6.63-6.86 7-7.25q3.41-3.51 6.79-7c.25-.26.47-.56.8-1 1.08 1.18 2.18 2.33 3.23 3.51 1.3 1.48 2.55 3 3.84 4.49q4 4.55 8 9.07c1.9 2.15 3.83 4.27 5.73 6.42 2.45 2.8 4.87 5.62 7.31 8.43.69.78 1.42 1.53 2.08 2.33a2.42 2.42 0 002.43 1h.34q19.78-.11 39.57-.23c7.15 0 14.3-.14 21.45-.23a14 14 0 001.83-.3c-1-1.32-1.83-2.46-2.71-3.59-1.77-2.28-3.59-4.54-5.34-6.84a2 2 0 00-1.76-.92H135.6a1.35 1.35 0 00-.45 0c-1.91.79-2.69-.67-3.67-1.8-1.31-1.53-2.65-3-4-4.54-2.55-2.91-5.08-5.83-7.64-8.74-1.84-2.1-3.72-4.17-5.56-6.27-2.5-2.85-5-5.73-7.48-8.58-2.09-2.37-4.22-4.7-6.45-7.19-1 1.13-2 2.14-2.93 3.19-1.71 2-3.38 4-5.07 5.94q-3.3 3.85-6.61 7.7c-1.55 1.81-3.13 3.59-4.68 5.4-2.29 2.64-4.55 5.3-6.85 7.94s-4.38 5-6.54 7.48-4.18 4.93-6.29 7.38c-1.63 1.89-3.3 3.75-4.93 5.64-2.18 2.53-4.34 5.09-6.52 7.62-1.68 1.94-3.41 3.85-5.09 5.79-2.21 2.56-4.4 5.14-6.61 7.71-1.55 1.8-3.13 3.58-4.68 5.39-2.29 2.64-4.56 5.3-6.85 7.94-1.63 1.89-3.29 3.75-4.92 5.64a1.41 1.41 0 00-.19.34l-.26.76z"
        transform="translate(-5.63 -8.39)"
        fill="url(#h)"
        
      />
      <path
        d="M31 51.15q-10.62.09-21.23.23a18.08 18.08 0 00-2 .29c1 1.32 1.87 2.49 2.76 3.64 1.75 2.26 3.55 4.48 5.27 6.76a2.09 2.09 0 001.85 1H64.8a1.49 1.49 0 00.56 0c1.43-.64 2.25.21 3.08 1.17q4.37 5.07 8.77 10.12c1.89 2.15 3.83 4.26 5.72 6.42 2.46 2.8 4.87 5.62 7.32 8.42 1.84 2.1 3.71 4.18 5.57 6.27 1.36 1.52 2.71 3 4.21 4.74 1-1.12 2-2.12 2.92-3.17 1.66-1.91 3.27-3.86 4.91-5.78q3.41-4 6.83-8c2.15-2.47 4.33-4.92 6.47-7.4s4.19-4.92 6.3-7.37c1.6-1.86 3.23-3.7 4.83-5.56 2.23-2.59 4.45-5.2 6.68-7.78 1.68-1.95 3.41-3.85 5.08-5.79 2.14-2.48 4.24-5 6.38-7.46 1.62-1.89 3.28-3.75 4.91-5.64 2.29-2.64 4.56-5.3 6.84-7.94 2.07-2.39 4.17-4.76 6.23-7.16 2.65-3.06 5.27-6.15 7.91-9.22.84-1 1.7-1.94 2.56-2.89h-.59q-6 6.14-12 12.26-3.57 3.64-7.11 7.33c-1.95 2-3.89 4.05-5.84 6.06l-7.83 8.06-6.87 7.1-6.87 7.1-6.79 7-7 7.18-6.65 6.86c-2.34 2.42-4.69 4.84-7 7.26-.23.24-.41.51-.74.93-1.64-1.83-3.25-3.58-4.83-5.36-1.35-1.53-2.66-3.11-4-4.65q-3.88-4.45-7.79-8.9c-1.89-2.15-3.83-4.27-5.72-6.42-2.51-2.85-5-5.73-7.48-8.58a3.26 3.26 0 00-2.83-1.44c-2.39.14-4.79 0-7.19 0Q47.37 51 31 51.15zm-21.41-.52q20.07-.14 40.14-.24c7.05 0 14.09-.09 21.13-.26a4.07 4.07 0 013.43 1.7c2.11 2.41 4.24 4.82 6.35 7.24 2.43 2.78 4.83 5.59 7.27 8.37 1.82 2.08 3.67 4.12 5.5 6.2 2.51 2.86 5 5.74 7.51 8.61.66.76 1.35 1.49 2 2.26.51.61.86.31 1.27-.12 2.18-2.26 4.36-4.53 6.56-6.78 4.14-4.24 8.3-8.45 12.44-12.68 2.36-2.41 4.69-4.85 7-7.27s4.42-4.58 6.64-6.86l7.17-7.35 6.56-6.78 13.89-14.37 6.88-7.11c1.95-2 3.88-4.06 5.86-6.06l.18-.15.56-.59h2.4l-.29.37c-.72.87-1.41 1.75-2.14 2.6q-4.2 4.89-8.41 9.75c-2.1 2.43-4.23 4.83-6.33 7.26-2.63 3.05-5.23 6.13-7.86 9.19-2.14 2.44-4.3 4.93-6.48 7.44-2.63 3-5.23 6.12-7.87 9.17-2.09 2.44-4.22 4.84-6.32 7.27-2.71 3.13-5.39 6.29-8.1 9.42-2.1 2.43-4.23 4.83-6.33 7.26s-4.31 5.05-6.48 7.57-4.22 4.84-6.32 7.26c-1.81 2.09-3.61 4.19-5.41 6.28-.27.31-.58.59-.86.89a1.21 1.21 0 01-2 0Q96 96.67 93 93.23c-1.36-1.53-2.69-3.1-4-4.64q-3.83-4.4-7.66-8.77c-1.85-2.11-3.73-4.18-5.58-6.29-2.49-2.83-5-5.68-7.43-8.52-.77-.88-1.47-1.79-2.89-1.28a4.67 4.67 0 01-1.45 0h-45.8a3.43 3.43 0 01-3.09-1.55c-2.41-3.13-4.9-6.18-7.33-9.32-.83-1.06-.65-1.66.61-2a4.17 4.17 0 011.21-.23z"
        transform="translate(-5.63 -8.39)"
        fill="url(#i)"
      />
      <path
        d="M14.82 199H5.58l1.86-3a.78.78 0 01.1-.15q4.46-5.53 9-11c3.29-4 6.63-8 9.92-12 3.54-4.33 7-8.7 10.59-13C41 155.07 45 150.28 49 145.46c3.24-4 6.45-7.93 9.68-11.89 1.82-2.23 3.63-4.46 5.5-6.64a1.52 1.52 0 00.06-2.36c-4.18-5.16-8.24-10.42-12.36-15.63C48 104 44 99.1 40.07 94.16q-6.63-8.39-13.23-16.79c-.16-.21-.37-.37-.53-.58a1.19 1.19 0 01.57-2 2.41 2.41 0 01.76-.1c4.35-.09 8.69-.12 13-.26a3 3 0 012.65 1.36c2.89 3.56 5.8 7.11 8.69 10.67 2.49 3.07 5 6.15 7.46 9.22s5 6.05 7.46 9.08c3.23 4 6.44 7.94 9.67 11.9q2.73 3.34 5.49 6.65a1.61 1.61 0 010 2.55c-3.29 4-6.55 8-9.84 12s-6.63 8-9.92 12c-3.55 4.33-7 8.7-10.59 13-4 4.82-8 9.6-11.91 14.42-3.17 3.87-6.29 7.78-9.45 11.66-2.45 3-4.93 6-7.39 9a2.64 2.64 0 01-2.24 1zm-6.56-.72c3.71 0 7.43-.13 11.13.06a4.49 4.49 0 004.18-2.09c2.23-2.88 4.58-5.66 6.87-8.48 2.88-3.54 5.75-7.1 8.64-10.63 2.59-3.16 5.23-6.28 7.82-9.44 2.19-2.67 4.34-5.36 6.53-8s4.44-5.39 6.66-8.09l6.57-8 6.7-8.19 6.57-8c.56-.69 1.1-1.4 1.69-2.07a1 1 0 000-1.46q-6.27-7.61-12.51-15.23-5.51-6.72-11-13.46-5.72-7-11.41-14.1c-1.38-1.7-2.74-3.42-4.2-5a2.54 2.54 0 00-1.7-.78c-4.38 0-8.75.11-13.13.2a3.18 3.18 0 00-.9.3 3.26 3.26 0 00.36.83c3 3.85 6 7.71 9.07 11.54 3.32 4.19 6.68 8.34 10 12.52s6.54 8.35 9.83 12.51 6.65 8.35 10 12.56l-58.79 71.7-.49.9h.62a5.26 5.26 0 01.89-.06z"
        transform="translate(-5.63 -8.39)"
        fill="url(#j)"
      />
    </svg>
  )
}

export default SvgComponent
