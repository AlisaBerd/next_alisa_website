import React from 'react';
import './Header_center.module.css';
import head_c from "./Header_center.module.css"
import Link from "next/link";

const Header_center = () => {
  return (
      <div className={head_c.header_center}>
        <div className={head_c.header_list}>
          <div className={head_c.grid_list}>
            <Link href="/about_me" className={head_c.grid_list}>Обо мне</Link>
            {/*props => props.isActive ? head_c.active : head_c.grid_list*/}
            <Link href="/service" className={head_c.grid_list}>Услуги</Link>
            <Link href="/portfolio" className={head_c.grid_list}>Портфолио</Link>
            <Link href="/oppinion" className={head_c.grid_list}>Отзывы</Link>
            <Link href="/contact" className={head_c.grid_list}>Контакты</Link>
          </div>
        </div>
      </div>
  )
}

export default Header_center
