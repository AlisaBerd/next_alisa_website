import React from "react";
import main_block_mobile from "./TechnologiesMainBlockMobile.module.css"
import TechnologiesOneElement from "./TechnologiesOneElement/TechnologiesOneElement";

export default function TechnologiesMainBlockMobile(props){
  let elements = props.elements_array.map(element => <TechnologiesOneElement text={element.text} img={element.img} key={element.text}/>)
  return (
    <div>
      <h2>{props.header_text}</h2>
      <div className={main_block_mobile.main_block_css_container}>
        <div className={main_block_mobile.tech_main_block}>
          {elements}
        </div>
      </div>
    </div>
  )
}
