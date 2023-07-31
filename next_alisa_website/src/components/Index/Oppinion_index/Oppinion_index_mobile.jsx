import React from 'react'
import oppinion_index_mobile from './Oppinion_index_mobile.module.css'
import Oppinion_index_border_mobile from "./Oppinion_index_border/Oppinion_index_border_mobile";
import {motion} from 'framer-motion'
const Oppinion_index_mobile = (props) => {
  return(
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }} className={oppinion_index_mobile.oppinion_index}>
      <h1>Отзывы</h1>
      <Oppinion_index_border_mobile />
    </motion.div>
  )
}

export default Oppinion_index_mobile
