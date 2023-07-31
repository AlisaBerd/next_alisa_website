import React from "react";
import main_block_css from "./TechnologiesMainBlock.module.css"
import TechnologiesOneElement from "./TechnologiesOneElement/TechnologiesOneElement";

export default function TechnologiesMainBlock(props){
  let elements = props.elements_array.map(element => <TechnologiesOneElement text={element.text} img={element.img} key={element.text}/>)
  return (
    <div>
      <h2 className={main_block_css.textliner}>{props.header_text}</h2>
      <div className={main_block_css.main_block_css_container}>
        <div className={main_block_css.tech_main_block}>
          {elements}
        </div>
      </div>
    </div>
  )
}
