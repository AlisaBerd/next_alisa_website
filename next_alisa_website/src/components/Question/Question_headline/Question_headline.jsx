import React from 'react';
import question_headline from './Question_healine.module.css';


const Question_headline = (props) => {
  return (
      <p className={question_headline.question_headline}>{props.headline}</p>
  )
}

export default Question_headline
