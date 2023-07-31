import React, {useState} from 'react'
import headermodal from './HeaderModal.module.css'
import Link from "next/link";

const HeaderModal = ({showMenu,setShowMenu, children}) => {
  return (
    <div className={showMenu ? headermodal.official_modal_active : headermodal.official_modal} onClick={() => setShowMenu(false)}>
    <div>
        <div className={headermodal.one_element}>
          <Link href="/about_me" onClick={() => setShowMenu(false)}>Обо мне</Link>
        </div>
        <div className={headermodal.one_element}>
          <Link href="/service" onClick={() => setShowMenu(false)}>Услуги</Link>
        </div>
        <div className={headermodal.one_element}>
          <Link href="/portfolio" onClick={() => setShowMenu(false)}>Портфолио</Link>
        </div>
        <div className={headermodal.one_element}>
          <Link href="/oppinion" onClick={() => setShowMenu(false)}>Отзывы</Link>
        </div>
        <div className={headermodal.one_element}>
          <Link href="/contact" onClick={() => setShowMenu(false)}>Контакты</Link>
      </div>
    </div>
      {children}
    </div>
  )
}
  export default HeaderModal
