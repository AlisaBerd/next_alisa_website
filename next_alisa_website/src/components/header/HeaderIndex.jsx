import React from 'react';
import header_index from "./Headerindex.module.css"
import Link from "next/link";
import Image from "next/image";

const HeaderIndex = (props) => {
  return (
    <div className={header_index.header_index}>
      <div className={header_index.header_left}>
        <Image className={header_index.logo} src={"/img/logo.png"} alt="a" />
        <h2 className={header_index.text}> <Link href="/">Alice Berd</Link></h2>
      </div>
      <div className={header_index.header_center}>
        <div className={header_index.header_list}>
          <Link href="#aboutme" className={props => props.isActive ? header_index.active : header_index.grid_list}>Обо мне</Link>
          <Link href="#" className={props => props.isActive ? header_index.active : header_index.grid_list}>Услуги</Link>
          <Link href="#" className={props => props.isActive ? header_index.active : header_index.grid_list}>Портфолио</Link>
          <Link href="#" className={props => props.isActive ? header_index.active : header_index.grid_list}>Отзывы</Link>
          <Link href="#" className={props => props.isActive ? header_index.active : header_index.grid_list}>Контакты</Link>
        </div>
      </div>

    </div>
  )
}

export default HeaderIndex
