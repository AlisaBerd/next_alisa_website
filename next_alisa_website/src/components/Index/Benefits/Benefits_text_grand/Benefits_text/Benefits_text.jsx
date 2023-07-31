import React from 'react'
import benefits_text from "./Benefits_text.module.css";

const Benefits_text = (props) => {
  return (
    <div className={benefits_text.benefits_text}>
    <h2>{props.head}</h2>
    <p>{props.text}</p>
    </div>
  )
}

export default Benefits_text
