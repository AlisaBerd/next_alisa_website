import React, {useEffect} from 'react';
import question from './Question.module.css';
import Question_head from "./Question_head/Question_head";
import Question_headline from "./Question_headline/Question_headline";
import Question_accordion from "./Question_accordion/Question_accordion";
import {json_data} from "./Question_headline/Question_headline_json";
import Question_accordion_two from "./Question_accordion_two/Question_accordion_two";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";

const Question = (props) => {
  let headline_array = json_data.map(element => <Question_headline headline={element.headline} />)

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/question')
  //   }
  // },[]);

  return (
    <div className={question.question}>
      <Question_head/>
      {headline_array[0]}
      <Question_accordion/>
      {headline_array[1]}
      <Question_accordion_two/>
    </div>
  )
}

export default Question
