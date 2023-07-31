import React from "react";
import element_css from "./TechnologiesOneElement.module.css"
export default function TechnologiesOneElement(props) {
  return(
    <div className={element_css.tech_one_element}>
      <img src={props.img} alt="" />
      <p>{props.text}</p>
    </div>
  )
}
