import React from "react";
import portfolio_head from './Portfolio_head.module.css';
import { json_data } from "./Portfolio_head_text.js";

const Portfolio_head = (props) => {
  return (
    <div className={portfolio_head.portfolio_head}>
      <div className={portfolio_head.head}>{json_data.head}</div>
      <div className={portfolio_head.text}>{json_data.text[0]}</div>
      <div className={portfolio_head.text}>{json_data.text[1]}</div>
    </div>
  )
}

export default Portfolio_head
