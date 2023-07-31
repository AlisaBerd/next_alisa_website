import React from 'react'
import service_collab_mobile from './Service_collab_mobile.module.css'
import { json_data } from './Service_colab_json.js'
import { useState } from 'react'
function Service_collab_mobile () {

  const [selected,setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  let div_array = ""
  div_array = json_data.map((item, i)  =>
    <div className={service_collab_mobile.item} key={item.question}>
      <div onClick={() => toggle(i)} className={service_collab_mobile.title}>
        <h4>{item.question}</h4>
        <span className={service_collab_mobile.span}>{selected === i ? '-' : '+'}</span>
      </div>
      <div className={selected === i ? service_collab_mobile.content.show : service_collab_mobile.content}>
        <ul>
          {item.answer.map(element => <li key={element.service}>{element.service}</li>)}
        </ul>
      </div>
    </div>)
  return(
    <div className={service_collab_mobile.service_collab}>
      {div_array}
    </div>
  )
}

export default Service_collab_mobile
