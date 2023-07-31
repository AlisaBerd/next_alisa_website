import React from "react";
import oppinion_text from "./Oppinion_text.module.css"

const Oppinion_text = (props) => {
  return(
    <div className={oppinion_text.oppinion_text}>
      <p>{props.text}</p>
      <p className={oppinion_text.name}>{props.name}</p>
    </div>
  )
}

export default Oppinion_text
