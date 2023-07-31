import React from 'react';
import footer_info from'./Footer_info.module.css';
import Image from "next/image";

const Footer_info = (props) => {
  return (
    <div className={footer_info.footer_info}>
      <Image className={footer_info.logo} src={"/images/logo.png"} width={50} height={50} alt="" />
      <p className={footer_info.paragraf}> Алиса Бердышева &copy; {new Date().getFullYear()}Все права защищены.Вся информация, размещенная на сайте, является интеллектуальной собственностью.
        Любое копирование и использование информации без письменного разрешения запрещено.</p>
    </div>
  )
}

export default Footer_info
