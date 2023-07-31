import React from "react";
import about_mobile from'./Meeting_about_mobile.module.css';
import Link from "next/link";

const Meeting_about_mobile = () =>{
  return(

    <div className={about_mobile.about}>
      <h1>Меня зовут Алиса</h1>
      <p>Я графический и веб дизайнер. Работаю в сфере дизайна c 2020 года.
        Сейчас больше специализируюсь на дизайне разработке сайтов. Считаю, что любой дизайнерский продукт должен не
        только красивым, но и удобным и понятным абсолютно каждому. Поэтому при разработке дизайна я уделяю внимание
        не эстетической стороне, но и структуре и логике взаимодействия.</p>
      <div className={about_mobile.button_about_me}>
        <button><Link href="/about_me" target=""> Подробнее обо мне </Link></button>
      </div>
    </div>

  )
}

export default  Meeting_about_mobile
