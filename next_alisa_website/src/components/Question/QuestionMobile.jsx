import React, {useEffect} from 'react';
import question_mobile from './QuestionMobile.module.css';

import Question_headline from "./Question_headline/Question_headline";
import {json_data} from "./Question_headline/Question_headline_json";
import Question_head_mobile from "./Question_head/Question_head_mobile";
import Question_accordion_mobile from "./Question_accordion/Question_accordion_mobile";
import Question_accordion_two_mobile from "./Question_accordion_two/Question_accordion_two_mobile";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";

const QuestionMobile = (props) => {
  let headline_array = json_data.map(element => <Question_headline headline={element.headline} />)

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/question')
  //   }
  // },[]);

  return (
    <div className={question_mobile.question_mobile}>
       <Question_head_mobile />
      {headline_array[0]}
      <Question_accordion_mobile />
      {headline_array[1]}
      <Question_accordion_two_mobile />
    </div>
  )
}

export default QuestionMobile
