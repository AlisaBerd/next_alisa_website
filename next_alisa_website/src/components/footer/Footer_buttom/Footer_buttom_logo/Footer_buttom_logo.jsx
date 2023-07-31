import React from 'react';
import buttom_logo from'./Footer_buttom_logo.module.css';
import Image from "next/image";

const Footer_button_logo = (props) => {
  return (
      <Image height={50} width={50} className={buttom_logo.logo} src={"/images/logo.png"} alt="" />
  )
}

export default Footer_button_logo
