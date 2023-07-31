import React from "react";
import political_block from'./Political_block.module.css';
import {json_data} from "./Political_note";


const Political_block = (props) => {
  return (
    <div className={political_block.political_block}>
      <div className={political_block.head}>{json_data[0].head}</div>
      <div className={political_block.text}>{json_data[0].text}</div>
      <div className={political_block.head}>{json_data[1].head}</div>
      <div className={political_block.text}>{json_data[1].text}</div>
      <div className={political_block.head}>{json_data[2].head}</div>
      <div className={political_block.text}>{json_data[2].text}</div>
      <div className={political_block.head}>{json_data[3].head}</div>
      <div className={political_block.text}>{json_data[3].text}</div>
      <div className={political_block.head}>{json_data[4].head}</div>
      <div className={political_block.text}>{json_data[4].text}</div>
      <div className={political_block.head}>{json_data[5].head}</div>
      <div className={political_block.text}>{json_data[5].text}</div>
      <div className={political_block.head}>{json_data[6].head}</div>
      <div className={political_block.text}>{json_data[6].text}</div>
      <div className={political_block.head}>{json_data[7].head}</div>
      <div className={political_block.text}>{json_data[7].text}</div>
      <div className={political_block.head}>{json_data[8].head}</div>
      <div className={political_block.text}>{json_data[8].text}</div>
      <div className={political_block.head}>{json_data[9].head}</div>
      <div className={political_block.text}>{json_data[9].text}</div>
    </div>
  );
}

export default Political_block
