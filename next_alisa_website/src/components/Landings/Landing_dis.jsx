import React from 'react'
import {Landing_JSON} from "./Landing_JSON";
{/* import landing_designer from 'Landing.module.scss' */}

const Landing_dis = (props) =>{
  return(
    <div>
      <img src='/images/forlanding.png' />
      <p>{props.text}</p>
    </div>
  )
}

export default Landing_dis
