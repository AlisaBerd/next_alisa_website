import React from "react";
import question_accordion_two_mobile from "./Question_accordion_two_mobile.module.css";

import { useState } from 'react'
import {json_Two} from "./Question_Two";
function Question_accordion_two_mobile (props) {

  const [selected,setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  let div_array = ""
  div_array = json_Two.map((item, i)  =>
    <div className={question_accordion_two_mobile.item}>
      <div onClick={() => toggle(i)} className={question_accordion_two_mobile.title}>
        <h4>{item.question}</h4>
        <span className={question_accordion_two_mobile.span}>{selected === i ? '-' : '+'}</span>
      </div>
      <div className={selected === i ? question_accordion_two_mobile.content.show : question_accordion_two_mobile.content}>{item.answer}
      </div>
    </div>)
  return(
    <div className={question_accordion_two_mobile.question_accordion_two}>
      {div_array}
    </div>
  )
}

export default Question_accordion_two_mobile
