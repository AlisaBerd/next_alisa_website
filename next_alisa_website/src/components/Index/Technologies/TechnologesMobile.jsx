import React from 'react'
import technologies_mobile from "./TechnologesMobile.module.css"
import {technologes_json_data} from './TechnologiesData'
import TechnologiesMainBlockMobile from "./TechnologiesMailBlock/TechnologiesMainBlockMobile";
import {motion} from 'framer-motion'
const Technologies_mobile = (props) => {

  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }} className={technologies_mobile.technologies}>
      <h1>Мои инструменты</h1>
      <TechnologiesMainBlockMobile header_text={technologes_json_data[0].head} elements_array={technologes_json_data[0].elements_array}/>
      <TechnologiesMainBlockMobile header_text={technologes_json_data[1].head} elements_array={technologes_json_data[1].elements_array}/>
    </motion.div>
  )
}

export default Technologies_mobile
