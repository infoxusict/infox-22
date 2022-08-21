
import "./Schedule.css"

import React from 'react'
import MatrixRain from './MatrixRain'

const Schedule = () => {
  return (
    <>
      <MatrixRain />
      <div className='scheduleDiv' style={{height: "45vh"}}>
        <h2 style={{fontSize: "5vh"}}>To Be Revealed...</h2>
      </div>
    </>
  )
}

export default Schedule