import React from 'react';
import './Header_left.module.css';
import header_l from"./Header_left.module.css"
import Image from "next/image";
import Link from "next/link";


const Header_left = () => {
  return (
      <div className={header_l.header_left}>
        <Image className={header_l.logo} src={"/images/logo.png"} width={80} height={80} alt="a" />
        <h2 className={header_l.text}> <Link href="/">Alice Berd</Link></h2>
      </div>
  )
}

export default Header_left
