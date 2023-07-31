import React from 'react'
import technologies from "./Technologies.module.css"
import TechnologiesMainBlock from "./TechnologiesMailBlock/TechnologiesMainBlock";
import {technologes_json_data} from './TechnologiesData'
import {motion} from 'framer-motion'

const Technologies = (props) => {

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className={technologies.technologies}>
      <h1>Мои инструменты</h1>
      <TechnologiesMainBlock header_text={technologes_json_data[0].head} elements_array={technologes_json_data[0].elements_array}/>
      <TechnologiesMainBlock header_text={technologes_json_data[1].head} elements_array={technologes_json_data[1].elements_array}/>
    </motion.div>
  )
}

export default Technologies
