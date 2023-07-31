import React from 'react';
import css_doing_template from './Doing_tempate.module.css';
import {motion} from 'framer-motion'
import Image from "next/image";
const Doing_tempate = (props) => {

  return(
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}  className={css_doing_template.doing_template}>
      <h5>{props.head}</h5>
      <p>{props.text}</p>
      <Image src={props.img} alt="" width={271.26} height={219}/>
    </motion.div>
  )
}

export default  Doing_tempate
