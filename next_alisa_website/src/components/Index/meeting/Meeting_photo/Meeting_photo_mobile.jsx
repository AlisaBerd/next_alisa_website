import React from "react";
import my_photo_mobile from'./Meeting_photo_mobile.module.css';
import Image from "next/image";

const Meeting_photo_mobile = () => {
  return(
    <div className={my_photo_mobile.photo}>
      <h1> Давайте знакомиться </h1>
        <Image src={"/images/Alice01.png"} width={500} height={500} alt="" />
    </div>
  )
}

export default Meeting_photo_mobile
