import React from "react";
import question_accordion_mobile from "./Question_accordion_mobile.module.css";
import {json_data} from "./Question_accordion_json"
import { useState } from 'react'
function Question_accordion_mobile (props) {

  const [selected,setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  let div_array = ""
  div_array = json_data.map((item, i)  =>
    <div className={question_accordion_mobile.item}>
      <div onClick={() => toggle(i)} className={question_accordion_mobile.title}>
        <h4>{item.question}</h4>
        <span className={question_accordion_mobile.span}>{selected === i ? '-' : '+'}</span>
      </div>
      <div className={selected === i ? question_accordion_mobile.content.show : question_accordion_mobile.content}>{item.answer}
      </div>
    </div>)
  return(
    <div className={question_accordion_mobile.question_accordion}>
      {div_array}
    </div>
  )
}

export default Question_accordion_mobile
