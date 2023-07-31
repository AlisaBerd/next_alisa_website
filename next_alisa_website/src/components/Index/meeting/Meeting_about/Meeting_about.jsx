import React from "react";
import about from'./Meeting_about.module.css';
import {motion} from 'framer-motion'
import Link from "next/link";

const Meeting_about = () =>{
  return(
  <div className={about.about_container} >
      {/*<motion.div*/}
      {/*  initial={{ x: -100, opacity: 0 }}*/}
      {/*  whileInView={{ x: 0, opacity: 1 }}*/}
      {/*  className={about.about}>*/}
        <h1>Меня зовут Алиса</h1>
        <p>Я графический и веб дизайнер. Работаю в сфере дизайна c 2020 года.
          Сейчас больше специализируюсь на дизайне разработке сайтов. Считаю, что любой дизайнерский продукт должен не
          только красивым, но и удобным и понятным абсолютно каждому. Поэтому при разработке дизайна я уделяю внимание
          не эстетической стороне, но и структуре и логике взаимодействия.</p>
        <div className={about.button_about_me}>
          <button className={about.meeting_about_button}><Link href="/about_me" target=""> Подробнее обо мне </Link></button>
        </div>
      {/*</motion.div>*/}
  </div>
  )
}

export default  Meeting_about
