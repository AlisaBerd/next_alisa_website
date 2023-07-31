import React from 'react'
import benefits_photo from "./Benefits_photo.module.css";
// import benefit from "../../../../img/table.jpg";
import {motion} from 'framer-motion'
import Image from "next/image";

const Benefits_photo = (props) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className={benefits_photo.benefit}>
      <Image className={benefits_photo.benefit} src={"/images/table.jpg"} width={500} height={500} alt=""/>
    </motion.div>
  )
}

export default Benefits_photo
