import React from "react";
import question_accordion from "./Question_accordion.module.css";
import {json_data} from "./Question_accordion_json"
import { useState } from 'react'
function Question_accordion (props) {

  const [selected,setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  let div_array = ""
  div_array = json_data.map((item, i)  =>
    <div className={question_accordion.item}>
      <div onClick={() => toggle(i)} className={question_accordion.title}>
        <h4>{item.question}</h4>
        <span className={question_accordion.span}>{selected === i ? '-' : '+'}</span>
      </div>
      <div className={selected === i ? question_accordion.content.show : question_accordion.content}>{item.answer}
      </div>
    </div>)
  return(
    <div className={question_accordion.question_accordion}>
      {div_array}
    </div>
  )
}

export default Question_accordion

