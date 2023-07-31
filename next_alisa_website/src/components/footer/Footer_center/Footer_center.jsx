import React from 'react';
import center from './Footer_center.module.css';
import Link from "next/link";


const Footer_Center = (props) => {
  return (
      <div className={center.footer_center}>
          <h2>Главное меню</h2>
          <ul className={center.footer_list_center}>
            <li><Link href="/about_me">Обо мне</Link></li>
            <li><Link href="/service">Услуги</Link></li>
            <li><Link href="/portfolio">Портфолио</Link></li>
            <li><Link href="/contact">Контакты</Link></li>
            <li><Link href="/oppinion">Отзывы</Link></li>
            <li><Link href="/question"><u>Часто задаваемые вопросы</u></Link></li>
          </ul>
      </div>
  )
}

export default Footer_Center
