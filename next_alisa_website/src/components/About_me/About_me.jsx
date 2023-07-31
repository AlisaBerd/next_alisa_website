import React, {useEffect} from "react";
import about_me from './About_me.module.css'
import About_me_block from "./About_me_block/About_me_block";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";

const About_me = (props) => {

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/about_me')
  //   }
  // },[]);

  return (
    <div className={about_me.about_me}>
      <About_me_block/>
     </div>
  );
}

export default About_me
