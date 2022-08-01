import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from "three"
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const bodyHeight = document.body.offsetHeight
  console.log(bodyHeight)

  const myRef = useRef(null);
  console.log(myRef)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        THREE,
        mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x00ff00,
  backgroundColor: 0x0f0
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef} style={{height: "100vh", position: "fixed", width: "100vw", maxHeight: "100vh", maxWidth:"100vw", zIndex:0}}>
  </div>
}

export default MyComponent;