import React from "react";
import about_me_mobile from './About_me_mobile.module.css'
const About_me_photo = (props) => {
  return (
    <img className={about_me_mobile.about_me_mobile} src={props.photo} />
  );
}

export default About_me_photo
