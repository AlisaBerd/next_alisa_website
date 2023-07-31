import React from "react";
import oppinion_note from'./Oppinion_note.module.css'


const Oppinion_note = (props) => {
  return (
    <div className={oppinion_note.oppinion_note}>
      <p>{props.text}</p>
      <h2>{props.name}</h2>
    </div>
  );
}

export default Oppinion_note
