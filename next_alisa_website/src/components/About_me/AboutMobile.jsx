
import React, {useEffect} from "react";
import about_mobile from './AboutMobile.module.css'
import {about_me_text_json} from "./About_me_block/About_me_text/About_me_text_json";
import About_me_text from "./About_me_block/About_me_text/About_me_text";
import {about_me_photo_json} from "./About_me_block/About_me_photo/About_me_photo_json";
import {about_meKey} from "./About_me_block/About_meKey";
import {about_meSkills} from "./About_me_block/About_meSkills";
import About_me_mobile from "./About_me_block/About_me_photo/About_me_mobile";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";

export default  function AboutMobile(props){

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/about_me')
  //   }
  // },[]);

  let info_about_me = about_me_text_json.map( element => <About_me_text head={element.head} text={element.text} />);
  let photo_about_me = about_me_photo_json.map( element => <About_me_mobile photo={element.photo} />);
  let key_array = about_meKey.map(element => <li>{element.key}</li>)
  let skills_array = about_meSkills.map(element => <li>{element.skill}</li>)
  return (
    <>
      <div className={about_mobile.about_mobile}>
        <div className={about_mobile.info}>
        {info_about_me [0]}
        </div>
        <div className={about_mobile.img}>
        {photo_about_me [0]}
        {photo_about_me [1]}
        </div>
        <ul className={about_mobile.key}>
          <h1>Ключевые навыки</h1>
          {key_array}
        </ul>
        <ul className={about_mobile.key}>
          <h1>Владею</h1>
          {skills_array}
        </ul>
      </div>
    </>
  );
}
