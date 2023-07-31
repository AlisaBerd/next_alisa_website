import React from 'react'
import benefits from "./Benefits.module.css";
import Benefits_photo from "./Benefits_photo/Benefits_photo";
import Benefits_text_grand from "./Benefits_text_grand/Benefits_text_grand";


const Benefits = (props) => {
  return (
  <div className={benefits.benefits_container}>
    <Benefits_text_grand />
    <Benefits_photo />
  </div>
  )
}

export default Benefits
