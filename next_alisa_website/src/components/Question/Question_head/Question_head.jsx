import React from "react";
import question_head from "./Question_head.module.css";

const Question_head = () => {
  return(
    <div className={question_head.question_head}>
      <h1>Часто задаваемые вопросы</h1>
      <p>На этой странице, я попыталась ответить на самые часто задаваемые вопросы. Для вашего удобства, вопросы разделены на смысловые группы.

        Если не нашли ответа на свой вопрос, пишите, спрашивайте. Из некоторых ответов получаются полноценные статьи.</p>
    </div>
  )
}

export default Question_head
