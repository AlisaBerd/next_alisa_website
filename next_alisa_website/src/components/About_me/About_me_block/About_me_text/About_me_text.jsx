import React from "react";
import about_me_text from './About_me_text.module.css';

const About_me_text = (props) => {
  return (
    <div className={about_me_text.about_me_text}>
      <h1>{props.head}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default About_me_text
