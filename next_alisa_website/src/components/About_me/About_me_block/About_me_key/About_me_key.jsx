import React from "react";
import about_me_key from './About_me_key.module.css'


const About_me_key = (props) => {

return (

  <li className={about_me_key.about_me_key}>{props.key}</li>

  )
}

export default About_me_key
