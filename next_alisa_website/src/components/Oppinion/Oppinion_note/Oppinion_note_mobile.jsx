import React from "react";
import oppinion_note_mobile from'./Oppinion_note_mobile.module.css'


const Oppinion_note_mobile = (props) => {
  return (
    <div className={oppinion_note_mobile.oppinion_note}>
      <p>{props.text}</p>
      <h2>{props.name}</h2>
    </div>
  );
}

export default Oppinion_note_mobile
