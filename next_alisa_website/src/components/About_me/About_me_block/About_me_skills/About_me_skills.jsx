import React from "react";
import about_me_skills from './About_me_skills.module.css'


const About_me_skills = (props) => {

  return (

    <li className={about_me_skills.about_me_skills}>{props.key}</li>

  )
}

export default About_me_skills
