import React from "react";
import service_head from './Service_head.module.css'
import { json_data } from "./Service_head_text_ru"
export default function Service_head() {
  return(
    <div className={service_head.service_head}>
      <div className={service_head.head}>{json_data.head}</div>
      <div className={service_head.text}>{json_data.text[0]}</div>
      <div className={service_head.text}>{json_data.text[1]}</div>
    </div>
  )
}
