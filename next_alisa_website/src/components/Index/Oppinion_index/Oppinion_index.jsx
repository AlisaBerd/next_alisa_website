import React from 'react'
import oppinion_index from './Oppinion_index.module.css'
import Oppinion_index_border from "./Oppinion_index_border/Oppinion_index_border";
import {motion} from 'framer-motion'
const Oppinion_index = (props) => {
  return(
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }} className={oppinion_index.oppinion_index}>
      <h1>Отзывы</h1>
      <Oppinion_index_border />
    </motion.div>
  )
}

export default Oppinion_index
