import React from 'react'
import Landing_official from "./Landing_official";
import {Landing_JSON} from "./Landing_JSON";
import Landing_dis from "./Landing_dis";
{/* import landing_designer from 'Landing.module.scss' */}

const Landing_designer = (props) =>{

  let land_off = Landing_JSON.first_block.map( element => <Landing_official headliner={element.headliner}/>)
  let land_dis = props.element.map(element => <Landing_dis text={element.text}/> )
  return(
    <div>
      {land_off[0]}
      {land_dis[0]}
    </div>
  )
}

export default Landing_designer
