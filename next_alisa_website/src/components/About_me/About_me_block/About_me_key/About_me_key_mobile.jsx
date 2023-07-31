import React from "react";
import about_me_key_mobile from './About_me_key_mobile.module.css'


const About_me_key_mobile = (props) => {

  return (

    <li className={about_me_key_mobile.about_me_key_mobile}>{props.key}</li>

  )
}

export default About_me_key_mobile
