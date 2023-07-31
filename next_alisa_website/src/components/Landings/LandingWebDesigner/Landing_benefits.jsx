import React from "react";
{/*import landing_benefits from "./LandingWebDesigner.module.css";*/}

export default function Landing_benefits (props){
  return (
    <div>
      <img src={props.img}/>
      <p>{props.text}</p>
    </div>
  )
}
