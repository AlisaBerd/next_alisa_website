import React from 'react';
import header_left_mobile from './Header_left_mobile.module.css';
import Link from "next/link";
import Image from "next/image";


const Header_left_mobile = () => {
  return (
    <div className={header_left_mobile.header_left}>
      <Image className={header_left_mobile.logo} src={"/images/logo.png"} width={70} height={70} alt="a" />
      <h2 className={header_left_mobile.text}> <Link href="/">Alice Berd</Link></h2>
    </div>
  )
}

export default Header_left_mobile
