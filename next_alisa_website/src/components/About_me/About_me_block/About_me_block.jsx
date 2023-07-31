import React from "react";
import about_me_block from './About_me_block.module.css'
import About_me_photo from "./About_me_photo/About_me_photo";
import About_me_text from "./About_me_text/About_me_text";
import {about_me_text_json} from "./About_me_text/About_me_text_json";
import {about_me_photo_json} from "./About_me_photo/About_me_photo_json";
import About_me_key from "./About_me_key/About_me_key";
import {about_meKey} from "./About_meKey";
import {about_meSkills} from "./About_meSkills";





const About_me_block = () => {
  let info_about_me = about_me_text_json.map( element => <About_me_text head={element.head} text={element.text} key={element.text}/>);
  let photo_about_me = about_me_photo_json.map( element => <About_me_photo photo={element.photo} key={element.photo} />);
  let key_array = about_meKey.map(element => <li key={element.key}>{element.key}</li>)
  let skills_array = about_meSkills.map(element => <li key={element.skill}>{element.skill}</li>)
  return (
    <>
    <div className={about_me_block.about_me_block}>
      {info_about_me [0]}
      {photo_about_me [0]}
      {photo_about_me [1]}
      <ul className={about_me_block.key_skills}>
        <h1>Ключевые навыки</h1>
        {key_array}
      </ul>
      <ul>
        <h1>Владею</h1>
        {skills_array}
      </ul>
    </div>
    </>
  );
}

export default About_me_block
