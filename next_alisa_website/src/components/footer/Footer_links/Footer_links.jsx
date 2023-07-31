import React from "react";
import footer_link from "./Footer_links.module.css"
import Link from "next/link";

const Footer_link = (props) => {
  return (
    <div className={footer_link.footer_link}>
      <h2>Главное меню</h2>
      <ul>
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

export default Footer_link
