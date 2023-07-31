import React from "react";
import my_photo from'./Meeting_photo.module.css';
import {motion} from 'framer-motion'
import Image from "next/image";

const Meeting_photo = () => {
  return(
    <div className={my_photo.photo_container}>
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className={my_photo.photo}>
       <h1 > Давайте знакомиться </h1>
       <Image src={"/images/Alice01.png"} width={395} height={485} alt="a" />
       </motion.div>
    </div>

  )
}

export default Meeting_photo
