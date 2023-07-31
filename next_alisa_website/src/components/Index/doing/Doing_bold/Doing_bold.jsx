import React from "react";
import css_doing_bold from './Doing_bold.module.css'
import {motion} from 'framer-motion'

export default function Doing_bold () {
  return(
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className={css_doing_bold.doing_bold}>Чем я занимаюсь?</motion.h2>
  )
}
