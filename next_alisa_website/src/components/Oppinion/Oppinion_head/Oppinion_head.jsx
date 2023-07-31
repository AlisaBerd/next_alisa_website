import React from "react";
import oppinion_head from'./Oppinion_head.module.css';
import { json_data } from "./Oppinion_head_text.js";
import portfolio_head from "../../Portfolio/Portfolio_head/Portfolio_head.module.css";

const Oppinion_head = (props) => {
  return (
    <div className={oppinion_head.oppinion_head}>
      <div className={portfolio_head.head}>{json_data.head}</div>
      <div className={portfolio_head.text}>{json_data.text[0]}</div>
    </div>
  );
}

export default Oppinion_head
