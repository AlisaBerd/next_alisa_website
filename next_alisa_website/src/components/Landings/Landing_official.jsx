import React from 'react'
import {Landing_JSON} from "./Landing_JSON";
import landing_official from './Landing.module.css'

const Landing_official = (props) =>{
  return(
    <div className={landing_official.landing_official}>
      <h1 className={landing_official.landing_headliner}>{props.headliner}</h1>
        <div className={landing_official.but}>
          <button className={landing_official.landing_button}>Заказать сайт</button>
        </div>
    </div>
  )
}

export default Landing_official
